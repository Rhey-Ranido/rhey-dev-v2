import { SKILLS } from "../constants/about-data";
import { SiFigma, SiNextdotjs, SiSupabase, SiJavascript } from "react-icons/si";

export const Skills = () => {
  const getIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "figma":
        return <SiFigma className="size-4" />;
      case "next.js":
        return <SiNextdotjs className="size-4" />;
      case "supabase":
        return <SiSupabase className="size-4 text-emerald-500" />;
      case "javascript":
        return <SiJavascript className="size-4 text-yellow-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-10 mt-20">
      <h2 className="text-4xl font-semibold tracking-tight text-foreground">Technical skills</h2>

      <div className="flex flex-col gap-16">
        {SKILLS.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-foreground">{skill.name}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {skill.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-sm font-medium text-foreground/80"
                >
                  {getIcon(tag)}
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {skill.images.map((img, i) => (
                <div key={i} className="rounded-2xl border border-primary/5 bg-muted overflow-hidden">
                  <img src={img} alt={`${skill.name} preview`} className="w-full aspect-video object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
