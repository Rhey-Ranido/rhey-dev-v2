import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { FiZap } from "react-icons/fi";

export const WhatsIncluded = () => {
  const items = [
    "All existing pages redesigned",
    "CTAs and buttons preserved",
    "Forms restyled and functional",
    "Mobile & tablet responsive",
    "Basic SEO optimization",
    "Vercel hosting deployment",
    "Performance optimization",
    "2 months free Website Care Plan",
  ];

  return (
    <Section className="py-20 bg-muted/30">
      <Container variant="narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
          <p className="text-muted-foreground">Everything from your GHL site, redesigned and improved</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <FiZap className="text-primary size-3" />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};