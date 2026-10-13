import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppShell from "./AppShell";

function GuestPreview({ title, description, shell, variant }) {
  const navigate = useNavigate();
  const location = useLocation();
  const goToLogin = () => navigate("/login", { state: { from: location.pathname, reason: variant } });

  let body;
  if (variant === "upload") {
    body = (
      <>
        <p className="mt-3 text-sm text-slate-600">{description}</p>
        <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center">
          <p className="text-sm text-slate-600">PDF or DOCX resume</p>
          <button type="button" onClick={goToLogin} className="primary-button mt-4">Choose resume file</button>
          <p className="mt-3 text-xs text-slate-500">You will be asked to log in or register before uploading. Exploring the rest of the site does not need an account.</p>
        </div>
      </>
    );
  } else if (variant === "login") {
    body = (
      <>
        <p className="mt-3 text-sm text-slate-600">{description}</p>
        <p className="mt-3 text-sm text-slate-600">This needs an account because it uses your own saved data. You can keep exploring the rest of the site without logging in.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" onClick={goToLogin} className="primary-button">Log in</button>
          <Link to="/signup" state={{ from: location.pathname }} className="font-semibold text-tide underline underline-offset-4">Create account</Link>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <p className="mt-3 text-sm text-slate-600">{description}</p>
        <p className="mt-3 text-sm text-slate-600">
          This page shows your own results, so there is nothing to display here until you have an account. You can keep exploring the site without logging in.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to="/login" className="font-semibold text-tide underline underline-offset-4">Log in (optional)</Link>
        </div>
      </>
    );
  }

  const card = (
    <section className="w-full max-w-2xl card-panel">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-tide">Explore</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-slate-950">{title}</h2>
      {body}
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

export default function ExploreRoute({ children, title, description, shell = false, variant = "results", guestLayout = false }) {
  const { token } = useAuth() || {};
  const location = useLocation();
  if (token || guestLayout) {
    return children;
  }
  return <GuestPreview key={location.pathname} title={title} description={description} shell={shell} variant={variant} />;
}
