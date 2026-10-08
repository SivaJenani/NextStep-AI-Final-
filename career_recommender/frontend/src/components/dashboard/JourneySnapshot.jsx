import { ArrowRight, CheckCircle2, Clock3, ListTodo, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "./shared";

function getPendingGoals(progress) {
  return (progress?.weekly_goals || []).reduce(
    (total, week) => total + (week.goals || []).filter((goal) => !goal.done).length,
    0,
  );
}

function getNextAction(progress, fallback) {
  const nextGoal = (progress?.weekly_goals || [])
    .flatMap((week) => week.goals || [])
    .find((goal) => !goal.done);

  return nextGoal?.title || `Continue with ${fallback}`;
}

function formatLastActive(date) {
  if (!date) return "No roadmap activity recorded yet";

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Roadmap activity date unavailable";

  return `Last active ${parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}`;
}

export default function JourneySnapshot({ model, progress }) {
  const pendingGoals = getPendingGoals(progress);
  const completedMilestones = progress?.completed_milestones?.length || 0;
  const nextAction = getNextAction(progress, model.fastestSkill);

  return (
    <section className="dashboard-card dashboard-journey-snapshot">
      <SectionHeading icon={Map} title="Continue Your Journey" />
      <div className="dashboard-journey-grid">
        <div className="dashboard-journey-status">
          <span className="dashboard-journey-label">Career journey</span>
          <strong>{model.recommendedRole}</strong>
          <span>{Math.round(model.readinessScore)}% career readiness</span>
          <span className="dashboard-journey-activity">
            <Clock3 size={14} /> {formatLastActive(progress?.last_active_date)}
          </span>
        </div>

        <div className="dashboard-journey-metric">
          <CheckCircle2 size={18} />
          <div>
            <strong>{completedMilestones}</strong>
            <span>roadmap milestones completed</span>
          </div>
        </div>

        <div className="dashboard-journey-metric">
          <ListTodo size={18} />
          <div>
            <strong>{pendingGoals}</strong>
            <span>pending weekly actions</span>
          </div>
        </div>

        <div className="dashboard-journey-next">
          <span className="dashboard-journey-label">Next action</span>
          <strong>{nextAction}</strong>
          <Link to="/roadmap" className="dashboard-journey-link">
            Open roadmap <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
