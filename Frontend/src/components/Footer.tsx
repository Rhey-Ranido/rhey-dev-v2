import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 pt-10 pb-28 md:pb-10 mt-auto border-t border-primary/5 bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">
        {/* Copyright and Text Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-foreground/50 md:justify-start">
          <span>© {currentYear}</span>
          <span className="text-foreground/20">/</span>
          <span className="text-foreground">Rhey Ranido</span>
          <span className="text-foreground/20">/</span>
          <span className="italic text-foreground/70">"What you seek is seeking you"</span>
        </div>

        {/* Social Icons Section */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-foreground/50 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-foreground/50 hover:text-foreground"
            aria-label="Upwork"
          >
            <SiUpwork size={24} />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="transition-colors text-foreground/50 hover:text-foreground"
            aria-label="Gmail"
          >
            <MdEmail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};
