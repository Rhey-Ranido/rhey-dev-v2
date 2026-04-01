import { useState, useEffect, useRef } from "react";
import { cn } from "#/lib/utils";
import type { ProjectV2 } from "../constants/projects_v2";
import { AutomationImpact } from "./AutomationImpact";
import { ProjectDetailsDialog } from "./ProjectDetailsDialog";

interface ProjectCardV2Props {
  project: ProjectV2;
}

export const ProjectCardV2 = ({ project }: ProjectCardV2Props) => {
  const [isAutomated, setIsAutomated] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset animation state when card leaf the viewport
        if (!entry.isIntersecting) {
          setIsAutomated(false);
        }
      },
      { threshold: 0 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setIsAutomated(true);
  };

  return (
    <>
      <div
        ref={cardRef}
        className={cn(
          "group relative flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
          "bg-muted/20 border border-border/60 hover:border-border hover:bg-muted/30 hover:shadow-2xl hover:shadow-primary/5",
          "after:absolute after:inset-0 after:rounded-2xl after:bg-linear-to-tr after:from-primary/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity"
        )}
        onClick={handleClick}
      >
        <div className="relative z-10 flex flex-col h-full gap-5">
        {/* Project Image Display */}
        <div className="relative overflow-hidden rounded-xl aspect-16/10 bg-muted border border-border shadow-sm group-hover:scale-[1.02] transition-transform duration-500">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-semibold bg-primary/5 text-primary rounded-full border border-primary/10 uppercase tracking-wider transition-colors group-hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 grow">
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-tight">
            {project.title}
          </h3>

          <div className="min-h-8">
            <AutomationImpact impact={project.impact} isAutomated={isAutomated} />
          </div>

          <p className="text-muted-foreground leading-relaxed text-[15px] line-clamp-3 overflow-hidden">
            {project.description}
          </p>
        </div>

        {/* Action Button styled like ScheduleCallButton */}
        <div className="flex justify-center mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDetailsOpen(true);
            }}
            className={cn(
              "group/btn inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all text-foreground/90 backdrop-blur-sm shadow-sm"
            )}
          >
            <span className="font-medium text-sm">View Details</span>
          </button>
        </div>
      </div>
    </div>

    <ProjectDetailsDialog 
      project={project} 
      open={isDetailsOpen} 
      onOpenChange={setIsDetailsOpen} 
    />
  </>
  );
};
