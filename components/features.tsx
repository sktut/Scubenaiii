"use client"

import { useEffect, useState } from "react"
import { Brain, Network, BarChart3, Bell, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Driven Attack Prediction",
    description:
      "Machine Learning models analyze attacker behavior and predict attack types, escalation probability, and possible targets.",
  },
  {
    icon: Network,
    title: "Full-Scale Deception Network",
    description:
      "Distributed honeypot environment mimicking Windows, Linux, databases, cloud services, and corporate systems.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Attack Dashboard",
    description:
      "Intuitive dashboard showing live attacks, origins, protocols, classifications, and attacker movement timelines.",
  },
  {
    icon: Bell,
    title: "Automated Alerts & Reports",
    description: "Instant notifications via Slack, Email, Teams, SMS, and SIEM integration with custom severity rules.",
  },
  {
    icon: Shield,
    title: "Zero-Risk Deployment",
    description: "Isolated from production systems. Deploy on-premise or cloud with simple API integration.",
  },
  {
    icon: Zap,
    title: "Threat Intelligence Feed",
    description: "Daily threat summaries, top attackers, trending vectors, and industry-specific insights.",
  },
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="absolute top-0 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Powerful Features for Modern Security</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to defend your enterprise against evolving threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-border bg-card hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
