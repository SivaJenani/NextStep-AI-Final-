import { useState } from "react";
import { Link } from "react-router-dom";
import client, { getApiErrorMessage } from "../api/client";

function getMailUrl(address) {
  const domain = (address.split("@")[1] || "").toLowerCase();
  if (domain === "gmail.com" || domain === "googlemail.com") return "https://mail.google.com/";
  if (["outlook.com", "hotmail.com", "live.com", "msn.com"].includes(domain)) return "https://outlook.live.com/mail/";
  if (domain.startsWith("yahoo.")) return "https://mail.yahoo.com/";
  if (domain === "icloud.com" || domain === "me.com") return "https://www.icloud.com/mail";
  return "mailto:" + address;
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const { data } = await client.post("/auth/forgot-password", { email });
      setMessage(data.message);
    } catch (err) {
      setError(getApiErrorMessage(err, "Unable to send reset link."));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-10">
      <section className="w-full max-w-xl card-panel">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-tide">Account help</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-slate-950">Forgot your password?</h2>
        <p className="mt-2 text-sm text-slate-600">Enter your account email. We will send a link that works once for 30 minutes.</p>
        {message ? (
          <div className="mt-6">
            <p className="text-sm font-semibold text-emerald-700">{message} Check your spam folder too.</p>
            <a href={getMailUrl(email)} target="_blank" rel="noopener noreferrer" className="primary-button mt-4">Go to mail</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="field-label">Email</label>
              <input type="email" className="field-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {error && <p className="text-sm font-semibold text-rose-600">{error}</p>}
            <button type="submit" className="primary-button" disabled={busy}>{busy ? "Sending..." : "Send reset link"}</button>
          </form>
        )}
        <p className="mt-5 text-sm text-slate-600">
          <Link to="/login" className="font-semibold text-tide underline underline-offset-4">Back to sign in</Link>
        </p>
      </section>
    </main>
  );
}
