import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppShell from "./AppShell";

function GuestPreview({ title, description }) {
  const location = useLocation();
  return (
    <aside className="mb-5 flex flex-col gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-orange-950 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-bold">{title} preview</p>
        <p className="mt-1 text-sm">{description} Sign in to load your saved data and enable personal actions.</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <Link to="/login" state={{ from: location.pathname }} className="font-semibold text-orange-800 underline underline-offset-4">
          Sign in
        </Link>
        <Link to="/signup" state={{ from: location.pathname }} className="font-semibold text-orange-800 underline underline-offset-4">
          Create account
        </Link>
      </div>
    </aside>
  );
}

export default function ExploreRoute({ children, title, description, shell = false }) {
  const { token } = useAuth() || {};
  const content = (
    <>
      {!token && <GuestPreview title={title} description={description} />}
      {children}
    </>
  );

  return shell && !token ? <AppShell>{content}</AppShell> : content;
}
