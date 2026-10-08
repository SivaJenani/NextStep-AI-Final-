import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ThemePanel from "../components/ThemePanel";
import Footer from "../components/Footer";




function profileStorageKey(user, key) {
  return `career_profile_${user?.id || user?.email || "local"}_${key}`;
}

export default function HomePage() {
  const auth = useAuth() || {};
  const { user, logout = () => {} } = auth;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const vantaRef = useRef(null);
  const navItems = [
    { label: "Dashboard", to: "/dashboard", match: "/dashboard" },
    { label: "Skill Gap", to: "/dashboard#skill-gap", match: "/dashboard#skill-gap" },
    { label: "Roadmap", to: "/roadmap", match: "/roadmap" },
    { label: "AI Mentor", to: "/chatbot", match: "/chatbot" },
  ];
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

  useEffect(() => {
    let vantaEffect;
    const initVanta = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.GLOBE) {
        vantaEffect = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          size: 0.90,
          color: 0x60a5fa,
          color2: 0x3b82f6,
          backgroundColor: 0x0f172a,
          showLines: false,
          showDots: false,
        });
      }
    };

    if (window.VANTA && window.VANTA.GLOBE) {
      initVanta();
    } else {
      const checkVanta = setInterval(() => {
        if (window.VANTA && window.VANTA.GLOBE) {
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);
      setTimeout(() => clearInterval(checkVanta), 5000);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <main className="home-page" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <div 
        ref={vantaRef} 
        style={{ position: "absolute", top: 0, left: "-400px", width: "calc(100% + 400px)", height: "100%", zIndex: 0 }} 
      />
      <div className="home-shell" style={{ position: "relative", zIndex: 1 }}>
        <header className="home-header" aria-label="Primary navigation">
          <div className="home-header-inner">
            <Link to="/" className="home-brand-link" onClick={closeMenu}>
              <span className="home-logo-mark">
                <img src="/images/next-step-ai-logo.png" alt="" />
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
              <ThemePanel compact />
              {user ? (
                <>
                  <div className="home-user-chip" aria-label={`Signed in as ${displayName}`}>
                    <span className="home-user-avatar" aria-hidden="true">
                      {profilePhoto ? <img src={profilePhoto} alt="" /> : initials}
                    </span>
                    <span className="home-user-name">{displayName}</span>
                  </div>
                  <button type="button" onClick={() => {
                    if (window.confirm("Are you sure you want to log out?")) {
                      logout();
                    }
                  }} className="home-logout-button">
                    Logout
                  </button>
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
          <div className="flex flex-col justify-center max-w-[760px] px-6 sm:px-10 py-20 md:py-32 relative z-10">
            <p className="text-blue-400 font-inter font-bold tracking-[0.25em] uppercase text-sm mb-5">
              Next Step AI
            </p>
            <h1 className="font-sora text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-white leading-[1.15] tracking-tight mb-6" style={{ textShadow: "0 4px 32px rgba(0,0,0,0.6)" }}>
              Navigate careers with live job data, skill intelligence, and personalized guidance.
            </h1>
            <p className="font-inter text-lg sm:text-xl text-slate-300 leading-relaxed max-w-[640px] mb-10">
              Discover real opportunities, understand exactly what skills are missing, and move from confusion to a focused action plan.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/signup" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 hover:scale-[1.02]">
                Launch your career workspace
              </Link>
              <Link to="/login" className="inline-flex items-center justify-center rounded-full border border-slate-600/60 bg-slate-800/40 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-slate-700/60 hover:border-slate-400 hover:text-white">
                Sign in
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
