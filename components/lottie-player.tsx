"use client"

import { useEffect, useRef } from "react"
import lottie, { type AnimationItem } from "lottie-web"

interface LottiePlayerProps {
  animationData: object
  loop?: boolean
  autoplay?: boolean
  className?: string
  speed?: number
}

export function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  speed = 1,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    })

    animationRef.current.setSpeed(speed)

    return () => {
      animationRef.current?.destroy()
    }
  }, [animationData, loop, autoplay, speed])

  return <div ref={containerRef} className={className} />
}
