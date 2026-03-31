import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/Button";
import { FiCalendar } from "react-icons/fi";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-8 md:pt-20">
      {/* Top Tag/Pill */}
      {/* <div className="hidden mb-12 animate-in fade-in slide-in-from-top-4 duration-1000 md:block">
        <Button
          variant="outline"
          className="rounded-full bg-primary/5 border-primary/10 backdrop-blur-sm hover:bg-primary/10 transition-all px-4 py-2 h-auto"
          asChild
        >
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <FiCalendar className="size-3.5 text-primary" />
            <div className="w-px h-3 bg-primary/20 mx-1" />
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/90">Book a Call</span>
          </a>
        </Button>
      </div> */}

      {/* Main Heading */}
      <h1 className="max-w-4xl mb-8 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000 text-balance">
        Reclaiming hours one workflow at a time
      </h1>

      {/* Description */}
      <p className="max-w-2xl mb-12 text-lg leading-relaxed text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
        I'm Christian, an automation expert who turns repetitive manual tasks into reliable systems — so founders and
        teams get their time back.
      </p>

      {/* Profile Pill */}
      <Link
        to="/about"
        className="group flex items-center gap-3 px-4 py-2 transition-all border rounded-full bg-primary/5 dark:bg-black/40 border-primary/10 hover:border-primary/20 hover:bg-primary/10 dark:hover:bg-black/60 backdrop-blur-md animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500"
      >
        <div className="flex items-center justify-center w-8 h-8 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 dark:from-white/20 dark:to-white/5 rounded-full border border-primary/10">
          <img
            src="https://github.com/Rhey-Ranido.png"
            alt="Rhey Ranido"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement!.innerHTML = '<span class="text-[10px] text-muted-foreground">RR</span>';
            }}
          />
        </div>
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          About — Rhey Ranido
        </span>
      </Link>
    </div>
  );
};
