import { useEffect, useMemo, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Check } from "lucide-react";
import client from "../api/client";
import { useAuth } from "../context/AuthContext";
import { ProfileSkeleton } from "../components/skeletons/PageSkeleton";
import { getOpportunityModeMismatch, correctRoleSpelling } from "../utils/opportunityMode";
import toast from "react-hot-toast";

const emptyForm = {
  skills: "",
  domain: "",
  location: "",
  degree: "",
  specialization: "",
  domicile_state: "",
  gender: "",
  reservation_category: "",
  age: "",
  years_of_experience: "",
  experience_level: "",
  mode: "",
  desired_role: "",
};

const suggestedSkills = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "FastAPI",
  "REST API", "SQL", "PostgreSQL", "Git", "GitHub", "Docker",
  "AWS", "Azure", "HTML", "CSS", "Testing", "Data Analysis",
  "Communication", "Agile",
];

const ROLE_OPTIONS_BY_DOMAIN = {
  "IT & Software": ["Backend Developer", "Frontend Developer", "Full Stack Developer", "DevOps Engineer", "Cybersecurity Analyst"],
  "Data & Analytics": ["Data Analyst", "Business Analyst", "Machine Learning Engineer"],
  "Design & UX": ["UX Designer", "Product Designer", "UI Designer"],
  Marketing: ["Marketing Associate", "Digital Marketing Specialist", "SEO Specialist"],
  Sales: ["Sales Executive", "Business Development Executive", "Account Manager"],
  Finance: ["Financial Analyst", "Accountant", "Risk Analyst"],
  Engineering: ["Software Engineer", "Systems Engineer", "Project Engineer"],
  "HR & Ops": ["HR Associate", "Operations Analyst", "Project Coordinator"],
};

const ALL_ROLE_OPTIONS = [
  "Backend Developer", "Frontend Developer", "Full Stack Developer", "Data Analyst",
  "Machine Learning Engineer", "DevOps Engineer", "Cybersecurity Analyst", "Product Manager",
  "UX Designer", "Marketing Associate", "Business Analyst",
];

function splitSkills(value) {
  return String(value || "")
    .split(/[,\n;|/]+/)
    .map((skill) => skill.trim())
    .filter(Boolean);
}

function titleCase(value) {
  return String(value || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function initialsFromName(name) {
  const parts = String(name || "User").trim().split(/\s+/).filter(Boolean);
  return (parts[0]?.[0] || "U").toUpperCase() + (parts[1]?.[0] || "").toUpperCase();
}

function computeCompletion(form) {
  const checks = [
    { label: "Target role", done: Boolean(form.desired_role?.trim()) },
    { label: "Core skills", done: splitSkills(form.skills).length >= 3 },
    { label: "Domain", done: Boolean(form.domain?.trim()) },
    { label: "Location", done: Boolean(form.location?.trim()) },
    { label: "Experience", done: form.years_of_experience !== "" && Number(form.years_of_experience) >= 0 },
    { label: "Career mode", done: Boolean(form.mode) },
  ];
  const completeCount = checks.filter((item) => item.done).length;
  return {
    checks,
    completeCount,
    score: Math.round((completeCount / checks.length) * 100),
  };
}

function storageKey(user, key) {
  return `career_profile_${user?.id || user?.email || "local"}_${key}`;
}

function Field({ label, children, className = "" }) {
  return (
    <div className={className}>
      <label className="field-label">{label}</label>
      {children}
    </div>
  );
}

function ProfileMetric({ label, value, note, tone = "slate" }) {
  const tones = {
    slate: "border-slate-200 bg-white text-slate-900",
    blue: "border-blue-200 bg-blue-50 text-blue-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
  };

  return (
    <div className={`rounded-2xl border p-4 ${tones[tone] || tones.slate}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold tracking-[-0.04em]">{value}</p>
      <p className="mt-1 text-sm leading-5 text-slate-600">{note}</p>
    </div>
  );
}

const completionRingOpacities = [0.95, 0.88, 0.78, 0.66, 0.55, 0.46, 0.42, 0.5, 0.62, 0.74, 0.86, 0.94];

function completionRingSegment(index) {
  const startAngle = (-90 + index * 30 + 1.5) * (Math.PI / 180);
  const endAngle = (-90 + index * 30 + 28.5) * (Math.PI / 180);
  const radius = 35;
  const startX = 50 + radius * Math.cos(startAngle);
  const startY = 50 + radius * Math.sin(startAngle);
  const endX = 50 + radius * Math.cos(endAngle);
  const endY = 50 + radius * Math.sin(endAngle);
  return `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
}


function QuickAction({ to, label, note }) {
  return (
    <NavLink
      to={to}
      className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-[0_14px_28px_rgba(17,17,17,0.06)]"
    >
      <span className="font-semibold text-slate-950 group-hover:text-blue-800">{label}</span>
      <span className="mt-2 block text-sm leading-6 text-slate-600">{note}</span>
    </NavLink>
  );
}

const ChevronDownIcon = () => (
  <svg
    className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CustomSelect({ value, onChange, options, placeholder, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || (value ? { label: value, value } : null);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="field-input flex cursor-pointer items-center justify-between text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? "text-slate-900" : "text-slate-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDownIcon />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_10px_30px_rgba(17,17,17,0.1)]">
          {options.map((option) => (
            <div
              key={option.value}
              className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                option.value === value
                  ? "bg-blue-50 font-semibold text-blue-700"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ComboBox({ value, onChange, options, placeholder, className = "", inputClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const dropdownRef = useRef(null);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        onChange(inputValue);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [inputValue, onChange]);

  const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes((inputValue || "").toLowerCase()));

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="relative">
        <input
          className={`field-input pr-12 text-sm ${inputClassName}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
        />
        <ChevronDownIcon />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_10px_30px_rgba(17,17,17,0.1)]">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                  option.value === value
                    ? "bg-blue-50 font-semibold text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
                onClick={() => {
                  setInputValue(option.value);
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div
              className="cursor-pointer px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              onClick={() => {
                onChange(inputValue);
                setIsOpen(false);
              }}
            >
              Use "{inputValue}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const { user, setUser } = useAuth() || {};
  const [form, setForm] = useState(emptyForm);
  const [fullName, setFullName] = useState(user?.full_name || "");
  const [alertEmail, setAlertEmail] = useState(user?.email || "");
  const [frequency, setFrequency] = useState("daily");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [matchPreview, setMatchPreview] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [showSavedNotice, setShowSavedNotice] = useState(false);
  const savedNoticeTimer = useRef(null);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      try {
        const { data } = await client.get("/profile/view");
        setForm({
          skills: (data.skills || []).join(", "),
          domain: data.domain || "",
          location: data.location || "",
          degree: data.degree || "",
          specialization: data.specialization || "",
          domicile_state: data.domicile_state || "",
          gender: data.gender || "",
          reservation_category: data.reservation_category || "",
          age: data.age ?? "",
          years_of_experience: data.years_of_experience ?? "",
          experience_level: data.experience_level || "",
          mode: data.mode || "",
          desired_role: data.desired_role || "",
        });
      } catch (error) {
        if (error.response?.status !== 404) {
          toast.error("Unable to load profile.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  useEffect(() => {
    setProfilePhoto(localStorage.getItem(storageKey(user, "photo")) || "");
    setFullName(user?.full_name || "");
  }, [user]);

  useEffect(() => () => window.clearTimeout(savedNoticeTimer.current), []);

  const skills = useMemo(() => splitSkills(form.skills), [form.skills]);
  const completion = useMemo(() => computeCompletion(form), [form]);
  const modeMismatchMessage = getOpportunityModeMismatch(form.mode, form.desired_role);
  const targetLabel = titleCase(form.desired_role?.trim() || `${form.domain || "Career"} ${form.mode || "path"}`);
  const roleOptions = useMemo(() => {
    const values = ROLE_OPTIONS_BY_DOMAIN[form.domain] || ALL_ROLE_OPTIONS;
    const options = values.map((value) => ({ value, label: value }));
    if (form.desired_role?.trim() && !values.includes(form.desired_role.trim())) {
      options.unshift({ value: form.desired_role.trim(), label: form.desired_role.trim() });
    }
    return options;
  }, [form.domain, form.desired_role]);

  if (loading) {
    return <ProfileSkeleton />;
  }

  const addSuggestedSkill = (skill) => {
    setForm((current) => {
      const currentSkills = splitSkills(current.skills);
      if (currentSkills.some((item) => item.toLowerCase() === skill.toLowerCase())) {
        return current;
      }
      return { ...current, skills: [...currentSkills, skill].join(", ") };
    });
  };

  const availableSkillSuggestions = suggestedSkills.filter(
    (skill) => !skills.some((currentSkill) => currentSkill.toLowerCase() === skill.toLowerCase()),
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    const correctedRole = correctRoleSpelling(form.desired_role);
    const updatedForm = { ...form, desired_role: correctedRole };
    setForm(updatedForm);
    try {
      const trimmedName = fullName.trim();
      if (!trimmedName) {
        throw new Error("Please enter your full name.");
      }
      const { data: updatedUser } = await client.patch("/auth/profile", { full_name: trimmedName });
      setUser?.(updatedUser);
      await client.post("/profile/create", updatedForm);
      toast.success("Profile saved successfully.", {
        position: "top-center",
        duration: 2500,
        style: {
          background: "rgba(17, 17, 17, 0.8)",
          color: "#fff",
        },
      });
      setShowSavedNotice(true);
      window.clearTimeout(savedNoticeTimer.current);
      savedNoticeTimer.current = window.setTimeout(() => setShowSavedNotice(false), 2500);
    } catch (error) {
      toast.error(error.response?.data?.detail || error.message || "Unable to save profile.");
    } finally {
      setSaving(false);
    }
  };

  const handleMatchPreview = async () => {
    if (!form.mode) {
      toast.error("Choose a work mode before previewing matches.");
      return;
    }
    if (!form.experience_level) {
      toast.error("Choose an experience level before previewing matches.");
      return;
    }
    if (modeMismatchMessage) {
      toast.error(modeMismatchMessage);
      return;
    }

    setPreviewLoading(true);
    try {
      const updatedForm = {
        ...form,
        desired_role: correctRoleSpelling(form.desired_role),
      };
      await client.post("/profile/create", updatedForm);
      setForm(updatedForm);
      const endpoint = updatedForm.mode === "internship" ? "/recommend/internships" : "/recommend/jobs";
      const { data } = await client.get(endpoint, {
        params: {
          query: updatedForm.desired_role || undefined,
          location: updatedForm.location || undefined,
        },
      });
      setMatchPreview(data);
    } catch (error) {
      toast.error(error.response?.data?.detail || "Unable to build a match preview.");
    } finally {
      setPreviewLoading(false);
    }
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      const { data } = await client.get("/notifications/subscribe", {
        params: { email: alertEmail, frequency },
      });
      toast.success(data.message || "Notification subscription saved.");
    } catch (error) {
      toast.error(error.response?.data?.detail || "Unable to save notification preferences.");
    }
  };

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please choose an image file for your profile picture.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const nextPhoto = String(reader.result || "");
      setProfilePhoto(nextPhoto);
      localStorage.setItem(storageKey(user, "photo"), nextPhoto);
      window.dispatchEvent(new Event("nextstep-profile-photo-updated"));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-page space-y-6">
      {showSavedNotice && <div className="pointer-events-none fixed inset-0 z-[9998] bg-black/50" aria-hidden="true" />}
      <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(17,17,17,0.07)]">
        <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-tide">My Profile</p>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <label className="group relative flex h-24 w-24 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-slate-900 text-2xl font-bold text-white shadow-[0_18px_36px_rgba(17,17,17,0.18)]">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="h-full w-full object-cover" />
                  ) : (
                    initialsFromName(user?.full_name)
                  )}
                  <span className="absolute inset-x-0 bottom-0 bg-slate-950/75 px-2 py-1 text-center text-[11px] font-semibold opacity-0 transition group-hover:opacity-100">
                    Change
                  </span>
                  <input type="file" accept="image/*" onChange={handleProfilePhotoChange} className="sr-only" />
                </label>
                <div>
                  <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-slate-950">
                    {user?.full_name || "Career profile"}
                  </h2>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    Targeting <span className="font-semibold text-slate-950">{targetLabel}</span> in{" "}
                    <span className="font-semibold text-slate-950">{form.location || "your preferred location"}</span>.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="muted-chip bg-blue-100 text-blue-900">{form.mode ? `${titleCase(form.mode)} focus` : "Mode not set"}</span>
                <span className="muted-chip bg-emerald-100 text-emerald-900">{titleCase(form.experience_level || "Experience not set")}</span>
                <span className="muted-chip bg-slate-100 text-slate-700">{form.domain || "Domain not set"}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-[linear-gradient(180deg,#fafafa,#ffffff)] p-6 sm:p-8 xl:border-l xl:border-t-0">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Profile Completion</p>
                <div className="mt-2 flex items-center gap-8">
                  <p className="text-4xl font-bold tracking-[-0.05em] text-slate-950">{completion.score}%</p>
                  {completion.score === 100 ? (
                    <svg className="ml-[200px] h-20 w-20" viewBox="0 0 100 100" role="img" aria-label="Profile complete">
                      {completionRingOpacities.map((opacity, index) => (
                        <path
                          key={index}
                          d={completionRingSegment(index)}
                          fill="none"
                          stroke="#22c55e"
                          strokeOpacity={opacity}
                          strokeWidth="13"
                        />
                      ))}
                      <path d="M21 46 31 34 49 52 77 3 90 10 59 78Z" fill="#2fb34a" />
                    </svg>
                  ) : (
                    <svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e5e5e5" strokeWidth="12" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#ff7a30"
                        strokeWidth="12"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * completion.score) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {completion.checks.map((check) => (
                <div key={check.label} className={`profile-check-item ${check.done ? "complete" : ""}`}>
                  <span className="profile-check-icon">
                    {check.done ? <Check size={14} strokeWidth={3} /> : null}
                  </span>
                  <span>{check.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ProfileMetric label="Skills" value={skills.length} note="Signals used for job matching" tone="blue" />
        <ProfileMetric label="Experience" value={`${form.years_of_experience || 0} yr`} note={titleCase(form.experience_level)} tone="emerald" />
        <ProfileMetric label="Mode" value={titleCase(form.mode)} note="Search and roadmap preference" tone="amber" />
        <ProfileMetric label="Location" value={form.location || "Remote"} note="Used to rank nearby jobs first" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <form onSubmit={handleSubmit} className="rounded-[30px] border border-t-0 border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(17,17,17,0.06)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-tide">Profile Details</p>
              <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950">Tell the assistant what you are aiming for</h3>
            </div>
            <button type="submit" className="primary-button" disabled={saving || Boolean(modeMismatchMessage)}>
              {saving ? "Saving..." : "Save profile"}
            </button>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <Field label="Full name" className="lg:col-span-2">
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="field-input"
                maxLength={120}
                placeholder="Your full name"
                required
              />
            </Field>
            <Field label="Desired role" className="lg:col-span-2">
              <ComboBox
                inputClassName="capitalize"
                value={form.desired_role}
                onChange={(value) => setForm({ ...form, desired_role: correctRoleSpelling(value) })}
                options={roleOptions}
                placeholder="Choose a suggested role or type your own"
              />
            </Field>

            <Field label="Domain">
              <CustomSelect
                value={form.domain}
                onChange={(val) => setForm({ ...form, domain: val })}
                placeholder="Select a domain"
                options={[
                  { value: "IT & Software", label: "IT & Software" },
                  { value: "Data & Analytics", label: "Data & Analytics" },
                  { value: "Design & UX", label: "Design & UX" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Sales", label: "Sales" },
                  { value: "Finance", label: "Finance" },
                  { value: "Engineering", label: "Engineering" },
                  { value: "HR & Ops", label: "HR & Ops" },
                  ...(form.domain &&
                  ![
                    "IT & Software", "Data & Analytics", "Design & UX",
                    "Marketing", "Sales", "Finance", "Engineering", "HR & Ops"
                  ].includes(form.domain)
                    ? [{ value: form.domain, label: form.domain }]
                    : []),
                ]}
              />
            </Field>

            <Field label="Location">
              <ComboBox
                value={form.location}
                onChange={(value) => setForm((current) => ({ ...current, location: value }))}
                options={[
                  { value: "Chennai", label: "Chennai" },
                  { value: "Bengaluru", label: "Bengaluru (Bangalore)" },
                  { value: "Hyderabad", label: "Hyderabad" },
                  { value: "Mumbai", label: "Mumbai" },
                  { value: "Delhi", label: "Delhi" },
                  { value: "Pune", label: "Pune" },
                  { value: "Kolkata", label: "Kolkata" },
                  { value: "Remote", label: "Remote" },
                ]}
                placeholder="e.g. Chennai, Bangalore, Remote"
              />
            </Field>

            <Field label="Highest degree">
              <CustomSelect
                value={form.degree}
                onChange={(val) => setForm({ ...form, degree: val })}
                placeholder="Select your degree"
                options={[
                  { value: "10th Pass", label: "10th Pass" },
                  { value: "12th Pass", label: "12th Pass" },
                  { value: "Any Graduate", label: "Any Graduate" },
                  { value: "B.Tech / B.E.", label: "B.Tech / B.E." },
                  { value: "BCA / MCA", label: "BCA / MCA" },
                  { value: "B.Com / M.Com", label: "B.Com / M.Com" },
                  { value: "BA / MA", label: "BA / MA" },
                  { value: "B.Sc / M.Sc", label: "B.Sc / M.Sc" },
                ]}
              />
            </Field>

            <Field label="Specialization">
              <input className="field-input" value={form.specialization} onChange={(e) => setForm({ ...form, specialization: e.target.value })} placeholder="e.g. Computer Science" />
            </Field>

            <Field label="Domicile state">
              <input className="field-input" value={form.domicile_state} onChange={(e) => setForm({ ...form, domicile_state: e.target.value })} placeholder="e.g. Maharashtra" />
            </Field>

            <Field label="Gender">
              <CustomSelect value={form.gender} onChange={(val) => setForm({ ...form, gender: val })} placeholder="Prefer not to say" options={[{ value: "women", label: "Woman" }, { value: "men", label: "Man" }, { value: "other", label: "Other" }, { value: "prefer_not_to_say", label: "Prefer not to say" }]} />
            </Field>

            <Field label="Reservation category">
              <CustomSelect value={form.reservation_category} onChange={(val) => setForm({ ...form, reservation_category: val })} placeholder="Select category" options={[{ value: "General", label: "General" }, { value: "EWS", label: "EWS" }, { value: "OBC-NCL", label: "OBC-NCL" }, { value: "SC", label: "SC" }, { value: "ST", label: "ST" }, { value: "PwBD", label: "PwBD" }, { value: "Ex-servicemen", label: "Ex-servicemen" }]} />
            </Field>

            <Field label="Years of experience">
              <input
                type="number"
                min="0"
                step="0.5"
                className="field-input"
                value={form.years_of_experience}
                onChange={(e) => setForm({ ...form, years_of_experience: e.target.value === "" ? "" : Number(e.target.value) })}
                placeholder="0"
              />
            </Field>

            <Field label="Age">
              <input type="number" min="10" max="100" className="field-input" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value === "" ? "" : Number(e.target.value) })} placeholder="e.g. 24" />
            </Field>

            <Field label="Experience level">
              <CustomSelect
                value={form.experience_level}
                onChange={(val) => setForm({ ...form, experience_level: val })}
                placeholder="Select experience level"
                options={[
                  { value: "student", label: "Student" },
                  { value: "fresher", label: "Fresher" },
                  { value: "entry", label: "Entry" },
                  { value: "mid", label: "Mid" },
                  { value: "senior", label: "Senior" },
                  { value: "lead", label: "Lead" },
                ]}
              />
            </Field>

            <Field label="Mode">
              <CustomSelect
                value={form.mode}
                onChange={(val) => setForm({ ...form, mode: val })}
                placeholder="Select mode"
                options={[
                  { value: "job", label: "Job" },
                  { value: "internship", label: "Internship" },
                ]}
              />
            </Field>

            <Field label="Skills" className="lg:col-span-2">
              <textarea
                className="field-input min-h-32 text-sm placeholder:text-sm"
                placeholder="Type a skill and press Enter, or separate skills with commas"
                value={form.skills}
                onChange={(e) => setForm({ ...form, skills: e.target.value })}
              />
              {availableSkillSuggestions.length ? (
                <div className="mt-3">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Suggested skills</p>
                  <div className="flex flex-wrap gap-2">
                    {availableSkillSuggestions.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        className="profile-skill-suggestion rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 transition hover:border-teal-400 hover:bg-teal-100"
                        onClick={() => addSuggestedSkill(skill)}
                      >
                        + {skill}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </Field>
          </div>

          {modeMismatchMessage && (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
              {modeMismatchMessage}
            </div>
          )}
        </form>

        <div className="space-y-6">
          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(17,17,17,0.06)]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-700">Skill Signals</p>
            <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">Current stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.length ? (
                skills.slice(0, 18).map((skill) => (
                  <span key={skill} className="accent-chip">
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-sm leading-6 text-slate-600">Add at least three skills so recommendations can rank roles more accurately.</p>
              )}
            </div>
          </section>

          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(17,17,17,0.06)]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">Next Actions</p>
            <div className="mt-4 grid gap-3">
              <QuickAction to="/resume" label="Build from resume" note="Extract skills, projects, and experience automatically." />
              <QuickAction to="/dashboard" label="View matches" note="Review current skill gaps and role signals for this profile." />
              <QuickAction to="/dashboard" label="View skill gaps" note="Check the exact skills holding your score back." />
            </div>
          </section>

          <section className="profile-match-preview rounded-[30px] border border-teal-200 bg-teal-50/60 p-6 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-700">Profile Match Preview</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">See what your profile matches today</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Uses your saved target role, skills, experience, location, and work mode to show live matches and skill gaps.
            </p>
            <button type="button" className="secondary-button mt-4" onClick={handleMatchPreview} disabled={previewLoading}>
              {previewLoading ? "Finding matches..." : "Save & preview matches"}
            </button>
            {matchPreview && (
              <div className="mt-5 rounded-2xl border border-white bg-white p-4">
                {matchPreview.jobs?.[0] ? (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Top live match</p>
                    <p className="mt-1 font-bold text-slate-900">{matchPreview.jobs[0].job_title}</p>
                    <p className="text-sm text-slate-600">{matchPreview.jobs[0].company_name || "Company not listed"} | {Math.round(matchPreview.jobs[0].skill_match_percentage || 0)}% skill match</p>
                    {matchPreview.missing_skills?.length > 0 && (
                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        Useful next skills: <span className="font-semibold">{matchPreview.missing_skills.slice(0, 4).join(", ")}</span>
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-sm leading-6 text-slate-700">{matchPreview.job_feed_message || "No live matches are available right now. Try again after updating your skills or location."}</p>
                )}
                <NavLink to="/dashboard" className="mt-3 inline-flex text-sm font-semibold text-teal-800 hover:text-teal-950">
                  Open full skill gap dashboard
                </NavLink>
              </div>
            )}
          </section>
        </div>
      </section>

      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(17,17,17,0.06)]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-coral">Notifications</p>
        <h3 className="mt-3 text-2xl font-bold text-slate-900">Subscribe to matching job alerts</h3>
        <form onSubmit={handleSubscribe} className="mt-6 grid gap-4 md:grid-cols-[1fr_180px_auto]">
          <input
            type="email"
            className="field-input"
            placeholder="you@example.com"
            value={alertEmail}
            onChange={(event) => setAlertEmail(event.target.value)}
            required
          />
          <div className="relative w-full">
            <CustomSelect
              value={frequency}
              onChange={setFrequency}
              placeholder="Select frequency"
              options={[
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
              ]}
            />
          </div>
          <button type="submit" className="primary-button">Save alerts</button>
        </form>
      </section>
    </div>
  );
}
