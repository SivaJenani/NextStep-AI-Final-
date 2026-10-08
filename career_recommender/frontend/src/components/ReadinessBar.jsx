export default function ReadinessBar({ value, label = "Job Readiness Score" }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
        <span>{label}</span>
        <span className="text-blue-600">{Math.round(value)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
    </div>
  );
}
