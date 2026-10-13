import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";




function profileStorageKey(user, key) {
  return `career_profile_${user?.id || user?.email || "local"}_${key}`;
}

export default function HomePage() {
  const auth = useAuth() || {};
  const { user } = auth;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const publicNavItems = [
    { label: "Dashboard", to: "/dashboard", match: "/dashboard" },
    { label: "Skill Gap", to: "/dashboard#skill-gap", match: "/dashboard#skill-gap" },
    { label: "Roadmap", to: "/roadmap", match: "/roadmap" },
    { label: "AI Mentor", to: "/chatbot", match: "/chatbot" },
  ];
  const privateNavItems = [
    { label: "Dashboard", to: "/dashboard", match: "/dashboard" },
    { label: "Skill Gap", to: "/dashboard#skill-gap", match: "/dashboard#skill-gap" },
    { label: "Roadmap", to: "/roadmap", match: "/roadmap" },
    { label: "Resume", to: "/resume", match: "/resume" },
    { label: "Bookmarks", to: "/bookmarks", match: "/bookmarks" },
    { label: "AI Mentor", to: "/chatbot", match: "/chatbot" },
  ];
  const navItems = user ? privateNavItems : publicNavItems;
  const displayName = user?.full_name || user?.email?.split("@")[0] || "Guest";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "AI";

  const isActiveItem = (item) => {
    const current = `${location.pathname}${location.hash}`;
    if (item.match.includes("#")) {
      return current === item.match;
    }
    return location.pathname === item.match && !location.hash;
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const loadProfilePhoto = () => {
      setProfilePhoto(window.localStorage.getItem(profileStorageKey(user, "photo")) || "");
    };

    loadProfilePhoto();
    window.addEventListener("focus", loadProfilePhoto);
    window.addEventListener("storage", loadProfilePhoto);
    window.addEventListener("nextstep-profile-photo-updated", loadProfilePhoto);

    return () => {
      window.removeEventListener("focus", loadProfilePhoto);
      window.removeEventListener("storage", loadProfilePhoto);
      window.removeEventListener("nextstep-profile-photo-updated", loadProfilePhoto);
    };
  }, [user]);

  return (
    <main className="home-page" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="home-shell" style={{ position: "relative", zIndex: 1 }}>
        <header className="home-header" aria-label="Primary navigation">
          <div className="home-header-inner">
            <Link to="/" className="home-brand-link" onClick={closeMenu}>
              <span className="home-logo-mark">
                <img src="/images/1-next-step-ai-logo.png" alt="" />
              </span>
              <span>
                <span className="home-brand-title">Next Step AI</span>
                <span className="home-brand-subtitle">
                  Smart guidance
                </span>
              </span>
            </Link>

            <nav className="home-nav-links" aria-label="Main menu">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={`home-nav-link ${isActiveItem(item) ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="home-header-actions">
              {user ? (
                <>
                  <div className="home-user-chip" aria-label={`Signed in as ${displayName}`}>
                    <span className="home-user-avatar" aria-hidden="true">
                      {profilePhoto ? <img src={profilePhoto} alt="" /> : initials}
                    </span>
                    <span className="home-user-name">{displayName}</span>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="home-login-link">
                    Login
                  </Link>
                  <Link to="/signup" className="home-logout-button home-signup-button">
                    Create account
                  </Link>
                </>
              )}
              <button
                type="button"
                className="home-menu-button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls="home-mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <nav
            id="home-mobile-menu"
            className={`home-mobile-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Mobile menu"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={`home-mobile-link ${isActiveItem(item) ? "active" : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            {!user && (
              <div className="home-mobile-auth">
                <Link to="/login" className="home-login-link" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/signup" className="home-logout-button home-signup-button" onClick={closeMenu}>
                  Create account
                </Link>
              </div>
            )}
          </nav>
        </header>

        <section
          id="how-it-works"
          className="home-hero scroll-mt-8"
        >
          <div className="home-hero-inner relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:py-24">
            <div className="flex flex-col justify-center">
              <p className="home-kicker mb-5 font-inter text-sm font-bold uppercase tracking-[0.25em]">
                Next Step AI
              </p>
              <h1 className="home-title font-sora text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-[3.5rem]">
                Navigate careers with <span className="home-accent">live job data</span>, skill intelligence, and personalized guidance.
              </h1>
              <p className="home-lead mt-6 max-w-[640px] font-inter text-lg leading-relaxed sm:text-xl">
                Discover real opportunities, understand exactly what skills are missing, and move from confusion to a focused action plan.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/signup" className="home-cta-primary">
                  Launch your career workspace
                </Link>
                <Link to="/login" className="home-cta-secondary">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="home-hero-art" aria-hidden="true">
              <div className="home-hero-circle">
                <img src="/images/1-next-step-ai-logo.png" alt="" />
              </div>
              <Link to="/signup" className="home-hero-badge" tabIndex={-1}>
                <span>Start here</span>
                <span className="home-hero-badge-arrow">&darr;</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Footer />
      </div>
    </main>
  );
}
