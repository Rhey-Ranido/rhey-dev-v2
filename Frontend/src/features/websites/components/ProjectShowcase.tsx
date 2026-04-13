import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { ProjectCard } from "./ProjectCard";
import type { ProjectV2 } from "#/features/projects/constants/projects_v2";

interface ProjectShowcaseProps {
  projects: ProjectV2[];
  onProjectClick: (project: ProjectV2) => void;
}

export const ProjectShowcase = ({ projects, onProjectClick }: ProjectShowcaseProps) => {
  return (
    <Section className="py-20 bg-muted/30">
      <Container variant="narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
          <p className="text-muted-foreground">See the transformation from slow GHL sites to fast React websites</p>
        </div>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onReadMoreClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};