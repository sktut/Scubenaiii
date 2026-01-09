"use client"

import { useEffect, useState } from "react"

export function CosmicBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary cosmic orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Interactive cursor-following orbs */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${mousePos.x - 128}px`,
          top: `${mousePos.y - 128}px`,
        }}
      />

      {/* Starfield effect */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula glow lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="nebula-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 Q 25% 50% 50% 100% T 100% 100%"
          stroke="url(#nebula-gradient)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
