import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { FiZap, FiTrendingUp, FiShield } from "react-icons/fi";

export const Hero = () => {
  return (
    <Section className="flex items-center min-h-[70vh]">
      <Container variant="narrow">
        <div className="text-center space-y-6">
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px] font-bold">
            GHL Website Redesign Specialist
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Transform Your Slow GHL Site Into a{" "}
            <span className="bg-linear-to-r from-[#4facfe] via-[#7e72f2] to-[#a259ff] bg-clip-text text-transparent">
              Fast, Converting Website
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I redesign outdated GoHighLevel websites into modern React sites hosted on Vercel. 
            One-time payment. Plans starting at $997.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiZap className="text-primary" /> 60% faster load times
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiTrendingUp className="text-primary" /> Higher conversions
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <FiShield className="text-primary" /> All features preserved
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};