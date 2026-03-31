import { TOOLS } from "../constants/tools";
import { SectionHeader } from "#/components/layout/Section";

export const ToolStack = () => {
  // Doubling the tools for a smooth infinite scroll
  const doubledTools = [...TOOLS, ...TOOLS];

  return (
    <div className="flex flex-col gap-12 overflow-hidden">
      <SectionHeader
        title="Core Automation Stack"
        description="The essential tools I use to build fast, scalable, and reliable workflows every day."
      />

      <div className="relative flex flex-col gap-6 w-full">
        {/* Row 1 - Left to Right */}
        <div className="flex select-none overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 items-center gap-4 animate-marquee">
            {doubledTools.map((tool, idx) => (
              <ToolBadge key={`r1-${idx}`} tool={tool} />
            ))}
            {/* Repeat once more for seamless loop */}
            {doubledTools.map((tool, idx) => (
              <ToolBadge key={`r1-dup-${idx}`} tool={tool} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex select-none overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 items-center gap-4 animate-marquee-reverse">
            {doubledTools.map((tool, idx) => (
              <ToolBadge key={`r2-${idx}`} tool={tool} />
            ))}
            {/* Repeat once more for seamless loop */}
            {doubledTools.map((tool, idx) => (
              <ToolBadge key={`r2-dup-${idx}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}} />
    </div>
  );
};

const ToolBadge = ({ tool }: { tool: (typeof TOOLS)[0] }) => {
  const Icon = tool.icon;
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-sm whitespace-nowrap group hover:border-primary/20 hover:bg-primary/10 transition-colors duration-300">
      <Icon className="size-5 text-foreground/70 group-hover:text-foreground transition-colors" />
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
        {tool.name}
      </span>
    </div>
  );
};
