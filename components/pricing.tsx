"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "₹19,999",
    period: "/month",
    description: "Perfect for small companies",
    features: [
      "Up to 5 honeypot sensors",
      "Basic threat detection",
      "Email alerts",
      "Monthly reports",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "₹49,999",
    period: "/month",
    description: "Ideal for mid-size enterprises",
    features: [
      "Unlimited honeypot sensors",
      "Advanced ML-based detection",
      "Slack & Teams integration",
      "Weekly threat intelligence",
      "API access",
      "Priority support",
      "Custom dashboards",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For banks, government & large enterprises",
    features: [
      "Everything in Pro +",
      "Dedicated infrastructure",
      "Custom AI model training",
      "SOC automation",
      "SIEM integration",
      "On-premise deployment",
      "24/7 dedicated support",
    ],
  },
]

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Flexible Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${plan.featured ? "md:scale-105 md:z-10" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-full rounded-xl border transition-all duration-300 p-8 ${
                  plan.featured
                    ? "border-primary bg-primary/5 shadow-2xl shadow-primary/20 glow-cyan"
                    : "border-border bg-card hover:border-primary hover:shadow-lg"
                }`}
              >
                {plan.featured && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                </div>

                <button
                  onClick={() => window.open("https://donate.scubenai.com", "_blank")}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transform"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
