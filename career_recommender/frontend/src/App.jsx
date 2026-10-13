import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppShell from "./components/AppShell";
import ProtectedRoute from "./components/ProtectedRoute";
import ExploreRoute from "./components/GuestPreview";
import BookmarkTrackerPage from "./pages/BookmarkTrackerPage";
import ChatbotPage from "./pages/ChatbotPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import ApplyJob from "./pages/ApplyJob";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import ResumeUploadPage from "./pages/ResumeUploadPage";
import RoadmapPage from "./pages/RoadmapPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";

function AppShellRoutes() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

export default function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/admin/settings" element={<AdminSettingsPage />} />
      <Route
        path="/chatbot"
        element={
          <ExploreRoute title="AI Mentor" description="Ask the AI mentor about careers, skills and interviews, based on your own profile." shell>
              <ChatbotPage />
            </ExploreRoute>
        }
      />
      <Route element={<AppShellRoutes />}>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <ResumeUploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply/:jobId"
          element={
            <ProtectedRoute>
              <ApplyJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ExploreRoute title="Dashboard" description="See your skills, readiness and progress in one place.">
              <DashboardPage />
            </ExploreRoute>
          }
        />
        <Route
          path="/skill-gap"
          element={
            <ExploreRoute title="Skill Gap" description="Compare your skills with what your target roles ask for.">
              <DashboardPage view="skill-gap" />
            </ExploreRoute>
          }
        />
        <Route
          path="/recommendations"
          element={
            <ExploreRoute title="Recommendations" description="Get job and internship matches ranked for your resume.">
              <RecommendationsPage />
            </ExploreRoute>
          }
        />
        <Route
          path="/roadmap"
          element={
            <ExploreRoute title="Roadmap" description="Follow a learning plan built from your skill gaps.">
              <RoadmapPage />
            </ExploreRoute>
          }
        />
        <Route
          path="/interview-prep"
          element={
            <ExploreRoute title="Interview Prep" description="Practice interview questions matched to your target role.">
              <RoadmapPage view="interview" />
            </ExploreRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <BookmarkTrackerPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    </>
  );
}
