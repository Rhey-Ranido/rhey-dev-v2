import { cn } from "#/lib/utils";
import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren & {
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return <section className={cn("py-14", className)}>{children}</section>;
};

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ title, description, className, align = "center" }: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-10",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className,
      )}
    >
      <h2 className="text-2xl text-foreground">{title}</h2>

      {description && <p className="text-xl">{description}</p>}
    </div>
  );
};
