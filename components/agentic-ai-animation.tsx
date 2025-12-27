"use client"

import { LottieAnimation } from "@/components/lottie-animation"
import robotWaveAnimation from "@/lib/animations/robot-wave.json"

export function AgenticAIAnimation() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-highlight)]/20 to-[var(--color-accent)]/20 blur-3xl rounded-full" />
      <div className="relative z-10 float-animation">
        <LottieAnimation animationData={robotWaveAnimation} className="w-full max-w-md mx-auto" />
      </div>
    </div>
  )
}
