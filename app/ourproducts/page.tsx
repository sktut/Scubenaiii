"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import {Footer} from "@/components/footer"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import TargetAudience from "@/components/target-audience"
import CTA from "@/components/cta"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light")
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <TargetAudience />
      <CTA />
      <Footer />
    </main>
  )
}
