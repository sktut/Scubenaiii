"use client"

import { LottieAnimation } from "@/components/lottie-animation"
import aiBrainAnimation from "@/lib/animations/ai-brain.json"

export function HeroAnimation() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/30 to-[var(--color-highlight)]/30 blur-3xl rounded-full" />

      {/* Animation container */}
      <div className="relative z-10 float-animation">
        <LottieAnimation animationData={aiBrainAnimation} className="w-full max-w-md mx-auto" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[var(--color-accent)] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-[var(--color-highlight)] animate-pulse delay-300" />
      <div className="absolute top-1/2 right-5 w-2 h-2 rounded-full bg-white/50 animate-pulse delay-500" />
    </div>
  )
}
