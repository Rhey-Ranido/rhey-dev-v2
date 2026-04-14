import { FaUpwork, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { InlineWidget } from "react-calendly";
import { cn } from "#/lib/utils";

interface SocialLinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLinkButton = ({ href, icon, label }: SocialLinkButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300",
      "bg-primary/5 border border-primary/10 hover:border-primary/20 hover:bg-primary/10",
      "backdrop-blur-md text-foreground/80 hover:text-foreground",
    )}
  >
    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">{icon}</div>
    <span className="font-medium">{label}</span>
  </a>
);

export const ContactAndBookingSection = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {/* HEADING */}
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80">Get Started</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Let me{" "}
          <span className="text-primary bg-clip-text bg-linear-to-r from-primary to-primary/80">Automate Your Business?</span>{" "}
          
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4">
          Book a free 30-minute strategy call with Ed Automate. No obligation, no hard sell — just a clear plan for what
          AI automation can do for your business.
        </p>
      </div>

      {/* CONTAINER with Calendly and Buttons */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: Calendly Container */}
          <div
            className={cn(
              "relative flex flex-col transition-all duration-300",
              "bg-muted/20 border border-border/60 hover:border-border hover:bg-muted/30",
              "after:absolute after:inset-0 after:rounded-2xl after:bg-linear-to-tr after:from-primary/5 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:pointer-events-none",
            )}
          >
          {/* Header */}
          <div className="relative z-10 flex items-center gap-2 p-6 border-b border-border/40">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              <FiCalendar className="size-5" />
            </div>
            <span className="uppercase font-semibold text-base tracking-wide text-foreground">
              Book a discovery call
            </span>
          </div>

          {/* Embedded Calendly Inline Widget */}
          <InlineWidget
            url="https://calendly.com/christianrheyranido/30min"
            styles={{ height: "630px", minWidth: "320px" }}
          />
        </div>

        {/* RIGHT: Contact Buttons and Heading */}
        <div className="flex flex-col gap-6 lg:pt-12">
          {/* Heading on the right */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground/80">
              Or Connect Directly
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Prefer to reach out personally?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Have a quick question or prefer a different platform? Choose your preferred channel.
            </p>
          </div>

          {/* Buttons Column */}
          <div className="flex flex-col gap-3 mt-2">
            <SocialLinkButton
              href="https://www.upwork.com/freelancers/~0192a049ce677e595e"
              icon={<FaUpwork className="size-5" />}
              label="Hire me on Upwork"
            />
            <SocialLinkButton
              href="https://www.linkedin.com/in/christianrheyranido"
              icon={<FaLinkedin className="size-5" />}
              label="Connect on LinkedIn"
            />
            <SocialLinkButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=christianrheyranido@gmail.com"
              icon={<MdEmail className="size-5" />}
              label="christianrheyranido@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};