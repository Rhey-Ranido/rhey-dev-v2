import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { ToolStack } from "./components/ToolStack";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
// import { BlogSection } from "./components/BlogSection";
import { ONCE_UI, SHOP_SPARK, FLOW_TASK } from "./constants/projects";

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
          <Projects projects={[ONCE_UI]} />
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="py-20 border-y border-border/40">
        <Container variant="wide">
          <Services />
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
          <Projects projects={[SHOP_SPARK]} />
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
          <Projects projects={[FLOW_TASK]} />
        </Container>
      </Section>
    </>
  );
};
