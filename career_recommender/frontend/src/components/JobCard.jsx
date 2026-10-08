import { useNavigate } from "react-router-dom";
import ReadinessBar from "./ReadinessBar";
import { getCourseForSkill } from "../utils/courseLinks";

const EXTERNAL_LINK_PATTERN = /^(https?:|mailto:)/i;
const SUMMARY_MAX_LENGTH = 220;
const BLOCKED_APPLY_HOSTS = new Set([
  "google.com",
  "www.google.com",
  "linkedin.com",
  "www.linkedin.com",
  "indeed.com",
  "www.indeed.com",
  "glassdoor.com",
  "www.glassdoor.com",
  "ziprecruiter.com",
  "www.ziprecruiter.com",
  "monster.com",
  "www.monster.com",
  "talent.com",
  "www.talent.com",
  "jooble.org",
  "www.jooble.org",
  "adzuna.com",
  "www.adzuna.com",
]);

const OFFICIAL_JOB_PORTAL_KEYWORDS = [
  "careers",
  "career",
  "jobs",
  "job",
  "greenhouse",
  "lever",
  "workday",
  "smartrecruiters",
  "ashby",
  "workable",
  "recruitee",
  "bamboohr",
  "jobvite",
];

function buildCompactSummary(job) {
  const rawText = job.job_summary || job.job_description || job.description || "";
  if (!rawText) return "";

  const normalized = rawText
    .replace(/small blue diamond/gi, " ")
    .replace(/about company[:\s].*/i, "")
    .replace(/whats cool about working with us[:\s].*/i, "")
    .replace(/application question[s]?:.*/i, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) return "";

  const parts = normalized
    .split(/(?<=[.!?])\s+|:\s+|\s*[;|]\s*/)
    .map((part) => part.trim())
    .filter((part) => part.length > 20);

  const picked = parts.slice(0, 2).join(". ").trim() || normalized;
  if (picked.length <= SUMMARY_MAX_LENGTH) {
    return picked;
  }

  return `${picked.slice(0, SUMMARY_MAX_LENGTH).trimEnd()}...`;
}

function isOfficialApplyUrl(value) {
  if (!EXTERNAL_LINK_PATTERN.test(value || "")) {
    return false;
  }

  if ((value || "").startsWith("mailto:")) {
    return true;
  }

  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    const fullUrl = `${host}${url.pathname}`.toLowerCase();

    return (
      !BLOCKED_APPLY_HOSTS.has(host) &&
      !url.pathname.toLowerCase().startsWith("/search") &&
      OFFICIAL_JOB_PORTAL_KEYWORDS.some((keyword) => fullUrl.includes(keyword))
    );
  } catch {
    return false;
  }
}

function resolveOfficialApplyUrl(job) {
  return [job.apply_url, job.company_website, job.apply_link_verified ? job.apply_link : ""].find(isOfficialApplyUrl) || "";
}

function getJobTitle(job) {
  return job.job_title || job.title || "Untitled role";
}

function getCompanyName(job) {
  return job.company_name || job.company || "Unknown company";
}

export default function JobCard({ job, onBookmark = () => {}, jobFeedMessage, fallbackMatchedSkills = [] }) {
  const navigate = useNavigate();
  const missingSkills = job.missing_skills?.length ? job.missing_skills : [];
  const matchedSkills = job.matched_skills?.length ? job.matched_skills : job.skills?.length ? job.skills : fallbackMatchedSkills;
  const officialApplyUrl = resolveOfficialApplyUrl(job);
  const hasOfficialApplyLink = Boolean(officialApplyUrl);
  const isDemoJob = job.source === "Demo Sample";
  const displaySummary = buildCompactSummary(job);
  const isInternalJob = job.source === "employer_portal" || job.source === "ATS Webhook" || job.job_type === "internal";
  const aiScore = Number(job.ai_score ?? 0);
  const readinessScore = Number(job.job_readiness_score ?? job.readiness_score ?? 0);

  return (
    <article className={`card-panel space-y-5 ${aiScore >= 85 ? "border-blue-500" : ""}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">{getJobTitle(job)}</h3>
          <p className="text-lg font-semibold text-slate-500">
            {getCompanyName(job)} - {job.location || "Remote"}
          </p>
          {(job.salary_range || job.stipend_salary || (job.salary_min && job.salary_max)) && (
            <p className="text-sm font-medium text-green-600">
              {job.salary_range || job.stipend_salary || `${job.salary_min} - ${job.salary_max}`}
            </p>
          )}
          <p className="text-sm text-slate-500">
            {job.employment_type || job.job_type || "Not specified"} {job.posted_date ? `- ${job.posted_date}` : ""}
          </p>
        </div>
        {aiScore >= 85 && <span className="muted-chip bg-blue-100 text-blue-900">Best fit</span>}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ReadinessBar value={aiScore} label="AI score" />
        <ReadinessBar value={readinessScore} label="Job readiness score" />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {job.apply_link_verified && (
            <span className="muted-chip bg-emerald-100 text-emerald-900">
              {job.apply_link_note || "Official company link"}
            </span>
          )}
          {job.is_fresher_friendly && <span className="muted-chip bg-blue-100 text-blue-900">Fresher friendly</span>}
          {job.is_startup_friendly && <span className="muted-chip bg-amber-100 text-amber-900">Startup hiring</span>}
          {matchedSkills.slice(0, 3).map((skill) => (
            <span key={skill} className="muted-chip bg-lime-100 text-lime-900">
              {skill}
            </span>
          ))}
          {missingSkills.length > 0 && (
            <span className="muted-chip bg-rose-100 text-rose-900">
              {missingSkills.length} missing skills
            </span>
          )}
        </div>

        {missingSkills.length > 0 && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Missing Skills</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Priority gaps for {getJobTitle(job)} with free course and certificate paths.
                </p>
              </div>
              <span className="text-sm font-semibold text-rose-600">{missingSkills.length} total</span>
            </div>
            <div className="grid gap-2">
              {missingSkills.map((item, index) => {
                const skill = typeof item === "object" && item !== null ? item.name || item.skill : item;
                const platform = typeof item === "object" && item !== null ? item.platform : null;
                const course = getCourseForSkill(skill);
                const provider = platform || course?.provider;
                const hasCertificate = course?.tag === "Free certificate";
                const content = (
                  <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-rose-200 transition hover:bg-rose-50 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-700">
                      {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900">{skill}</p>
                        <p className="text-xs text-slate-500">
                          {provider || "Recommended free platform"} {course?.note ? `- ${course.note}` : ""}
                        </p>
                      </div>
                    </div>
                    <span className={`muted-chip ${hasCertificate ? "bg-emerald-100 text-emerald-900" : "bg-amber-100 text-amber-900"}`}>
                      {course?.tag || "Free course"}
                    </span>
                  </div>
                );

                return course ? (
                  <a key={`${skill}-${index}`} href={course.url} target="_blank" rel="noreferrer" title={`${skill} - ${course.provider}`}>
                    {content}
                  </a>
                ) : (
                  <div key={`${skill}-${index}`}>{content}</div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {job.is_potential_scam && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <p className="font-semibold text-rose-700">Potential scam warning</p>
          <p className="mt-2 text-sm text-rose-600">{(job.scam_reasons || []).join(" ")}</p>
        </div>
      )}

      {displaySummary && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Description</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{displaySummary}</p>
        </div>
      )}

      {isDemoJob && jobFeedMessage && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          {jobFeedMessage}
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-1">
        {isInternalJob ? (
          <button
            type="button"
            className="primary-button"
            onClick={() => navigate(`/apply/${job.id || job.external_job_id}`)}
          >
            Apply on SaaS
          </button>
        ) : hasOfficialApplyLink ? (
          <a href={officialApplyUrl} target="_blank" rel="noreferrer" className="primary-button">
            Apply now
          </a>
        ) : (
          <button
            type="button"
            onClick={() => alert("Apply link not available")}
            className="primary-button"
          >
            Apply now
          </button>
        )}
        <button type="button" onClick={() => onBookmark(job)} className="secondary-button">
          Save to tracker
        </button>
      </div>
    </article>
  );
}
