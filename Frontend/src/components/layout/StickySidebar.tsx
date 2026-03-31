import { cn } from "#/lib/utils";
import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "studies", label: "Studies" },
  { id: "skills", label: "Technical skills" },
];

export const StickySidebar = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-6">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={cn(
            "group flex items-center gap-4 text-sm font-medium transition-all duration-300 text-left",
            activeId === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span
            className={cn(
              "h-[1px] transition-all duration-300 bg-current",
              activeId === item.id ? "w-8" : "w-4 group-hover:w-8"
            )}
          />
          {item.label}
        </button>
      ))}
    </aside>
  );
};