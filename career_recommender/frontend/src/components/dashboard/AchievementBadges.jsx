import { Award, Sparkles } from "lucide-react";
import { SectionHeading } from "./shared";

export default function AchievementBadges({ model, profile }) {
  const skillSet = new Set(model.matchedSkills.map((skill) => String(skill).toLowerCase()));
  const profileBadges = new Set(profile?.badges || []);
  
  const badges = [
    ["First Application", profileBadges.has("first_application"), "Submit your first job application"],
    ["First Mock Interview", profileBadges.has("first_mock_interview"), "Complete your first mock interview"],
    ["React Expert", skillSet.has("react"), "Match React in your skill profile"],
    ["Backend Ready", ["fastapi", "backend", "node.js", "api"].some((skill) => skillSet.has(skill)), "Match a backend technology"],
    ["API Builder", ["api", "rest api", "fastapi"].some((skill) => skillSet.has(skill)), "Match API, REST API, or FastAPI"],
    ["Git Master", ["git", "github"].some((skill) => skillSet.has(skill)), "Match Git or GitHub"],
    ["Cloud Beginner", ["cloud", "aws", "azure", "deployment"].some((skill) => skillSet.has(skill)), "Match cloud or deployment skills"],
    ["Resume Optimized", model.atsScore >= 70, "Reach an ATS score of 70 or higher"],
  ];
  const earnedCount = badges.filter(([, earned]) => earned).length;

  return (
    <section className="dashboard-card dashboard-achievement-card">
      <SectionHeading icon={Award} title="Achievement Badges">
        <div className="dashboard-badge-summary">
          <Sparkles size={14} />
          <strong>{earnedCount}/{badges.length}</strong>
          <span>unlocked</span>
        </div>
      </SectionHeading>
      <div className="dashboard-badge-grid">
        {badges.map(([label, earned, requirement]) => (
          <div key={label} className={`dashboard-badge ${earned ? "earned" : ""}`} title={`${earned ? "Earned" : "Locked"}: ${requirement}`}>
            <span className="dashboard-badge-icon">
              <Award size={19} />
            </span>
            <span className="dashboard-badge-copy">
              <strong>{label}</strong>
              <small>{earned ? "Earned" : "Locked"} · {requirement}</small>
            </span>
            <span className="dashboard-badge-status">{earned ? "Earned" : "Locked"}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
