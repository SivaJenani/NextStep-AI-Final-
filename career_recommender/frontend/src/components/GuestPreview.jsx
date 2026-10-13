import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppShell from "./AppShell";

function GuestPreview({ title, description, shell }) {
  const card = (
    <section className="w-full max-w-2xl card-panel">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-tide">Explore</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <p className="mt-3 text-sm text-slate-600">
        This page shows your own results, so there is nothing to display until you upload your resume. You can keep exploring the site without logging in.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link to="/resume" className="primary-button">Upload resume</Link>
        <Link to="/login" className="font-semibold text-tide underline underline-offset-4">Log in (optional)</Link>
      </div>
    </section>
  );
  if (shell) {
    return (
      <AppShell>
        <div className="flex w-full justify-center py-10">{card}</div>
      </AppShell>
    );
  }
  return <div className="flex w-full justify-center py-10">{card}</div>;
}

export default function ExploreRoute({ children, title, description, shell = false }) {
  const { token } = useAuth() || {};
  const location = useLocation();
  if (token) {
    return children;
  }
  return <GuestPreview key={location.pathname} title={title} description={description} shell={shell} />;
}
