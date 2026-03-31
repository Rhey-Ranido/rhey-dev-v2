import { SERVICES } from "../constants/services";
import { cn } from "#/lib/utils";

export const Services = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80">
          What I Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className={cn(
              "group relative flex flex-col gap-6 p-8 rounded-2xl transition-all duration-300",
              "bg-muted/20 border border-border/60 hover:border-border hover:bg-muted/30",
              "after:absolute after:inset-0 after:rounded-2xl after:bg-linear-to-tr after:from-primary/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity"
            )}
          >
            {/* Icon Container */}
            <div className="relative z-10 flex items-center justify-center size-12 rounded-xl bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
              <service.icon className="size-6 text-foreground" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
