import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AlertTriangle, Award, BarChart3, Brain, Briefcase, Gauge, TrendingUp, Zap } from "lucide-react";
import { EmptyState, SectionHeading, VisualPanel } from "./shared";
import { average, estimateHours, getDemandTrend, titleCase } from "./utils";

function SkillRadarTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="dashboard-chart-tooltip">
      <strong>{item.family}</strong>
      <span>Current strength: <strong>{item.current}%</strong></span>
      <span>Role benchmark (estimate): <strong>{item.expected}%</strong></span>
      <span>Match Gap: <strong>{item.gap}%</strong></span>
      <em>Missing skills: {item.missingSkills.length ? item.missingSkills.slice(0, 4).map(titleCase).join(", ") : "None"}</em>
    </div>
  );
}

function getDemandLevel(demand, percentage) {
  if (demand <= 0) return { label: "No mentions", tone: "none" };
  if (percentage >= 45 || demand >= 16) return { label: "Many signals", tone: "very-high" };
  if (percentage >= 25 || demand >= 8) return { label: "Frequent signals", tone: "high" };
  if (percentage >= 10 || demand >= 3) return { label: "Some signals", tone: "medium" };
  return { label: "Few signals", tone: "low" };
}

function getDemandInsight(item, isTopDemand = false) {
  if (isTopDemand) return "Largest combined skill signal in this set of matching listings.";
  if (item.demand <= 0) return "No skill signals in the analyzed listings.";
  if (item.percentage >= 25) return "One of the stronger skill signals in this result set.";
  if (item.percentage >= 10) return "A moderate skill signal in this result set.";
  return "A smaller skill signal in this result set.";
}

function DemandTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="dashboard-chart-tooltip">
      <strong>{item.family}</strong>
      <span>Matching listings: <strong>{item.jobs}</strong></span>
      <span>Share of skill signals: <strong>{item.percentage}%</strong></span>
      <span>Rank: <strong>#{item.rank}</strong></span>
      <em>{item.insight}</em>
    </div>
  );
}

function DemandBarLabel({ x, y, width, height, payload }) {
  if (!payload) return null;
  const safeX = Number(x || 0);
  const safeY = Number(y || 0);
  const safeWidth = Number(width || 0);
  const safeHeight = Number(height || 0);
  const valueLabelX = safeX + safeWidth + 10;
  const scoreLabelX = safeWidth > 64 ? safeX + Math.min(safeWidth - 8, 92) : safeX + safeWidth + 64;
  const labelY = safeY + safeHeight / 2 + 4;
  const showInsideScore = safeWidth > 64;
  return (
    <g>
      <text x={scoreLabelX} y={labelY} textAnchor={showInsideScore ? "end" : "start"} className="dashboard-demand-score-label">
        {payload.demand} | {payload.percentage}%
      </text>
      <text x={valueLabelX} y={labelY} className="dashboard-demand-bar-label">
        {payload.jobs} jobs
      </text>
    </g>
  );
}

function DemandRankTick({ x, y, payload, ranksByFamily = {} }) {
  if (!payload?.value) return null;
  const rank = ranksByFamily[payload.value];
  const labelX = Number(x || 0) - 8;
  const labelY = Number(y || 0) + 4;
  return (
    <text x={labelX} y={labelY} textAnchor="end" className="dashboard-demand-axis-label">
      <tspan className="dashboard-demand-axis-rank">#{rank || "-"}</tspan> {payload.value}
    </text>
  );
}

function AnalyticsStatCard({ icon: Icon, label, value, description }) {
  return (
    <article className="dashboard-analytics-stat-card">
      <Icon size={18} />
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{description}</p>
    </article>
  );
}

function buildVisualizationInsights({ bestFamily, largestGap, highestDemand, model, fastestSkill }) {
  const inDemandMissing = model.quickWins[0]?.skill || model.missingSkills[0] || highestDemand?.nextSkill || model.fastestSkill;
  return [
    {
      icon: Award,
      title: "Strongest skill family",
      detail: `${bestFamily?.family || "Your profile"} is currently your clearest market signal at ${bestFamily?.current || 0}% strength.`,
      priority: "Low",
    },
    {
      icon: AlertTriangle,
      title: "Largest skill gap",
      detail: `${largestGap?.family || "A priority family"} has the largest estimated gap (${largestGap?.gap || 0}%). Consider reviewing its missing skills first.`,
      priority: largestGap?.gap >= 35 ? "High" : "Medium",
    },
    {
      icon: TrendingUp,
      title: "Most in-demand missing skill",
      detail: `${titleCase(inDemandMissing)} is the strongest missing-skill signal in the current demand set.`,
      priority: "High",
    },
    {
      icon: Zap,
      title: "Fastest skill to learn",
      detail: `${fastestSkill} has a rough study-time estimate of about ${estimateHours(model.fastestSkill, highestDemand?.demand || 4)} focused hours.`,
      priority: "Medium",
    },
    {
      icon: Briefcase,
      title: "Recommended next path",
      detail: `Start with ${fastestSkill}, then build one proof project aligned with ${highestDemand?.family || model.recommendedRole}.`,
      priority: "High",
    },
    {
      icon: Gauge,
      title: "Potential next step",
      detail: `Learning ${inDemandMissing} and showing it in a project may strengthen your fit. Actual outcomes depend on the role and hiring team.`,
      priority: "Medium",
    },
  ];
}

export default function Charts({ model }) {
  const allFamilies = model.allFamilyGaps || [];
  const sourceFamilies = (model.familyGaps?.length ? model.familyGaps : allFamilies)
    .filter((family) => family?.family)
    .slice(0, 6);
  const visualFamilies = sourceFamilies.map((family) => ({
    family: family.family,
    current: Math.round(family.current_level || 0),
    expected: Math.round(family.target_level || 0),
    gap: Math.round(family.gap_level || 0),
    demand: Number(family.demand_count || 0),
    jobs: Number(family.job_count ?? family.demand_count ?? 0),
    missingSkills: family.missing_micro_skills || [],
    nextSkill: family.adjacent_next_skills?.[0] || family.missing_micro_skills?.[0] || "",
  }));

  const highestDemand = [...visualFamilies].sort((a, b) => b.demand - a.demand)[0] || visualFamilies[0];
  const largestGap = [...visualFamilies].sort((a, b) => b.gap - a.gap)[0] || visualFamilies[0];
  const bestFamily = [...visualFamilies].sort((a, b) => b.current - a.current)[0] || visualFamilies[0];
  const totalJobSignals = visualFamilies.reduce((total, family) => total + family.demand, 0);
  const averageMatch = Math.round(average(visualFamilies.map((family) => family.current)));
  const fastestSkill = titleCase(model.fastestSkill);
  const highestDemandSkill = highestDemand?.nextSkill ? titleCase(highestDemand.nextSkill) : highestDemand?.family || "Not enough data";
  const demandData = visualFamilies
    .map((family) => ({ ...family, trend: getDemandTrend(family.demand) }))
    .sort((a, b) => b.demand - a.demand)
    .map((family, index) => {
      const percentage = totalJobSignals ? Math.round((family.demand / totalJobSignals) * 100) : 0;
      const demandLevel = getDemandLevel(family.demand, percentage);
      const isTopDemand = index === 0 && family.demand > 0;
      return {
        ...family,
        rank: index + 1,
        percentage,
        demandLevel,
        isTopDemand,
        insight: getDemandInsight({ ...family, percentage }, isTopDemand),
      };
    });
  const activeDemandFamilies = demandData.filter((item) => item.demand > 0);
  const topDemand = activeDemandFamilies[0] || null;
  const lowestDemand = [...demandData].sort((a, b) => a.demand - b.demand)[0] || demandData[0];
  const ranksByFamily = demandData.reduce((lookup, item) => ({ ...lookup, [item.family]: item.rank }), {});
  const suggestedDemandPriority = activeDemandFamilies[0]?.nextSkill
    ? titleCase(activeDemandFamilies[0].nextSkill)
    : activeDemandFamilies[0]?.family || "Build foundational skills";
  const hasVisualizationData = visualFamilies.some((family) => family.current || family.expected || family.demand);
  const quickStats = [
    {
      icon: TrendingUp,
      label: "Strongest skill signal",
      value: highestDemandSkill,
      description: `Seen in ${highestDemand?.jobs || 0} analyzed matching listings`,
    },
    {
      icon: AlertTriangle,
      label: "Largest Skill Gap",
      value: largestGap?.family || "Not enough data",
      description: `${largestGap?.gap || 0}% gap to close`,
    },
    {
      icon: Award,
      label: "Best Skill Family",
      value: bestFamily?.family || "Not enough data",
      description: `${bestFamily?.current || 0}% current strength`,
    },
    {
      icon: Briefcase,
      label: "Total skill signals",
      value: totalJobSignals,
      description: "Combined signals counted in this result set",
    },
    {
      icon: Gauge,
      label: "Average Match Score",
      value: `${averageMatch}%`,
      description: "Average family readiness",
    },
    {
      icon: Zap,
      label: "Quick skill to focus on",
      value: fastestSkill,
      description: `Roughly ${estimateHours(model.fastestSkill, highestDemand?.demand || 4)} study hours`,
    },
  ];

  const insights = buildVisualizationInsights({ bestFamily, largestGap, highestDemand, model, fastestSkill });

  return (
    <section className="dashboard-card dashboard-analytics-section">
      <SectionHeading icon={BarChart3} title="Interactive Analytics" />
      <div className="dashboard-analytics-stat-row">
        {quickStats.map((item) => (
          <AnalyticsStatCard key={item.label} {...item} />
        ))}
      </div>

      {!hasVisualizationData ? (
        <EmptyState
          title="Analytics are waiting for more data"
          message="Upload a resume or refresh role recommendations to populate skill family, demand, and learning progress visualizations."
        />
      ) : null}

      <div className="dashboard-visual-grid">
        <VisualPanel title="Skill Family Comparison (Radar)" className="dashboard-visual-card-large dashboard-radar-panel">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={visualFamilies} cx="50%" cy="52%" outerRadius="86%" margin={{ top: 22, right: 18, bottom: 24, left: 18 }}>
              <defs>
                <radialGradient id="currentGlow" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.0} />
                </radialGradient>
                <radialGradient id="expectedGlow" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#d97706" stopOpacity={0.0} />
                </radialGradient>
              </defs>
              <PolarGrid stroke="#cbd5e1" strokeWidth={0.8} />
              <PolarAngleAxis dataKey="family" tick={{ fill: "#1e293b", fontSize: 10.5, fontWeight: 700 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 9 }} stroke="rgba(203, 213, 225, 0.4)" />
              <Radar name="Current" dataKey="current" stroke="#2563eb" strokeWidth={2} fill="url(#currentGlow)" fillOpacity={1} isAnimationActive animationDuration={950} />
              <Radar name="Expected" dataKey="expected" stroke="#f59e0b" strokeWidth={1.5} fill="url(#expectedGlow)" fillOpacity={1} isAnimationActive animationDuration={950} strokeDasharray="3 3" />
              <Legend verticalAlign="bottom" height={24} iconType="circle" />
              <Tooltip content={<SkillRadarTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="dashboard-radar-summary">
            <div>
              <span>Strongest Family</span>
              <strong>{bestFamily?.family || "No data"}</strong>
              <small>{bestFamily?.current || 0}% current strength</small>
            </div>
            <div>
              <span>Largest Gap</span>
              <strong>{largestGap?.family || "No data"}</strong>
              <small>{largestGap?.gap || 0}% to close</small>
            </div>
            <div>
              <span>Best Next Focus</span>
              <strong>{highestDemand?.family || "No data"}</strong>
              <small>{highestDemand?.demand || 0} combined skill signals in this set</small>
            </div>
          </div>
        </VisualPanel>

        <VisualPanel title="Skill Signals in Matching Listings" className="dashboard-visual-card-large dashboard-demand-ranking-panel">
          <div className="dashboard-demand-section-summary">
            <span>{totalJobSignals} combined skill signals</span>
            <span>{activeDemandFamilies.length} active families</span>
            {topDemand ? <strong>{topDemand.family} leads at {topDemand.percentage}%</strong> : <strong>No skill signals yet</strong>}
          </div>
          <ResponsiveContainer width="100%" height={205}>
            <BarChart data={demandData} layout="vertical" margin={{ top: 4, right: 86, bottom: 2, left: 12 }}>
              <defs>
                <linearGradient id="blueBarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="amberBarGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 11 }} allowDecimals={false} />
              <YAxis type="category" dataKey="family" width={144} tickLine={false} axisLine={false} tick={<DemandRankTick ranksByFamily={ranksByFamily} />} />
              <Tooltip content={<DemandTooltip />} cursor={{ fill: "rgba(37, 99, 235, 0.04)" }} />
              <Bar 
                dataKey="demand" 
                barSize={13}
                radius={[0, 8, 8, 0]} 
                background={{ fill: "rgba(226, 232, 240, 0.4)", radius: [0, 8, 8, 0] }}
                isAnimationActive 
                animationDuration={1100}
                animationEasing="ease-out"
              >
                <LabelList content={<DemandBarLabel />} />
                {demandData.map((item) => (
                  <Cell key={`demand-cell-${item.family}`} fill={item.isTopDemand ? "url(#amberBarGrad)" : "url(#blueBarGrad)"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="dashboard-demand-grid-enhanced">
            {demandData.map((item) => (
              <div key={`demand-metric-${item.family}`} className={`demand-item-enhanced ${item.family === highestDemand?.family ? "leader" : ""}`}>
                <div className="demand-item-header">
                  <strong>{item.family}</strong>
                  <span className={`demand-level-badge ${item.demandLevel.tone}`}>{item.demandLevel.label}</span>
                </div>
                <div className="demand-item-rank-row">
                  <span>#{item.rank}</span>
                  {item.isTopDemand ? <span className="top-demand-badge">Top Signal</span> : null}
                </div>
                <div className="demand-item-details">
                  <span>Jobs <strong>{item.jobs}</strong></span>
                  <span>Share <strong>{item.percentage}%</strong></span>
                </div>
                <p className="demand-item-insight" data-full={item.insight} title={item.insight}>{item.insight}</p>
              </div>
            ))}
          </div>
          <div className="dashboard-demand-insights-panel">
            <div><span>Largest signal</span><strong title={topDemand?.family || "No data"}>{topDemand?.family || "No data"}</strong></div>
            <div><span>Smallest signal</span><strong title={lowestDemand?.family || "No data"}>{lowestDemand?.family || "No data"}</strong></div>
            <div><span>Matching listings analyzed</span><strong>{model.analyzedListingCount}</strong></div>
            <div><span>Active Skill Families</span><strong>{activeDemandFamilies.length}</strong></div>
            <div><span>Learning Priority</span><strong title={suggestedDemandPriority}>{suggestedDemandPriority}</strong></div>
          </div>
        </VisualPanel>

      </div>

      <div className="dashboard-ai-insights-card">
        <div className="dashboard-section-heading compact">
          <span><Brain size={18} /> AI Insights</span>
        </div>
        <div className="dashboard-ai-insights-grid">
          {insights.map((insight) => {
            const InsightIcon = insight.icon;
            return (
              <article key={insight.title}>
                <div className="dashboard-ai-insights-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "0.25rem" }}>
                  <InsightIcon size={18} style={{ color: insight.priority === "High" ? "#ef4444" : insight.priority === "Medium" ? "#f59e0b" : "#10b981" }} />
                  <span className={`dashboard-priority ${insight.priority.toLowerCase()}`}>{insight.priority}</span>
                </div>
                <strong>{insight.title}</strong>
                <p>{insight.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
