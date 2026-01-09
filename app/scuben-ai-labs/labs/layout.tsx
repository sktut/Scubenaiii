import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { DonateFloatingButton } from "@/components/donate-floating-button"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <DonateFloatingButton />
    </div>
  )
}
