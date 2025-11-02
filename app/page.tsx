"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl transform transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="mb-8 animate-slide-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 font-light">
            Have questions or need assistance? Reach out to us and we will be delighted to help.
          </p>
        </div>

        <div className="mt-12 animate-glow">
          <div className="relative bg-card/50 backdrop-blur-md border border-primary/30 rounded-2xl p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-20">
              <p className="text-foreground/70 text-base sm:text-lg mb-6">
                For any queries, inquiries, or collaborations:
              </p>

              <Link
                href="https://www.opulencebyte.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <div className="relative px-8 py-4 bg-background rounded-lg">
                    <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                      www.opulencebyte.com
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-8 flex justify-center gap-2">
                <span
                  className="inline-block w-2 h-2 bg-accent/50 rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="inline-block w-2 h-2 bg-accent/50 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="inline-block w-2 h-2 bg-accent/50 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-foreground/60 text-sm sm:text-base">Response time: Usually within 24 hours</p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-50 animate-pulse-ring" />
              <div className="relative w-3 h-3 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-accent to-transparent" />
      <div className="absolute bottom-0 right-0 w-1 h-24 bg-gradient-to-t from-primary to-transparent" />
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent" />
    </div>
  )
}
