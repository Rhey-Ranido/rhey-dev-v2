import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  NAV_ITEMS,
  HOME_ITEM,
  TIMEZONE,
} from "./constants/header-constants";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let animationFrameId: number;

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: TIMEZONE,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));

      // Calculate precise delay to next second for smooth updates
      const msUntilNextSecond = 1000 - now.getMilliseconds();
      const startTime = performance.now();

      const scheduleNextUpdate = () => {
        const elapsed = performance.now() - startTime;
        if (elapsed >= msUntilNextSecond) {
          animationFrameId = requestAnimationFrame(updateTime);
        } else {
          // Use a short timeout to check again, more efficient than RAF
          setTimeout(() => {
            animationFrameId = requestAnimationFrame(scheduleNextUpdate);
          }, Math.max(1, msUntilNextSecond - elapsed));
        }
      };

      animationFrameId = requestAnimationFrame(scheduleNextUpdate);
    };

    updateTime();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 pointer-events-none transition-colors duration-500">
      <div className="flex items-center justify-between w-full mx-auto">
        {/* Timezone Section */}
        <div className="hidden text-sm font-medium text-foreground/60 md:block">
          <span>{TIMEZONE}</span>
        </div>

        <nav className="hidden pointer-events-auto md:block">
          <NavPill />
        </nav>

        {/* Clock Section */}
        <div className="hidden text-sm font-medium tabular-nums text-foreground/60 w-20 text-right md:block">
          <span>{time || "--:--:--"}</span>
        </div>
      </div>

      {/* Mobile Nav Pill - Fixed at bottom, shown only on mobile */}
      <nav className="fixed -translate-x-1/2 pointer-events-auto md:hidden bottom-6 left-1/2">
        <NavPill />
      </nav>
    </header>
  );
};

const NavPill = () => {
  return (
    <div className="flex items-center bg-background/80 backdrop-blur-md border border-primary/10 rounded-full p-1.5 shadow-2xl transition-colors duration-500">
      {/* Home Button */}
      <Link
        to={HOME_ITEM.href}
        activeOptions={{ exact: true }}
        activeProps={{
          className: "flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-primary text-primary-foreground"
        }}
        inactiveProps={{
          className: "flex items-center justify-center w-10 h-10 transition-colors rounded-full text-foreground/60 hover:text-foreground hover:bg-primary/5"
        }}
      >
        <HOME_ITEM.icon size={20} />
      </Link>

      {/* Divider */}
      <div className="w-px h-6 bg-primary/10 mx-3" />

      {/* Nav Links */}
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              activeProps={{
                className: "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-full bg-primary text-primary-foreground"
              }}
              inactiveProps={{
                className: "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-full text-foreground/60 hover:text-foreground hover:bg-primary/5"
              }}
            >
              <item.icon size={18} />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="w-px h-6 bg-primary/10 mx-3" />

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};