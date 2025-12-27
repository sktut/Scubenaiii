"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${className}`}>{children}</div>
}

interface BentoCardProps {
  children: ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
  gradient?: boolean
  index?: number
}

export function BentoCard({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  gradient = false,
  index = 0,
}: BentoCardProps) {
  const colSpanClasses = {
    1: "",
    2: "md:col-span-2",
    3: "lg:col-span-3",
  }

  const rowSpanClasses = {
    1: "",
    2: "md:row-span-2",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl border border-border bg-card p-6 lg:p-8 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}`}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
