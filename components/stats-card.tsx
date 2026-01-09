"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  index?: number
}

export function StatsCard({
  icon: Icon,
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  index = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">LIVE</div>
        </div>

        <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
          <AnimatedCounter end={value} prefix={prefix} suffix={suffix} duration={2.5} />
        </div>

        <div className="text-lg font-medium text-foreground mb-1">{label}</div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
    </motion.div>
  )
}
