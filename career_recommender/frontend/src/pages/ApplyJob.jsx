import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { applyForInternalJob, getJob } from "../api/client";

const initialForm = {
  user_name: "",
  email: "",
  resume_link: "",
  cover_letter: "",
};

export default function ApplyJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadJob() {
      try {
        setLoading(true);
        setMessage("");
        const data = await getJob(jobId, { signal: controller.signal });
        setJob(data);
        if (data.job_type === "external" && data.apply_url) {
          window.open(data.apply_url, "_blank", "noopener,noreferrer");
          setMessage("This is an external job. We opened the company application page in a new tab.");
        }
      } catch (error) {
        if (error?.code !== "ERR_CANCELED") {
          setMessage(error.response?.data?.detail || "Unable to load this job.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadJob();
    return () => controller.abort();
  }, [jobId]);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const submitApplication = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      await applyForInternalJob({
        job_id: Number(jobId),
        ...form,
      });
      setForm(initialForm);
      setMessage("Application submitted successfully.");
    } catch (error) {
      setMessage(error.response?.data?.detail || "Unable to submit application.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="card-panel text-sm font-semibold text-slate-500">Loading application...</div>;
  }

  if (!job) {
    return (
      <div className="card-panel space-y-4">
        <p className="text-sm font-semibold text-rose-600">{message || "Job not found."}</p>
        <Link to="/dashboard" className="secondary-button">Back to dashboard</Link>
      </div>
    );
  }

  const isExternal = job.job_type === "external";

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="card-panel">
        <button type="button" onClick={() => navigate("/dashboard")} className="secondary-button">
          Back to dashboard
        </button>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Apply</p>
        <h2 className="mt-3 text-4xl font-bold text-slate-900">{job.title}</h2>
        <p className="mt-2 text-lg font-semibold text-slate-500">
          {job.company} - {job.location}
        </p>
        <p className="mt-2 text-sm font-semibold text-emerald-700">{job.stipend_salary}</p>
        {message && <p className="mt-4 text-sm font-semibold text-slate-600">{message}</p>}
      </section>

      {isExternal ? (
        <section className="card-panel">
          <p className="text-sm leading-7 text-slate-600">External jobs are completed on the company website.</p>
          <a href={job.apply_url} target="_blank" rel="noreferrer" className="primary-button mt-4">
            Apply on Company Website
          </a>
        </section>
      ) : (
        <form onSubmit={submitApplication} className="card-panel space-y-5">
          <div>
            <label className="field-label" htmlFor="user_name">Full name</label>
            <input id="user_name" className="field-input" value={form.user_name} onChange={updateField("user_name")} required />
          </div>
          <div>
            <label className="field-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="field-input" value={form.email} onChange={updateField("email")} required />
          </div>
          <div>
            <label className="field-label" htmlFor="resume_link">Resume link</label>
            <input id="resume_link" type="url" className="field-input" value={form.resume_link} onChange={updateField("resume_link")} placeholder="https://drive.google.com/..." required />
          </div>
          <div>
            <label className="field-label" htmlFor="cover_letter">Cover letter</label>
            <textarea id="cover_letter" className="field-input min-h-36" value={form.cover_letter} onChange={updateField("cover_letter")} />
          </div>
          <button type="submit" className="primary-button" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      )}
    </div>
  );
}
