"use client"

import { useEffect } from "react"

export function CustomCursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Optional: Add glow effect on cursor movement
      const cursor = document.documentElement.style
      cursor.setProperty("--mouse-x", `${e.clientX}px`)
      cursor.setProperty("--mouse-y", `${e.clientY}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return null
}
