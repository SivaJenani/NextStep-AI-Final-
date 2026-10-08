import { useEffect, useMemo, useState } from "react";
import client from "../api/client";
import { DashboardSkeleton } from "../components/skeletons/PageSkeleton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import CareerOverview from "../components/dashboard/CareerOverview";
import CareerStatistics from "../components/dashboard/CareerStatistics";
import AiCareerInsights from "../components/dashboard/AiCareerInsights";
import { SkillModal } from "../components/dashboard/SkillDna";
import SkillFamilies from "../components/dashboard/SkillFamilies";
import QuickWinsPanel from "../components/dashboard/QuickWins";
import MarketDemand from "../components/dashboard/MarketDemand";
import WeeklyLearningGoal from "../components/dashboard/WeeklyLearningGoal";
import LearningRecommendations from "../components/dashboard/LearningRecommendations";
import SmartRecommendations from "../components/dashboard/SmartRecommendations";
import RecentActivity from "../components/dashboard/RecentActivity";
import AchievementBadges from "../components/dashboard/AchievementBadges";
import DashboardFilters from "../components/dashboard/DashboardFilters";
import ExportOptions from "../components/dashboard/ExportOptions";
import Charts from "../components/dashboard/Charts";
import ProgressTracker from "../components/dashboard/ProgressTracker";
import JourneySnapshot from "../components/dashboard/JourneySnapshot";
import { EmptyState } from "../components/dashboard/shared";
import { buildDashboardModel, DEFAULT_FILTERS } from "../components/dashboard/model";

export default function DashboardPage({ view = "dashboard" }) {
  const [dashboard, setDashboard] = useState(null);
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [expandedFamilies, setExpandedFamilies] = useState({});
  const [skillDetail, setSkillDetail] = useState(null);
  const [roadmapProgress, setRoadmapProgress] = useState(null);

  const profileFilters = profile ? {
    targetRole: profile.desired_role || DEFAULT_FILTERS.targetRole,
    experienceLevel: profile.experience_level
      ? profile.experience_level.charAt(0).toUpperCase() + profile.experience_level.slice(1).toLowerCase()
      : DEFAULT_FILTERS.experienceLevel,
    industry: profile.domain
      ? profile.domain.charAt(0).toUpperCase() + profile.domain.slice(1).toLowerCase()
      : DEFAULT_FILTERS.industry,
    skillCategory: DEFAULT_FILTERS.skillCategory,
    location: profile.location
      ? profile.location.charAt(0).toUpperCase() + profile.location.slice(1).toLowerCase()
      : DEFAULT_FILTERS.location,
  } : DEFAULT_FILTERS;

  useEffect(() => {
    const loadDashboardAndProfile = async () => {
      setLoading(true);
      try {
        const [dashboardRes, profileRes, roadmapRes] = await Promise.allSettled([
          client.get("/dashboard/skills"),
          client.get("/profile/view"),
          client.get("/roadmap/progress"),
        ]);

        if (dashboardRes.status === "fulfilled") {
          setDashboard(dashboardRes.value.data);
        } else {
          setMessage(dashboardRes.reason?.response?.data?.detail || "Unable to load dashboard.");
        }

        if (profileRes.status === "fulfilled" && profileRes.value.data) {
          const profile = profileRes.value.data;
          setProfile(profile);
          const capitalize = (str) => {
            if (!str) return "";
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
          };
          setFilters((prev) => ({
            ...prev,
            targetRole: profile.desired_role || "All roles",
            experienceLevel: capitalize(profile.experience_level) || "All levels",
            industry: profile.domain || "All industries",
            location: capitalize(profile.location) || "All locations",
          }));
        }

        if (roadmapRes.status === "fulfilled") {
          setRoadmapProgress(roadmapRes.value.data);
        }
      } catch (error) {
        setMessage("An error occurred while loading dashboard data.");
      } finally {
        setLoading(false);
      }
    };
    loadDashboardAndProfile();
  }, []);

  const model = useMemo(() => buildDashboardModel(dashboard, filters), [dashboard, filters]);

  useEffect(() => {
    if (model.familyGaps[0]?.family && Object.keys(expandedFamilies).length === 0) {
      setExpandedFamilies({ [model.familyGaps[0].family]: true });
    }
  }, [model.familyGaps, expandedFamilies]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  const toggleFamily = (family) => {
    setExpandedFamilies((current) => ({ ...current, [family]: !current[family] }));
  };

  if (view === "skill-gap") {
    return (
      <div className="dashboard-page">
        {message && <div className="dashboard-message">{message}</div>}
        <div className="dashboard-top-actions">
          <DashboardFilters filters={filters} onChange={setFilters} onReset={profileFilters} model={model} />
          <ExportOptions model={model} />
        </div>
        {dashboard ? (
          <div className="dashboard-main-grid">
            <div className="dashboard-main-column">
              <SkillFamilies families={model.familyGaps} expandedFamilies={expandedFamilies} onToggleFamily={toggleFamily} onOpenSkill={setSkillDetail} />
              <Charts model={model} />
            </div>
            <aside className="dashboard-side-column">
              <QuickWinsPanel quickWins={model.quickWins} onOpenSkill={setSkillDetail} />
              <LearningRecommendations model={model} />
            </aside>
          </div>
        ) : (
          <EmptyState title="Skill gap data unavailable" message="The dashboard could not load the current skill analysis. Try refreshing after the backend is running." />
        )}
        <SkillModal detail={skillDetail} onClose={() => setSkillDetail(null)} />
        <ScrollToTopButton />
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      {message && <div className="dashboard-message">{message}</div>}
      <div className="dashboard-top-actions">
        <DashboardFilters filters={filters} onChange={setFilters} onReset={profileFilters} model={model} />
      </div>
      <ProgressTracker profile={profile} />
      <JourneySnapshot model={model} progress={roadmapProgress} />
      <CareerOverview model={model} />
      {dashboard ? (
        <>
          <CareerStatistics model={model} />
          <div className="dashboard-main-grid dashboard-overview-main-grid">
            <div className="dashboard-main-column">
              <AiCareerInsights model={model} />
            </div>
            <aside className="dashboard-side-column">
              <WeeklyLearningGoal model={model} />
              <SmartRecommendations model={model} />
              <RecentActivity model={model} />
              <AchievementBadges model={model} profile={profile} />
            </aside>
          </div>
        </>
      ) : (
        <EmptyState title="Dashboard data unavailable" message="The dashboard could not load the current skill analysis. Try refreshing after the backend is running." />
      )}
      <SkillModal detail={skillDetail} onClose={() => setSkillDetail(null)} />
      <ScrollToTopButton />
    </div>
  );
}
