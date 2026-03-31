import { PROFILE } from "../constants/about-data";
import { FiGlobe } from "react-icons/fi";

export const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center pb-5  gap-6 w-full">
      {/* Avatar */}
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/5 bg-muted group self-center ">
        <img
          src={PROFILE.avatar}
          alt={PROFILE.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Location */}
      <div className="flex flex-col items-center md:items-start gap-2 text-foreground/80">
        <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-primary/5 border border-primary/10">
            <FiGlobe className="size-4 text-orange-400" />
          </div>
          <span className="font-medium text-sm md:text-base">{PROFILE.location}</span>
        </div>
      </div>

      {/* Languages */}
      <div className="flex gap-2">
        {PROFILE.languages.map((lang) => (
          <div
            key={lang}
            className="px-4 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-xs md:text-sm font-medium text-foreground/70"
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};
