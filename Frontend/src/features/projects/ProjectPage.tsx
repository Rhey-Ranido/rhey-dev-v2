import { useState, useEffect } from "react";
import { useSearch } from "@tanstack/react-router";
import { PROJECTS_V2, type ProjectCategory } from "./constants/projects_v2";
import { ProjectCardV2 } from "./components/ProjectCardV2";
import { CategoryFilter } from "./components/CategoryFilter";
import { BackgroundGradient } from "#/components/BackgroundGradient";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { Hero } from "./components/Hero";

const CATEGORIES: (ProjectCategory | "All")[] = ["All", "GHL", "Make", "n8n", "Zapier", "Web Development"];

export const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const search = useSearch({ from: "/_app/projects" }) as { project?: string };
  const [openProjectSlug, setOpenProjectSlug] = useState<string | null>(null);

  // Extract slug from project link (e.g., "/projects/email-ai-organizer" -> "email-ai-organizer")
  const projectSlugFromUrl = search.project 
    ? search.project.replace("/projects/", "") 
    : null;

  // Auto-open dialog when navigating with project query param
  useEffect(() => {
    if (projectSlugFromUrl) {
      setOpenProjectSlug(projectSlugFromUrl);
    }
  }, [projectSlugFromUrl]);

  // Find the project that should be open
  const openProject = PROJECTS_V2.find(
    (p) => p.link.replace("/projects/", "") === openProjectSlug
  );

  // Close dialog handler
  const handleCloseDialog = (open: boolean) => {
    if (!open) {
      setOpenProjectSlug(null);
    }
  };

  const filteredProjects = PROJECTS_V2.filter((p) => 
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <div className="relative min-h-screen ">
      <BackgroundGradient />
      
      <Container variant="narrow">
        <Section >
          <Hero />

          <CategoryFilter 
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCardV2 
                key={idx} 
                project={project}
                open={openProject?.link === project.link ? true : undefined}
                onOpenChange={openProject?.link === project.link ? handleCloseDialog : undefined}
              />
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
};
