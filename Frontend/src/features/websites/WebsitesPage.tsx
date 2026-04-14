import { useState } from "react";
import type { ProjectV2 } from "#/features/projects/constants/projects_v2";
import { WEBSITE_PROJECTS } from "./constants/websiteProjects";
import { ProjectDetailsDialog } from "#/features/projects/components/ProjectDetailsDialog";
import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { Hero } from "./components/Hero";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Pricing } from "#/features/home/components/Pricing";
import { WhatsIncluded } from "./components/WhatsIncluded";
import { ContactAndBookingSection } from "#/features/home/components/ContactAndBookingSection";
import { BackgroundGradient } from "#/components/BackgroundGradient";

export const WebsitesPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectV2 | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: ProjectV2) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setTimeout(() => setSelectedProject(null), 200);
    }
  };

  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundGradient />
      
      {/* Hero Section */}
      <Hero />

      {/* Before/After Examples - Now as Project Cards */}
      <ProjectShowcase projects={WEBSITE_PROJECTS} onProjectClick={handleProjectClick} />

      {/* Pricing Section */}
      <Section className="py-20">
        <Container variant="narrow">
          <Pricing />
        </Container>
      </Section>

      {/* What's Included */}
      <WhatsIncluded />

      {/* Contact and Booking Section */}
      <Section className="py-20">
        <Container variant="narrow">
          <ContactAndBookingSection />
        </Container>
      </Section>

      {/* Project Details Dialog */}
      {selectedProject && (
        <ProjectDetailsDialog
          project={selectedProject}
          open={isDialogOpen}
          onOpenChange={handleDialogClose}
        />
      )}
    </div>
  );
};