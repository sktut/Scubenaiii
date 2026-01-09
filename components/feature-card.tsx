"use client"

import React from "react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accentColor?: "primary" | "accent" | "teal" | "gold"
  index?: number
}

export function FeatureCard({ icon, title, description, accentColor = "primary", index = 0 }: FeatureCardProps) {
  const colors = {
    primary: {
      iconBg: "bg-[var(--color-accent)]/10",
      iconColor: "text-[var(--color-accent)]",
      border: "border-[var(--color-accent)]/20",
      hoverBorder: "hover:border-[var(--color-accent)]/50",
      glow: "group-hover:shadow-[var(--color-accent)]/20",
    },
    accent: {
      iconBg: "bg-[var(--color-highlight)]/10",
      iconColor: "text-[var(--color-highlight)]",
      border: "border-[var(--color-highlight)]/20",
      hoverBorder: "hover:border-[var(--color-highlight)]/50",
      glow: "group-hover:shadow-[var(--color-highlight)]/20",
    },
    teal: {
      iconBg: "bg-[var(--color-accent)]/10",
      iconColor: "text-[var(--color-accent)]",
      border: "border-[var(--color-accent)]/20",
      hoverBorder: "hover:border-[var(--color-accent)]/50",
      glow: "group-hover:shadow-[var(--color-accent)]/20",
    },
    gold: {
      iconBg: "bg-[var(--color-highlight)]/10",
      iconColor: "text-[var(--color-highlight)]",
      border: "border-[var(--color-highlight)]/20",
      hoverBorder: "hover:border-[var(--color-highlight)]/50",
      glow: "group-hover:shadow-[var(--color-highlight)]/20",
    },
  }

  const c = colors[accentColor] || colors.primary

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative p-6 lg:p-8 rounded-2xl bg-[var(--color-card)] border ${c.border} ${c.hoverBorder} transition-all duration-300 hover:shadow-xl ${c.glow} overflow-hidden`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-highlight)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className={`w-14 h-14 rounded-xl ${c.iconBg} flex items-center justify-center mb-5`}
        >
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement, {
                className: `w-7 h-7 ${c.iconColor} ${
                  (icon as any).props?.className ? (icon as any).props.className : ""
                }`,
              })
            : icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-muted)] leading-relaxed">{description}</p>
      </div>

      {/* Corner accent */}
      <div
        className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${c.iconBg} blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
      />
    </motion.div>
  )
}
