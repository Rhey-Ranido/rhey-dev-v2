import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "#/components/ui/Dialog";
import { cn } from "#/lib/utils";
import type { ProjectV2 } from "../constants/projects_v2";
import { FaBookOpen, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiExternalLink, FiChevronRight } from "react-icons/fi";
import { ScheduleCallButton } from "#/components/ui/ScheduleCallButton";

interface ProjectDetailsDialogProps {
  project: ProjectV2;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDetailsDialog = ({ project, open, onOpenChange }: ProjectDetailsDialogProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use images array if available, otherwise fallback to single image
  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ maxWidth: "72rem" }}
        className="w-full max-h-[90vh] p-0 border-border/40 gap-0 bg-background text-foreground overflow-hidden"
      >
        {/* Two-column layout: image left, content right */}
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          {/* Left — Image block with gallery navigation */}
          <div
            className={cn(
              "relative md:w-2/5 w-full shrink-0 overflow-hidden md:rounded-l-xl rounded-t-xl md:rounded-tr-none",
              "md:min-h-full min-h-56",
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in",
            )}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={cn(
                "w-full h-full object-cover transition-transform duration-500 ease-in-out",
                isZoomed ? "scale-100" : "scale-110",
              )}
            />
            {/* Zoom hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white/70 text-[10px] px-3 py-1 rounded-full pointer-events-none whitespace-nowrap z-10">
              {isZoomed ? "Click to zoom out" : "Click to zoom in"}
            </div>

            {/* Image Navigation Arrows - only show if multiple images */}
            {images.length > 1 && (
              <>
                {/* Previous button */}
                <button
                  onClick={goToPrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="size-4" />
                </button>
                {/* Next button */}
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Next image"
                >
                  <FaChevronRight className="size-4" />
                </button>
              </>
            )}

            {/* Image Counter - only show if multiple images */}
            {images.length > 1 && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-3 py-1 rounded-full pointer-events-none whitespace-nowrap z-10">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}

            {/* Thumbnail Navigation - only show if 3+ images */}
            {images.length > 2 && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={cn(
                      "w-12 h-8 rounded overflow-hidden border-2 transition-all",
                      currentImageIndex === idx ? "border-white scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Content block */}
          <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <FaBookOpen className="size-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Case Study</span>
              </div>
              <DialogTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                {project.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-medium">
                  {project.category}
                </span>
                {/* View Website Link */}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-[11px] font-medium hover:bg-indigo-500/20 transition-colors"
                  >
                    View Website
                    <FiExternalLink className="size-3" />
                  </a>
                )}
                {/* View Explanation Link */}
                {project.videoUrl && !project.websiteUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-medium hover:bg-emerald-500/20 transition-colors"
                  >
                    <FaPlay className="size-2.5" />
                    View Explanation
                    <FiExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Section: Original Workflow */}
              {project.originalWorkflow && (
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Original Manual Workflow
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/80">{project.originalWorkflow}</p>
                </section>
              )}

              {/* Section: How it became automated */}
              {project.howItBecameAutomated && (
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    How it became automated
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/80">{project.howItBecameAutomated}</p>
                </section>
              )}

              {/* Section: Value & Impact */}
              {project.businessImpact && (
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Value & Business Impact
                  </h4>
                  <p className="text-sm leading-relaxed text-foreground/80">{project.businessImpact}</p>
                </section>
              )}

              {/* Section: Measured Results */}
              {project.measuredResults && project.measuredResults.length > 0 && (
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    Measured Results
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.measuredResults.map((result, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-muted/50 border border-border flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                          {result.label}
                        </span>
                        <span className="text-base font-semibold text-foreground">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section: Tools Used */}
              {project.toolsUsed && project.toolsUsed.length > 0 && (
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-medium text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>
              )}
              {/* Book a Project CTA */}
              <div className="pt-2">
                <ScheduleCallButton
                  href="https://calendly.com/YOUR_CALENDLY_LINK"
                  chevronIcon={
                    <FiChevronRight className="size-4 text-foreground/50 group-hover:translate-x-0.5 transition-transform" />
                  }
                  className="text-sm w-full justify-center"
                >
                  Discuss a Project Like This
                </ScheduleCallButton>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};