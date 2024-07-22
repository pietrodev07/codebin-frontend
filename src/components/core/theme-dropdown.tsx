import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeDropdown = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeOptions = ["light", "dark", "system"];

  return (
    <div className="dropdown">
      <button
        className="btn btn-sm btn-solid-primary border border-border"
        tabIndex={0}
        aria-label="Toggle Dark Mode"
      >
        Theme
      </button>

      <div className="dropdown-menu z-10 mt-2 w-32 rounded-lg border border-border">
        {themeOptions.map((themeOption, i) => {
          return (
            <span
              key={i}
              tabIndex={-1}
              className={clsx(
                theme === themeOption && "dropdown-active",
                "dropdown-item flex-row gap-2 text-sm",
              )}
              onClick={() => setTheme(themeOption)}
            >
              <span className="capitalize">{themeOption}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
