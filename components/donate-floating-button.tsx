"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

export function DonateFloatingButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/scuben-ai-labs/labs/donate"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary animate-ping opacity-20" />

        {/* Main button */}
        <div className="relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
          <Heart
            className={`w-5 h-5 text-accent-foreground transition-transform duration-300 ${
              isHovered ? "scale-125 fill-accent-foreground" : ""
            }`}
          />
          <span className="text-accent-foreground font-semibold text-sm whitespace-nowrap">Donate Now</span>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 w-64 p-3 bg-card border border-accent/30 rounded-lg shadow-xl transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <p className="text-xs text-muted-foreground">
            Support the future of AI innovation. Your contribution powers groundbreaking research.
          </p>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-card border-r border-b border-accent/30" />
        </div>
      </div>
    </Link>
  )
}
