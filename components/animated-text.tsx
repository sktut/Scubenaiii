"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.span>
  )
}

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypewriterText({ text, className = "", speed = 50 }: TypewriterTextProps) {
  const characters = text.split("")

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * (speed / 1000) }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: characters.length * (speed / 1000) }}
        className="inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}

interface GradientTextProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className = "", animate = true }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${animate ? "animate-gradient bg-[length:200%_auto]" : ""} ${className}`}
    >
      {children}
    </span>
  )
}
