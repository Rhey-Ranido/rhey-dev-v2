import { PROFILE } from "../constants/about-data";
import { FiCalendar, FiChevronRight, FiLinkedin, FiMail } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export const AboutHero = () => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <FiLinkedin className="size-5" />;
      case "upwork":
        return <SiUpwork className="size-5" />;
      case "email":
        return <FiMail className="size-5" />;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Schedule Link */}
      <div className="w-fit">
        <a
          href="#"
          className="group flex items-center gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all text-foreground/90 backdrop-blur-sm"
        >
          <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 border border-primary/20">
            <FiCalendar className="size-3 sm:size-4 text-primary" />
          </div>
          <span className="font-medium">Schedule a call</span>
          <FiChevronRight className="size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Name and Role */}
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">{PROFILE.name}</h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-medium">{PROFILE.role}</p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3">
        {PROFILE.socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all font-medium text-foreground/80"
          >
            {getIcon(social.name)}
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      {/* Bio */}
      <p className="max-w-3xl text-xl md:text-1xl leading-relaxed text-muted-foreground mt-4">{PROFILE.bio}</p>
    </div>
  );
};
