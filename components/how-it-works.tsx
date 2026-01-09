"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Deploy Sensors",
    description: "Deploy honeypot sensors across your network infrastructure",
  },
  {
    number: "02",
    title: "Mimic Services",
    description: "Sensors imitate real services and attract attackers",
  },
  {
    number: "03",
    title: "Log Intrusions",
    description: "All intrusions are logged into a central collector",
  },
  {
    number: "04",
    title: "AI Analysis",
    description: "ML model processes logs and predicts attack intent",
  },
  {
    number: "05",
    title: "Real-Time Display",
    description: "Dashboard displays threat levels in real-time",
  },
  {
    number: "06",
    title: "Auto Alerts",
    description: "Alerts and reports are generated automatically",
  },
]

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six simple steps to enterprise-grade threat detection and prediction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="group">
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-16 text-primary/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
