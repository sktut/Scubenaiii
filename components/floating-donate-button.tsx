"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto show tooltip after 5 seconds
  useEffect(() => {
    if (isVisible && !dismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, dismissed])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="relative bg-card border border-border rounded-2xl p-4 shadow-2xl max-w-xs"
              >
                <button
                  onClick={() => {
                    setShowTooltip(false)
                    setDismissed(true)
                  }}
                  className="absolute -top-2 -right-2 p-1 bg-secondary rounded-full hover:bg-destructive/20 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Support Our Vision</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Be part of the AI revolution. Your contribution helps build the future.
                    </p>
                  </div>
                </div>
                {/* Arrow pointing to button */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <Link href="/scuben-ai-labs/labs/donate">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setShowTooltip(true)}
              className="relative group"
            >
              {/* Pulse rings */}
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <span
                className="absolute inset-0 rounded-full bg-primary/20 animate-ping"
                style={{ animationDelay: "0.5s" }}
              />

              {/* Button */}
              <span className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40">
                <Heart className="w-6 h-6 lg:w-7 lg:h-7 text-primary-foreground group-hover:scale-110 transition-transform" />
              </span>

              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl transition-all duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
