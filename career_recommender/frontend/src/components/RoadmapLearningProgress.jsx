import { CheckCircle, TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SectionHeading } from "./dashboard/shared";
import { clamp } from "./dashboard/utils";

function LearningTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="dashboard-chart-tooltip">
      <strong>{label} Milestone</strong>
      <span>Expected readiness: <strong>{payload[0].value}%</strong></span>
    </div>
  );
}

function MilestoneDot({ cx, cy, payload, readinessScore, nextMilestone }) {
  const isComplete = payload.score <= readinessScore;
  const isNext = payload.week === nextMilestone?.week;

  if (isComplete) {
    return (
      <g key={`roadmap-dot-${payload.week}`}>
        <circle cx={cx} cy={cy} r={8} fill="#10b981" stroke="#ffffff" strokeWidth={2} />
        <path d={`M ${cx - 3.5} ${cy} L ${cx - 1.2} ${cy + 2.3} L ${cx + 3.5} ${cy - 2.5}`} fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (isNext) {
    return (
      <g key={`roadmap-dot-${payload.week}`}>
        <circle cx={cx} cy={cy} r={10} fill="#2563eb" stroke="#ffffff" strokeWidth={2} style={{ filter: "drop-shadow(0 0 6px rgba(37, 99, 235, 0.4))" }} />
        <circle cx={cx} cy={cy} r={4} fill="#ffffff" />
      </g>
    );
  }

  return <circle key={`roadmap-dot-${payload.week}`} cx={cx} cy={cy} r={5} fill="#cbd5e1" stroke="#ffffff" strokeWidth={2} />;
}

export default function RoadmapLearningProgress({ currentScore = 0, projectedScore = 0 }) {
  const readinessScore = clamp(currentScore);
  const projected = clamp(projectedScore || readinessScore);
  const uplift = Math.max(4, projected - readinessScore);
  const learningProgress = [
    { week: "W1", score: Math.max(20, readinessScore - 22) },
    { week: "W2", score: Math.max(25, readinessScore - 16) },
    { week: "W3", score: Math.max(30, readinessScore - 9) },
    { week: "Now", score: readinessScore },
    { week: "+1", score: clamp(readinessScore + Math.round(uplift / 2)) },
    { week: "+2", score: clamp(Math.max(projected, readinessScore + uplift)) },
  ];
  const nextMilestone = learningProgress.find((item) => item.week !== "Now" && item.score > readinessScore) || learningProgress[learningProgress.length - 1];

  return (
    <section className="dashboard-card dashboard-analytics-section roadmap-learning-progress-card">
      <SectionHeading icon={TrendingUp} title="Learning Progress Milestones (Line)" />
      <div className="roadmap-learning-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={learningProgress} margin={{ top: 10, right: 18, bottom: 2, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fill: "#64748b", fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 11 }} />
            <Tooltip content={<LearningTooltip />} />
            <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} dot={(props) => <MilestoneDot {...props} readinessScore={readinessScore} nextMilestone={nextMilestone} />} activeDot={{ r: 8, fill: "#10b981", stroke: "#ffffff", strokeWidth: 2 }} isAnimationActive animationDuration={950} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-learning-timeline-enhanced">
        <div className="dashboard-timeline-track" />
        {learningProgress.map((item, index) => {
          const isComplete = item.score <= readinessScore;
          const isNext = item.week === nextMilestone?.week;
          return (
            <div key={`roadmap-milestone-${item.week}`} className={`timeline-node ${isComplete ? "complete" : ""} ${isNext ? "next" : ""}`}>
              <div className="node-icon-wrapper">
                {isComplete ? <CheckCircle size={14} /> : <span>{index + 1}</span>}
              </div>
              <div className="node-info">
                <strong>{item.week}</strong>
                <span>{item.score}%</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="dashboard-completion-note">Estimated completion: {nextMilestone?.score || readinessScore}% after the next focused learning sprint.</p>
    </section>
  );
}
