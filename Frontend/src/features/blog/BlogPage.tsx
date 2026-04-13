import { Container } from "#/components/layout/Container";
import { Section } from "#/components/layout/Section";
import { HiMiniSparkles } from "react-icons/hi2";

export const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Section className="flex items-center min-h-[90vh]">
        <Container variant="narrow">
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <header className="pt-8">
                <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px] font-bold mb-3">
                  Automated Publishing
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
                  Blog Posts Created by <br />
                  <span className="bg-linear-to-r from-[#4facfe] via-[#7e72f2] to-[#a259ff] bg-clip-text text-transparent">
                    Workflow Automation
                  </span>
                </h1>
              </header>

              {/* Main Empty State Card */}
              <div className="bg-muted/30 border border-border rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center shadow-lg">
                <div className="w-56 h-56 md:w-[24rem] md:h-96 bg-emerald-400/20 rounded-3xl mb-10 flex items-center justify-center relative shadow-[0_0_50px_rgba(110,231,183,0.1)] overflow-hidden">
                  <img
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3YyM25jaDlxeTEzZmF1NnhrNDlwODIyOXV1eGd6c3E0eW9lcDd1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XZrUw9cTqJ0vi8bmV9/giphy.gif"
                    alt="Automation animation"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em] font-bold">No posts yet</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    New blog posts will be published here soon
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
                    Thanks for stopping by. This section is currently being prepared and will be updated with fresh
                    content in a future release.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-32 space-y-4">
              {/* Card 1: Coming Soon */}
              <section className="bg-muted/20 border border-border/40 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <HiMiniSparkles className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Coming Soon</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Automated blog posts about workflow automation, AI integrations, and productivity tips.
                    </p>
                  </div>
                </div>
              </section>

              {/* Card 3: Topics */}
              <section className="bg-muted/20 border border-border/40 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Topics to Expect</h3>
                <div className="flex flex-wrap gap-2">
                  {["Make.com", "Zapier", "n8n", "GHL", "AI Workflows", "Productivity", "No-Code", "Web Dev"].map(
                    (topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {topic}
                      </span>
                    ),
                  )}
                </div>
              </section>
            </div>
          </main>
        </Container>
      </Section>
    </div>
  );
};
