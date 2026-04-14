import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { StickySidebar } from "#/components/layout/StickySidebar";
import { AboutHero } from "./components/AboutHero";
import { Experience, Studies } from "./components/ExperienceAndStudies";
import { ProfileInfo } from "./components/ProfileInfo";
import { Skills } from "./components/Skills";
import { ContactAndBookingSection } from "#/features/home/components/ContactAndBookingSection";
import { BackgroundGradient } from "#/components/BackgroundGradient";

export const AboutPage = () => {
  return (
    <>
      <StickySidebar />
      <div className="relative">
        <BackgroundGradient />
        <Container variant="narrow" className="py-0 md:pt-16">
          <Section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] md:gap-5">
            {/* Sticky Sidebar on Desktop */}
            <aside className="lg:sticky lg:top-32 h-fit">
              <ProfileInfo />
            </aside>


            {/* Main Content Area */}
            <main className="flex flex-col">
              <div id="introduction">
                <AboutHero />
              </div>

              <div className="mt-24 flex flex-col gap-20">
                <div id="experience">
                  <Experience />
                </div>
                <div id="studies">
                  <Studies />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="contact">
                  <ContactAndBookingSection />
                </div>
              </div>
            </main>
          </div>
          </Section>
        </Container>
      </div>
    </>
  );
};