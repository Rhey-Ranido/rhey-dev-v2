import { useTheme } from "./theme-provider";
import { THEME_TOGGLE_ITEM } from "./constants/header-constants";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 transition-colors rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <THEME_TOGGLE_ITEM.lightIcon size={20} />
      ) : (
        <THEME_TOGGLE_ITEM.darkIcon size={20} />
      )}
    </button>
  );
};
