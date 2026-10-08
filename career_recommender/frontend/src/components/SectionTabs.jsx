import { NavLink } from "react-router-dom";

const tabs = [
  { label: "My Profile", to: "/profile" },
  { label: "Resume", to: "/resume" },
  { label: "Skill Gap", to: "/dashboard" },
  { label: "Career Path", to: "/roadmap" },
];

export default function SectionTabs() {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) => `tab-pill ${isActive ? "tab-pill-active" : ""}`}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
