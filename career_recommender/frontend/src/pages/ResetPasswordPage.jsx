import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import client, { getApiErrorMessage } from "../api/client";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setBusy(true);
    try {
      await client.post("/auth/reset-password", { token, new_password: password });
      setDone(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(getApiErrorMessage(err, "Unable to reset password."));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-10">
      <section className="w-full max-w-xl card-panel">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-tide">Account help</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-slate-950">Set a new password</h2>
        {!token ? (
          <p className="mt-6 text-sm font-semibold text-rose-600">This reset link is missing its token. Request a new one.</p>
        ) : done ? (
          <p className="mt-6 text-sm font-semibold text-emerald-700">Password updated. Taking you to sign in...</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="field-label">New password</label>
              <input type="password" className="field-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <label className="field-label">Confirm password</label>
              <input type="password" className="field-input" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
            </div>
            {error && <p className="text-sm font-semibold text-rose-600">{error}</p>}
            <button type="submit" className="primary-button" disabled={busy}>{busy ? "Saving..." : "Update password"}</button>
          </form>
        )}
        <p className="mt-5 text-sm text-slate-600">
          <Link to="/forgot-password" className="font-semibold text-tide underline underline-offset-4">Request a new link</Link>
          {" · "}
          <Link to="/login" className="font-semibold text-tide underline underline-offset-4">Sign in</Link>
        </p>
      </section>
    </main>
  );
}
