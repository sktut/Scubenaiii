"use client"

import { useEffect, useState } from "react"
import { Building2, Landmark, ShoppingCart, BarChart3, Heart } from "lucide-react"

const audiences = [
  { icon: BarChart3, label: "Tech Companies" },
  { icon: Building2, label: "FinTech & Banks" },
  { icon: ShoppingCart, label: "SaaS Platforms" },
  { icon: Building2, label: "E-commerce" },
  { icon: Landmark, label: "Government" },
  { icon: Heart, label: "Healthcare" },
]

export default function TargetAudience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Built for Every Industry</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect for organizations with sensitive data that need early detection and predictive defense
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div
                key={index}
                className={`group transform transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center cursor-pointer">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm font-semibold text-balance">{audience.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
