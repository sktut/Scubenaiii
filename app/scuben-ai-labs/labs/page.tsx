"use client"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  Bot,
  Gauge,
  Play,
  Rocket,
  Users,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Globe,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { FeatureCard } from "@/components/feature-card"
import { StatCard } from "@/components/stat-card"
import { HeroAnimation } from "@/components/hero-animation"

const labCards = [
  {
    title: "Generative AI",
    href: "/scuben-ai-labs/labs/generative-ai",
    description: "Deep dive into the architecture of creative machines that generate text, images, code, and beyond.",
    icon: Brain,
    color: "teal" as const,
  },
  {
    title: "Agentic AI",
    href: "/scuben-ai-labs/labs/agentic-ai",
    description: "Explore autonomous systems that perceive, decide, and act independently to achieve complex goals.",
    icon: Bot,
    color: "gold" as const,
  },
  {
    title: "Control Theory",
    href: "/scuben-ai-labs/labs/control-theory",
    description: "Master the mathematical foundations that enable stable, adaptive, and self-correcting AI systems.",
    icon: Gauge,
    color: "teal" as const,
  },
  {
    title: "Live Demos",
    href: "/scuben-ai-labs/labs/demos",
    description: "Interactive demonstrations of AI in action. See theory transform into tangible intelligence.",
    icon: Play,
    color: "gold" as const,
  },
]

const investorStats = [
  { value: "$2.5T", label: "AI Market by 2030", description: "Projected global AI market size" },
  { value: "42%", label: "Annual Growth", description: "AI industry compound growth rate" },
  { value: "500M+", label: "Jobs Transformed", description: "Roles enhanced by AI by 2030" },
  { value: "10x", label: "Productivity Boost", description: "Average efficiency gains with AI" },
]

const visionPoints = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We build AI systems with surgical precision, ensuring every algorithm serves a purpose.",
  },
  {
    icon: Zap,
    title: "Rapid Innovation",
    description: "From concept to deployment in record time, we accelerate the AI development lifecycle.",
  },
  {
    icon: Shield,
    title: "Ethical Foundation",
    description: "Safety and responsibility are core to every system we create. AI for humanity's benefit.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our technology scales to solve problems affecting billions of people worldwide.",
  },
]

export default function LabsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30 mb-6">
                <Rocket className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] text-sm font-medium">The Future is Autonomous</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-6">
                <span className="text-white">Welcome to</span>
                <br />
                <span className="bg-gradient-to-r from-[var(--color-accent)] via-[#6366f1] to-[var(--color-highlight)] bg-clip-text text-transparent">
                  ScubenAI Labs
                </span>
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl">
                A curated knowledge portal where intelligence meets innovation. We're pioneering the convergence of{" "}
                <span className="text-[var(--color-accent)] font-semibold">Generative AI</span>,{" "}
                <span className="text-[var(--color-highlight)] font-semibold">Agentic Systems</span>, and{" "}
                <span className="text-white font-semibold">Control Theory</span> to build the autonomous systems of
                tomorrow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/scuben-ai-labs/labs/generative-ai"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-[var(--color-primary)] rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                  <span>Explore Labs</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/scuben-ai-labs/labs/donate"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-full font-semibold hover:bg-[var(--color-accent)]/10 transition-all"
                >
                  <span>Invest in the Future</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Investor Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Why AI?"
            title="The Trillion Dollar Opportunity"
            subtitle="Artificial Intelligence isn't just technology—it's the most transformative force of our generation. Early investors in AI infrastructure stand to capture exponential returns."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {investorStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Lab Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Knowledge Portal"
            title="Explore Our Research Domains"
            subtitle="Each lab represents years of research distilled into accessible, actionable knowledge. From foundational theory to cutting-edge implementation."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {labCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group p-8 rounded-2xl bg-[var(--color-card)] border ${
                  card.color === "teal"
                    ? "border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]"
                    : "border-[var(--color-highlight)]/30 hover:border-[var(--color-highlight)]"
                } transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${
                    card.color === "teal" ? "bg-[var(--color-accent)]/20" : "bg-[var(--color-highlight)]/20"
                  } flex items-center justify-center mb-6`}
                >
                  <card.icon
                    className={`w-7 h-7 ${
                      card.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {card.title}
                </h3>

                <p className="text-[var(--color-text-muted)] mb-6">{card.description}</p>

                <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium">
                  <span>Enter Lab</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Vision"
            title="Building Tomorrow's Intelligence Today"
            subtitle="We're not just researching AI—we're architecting the foundation of autonomous systems that will transform industries and improve lives globally."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {visionPoints.map((point, index) => (
              <FeatureCard
                key={point.title}
                icon={<point.icon />}
                title={point.title}
                description={point.description}
                accentColor={index % 2 === 0 ? "teal" : "gold"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* For Investors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)]/10 rounded-full border border-[var(--color-highlight)]/30 mb-6">
                <TrendingUp className="w-4 h-4 text-[var(--color-highlight)]" />
                <span className="text-[var(--color-highlight)] text-sm font-medium">For Visionary Investors</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-6">
                <span className="text-white">Be Part of the</span>
                <br />
                <span className="bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] bg-clip-text text-transparent">
                  Future Billionaire Project
                </span>
              </h2>

              <p className="text-[var(--color-text-muted)] mb-6 text-lg">
                Every technological revolution has created unprecedented wealth for those who recognized the opportunity
                early. The AI revolution is no different—except its scale is incomprehensibly larger.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <span className="text-[var(--color-text-muted)]">
                    <strong className="text-white">Direct Research Access:</strong> Get exclusive insights into our
                    breakthroughs before public release
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <span className="text-[var(--color-text-muted)]">
                    <strong className="text-white">Strategic Partnership:</strong> Early contributors become founding
                    partners in our commercialization efforts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <span className="text-[var(--color-text-muted)]">
                    <strong className="text-white">Legacy Building:</strong> Your name associated with groundbreaking AI
                    research and development
                  </span>
                </li>
              </ul>

              <Link
                href="/scuben-ai-labs/labs/donate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] text-[var(--color-primary)] rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[var(--color-highlight)]/30"
              >
                <span>Join the Revolution</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-highlight)]/20 blur-3xl" />
              <div className="relative bg-[var(--color-card)] rounded-2xl border border-[var(--color-accent)]/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-bold">Founding Circle Benefits</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[var(--color-primary)]/50 border border-[var(--color-accent)]/20">
                    <div className="text-[var(--color-highlight)] font-semibold mb-1">Pioneer Tier • $500+</div>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Quarterly research updates & early demo access
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--color-primary)]/50 border border-[var(--color-accent)]/20">
                    <div className="text-[var(--color-highlight)] font-semibold mb-1">Visionary Tier • $2,500+</div>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Monthly calls with research team & naming recognition
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--color-primary)]/50 border border-[var(--color-accent)]/20">
                    <div className="text-[var(--color-highlight)] font-semibold mb-1">Founder Tier • $10,000+</div>
                    <p className="text-sm text-[var(--color-text-muted)]">Equity options & board observer status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
