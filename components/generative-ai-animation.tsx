"use client"

import { LottieAnimation } from "@/components/lottie-animation"
import networkPulseAnimation from "@/lib/animations/network-pulse.json"

export function GenerativeAIAnimation() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-highlight)]/20 blur-3xl rounded-full" />
      <div className="relative z-10 float-animation">
        <LottieAnimation animationData={networkPulseAnimation} className="w-full max-w-md mx-auto" />
      </div>
    </div>
  )
}
