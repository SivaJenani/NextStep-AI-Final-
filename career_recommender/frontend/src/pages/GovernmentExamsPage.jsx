import { useEffect, useMemo, useState } from "react";
import { Bookmark, ExternalLink, Filter, RotateCcw, ShieldCheck, Sparkles, Users } from "lucide-react";
import client from "../api/client";
import GOVERNMENT_EXAMS from "../data/governmentExamCatalog";
import BANKING_RAILWAY_EXAMS from "../data/bankingRailwayExamCatalog";
import SOUTH_STATE_EXAMS from "../data/southStateExamCatalog";

const STARTER_EXAMS = [
  {
    id: "upsc-cse",
    name: "UPSC Civil Services Examination",
    organization: "Union Public Service Commission",
    level: "Union Government",
    state: "All India",
    degrees: ["Any Graduate", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"],
    selection: "exam_and_interview",
    genders: ["all"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD", "Ex-servicemen"],
    stages: ["Preliminary examination", "Main examination", "Interview", "Document verification"],
    officialUrl: "https://upsc.gov.in",
    applyUrl: "https://upsconline.nic.in",
  },
  {
    id: "ssc-cgl",
    name: "SSC Combined Graduate Level",
    organization: "Staff Selection Commission",
    level: "Union Government",
    state: "All India",
    degrees: ["Any Graduate", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"],
    selection: "exam_only",
    genders: ["all"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD", "Ex-servicemen"],
    stages: ["Tier-I examination", "Tier-II examination", "Document verification"],
    officialUrl: "https://ssc.gov.in",
    applyUrl: "https://ssc.gov.in",
  },
  {
    id: "ibps-po",
    name: "IBPS Probationary Officer / Management Trainee",
    organization: "Institute of Banking Personnel Selection",
    level: "Union Government / Public Sector Banks",
    state: "All India",
    degrees: ["Any Graduate", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"],
    selection: "exam_and_interview",
    genders: ["all"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD", "Ex-servicemen"],
    stages: ["Preliminary examination", "Main examination", "Interview"],
    officialUrl: "https://www.ibps.in",
    applyUrl: "https://www.ibps.in",
  },
  {
    id: "rrb-ntpc-graduate",
    name: "RRB NTPC Graduate-Level Posts",
    organization: "Railway Recruitment Boards",
    level: "Union Government",
    state: "All India",
    degrees: ["Any Graduate", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"],
    selection: "exam_only",
    genders: ["all"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD", "Ex-servicemen"],
    stages: ["Computer-based examination", "Typing / aptitude test where applicable", "Document verification"],
    officialUrl: "https://indianrailways.gov.in",
    applyUrl: "https://www.rrbapply.gov.in",
  },
  {
    id: "india-post-gds",
    name: "India Post Gramin Dak Sevak",
    organization: "India Post",
    level: "Union Government",
    state: "All India",
    degrees: ["10th Pass", "Any Graduate", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"],
    selection: "merit_based",
    genders: ["all"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD"],
    stages: ["Merit list", "Document verification"],
    officialUrl: "https://indiapost.gov.in",
    applyUrl: "https://indiapostgdsonline.gov.in",
  },
  {
    id: "state-psc",
    name: "State Public Service Commission Graduate Posts",
    organization: "State Public Service Commission",
    level: "State Government",
    state: "Your selected state",
    degrees: ["Any Graduate", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"],
    selection: "exam_and_interview",
    genders: ["all"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD", "Ex-servicemen"],
    stages: ["Preliminary examination", "Main examination", "Interview where applicable"],
    officialUrl: "https://www.india.gov.in",
    applyUrl: "https://www.india.gov.in",
  },
  {
    id: "women-police",
    name: "State Police Women Constable Recruitment",
    organization: "State Police Recruitment Board",
    level: "State Government",
    state: "Your selected state",
    degrees: ["10th Pass", "12th Pass", "Any Graduate"],
    selection: "exam_only",
    genders: ["women"],
    categories: ["all", "EWS", "OBC-NCL", "SC", "ST", "PwBD"],
    stages: ["Written examination", "Physical measurement / efficiency test", "Document verification"],
    officialUrl: "https://www.india.gov.in",
    applyUrl: "https://www.india.gov.in",
  },
];

const EXAMS = Array.from(new Map([...STARTER_EXAMS, ...GOVERNMENT_EXAMS, ...BANKING_RAILWAY_EXAMS, ...SOUTH_STATE_EXAMS].map((exam) => [exam.id, exam])).values());
const DEGREE_OPTIONS = ["Any Graduate", "10th Pass", "12th Pass", "B.Tech / B.E.", "BCA / MCA", "B.Com / M.Com", "BA / MA", "B.Sc / M.Sc"];
const INDIAN_STATES = [
  "Andhra Pradesh", "Karnataka", "Kerala", "Puducherry", "Tamil Nadu", "Telangana",
];
const SOUTH_INDIAN_STATES = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana", "Puducherry"];
const SELECTION_LABELS = {
  exam_and_interview: "Exam + Interview",
  exam_only: "Exam only",
  interview_only: "Interview only",
  merit_based: "No exam / Merit based",
};

function normalizeExamFilters(value) {
  const next = { ...value };
  if (!next.degree || next.degree === "Any degree") next.degree = "Any Graduate";
  if (next.state === "Your selected state") next.state = "all";
  if (next.state !== "all" && !SOUTH_INDIAN_STATES.includes(next.state)) next.state = "all";
  return next;
}

function matchesDegree(exam, degree) {
  if (!degree || degree === "Any degree") return true;
  const normalize = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const selected = normalize(degree);
  return exam.degrees.some((value) => {
    const candidate = normalize(value);
    if (candidate === "anygraduate" && !["10thpass", "12thpass"].includes(selected)) return true;
    if (selected === "btechbe") return candidate.includes("btech") || candidate === "be" || candidate.includes("bachelorofengineering");
    if (selected === "bcamca") return candidate.includes("bca") || candidate.includes("mca");
    if (selected === "bcommcom") return candidate.includes("bcom") || candidate.includes("mcom");
    if (selected === "bama") return candidate === "ba" || candidate === "ma" || candidate.includes("arts");
    if (selected === "bscmsc") return candidate.includes("bsc") || candidate.includes("msc") || candidate.includes("science");
    return candidate === selected || candidate.includes(selected) || selected.includes(candidate);
  });
}

function matchesCategory(exam, category) {
  return !category || category === "all" || exam.categories.includes("all") || exam.categories.includes(category);
}

function matchesAge(exam, age) {
  if (!age) return true;
  const value = Number(age);
  if (!Number.isFinite(value)) return true;
  if (exam.minimumAge != null && value < Number(exam.minimumAge)) return false;
  if (exam.maximumAge != null && value > Number(exam.maximumAge)) return false;
  return true;
}

function ageRequirement(exam) {
  if (exam.minimumAge == null && exam.maximumAge == null) return "Age limit not provided in dataset";
  if (exam.minimumAge != null && exam.maximumAge != null) return `${exam.minimumAge}–${exam.maximumAge} years`;
  if (exam.minimumAge != null) return `${exam.minimumAge}+ years`;
  return `Up to ${exam.maximumAge} years`;
}

function ageStatus(exam, age) {
  if (!age) return "Enter age to check";
  if (exam.minimumAge == null && exam.maximumAge == null) return "Verify age in notification";
  return matchesAge(exam, age) ? "Age eligible" : "Age not eligible";
}

function matchesExamFilters(exam, filters, includeAge = true) {
  const haystack = `${exam.name} ${exam.organization}`.toLowerCase();
  return matchesDegree(exam, filters.degree)
    && (filters.level === "all" || exam.level.startsWith(filters.level))
    && (filters.level === "Union Government" || filters.state === "all" || exam.level === "Union Government" || exam.state === filters.state || (exam.level === "State Government" && exam.state === "Your selected state"))
    && (filters.selection === "all" || exam.selection === filters.selection)
    && (filters.gender === "all" || exam.genders.includes("all") || exam.genders.includes(filters.gender))
    && matchesCategory(exam, filters.category)
    && (!includeAge || matchesAge(exam, filters.age))
    && (!filters.search || haystack.includes(filters.search.toLowerCase()));
}

export default function GovernmentExamsPage() {
  const defaultFilters = { degree: "Any Graduate", age: "", level: "all", state: "all", selection: "all", gender: "all", category: "all", search: "" };
  const [filters, setFilters] = useState(() => {
    try { return normalizeExamFilters(JSON.parse(window.localStorage.getItem("nextstep-government-exam-filters")) || defaultFilters); } catch { return defaultFilters; }
  });
  const [savedIds, setSavedIds] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("nextstep-saved-government-exams")) || []; } catch { return []; }
  });
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const update = (key) => (event) => setFilters((current) => ({
    ...current,
    [key]: event.target.value,
    ...(key === "level" && event.target.value === "Union Government" ? { state: "all" } : {}),
  }));

  useEffect(() => { window.localStorage.setItem("nextstep-government-exam-filters", JSON.stringify(filters)); }, [filters]);
  useEffect(() => { window.localStorage.setItem("nextstep-saved-government-exams", JSON.stringify(savedIds)); }, [savedIds]);
  useEffect(() => {
    let active = true;
    client.get("/profile/view").then(({ data }) => {
      if (!active) return;
      setFilters((current) => ({
        ...current,
        degree: current.degree || data.degree || "",
        age: current.age || data.age || "",
        gender: current.gender !== "all" ? current.gender : (data.gender || "all"),
        category: current.category !== "all" ? current.category : (data.reservation_category || "all"),
        state: current.level !== "Union Government" && current.state !== "all" ? current.state : (current.level !== "Union Government" ? (data.domicile_state || "all") : "all"),
      }));
      setProfileLoaded(true);
    }).catch(() => { if (active) setProfileLoaded(true); });
    return () => { active = false; };
  }, []);
  const toggleSaved = (examId) => setSavedIds((current) => current.includes(examId) ? current.filter((id) => id !== examId) : [...current, examId]);

  const states = SOUTH_INDIAN_STATES;
  const allMatchingExams = useMemo(() => EXAMS.filter((exam) => matchesExamFilters(exam, filters, false)), [filters]);
  const filteredExams = useMemo(() => EXAMS.filter((exam) => matchesExamFilters(exam, filters, true)).sort((a, b) => {
    const aMatch = filters.degree && matchesDegree(a, filters.degree) ? 1 : 0;
    const bMatch = filters.degree && matchesDegree(b, filters.degree) ? 1 : 0;
    return bMatch - aMatch;
  }), [filters]);
  const ageExcludedCount = Math.max(0, allMatchingExams.length - filteredExams.length);
  const ageVerifiedCount = filteredExams.filter((exam) => filters.age && exam.minimumAge != null && exam.maximumAge != null).length;
  const ageNeedsVerificationCount = filteredExams.filter((exam) => filters.age && (exam.minimumAge == null || exam.maximumAge == null)).length;
  const displayedExams = showSavedOnly ? EXAMS.filter((exam) => savedIds.includes(exam.id)) : filteredExams;

  return (
    <div className="space-y-6 pb-10">
      <section className="rounded-3xl bg-slate-950 px-6 py-8 text-white shadow-xl sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Government career finder</p>
        <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Find government exams that fit your profile.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Filter Union and State Government opportunities by degree, selection process, gender, and special category.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm"><div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"><strong>{displayedExams.length}</strong> matching opportunities</div><button type="button" onClick={() => setShowSavedOnly((current) => !current)} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition hover:bg-white/15"><strong>{savedIds.length}</strong> saved - {showSavedOnly ? "Show matches" : "View saved"}</button></div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><h3 className="text-lg font-bold text-slate-950">Build your exam shortlist</h3><p className="text-sm text-slate-500">Your filters are saved on this device for your next visit.</p></div>
          <div className="flex flex-wrap gap-2"><button type="button" onClick={() => setFilters(defaultFilters)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700"><RotateCcw className="h-4 w-4" /> Reset</button><button type="button" onClick={() => setShowFilters((open) => !open)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700"><Filter className="h-4 w-4" /> {showFilters ? "Hide filters" : "Show filters"}</button></div>
        </div>
        {showFilters && <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="field-label">Degree<select className="field-input mt-2" value={filters.degree} onChange={update("degree")}>{DEGREE_OPTIONS.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label className="field-label">Age<input className="field-input mt-2" type="number" min="10" max="100" placeholder="e.g. 24" value={filters.age} onChange={update("age")} /></label>
          <label className="field-label">Government level<select className="field-input mt-2" value={filters.level} onChange={update("level")}><option value="all">Union + State</option><option value="Union Government">Union Government</option><option value="State Government">State Government</option></select></label>
          <label className={`field-label ${filters.level === "Union Government" ? "opacity-60" : ""}`}>Select state<select className="field-input mt-2" value={filters.state} onChange={update("state")} disabled={filters.level === "Union Government"}><option value="all">All states</option>{states.map((state) => <option key={state}>{state}</option>)}</select></label>
          <label className="field-label">Selection process<select className="field-input mt-2" value={filters.selection} onChange={update("selection")}><option value="all">Any process</option>{Object.entries(SELECTION_LABELS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
          <label className="field-label">Gender<select className="field-input mt-2" value={filters.gender} onChange={update("gender")}><option value="all">All genders</option><option value="women">Women-specific</option><option value="men">Men-specific</option></select></label>
          <label className="field-label">Special category<select className="field-input mt-2" value={filters.category} onChange={update("category")}><option value="all">All categories</option><option value="EWS">EWS</option><option value="OBC-NCL">OBC-NCL</option><option value="SC">SC</option><option value="ST">ST</option><option value="PwBD">PwBD</option><option value="Ex-servicemen">Ex-servicemen</option></select></label>
          <label className="field-label sm:col-span-2">Search exam or organization<input className="field-input mt-2" placeholder="e.g. banking, railway, PSC" value={filters.search} onChange={update("search")} /></label>
        </div>}
        {profileLoaded && !filters.degree && <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-sm text-cyan-900">Add your degree in <a href="/profile" className="font-bold underline">Profile</a> to automatically prioritize matching exams here.</div>}
        {filters.age && <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"><strong>Age {filters.age} check:</strong><span>{ageVerifiedCount} matches have an age range that includes your age.</span>{ageExcludedCount > 0 && <span>{ageExcludedCount} matching exams are hidden because your age is outside their dataset range.</span>}{ageNeedsVerificationCount > 0 && <span>{ageNeedsVerificationCount} need notification verification because the dataset has no complete age range.</span>}<button type="button" onClick={() => setFilters((current) => ({ ...current, age: "" }))} className="font-bold underline">Clear age filter</button></div>}
        {filters.search && <div className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm text-violet-900"><span>Showing results for <strong>“{filters.search}”</strong>.</span><button type="button" onClick={() => setFilters((current) => ({ ...current, search: "" }))} className="font-bold underline">Clear search to see all exams</button></div>}
      </section>

      <div className="government-exams-grid grid gap-5 xl:grid-cols-2">
        {displayedExams.map((exam) => <article key={exam.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
          <div className="flex items-start justify-between gap-4"><div><div className="flex flex-wrap gap-2"><span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-bold text-cyan-800">{exam.level}</span><span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-800">{SELECTION_LABELS[exam.selection]}</span>{filters.degree && <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800"><Sparkles className="h-3 w-3" /> Degree match</span>}</div><h3 className="mt-3 text-xl font-bold text-slate-950">{exam.name}</h3><p className="mt-1 text-sm text-slate-500">{exam.organization} · {exam.state}</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => toggleSaved(exam.id)} aria-label={savedIds.includes(exam.id) ? `Remove ${exam.name} from saved exams` : `Save ${exam.name}`} className={`rounded-xl p-2 transition ${savedIds.includes(exam.id) ? "bg-amber-50 text-amber-600" : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"}`}><Bookmark className="h-5 w-5" fill={savedIds.includes(exam.id) ? "currentColor" : "none"} /></button><ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600" /></div></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Age requirement</p><p className="mt-1 text-sm font-semibold text-slate-700">{ageRequirement(exam)}</p>{filters.age && <p className={`mt-1 text-xs font-bold ${ageStatus(exam, filters.age) === "Age eligible" ? "text-emerald-700" : "text-amber-700"}`}>{ageStatus(exam, filters.age)}</p>}</div><div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Selection stages</p><p className="mt-1 text-sm text-slate-700">{exam.stages.join(" → ")}</p></div><div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Category support</p><p className="mt-1 text-sm text-slate-700">{exam.categories.filter((item) => item !== "all").join(", ") || "General eligibility"}</p></div></div>
          <div className="mt-5 flex flex-wrap gap-3"><a href={exam.officialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">Official notification <ExternalLink className="h-4 w-4" /></a><a href={exam.applyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white hover:bg-cyan-700">Apply on official portal <ExternalLink className="h-4 w-4" /></a></div>
          <p className="mt-4 flex items-center gap-2 text-xs leading-5 text-amber-700"><Users className="h-4 w-4 shrink-0" />Verify age, reservation, gender, domicile, dates, and vacancies in the latest official notification.</p>
        </article>)}
      </div>
      {!displayedExams.length && <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center"><h3 className="text-lg font-bold text-slate-900">{showSavedOnly ? "No saved exams yet" : "No matching exams yet"}</h3><p className="mt-2 text-sm text-slate-500">{showSavedOnly ? "Bookmark an exam to build your shortlist." : "Try removing a filter or selecting a broader degree."}</p></div>}
    </div>
  );
}
