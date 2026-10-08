export default function GapBarChart({ data }) {
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.skill]) {
      acc[item.skill] = { skill: item.skill, matched: 0, missing: 0, trending: 0 };
    }
    acc[item.skill][item.type] = item.value;
    return acc;
  }, {});

  const rows = Object.values(grouped)
    .map((row) => {
      const yourLevel = Math.min(100, row.matched * 18 + row.trending * 5);
      const requiredLevel = Math.min(100, Math.max(yourLevel + row.missing * 10, 20));
      const skillGap = Math.max(requiredLevel - yourLevel, 0);

      return {
        ...row,
        yourLevel,
        requiredLevel,
        skillGap,
      };
    })
    .sort((a, b) => b.skillGap - a.skillGap || b.requiredLevel - a.requiredLevel)
    .slice(0, 6);

  const scaleTicks = [0, 25, 50, 75, 100];

  return (
    <div className="card-panel">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 className="text-4xl font-bold text-slate-900">Skill gap bar chart</h3>
          <p className="mt-2 max-w-2xl text-sm font-medium text-slate-500">
            Blue shows your current level and red highlights the gap to the required level.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            Current level
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-slate-700 ring-1 ring-slate-200">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            Skill gap
          </span>
        </div>
      </div>
      <div className="mt-6 hidden grid-cols-[180px_minmax(0,1fr)_110px] items-center gap-4 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 lg:grid">
        <span>Skill</span>
        <div className="flex items-center justify-between">
          {scaleTicks.map((tick) => (
            <span key={tick}>{tick}%</span>
          ))}
        </div>
        <span className="text-right">Status</span>
      </div>
      <div className="mt-4 space-y-4">
        {rows.map((row) => {
          return (
            <div
              key={row.skill}
              className="grid gap-4 rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] lg:grid-cols-[180px_minmax(0,1fr)_110px] lg:items-center"
            >
              <div>
                <p className="text-xl font-semibold capitalize tracking-[-0.02em] text-slate-800">{row.skill}</p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold">
                  <span className="text-slate-500">
                    Current <span className="text-blue-600">{row.yourLevel}%</span>
                  </span>
                  <span className="text-slate-500">
                    Required <span className="text-slate-900">{row.requiredLevel}%</span>
                  </span>
                </div>
                <div className="relative h-5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                    style={{ width: `${row.yourLevel}%` }}
                  />
                  {row.skillGap > 0 && (
                    <div
                      className="absolute inset-y-0 rounded-full bg-gradient-to-r from-rose-500 to-rose-400"
                      style={{ left: `${row.yourLevel}%`, width: `${row.skillGap}%` }}
                    />
                  )}
                </div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {scaleTicks.map((tick) => (
                    <span key={tick}>{tick}</span>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold tracking-[-0.03em] text-slate-900">{row.skillGap}%</div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Gap</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
