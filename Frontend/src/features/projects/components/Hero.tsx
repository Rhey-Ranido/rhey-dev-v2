import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { FiZap, FiCode, FiLayers } from "react-icons/fi";

export const Hero = () => {
  return (
    <Section className="flex items-center min-h-[70vh]">
      <Container variant="narrow">
        <div className="text-center space-y-6">
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px] font-bold">
            Automation & Workflows
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Powerful Automations and Custom{" "}
            <span className="bg-linear-to-r from-[#4facfe] via-[#7e72f2] to-[#a259ff] bg-clip-text text-transparent">
              Web Applications
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of real-world projects built with Zapier, Make, n8n, and custom React applications. 
            Each solution designed to streamline workflows and solve complex business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiZap className="text-primary" /> 60% faster workflows
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiCode className="text-primary" /> Custom development
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiLayers className="text-primary" /> Scalable solutions
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};