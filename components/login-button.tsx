"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LoginButton({ variant = "default", size = "default", className = "" }) {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      asChild
    >
      <Link href="/login">
        <span className="flex items-center gap-2 relative whitespace-nowrap">
          {variant === "default" ? (
            <>
              Get&nbsp;Started
              <motion.div animate={{ x: isHovering ? 4 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </>
          ) : (
            "Log&nbsp;In"
          )}

          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-md bg-purple-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 0.5 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </span>
      </Link>
    </Button>
  )
}
