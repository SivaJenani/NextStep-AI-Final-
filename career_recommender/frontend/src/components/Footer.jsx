import { Link } from "react-router-dom";

const LINKS = {
  Platform: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Skill Gap Analysis", to: "/dashboard#skill-gap" },
    { label: "Roadmap", to: "/roadmap" },
    { label: "AI Mentor", to: "/chatbot" },
  ],
  Account: [
    { label: "Sign Up", to: "/signup" },
    { label: "Login", to: "/login" },
    { label: "Profile", to: "/profile" },
    { label: "Bookmarks", to: "/bookmarks" },
  ],
  Resources: [
    { label: "Resume Analyzer", to: "/resume" },
    { label: "Job Recommendations", to: "/recommendations" },
    { label: "Interview Prep", to: "/roadmap" },
    { label: "Career Insights", to: "/dashboard" },
  ],
};

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* Brand column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand-link">
            <img src="/images/next-step-ai-logo.png" alt="Next Step AI logo" className="footer-logo" />
            <span className="footer-brand-name">Next Step AI</span>
          </Link>
          <p className="footer-tagline">
            AI-powered career guidance that helps students and job seekers discover real opportunities, bridge skill gaps, and reach their goals faster.
          </p>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(LINKS).map(([group, items]) => (
          <div key={group} className="footer-nav-col">
            <h3 className="footer-col-heading">{group}</h3>
            <ul className="footer-nav-list">
              {items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="footer-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">© {year} Next Step AI. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <span className="footer-bottom-sep" aria-hidden="true">·</span>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
          <span className="footer-bottom-sep" aria-hidden="true">·</span>
          <a href="#" className="footer-bottom-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}
