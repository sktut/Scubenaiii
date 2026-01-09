"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X, Heart, Sparkles, ArrowRight } from "lucide-react"
import { LottieAnimation } from "@/components/lottie-animation"
import successCheckAnimation from "@/lib/animations/success-check.json"

interface DonateSuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonateSuccessModal({ isOpen, onClose }: DonateSuccessModalProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 500)
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[var(--color-card)] rounded-3xl border border-[var(--color-accent)]/30 shadow-2xl animate-in zoom-in-95 fade-in duration-500">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-accent)]/20 transition-colors z-10"
        >
          <X className="w-5 h-5 text-[var(--color-text-muted)]" />
        </button>

        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[var(--color-accent)]/30 to-[var(--color-highlight)]/30 blur-3xl rounded-full" />
        </div>

        <div className="relative p-8 md:p-12 text-center">
          {/* Animation */}
          <div className="w-32 h-32 mx-auto mb-6">
            <LottieAnimation animationData={successCheckAnimation} loop={false} />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30 mb-4">
              <Heart className="w-4 h-4 text-[var(--color-accent)] fill-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] text-sm font-medium">Thank You!</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] mb-4">
              <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-highlight)] to-[var(--color-accent)] bg-clip-text text-transparent">
                You're Now Part of History
              </span>
            </h2>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-highlight)]/10 border border-[var(--color-accent)]/30 mb-6">
              <Sparkles className="w-8 h-8 text-[var(--color-highlight)] mx-auto mb-3" />
              <p className="text-lg text-white leading-relaxed">
                "You contributed for the{" "}
                <span className="text-[var(--color-highlight)] font-bold">Future Billionaire Project</span>, now you are
                also a part of it."
              </p>
              <p className="text-[var(--color-accent)] font-semibold mt-2">Thank You.</p>
            </div>

            <p className="text-[var(--color-text-muted)] mb-6">
              Your vision and trust in our mission mean everything. Together, we're building the autonomous intelligent
              systems that will define the next era of human progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scuben-ai-labs/labs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-[var(--color-primary)] rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
                onClick={onClose}
              >
                <span>Explore Labs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-accent)]/50 text-[var(--color-accent)] rounded-full font-semibold hover:bg-[var(--color-accent)]/10 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
                backgroundColor: i % 2 === 0 ? "var(--color-accent)" : "var(--color-highlight)",
                opacity: 0.3,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
