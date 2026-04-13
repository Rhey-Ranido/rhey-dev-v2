import { PRICING } from "../constants/pricing";
import { cn } from "#/lib/utils";

export const Pricing = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80">
          GHL Website Redesign
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Packages & Pricing</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mt-4">
          Transform your slow GoHighLevel site into a fast, modern React website.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
        {PRICING.map((pricing, index) => (
          <div
            key={index}
            className={cn(
              "group relative flex flex-col gap-6 p-8 rounded-2xl transition-all duration-300",
              "bg-muted/20 border border-border/60 hover:border-border hover:bg-muted/30",
              "after:absolute after:inset-0 after:rounded-2xl after:bg-linear-to-tr after:from-primary/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity",
              pricing.highlight && "border-primary/30 bg-primary/5",
            )}
          >
            {/* Icon Container */}
            <div className="relative z-10 flex items-center justify-center size-12 rounded-xl bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
              <pricing.icon className="size-6 text-foreground" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight">{pricing.title}</h3>
              <p className="text-primary font-bold text-lg">{pricing.price}</p>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{pricing.description}</p>
            </div>

            {/* Highlight Badge */}
            {pricing.highlight && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                  POPULAR
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-muted-foreground font-semibold text-sm text-center">
          We also offer a monthly payment plan. No down payment, 12-month minimum, Staring at $87.
        </p>
      </div>
    </div>
  );
};
