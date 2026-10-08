import { Flame, Target, Mic, FileText } from "lucide-react";
import { SectionHeading } from "./shared";

function GoalTargets({ completed, target, tone, label }) {
  const completedCount = Math.min(Number(completed) || 0, target);

  return (
    <div
      className={`dashboard-goal-targets ${tone}`}
      style={{ "--goal-progress": `${(completedCount / target) * 100}%` }}
      role="img"
      aria-label={`${completedCount} of ${target} ${label} completed`}
    >
      {Array.from({ length: target }, (_, index) => {
        const isComplete = index < completedCount;
        return (
          <span key={`${label}-${index}`} className={isComplete ? "complete" : ""} title={`${label} ${index + 1}${isComplete ? " completed" : " pending"}`}>
            <Target size={15} strokeWidth={isComplete ? 2.7 : 2} />
            <b>{index + 1}</b>
          </span>
        );
      })}
    </div>
  );
}

export default function ProgressTracker({ profile }) {
  if (!profile) return null;

  const applicationsGoal = 5;
  const mockInterviewsGoal = 3;

  return (
    <section className="dashboard-card mb-6">
      <SectionHeading icon={Target} title="Weekly Goals & Streaks" />
      
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Streak Counter */}
        <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700/50 flex flex-col items-center justify-center text-center">
          <div className="h-16 w-16 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-3">
            <Flame className={`h-8 w-8 ${profile.current_streak > 0 ? 'animate-pulse' : ''}`} />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            {profile.current_streak || 0} Day{profile.current_streak !== 1 ? 's' : ''}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Current Streak</p>
          <div className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-2 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">
            Best: {profile.highest_streak || 0}
          </div>
        </div>

        {/* Weekly Goals */}
        <div className="flex-[2] flex flex-col gap-5 justify-center">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <FileText className="h-4 w-4 text-blue-500" />
                Applications
              </div>
              <span className="text-sm font-medium text-slate-500">
                {profile.weekly_applications || 0} / {applicationsGoal}
              </span>
            </div>
            <GoalTargets
              completed={profile.weekly_applications}
              target={applicationsGoal}
              tone="blue"
              label="applications"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <Mic className="h-4 w-4 text-emerald-500" />
                Mock Interviews
              </div>
              <span className="text-sm font-medium text-slate-500">
                {profile.weekly_mock_interviews || 0} / {mockInterviewsGoal}
              </span>
            </div>
            <GoalTargets
              completed={profile.weekly_mock_interviews}
              target={mockInterviewsGoal}
              tone="green"
              label="mock interviews"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
