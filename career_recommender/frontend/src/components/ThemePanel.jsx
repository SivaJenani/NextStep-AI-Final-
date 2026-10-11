import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const options = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
];

export default function ThemePanel({ compact = false }) {
  const { theme, setTheme } = useTheme();

  if (compact) {
    const isDark = theme === "dark";
    const Icon = isDark ? Sun : Moon;

    return (
      <button
        type="button"
        className={`theme-toggle-compact ${isDark ? "is-dark" : "is-light"}`}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        aria-pressed={isDark}
        title={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        <span className="theme-toggle-compact-icon" aria-hidden="true">
          <Icon className="h-5 w-5" strokeWidth={2.4} />
        </span>
      </button>
    );
  }

  return (
    <div className="theme-panel" aria-label="Theme selector">
      {options.map(({ value, label, Icon }) => {
        const isActive = theme === value;

        return (
          <button
            key={value}
            type="button"
            className={`theme-panel-button ${isActive ? "active" : ""}`}
            onClick={() => setTheme(value)}
            aria-pressed={isActive}
            title={`${label} theme`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {!compact && <span>{label}</span>}
          </button>
        );
      })}
    </div>
  );
}
