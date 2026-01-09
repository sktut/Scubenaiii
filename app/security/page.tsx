import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Vulnerabilities from "@/components/vulnerabilities"
import Report from "@/components/report"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { CosmicBackground } from "@/components/cosmic-background"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Cosmic background */}
        <CosmicBackground />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-10 animate-pulse animation-delay-4000"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Vulnerabilities />
        <Report />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
