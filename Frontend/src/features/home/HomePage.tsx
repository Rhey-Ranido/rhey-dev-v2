import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ToolStack } from "./components/ToolStack";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
// import { BlogSection } from "./components/BlogSection";
import { ContactAndBookingSection } from "./components/ContactAndBookingSection";
import { EMAIL_AI_ORGANIZER, LEAD_QUALIFICATION, FACEBOOK_AI_AGENT } from "./constants/projects";

export const HomePage = () => {
  return (
    <>
      <Section className="flex items-center min-h-[90vh]">
        <Container variant="wide">
          <Hero />
        </Container>
      </Section>

      {/* Featured Projects Section */}
      <Section className="py-20">
        <Container variant="narrow">
          <Projects projects={EMAIL_AI_ORGANIZER ? [EMAIL_AI_ORGANIZER] : []} />
        </Container>
      </Section>

      {/* pricing Section */}
      <Section className="py-20 border-y border-border/40">
        <Container variant="narrow">
          <Pricing />
        </Container>
      </Section>

      <Section className="py-20 bg-muted/30">
        <Container variant="full">
          <ToolStack />
        </Container>
      </Section>

      {/* All Projects / Professional Work Section */}
      <Section className="py-20">
        <Container variant="narrow">
          <Projects projects={LEAD_QUALIFICATION ? [LEAD_QUALIFICATION] : []} />
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-20">
        <Container variant="wide">
          <HowItWorks />
        </Container>
      </Section>

      {/* <Section className="">
        <Container variant="narrow">
          <BlogSection />
        </Container>
      </Section> */}

      <Section className="py-20">
        <Container variant="narrow">
          <Projects projects={FACEBOOK_AI_AGENT ? [FACEBOOK_AI_AGENT] : []} />
        </Container>
      </Section>

      {/* Contact and Booking Section */}
      <Section className="bg-background text-foreground py-16 px-4 md:px-8">
        <Container variant="narrow">
          <ContactAndBookingSection />
        </Container>
      </Section>
    </>
  );
};
