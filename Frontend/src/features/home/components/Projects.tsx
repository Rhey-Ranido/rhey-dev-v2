import { Link } from "@tanstack/react-router";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import type { Project } from "../constants/projects";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="flex flex-col gap-24">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
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
    <div className="group flex flex-col gap-10">
      {/* Project Image Display */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/5 bg-muted transition-all duration-500 hover:border-primary/10 max-h-[600px] flex items-center justify-center">
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
                className="size-10 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto"
                aria-label="Previous image"
              >
                <FiChevronLeft className="size-6" />
              </button>
              <button
                onClick={nextImage}
                className="size-10 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto"
                aria-label="Next image"
              >
                <FiChevronRight className="size-6" />
              </button>
            </div>

            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5">
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 transition-all rounded-full ${
                    idx === currentImageIndex ? "w-8 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-2">
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          {/* Avatars */}
          {project.avatars && (
            <div className="flex items-center -space-x-3">
              {project.avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-background overflow-hidden bg-muted transition-transform hover:z-10 hover:scale-110"
                >
                  <img src={avatar} alt="Contributor" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <Link
            to={project.link}
            className="inline-flex items-center gap-2 group/link text-primary hover:text-primary/80 font-medium transition-colors w-fit text-lg"
          >
            Read case study
            <FiArrowUpRight className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
