"use client"

import { useState } from "react"
import { IntroScreen } from "@/components/intro-screen"
import { CustomCursor } from "@/components/custom-cursor"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { SolutionsSection } from "@/components/solutions-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { CookieConsent } from "@/components/cookie-consent"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      <CustomCursor />

      <div className={showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Header />

        <main>
          <HeroSection />
          <ClientsSection />
          <SolutionsSection />
          <AboutSection />
          <TeamSection />
          <ContactSection />
        </main>

        <Footer />
        <Chatbot />
        <CookieConsent />
      </div>
    </>
  )
}
