import { EXPERIENCES, STUDIES } from "../constants/about-data";

export const Experience = () => {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-4xl font-semibold tracking-tight text-foreground">Work Experience</h2>
      <div className="flex flex-col gap-16">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                <p className="text-lg text-primary font-medium tracking-wide leading-loose">
                  {exp.role}
                </p>
              </div>
              <span className="text-muted-foreground font-medium">{exp.period}</span>
            </div>

            <ul className="flex flex-col gap-4 list-disc list-inside text-lg text-foreground/70 leading-relaxed">
              {exp.description.map((item, i) => (
                <li key={i} className="pl-2">
                  <span className="-ml-2">{item}</span>
                </li>
              ))}
            </ul>

            {exp.image && (
              <div className="mt-4 rounded-3xl border border-primary/5 bg-muted overflow-hidden">
                <img src={exp.image} alt={exp.company} className="w-full aspect-video object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Studies = () => {
  return (
    <div className="flex flex-col gap-10 mt-12">
      <h2 className="text-4xl font-semibold tracking-tight text-foreground">Studies</h2>
      <div className="flex flex-col gap-10">
        {STUDIES.map((study, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-foreground">{study.institution}</h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
