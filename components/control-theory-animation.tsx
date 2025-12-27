"use client"

import { LottieAnimation } from "@/components/lottie-animation"
import aiBrainAnimation from "@/lib/animations/ai-brain.json"

export function ControlTheoryAnimation() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-white/10 blur-3xl rounded-full" />
      <div className="relative z-10 float-animation">
        <LottieAnimation animationData={aiBrainAnimation} className="w-full max-w-md mx-auto" />
      </div>
    </div>
  )
}
