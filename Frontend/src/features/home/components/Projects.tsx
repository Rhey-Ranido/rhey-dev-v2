import { Link } from "@tanstack/react-router";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import type { Project } from "../constants/projects";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

const AutomationImpact = ({ impact }: { impact: { before: string; after: string } }) => {
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

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="group flex flex-col gap-6">
      {/* Project Image Display */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/5 bg-muted transition-all duration-500 hover:border-primary/10 max-h-96 flex items-center justify-center">
        {project.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${project.title} - view ${idx + 1}`}
            className={`aspect-21/9 w-full object-cover transition-all duration-700 ${
              idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 absolute inset-0"
            }`}
          />
        ))}

        {/* Multi-image indicators/controls */}
        {project.images.length > 1 && (
          <>
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <button
                onClick={prevImage}
                className="size-8 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto"
                aria-label="Previous image"
              >
                <FiChevronLeft className="size-5" />
              </button>
              <button
                onClick={nextImage}
                className="size-8 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto"
                aria-label="Next image"
              >
                <FiChevronRight className="size-5" />
              </button>
            </div>

            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5">
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-0.5 transition-all rounded-full ${
                    idx === currentImageIndex ? "w-8 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start px-2">
        <div>
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          {/* Automation Impact Animation */}
          {project.impact && <AutomationImpact impact={project.impact} />}

          <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>

          <Link
            to={project.link}
            className="inline-flex items-center gap-2 group/link text-primary hover:text-primary/80 font-medium transition-colors w-fit text-base"
          >
            Read case study
            <FiArrowUpRight className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
