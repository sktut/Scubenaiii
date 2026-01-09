"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  badge?: string
  badgeIcon?: ReactNode
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ badge, badgeIcon, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6`}
        >
          {badgeIcon}
          <span className="text-primary text-sm font-medium">{badge}</span>
        </motion.div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
        <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
