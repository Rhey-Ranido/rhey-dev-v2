import { FiCalendar } from "react-icons/fi";
import { cn } from "#/lib/utils";

interface ScheduleCallButtonProps {
  href?: string;
  children?: React.ReactNode;
  chevronIcon: React.ReactNode;
  className?: string;
}

export const ScheduleCallButton = ({
  href = "#",
  children = "Schedule a call",
  chevronIcon,
  className,
}: ScheduleCallButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all text-foreground/90 backdrop-blur-sm",
        className
      )}
    >
      <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 border border-primary/20">
        <FiCalendar className="size-3 sm:size-4 text-primary" />
      </div>
      <span className="font-medium">{children}</span>
      {chevronIcon}
    </a>
  );
};