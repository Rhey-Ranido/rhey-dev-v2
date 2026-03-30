export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background transition-colors duration-500">
      {/* Primary Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 opacity-70 dark:opacity-60"
        style={{
          background: "radial-gradient(circle at center, var(--primary-glow, rgba(56, 189, 248, 0.3)) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />
      
      {/* Secondary Top Subtle Glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[40%] opacity-50 dark:opacity-60"
        style={{
          background: "linear-gradient(to bottom, var(--secondary-glow, rgba(30, 41, 59, 0.6)), transparent)",
        }}
      />
      
      {/* Noise/Grain Overlay (Optional but adds texture like the image) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
