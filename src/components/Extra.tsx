// CornerArcs.tsx
export default function CornerArcs() {
  return (
    <>
      {/* Top-left arc */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[300px] z-0"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arcGradTL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Quarter circle (top-left) - wider and shorter */}
        <path d="M0,0 L100,0 A100,40 0 0 1 0,40 Z" fill="url(#arcGradTL)" />
      </svg>

      {/* Top-right arc */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[300px] z-0"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arcGradTR" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Quarter circle (top-right) - wider and shorter */}
        <path d="M100,0 L0,0 A100,40 0 0 0 100,40 Z" fill="url(#arcGradTR)" />
      </svg>
    </>
  );
}