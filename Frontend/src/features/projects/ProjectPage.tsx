import { useState } from "react";
import { PROJECTS_V2, type ProjectCategory } from "./constants/projects_v2";
import { ProjectCardV2 } from "./components/ProjectCardV2";
import { CategoryFilter } from "./components/CategoryFilter";
import { BackgroundGradient } from "#/components/BackgroundGradient";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";

const CATEGORIES: (ProjectCategory | "All")[] = ["All", "GHL", "Make", "n8n", "Zapier", "Web Development"];

export const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = PROJECTS_V2.filter((p) => 
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <div className="relative min-h-screen pt-20 md:pt-28">
      <BackgroundGradient />
      
      <Container variant="narrow">
        <Section >
          {/* Enhanced Heading Style matching Services.tsx */}
          <div className="flex flex-col gap-2 items-center text-center mb-12 md:mb-16">
            <span className="text-sm font-medium uppercase tracking-widest text-primary/80">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              My Projects
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of automations and web applications built to solve real-world problems.
            </p>
          </div>

          <CategoryFilter 
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCardV2 key={idx} project={project} />
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
};
