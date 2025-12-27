"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Heart,
  Star,
  Crown,
  Rocket,
  Check,
  Sparkles,
  ArrowRight,
  Users,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { DonateSuccessModal } from "@/components/donate-success-modal"

const donationTiers = [
  {
    id: "supporter",
    name: "Supporter",
    amount: 50,
    icon: Heart,
    color: "teal",
    benefits: [
      "Recognition on our supporters wall",
      "Quarterly newsletter with research updates",
      "Early access to public demos",
    ],
  },
  {
    id: "pioneer",
    name: "Pioneer",
    amount: 500,
    icon: Star,
    color: "gold",
    popular: true,
    benefits: [
      "All Supporter benefits",
      "Monthly research briefings",
      "Exclusive Discord community access",
      "Name listed in research papers",
    ],
  },
  {
    id: "visionary",
    name: "Visionary",
    amount: 2500,
    icon: Crown,
    color: "teal",
    benefits: [
      "All Pioneer benefits",
      "Quarterly calls with research team",
      "Early access to new research",
      "Recognition as Founding Supporter",
      "Input on research priorities",
    ],
  },
  {
    id: "founder",
    name: "Founder",
    amount: 10000,
    icon: Rocket,
    color: "gold",
    benefits: [
      "All Visionary benefits",
      "Equity participation options",
      "Board observer status",
      "Named research initiative",
      "Direct line to leadership",
      "Exclusive founder events",
    ],
  },
]

const impactStats = [
  { value: "12", label: "Research Papers", description: "Published annually" },
  { value: "50+", label: "AI Models", description: "In development" },
  { value: "100%", label: "Transparency", description: "Open research process" },
  { value: "∞", label: "Potential", description: "Unlimited possibilities" },
]

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>("pioneer")
  const [customAmount, setCustomAmount] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleDonate = () => {
    const amount = selectedTier
      ? donationTiers.find((t) => t.id === selectedTier)?.amount || 0
      : Number(customAmount) || 0
    if (amount < 1) return

    // Open Razorpay checkout
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)

    const options = {
      key: "rzp_live_Rp9X2zUxOXRLaQ",
      amount: amount * 100,
      currency: "INR",
      name: "ScubenAI Labs",
      description: "Donation to ScubenAI Labs",
      handler: function (response: any) {
        setShowSuccess(true)
      },
      prefill: { name: "", email: "" },
      theme: { color: "#0ea5e9" },
    }

    // @ts-ignore
    const rzp = new (window as any).Razorpay(options)
    rzp.open()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/scuben-ai-labs/labs"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Labs</span>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)]/10 rounded-full border border-[var(--color-highlight)]/30 mb-6">
              <Heart className="w-4 h-4 text-[var(--color-highlight)]" />
              <span className="text-[var(--color-highlight)] text-sm font-medium">
                Join the Future Billionaire Project
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-6">
              <span className="text-white">Your Contribution</span>
              <br />
              <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-highlight)] to-[var(--color-accent)] bg-clip-text text-transparent">
                Shapes the Future
              </span>
            </h1>

            <p className="text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
              Every breakthrough in AI started with believers who invested early. Join visionary supporters who
              understand that today's research is tomorrow's revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/20"
              >
                <div className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-white text-sm">{stat.label}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Choose Your Level"
            title="Become a Founding Contributor"
            subtitle="Select the tier that matches your vision. Every level includes exclusive benefits and recognition as a founding supporter of our mission."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {donationTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                  selectedTier === tier.id
                    ? tier.color === "teal"
                      ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/20"
                      : "bg-[var(--color-highlight)]/10 border-[var(--color-highlight)] shadow-lg shadow-[var(--color-highlight)]/20"
                    : "bg-[var(--color-card)] border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    tier.color === "teal" ? "bg-[var(--color-accent)]/20" : "bg-[var(--color-highlight)]/20"
                  }`}
                >
                  <tier.icon
                    className={`w-6 h-6 ${
                      tier.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div
                  className={`text-2xl font-bold mb-4 ${
                    tier.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                  }`}
                >
                  ${tier.amount.toLocaleString()}
                </div>

                <ul className="space-y-2">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          tier.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                        }`}
                      />
                      <span className="text-[var(--color-text-muted)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="text-center mb-4">
              <span className="text-[var(--color-text-muted)]">Or enter a custom amount</span>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedTier(null)
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 bg-[var(--color-card)] border border-[var(--color-accent)]/30 rounded-xl text-white placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
              <button
                onClick={handleDonate}
                className="px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-[var(--color-primary)] rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Donate
              </button>
            </div>
          </div>

          {/* Selected Tier CTA */}
          {selectedTier && (
            <div className="mt-8 text-center">
              <button
                onClick={handleDonate}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-[var(--color-primary)] rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                <span>Become a {donationTiers.find((t) => t.id === selectedTier)?.name}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Why Support Us"
            title="Your Investment in Tomorrow"
            subtitle="We're not just building technology—we're shaping the future of human-AI collaboration."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: TrendingUp,
                title: "Exponential Returns",
                description:
                  "AI is the fastest-growing sector. Early supporters in foundational research often see outsized returns.",
              },
              {
                icon: Users,
                title: "Join Visionaries",
                description:
                  "You'll be in the company of forward-thinking individuals who recognize paradigm shifts before they happen.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Our research aims to benefit humanity. Your contribution helps ensure AI develops safely and beneficially.",
              },
              {
                icon: Shield,
                title: "Legacy Building",
                description:
                  "Your name will be permanently associated with groundbreaking AI research and development.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/20"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    index % 2 === 0 ? "bg-[var(--color-accent)]/20" : "bg-[var(--color-highlight)]/20"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      index % 2 === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                    }`}
                  />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-highlight)]/10 border border-[var(--color-accent)]/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Sparkles className="w-10 h-10 text-[var(--color-highlight)] mb-4" />
                <h2 className="text-3xl font-bold font-[var(--font-heading)] mb-4">Transparency is Our Foundation</h2>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Every dollar you contribute is tracked and reported. We believe in radical transparency—you'll always
                  know exactly how your support is being used to advance AI research.
                </p>
                <ul className="space-y-3">
                  {[
                    "Quarterly financial reports to all contributors",
                    "Open research publications",
                    "Regular progress updates and roadmap sharing",
                    "Direct communication channels with leadership",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--color-card)] rounded-2xl border border-[var(--color-accent)]/30 p-6">
                <h4 className="font-semibold mb-4 text-[var(--color-accent)]">How Funds Are Allocated</h4>
                <div className="space-y-4">
                  {[
                    { label: "Research & Development", percent: 60, color: "accent" },
                    { label: "Talent & Team", percent: 25, color: "highlight" },
                    { label: "Infrastructure", percent: 10, color: "accent" },
                    { label: "Community & Outreach", percent: 5, color: "highlight" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[var(--color-text-muted)]">{item.label}</span>
                        <span
                          className={
                            item.color === "accent" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                          }
                        >
                          {item.percent}%
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--color-primary)] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.color === "accent" ? "bg-[var(--color-accent)]" : "bg-[var(--color-highlight)]"
                          }`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <DonateSuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  )
}
