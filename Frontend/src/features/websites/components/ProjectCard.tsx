import { useState, useRef } from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "#/lib/utils";
import type { ProjectV2 } from "#/features/projects/constants/projects_v2";
import { AutomationImpact } from "./AutomationImpact";

interface ProjectCardProps {
  project: ProjectV2;
  onReadMoreClick: () => void;
}

export const ProjectCard = ({ project, onReadMoreClick }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextImage({ stopPropagation: () => {} } as React.MouseEvent);
    }
    if (isRightSwipe) {
      goToPrevImage({ stopPropagation: () => {} } as React.MouseEvent);
    }
  };

  return (
    <div
      className="group flex flex-col gap-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image Display with Slider */}
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/5 bg-muted transition-all duration-500 hover:border-primary/10 max-h-96 flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Images Container - Sliding Track */}
        <div
          className="flex transition-transform duration-500 ease-out h-full w-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-full h-full flex-shrink-0"
            >
              <img
                src={img}
                alt={`${project.title} - Image ${idx + 1}`}
                className="aspect-21/9 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - show on hover if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 opacity-0 hover:opacity-100"
              style={{ opacity: isHovered ? 1 : 0 }}
              aria-label="Previous image"
            >
              <FiChevronLeft className="size-4" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 opacity-0 hover:opacity-100"
              style={{ opacity: isHovered ? 1 : 0 }}
              aria-label="Next image"
            >
              <FiChevronRight className="size-4" />
            </button>
          </>
        )}

        {/* Image Counter - show if multiple images */}
        {images.length > 1 && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-3 py-1 rounded-full pointer-events-none whitespace-nowrap z-10">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        {/* Thumbnail Navigation - show if 3+ images and hovered */}
        {images.length > 2 && (
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => goToImage(idx, e)}
                className={cn(
                  "w-16 h-10 rounded overflow-hidden border-2 transition-all flex-shrink-0",
                  currentImageIndex === idx ? "border-white scale-105" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start px-2">
        <div>
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          {/* Automation Impact Animation */}
          {project.impact && <AutomationImpact impact={project.impact} />}

          <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>

          <button
            onClick={onReadMoreClick}
            className="inline-flex items-center gap-2 group/link text-primary hover:text-primary/80 font-medium transition-colors w-fit text-base bg-none border-none p-0 cursor-pointer"
          >
            Read case study
            <FiArrowUpRight className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </button>
        </div>
      </div>
    </div>
  );
};