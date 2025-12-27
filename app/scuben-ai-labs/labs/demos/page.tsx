"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Play, Sparkles, Brain, Bot, Gauge, ExternalLink, Zap, Code, MessageSquare } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { DemoAnimation } from "@/components/demo-animation"

const demos = [
  {
    id: "text-generation",
    title: "Text Generation",
    description:
      "Watch a language model generate text token by token, revealing the probabilistic nature of AI creativity.",
    icon: MessageSquare,
    color: "teal",
    category: "Generative AI",
  },
  {
    id: "agent-planning",
    title: "Agent Planning",
    description: "Observe an AI agent break down complex tasks and execute multi-step plans with tool use.",
    icon: Bot,
    color: "gold",
    category: "Agentic AI",
  },
  {
    id: "feedback-control",
    title: "Feedback Controller",
    description: "Interactive simulation showing how PID controllers stabilize dynamic systems in real-time.",
    icon: Gauge,
    color: "teal",
    category: "Control Theory",
  },
  {
    id: "neural-network",
    title: "Neural Network Visualizer",
    description: "See inside a neural network as it processes information through layers of neurons.",
    icon: Brain,
    color: "gold",
    category: "Deep Learning",
  },
  {
    id: "code-assist",
    title: "Code Assistant",
    description: "Experience AI-powered code completion and generation in an interactive environment.",
    icon: Code,
    color: "teal",
    category: "Developer Tools",
  },
  {
    id: "optimization",
    title: "Optimization Landscape",
    description: "Visualize how gradient descent navigates complex loss landscapes to find optimal solutions.",
    icon: Zap,
    color: "gold",
    category: "Machine Learning",
  },
]

export default function DemosPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)]/10 rounded-full border border-[var(--color-highlight)]/30 mb-6">
                <Play className="w-4 h-4 text-[var(--color-highlight)]" />
                <span className="text-[var(--color-highlight)] text-sm font-medium">Interactive Experiences</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-6">
                <span className="bg-gradient-to-r from-[var(--color-highlight)] via-[var(--color-accent)] to-white bg-clip-text text-transparent">
                  Live Demos
                </span>
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl">
                Theory becomes tangible. Interact with AI systems in real-time. See
                <span className="text-[var(--color-accent)] font-semibold"> neural networks fire</span>,
                <span className="text-[var(--color-highlight)] font-semibold"> agents reason</span>, and
                <span className="text-white font-semibold"> controllers stabilize</span>—all in your browser.
              </p>

              <div className="p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/30">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-sm text-[var(--color-text-muted)]">
                    All demos run locally in your browser—no data leaves your device.
                  </span>
                </div>
              </div>
            </div>

            <DemoAnimation />
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Choose Your Demo"
            title="Interactive AI Demonstrations"
            subtitle="Click on any demo to explore AI concepts through hands-on interaction. Each demo is designed to illuminate key principles from our research labs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id === selectedDemo ? null : demo.id)}
                className={`text-left p-6 rounded-2xl bg-[var(--color-card)] border transition-all duration-300 hover:-translate-y-1 ${
                  selectedDemo === demo.id
                    ? demo.color === "teal"
                      ? "border-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/20"
                      : "border-[var(--color-highlight)] shadow-lg shadow-[var(--color-highlight)]/20"
                    : demo.color === "teal"
                      ? "border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]"
                      : "border-[var(--color-highlight)]/30 hover:border-[var(--color-highlight)]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      demo.color === "teal" ? "bg-[var(--color-accent)]/20" : "bg-[var(--color-highlight)]/20"
                    }`}
                  >
                    <demo.icon
                      className={`w-6 h-6 ${
                        demo.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      demo.color === "teal"
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        : "bg-[var(--color-highlight)]/10 text-[var(--color-highlight)]"
                    }`}
                  >
                    {demo.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{demo.description}</p>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <Play
                    className={`w-4 h-4 ${
                      demo.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                    }`}
                  />
                  <span
                    className={demo.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"}
                  >
                    {selectedDemo === demo.id ? "Running..." : "Launch Demo"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Preview Area */}
          {selectedDemo && (
            <div className="mt-12 p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/30">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
                  <span className="text-[var(--color-accent)] text-sm font-medium">Demo Active</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{demos.find((d) => d.id === selectedDemo)?.title}</h3>

                {/* Placeholder for actual demo content */}
                <div className="h-64 rounded-xl bg-[var(--color-primary)] border border-[var(--color-accent)]/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4 animate-pulse" />
                    <p className="text-[var(--color-text-muted)]">Interactive demo loading...</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-2">
                      Full demos available with research funding
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/scuben-ai-labs/labs/donate"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-highlight)] transition-colors"
                  >
                    <span>Support development of more demos</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--color-highlight)]/10 to-[var(--color-accent)]/10 border border-[var(--color-highlight)]/30 text-center">
            <Sparkles className="w-12 h-12 text-[var(--color-highlight)] mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-[var(--font-heading)] mb-4">More Demos Coming Soon</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto mb-6">
              We're actively developing new interactive demonstrations including multi-agent simulations, real-time
              control systems, and advanced neural network visualizers. Your support accelerates their release.
            </p>
            <Link
              href="/scuben-ai-labs/labs/donate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] text-[var(--color-primary)] rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              <span>Support Demo Development</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/scuben-ai-labs/labs/control-theory"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Control Theory</span>
          </Link>
          <Link
            href="/scuben-ai-labs/labs/donate"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-highlight)] transition-colors font-medium"
          >
            <span>Support Our Research</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
