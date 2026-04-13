import { PROCESS_STEPS } from "../constants/process";
import { cn } from "#/lib/utils";
import { FiChevronsRight } from "react-icons/fi";
import { ScheduleCallButton } from "#/components/ui/ScheduleCallButton";

export const HowItWorks = () => {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Main Heading */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">How It Works</h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          From audit to launch in 5 simple steps. I handle everything while you focus on your business.
        </p>
      </div>
      {/* Steps Grid */}
      {/* FIX: Changed gap-0 to gap-8 and used flex-1 approach or a wider grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 mb-16">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-6 relative",
              // FIX: Removed the restrictive borders and heavy padding that was crushing the content
              "lg:border-l lg:border-border/40 lg:pl-6 first:border-l-0 first:pl-0",
            )}
          >
            {/* Number */}
            <div className="flex items-baseline">
              <span className="text-5xl md:text-6xl font-bold text-muted-foreground/15 tracking-tighter">
                0{step.number}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-foreground tracking-tight leading-tight">{step.title}</h3>
              {/* FIX: Removed max-w-70 (which is very small) to let text fill the column */}
              <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Button */}
      <div className="flex justify-center">
        <ScheduleCallButton
          className="h-12 px-8 text-lg"
          chevronIcon={<FiChevronsRight className="size-4 transition-transform group-hover:translate-x-1" />}
        />
      </div>
    </div>
  );
};
