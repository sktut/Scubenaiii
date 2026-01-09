"use client"

import { useEffect, useState } from "react"

export default function CTA() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Ready to Transform Your Security?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join enterprises worldwide using ScubenAI to detect and predict threats before they become attacks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://donate.scubenai.com", "_blank")}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 transform glow-cyan text-lg"
            >
              Start Your Free Trial
            </button>
            <button className="px-10 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-lg">
              Request a Demo
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Payment will be processed through our secure donation portal. Download file will be emailed to you
            immediately after payment.
          </p>
        </div>
      </div>
    </section>
  )
}
