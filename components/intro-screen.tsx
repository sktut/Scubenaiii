"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 3500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated background circles */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.3, 0.1] }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.2, 0.1] }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="absolute w-[300px] h-[300px] rounded-full bg-accent/20 blur-2xl"
            />

            {/* Main logo text */}
            <motion.div className="relative z-10 flex items-center gap-1">
              {"ScubenAI".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                  style={{
                    display: "inline-block",
                    textShadow: "0 0 40px rgba(var(--primary), 0.5)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground font-mono tracking-wider"
            >
              SECURING THE FUTURE WITH AI
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="mt-8 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            />

            {/* Scanning line effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: 2, delay: 0.5 }}
              className="absolute inset-0 overflow-hidden"
            >
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ duration: 1.5, repeat: 2, delay: 0.5 }}
                className="w-full h-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
              />
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
