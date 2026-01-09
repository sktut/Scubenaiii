interface CursorGlowProps {
  mousePos: { x: number; y: number }
}

export function InteractiveCursorGlow({ mousePos }: CursorGlowProps) {
  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed w-80 h-80 pointer-events-none z-0"
        style={{
          left: `${mousePos.x - 160}px`,
          top: `${mousePos.y - 160}px`,
          background: `radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)`,
          filter: "blur(40px)",
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Secondary glow with delay */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-30"
        style={{
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
          background: `radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)`,
          filter: "blur(60px)",
          transition: "all 0.2s ease-out",
        }}
      />

      {/* Fast-moving neon streaks */}
      <div
        className="fixed w-40 h-40 pointer-events-none z-0"
        style={{
          left: `${mousePos.x - 80}px`,
          top: `${mousePos.y - 80}px`,
          background: `conic-gradient(from 0deg, rgba(0, 212, 255, 0.4), rgba(168, 85, 247, 0.3), transparent)`,
          filter: "blur(20px)",
          animation: "spin 4s linear infinite",
          transition: "all 0.05s ease-out",
        }}
      />
    </>
  )
}
