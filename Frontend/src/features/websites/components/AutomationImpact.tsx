import { useState, useEffect, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import { cn } from "#/lib/utils";

export const AutomationImpact = ({ impact }: { impact: { before: string; after: string } }) => {
  const [isAutomated, setIsAutomated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsAutomated(false);
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center h-10 overflow-hidden font-medium select-none cursor-default w-full"
      onMouseEnter={() => setIsAutomated(true)}
    >
      <div className="relative flex items-center w-full">
        {/* Before State */}
        <div
          className={`flex items-center transition-all duration-500 ease-in-out ${
            isAutomated
              ? "opacity-0 -translate-x-full absolute pointer-events-none delay-500"
              : "opacity-100 translate-x-0 relative"
          }`}
        >
          <span className="text-lg text-destructive whitespace-nowrap relative">
            {impact.before}
            <span
              className={`absolute top-1/2 left-0 h-0.5 bg-destructive transition-all duration-800 ease-in-out ${
                isAutomated ? "w-full" : "w-0"
              }`}
            />
          </span>
        </div>

        {/* After State */}
        <div
          className={`flex items-center gap-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isAutomated
              ? "opacity-100 translate-x-0 relative delay-700"
              : "opacity-0 translate-x-8 absolute pointer-events-none"
          }`}
        >
          <span className="text-xl text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.3)] dark:text-emerald-400 whitespace-nowrap">
            {impact.after}
          </span>
          <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] dark:bg-emerald-400/10 dark:text-emerald-400">
            <FiCheck className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};