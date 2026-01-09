import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Eye,
  Brain,
  Hand,
  RefreshCw,
  Target,
  Workflow,
  Shield,
  Cog,
  Clock,
  Users,
  Zap,
  Network,
  BarChart,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { FeatureCard } from "@/components/feature-card"
import { AgenticAIAnimation } from "@/components/agentic-ai-animation"

const agentLoop = [
  {
    icon: Eye,
    title: "Perceive",
    description: "Observe the environment and gather information through sensors, APIs, or data streams",
  },
  {
    icon: Brain,
    title: "Reason",
    description: "Process observations, update internal models, and formulate plans using learned strategies",
  },
  {
    icon: Hand,
    title: "Act",
    description: "Execute decisions in the real world through tools, APIs, or physical actuators",
  },
  {
    icon: RefreshCw,
    title: "Learn",
    description: "Evaluate outcomes, update knowledge, and improve future decision-making",
  },
]

const coreCapabilities = [
  {
    icon: Target,
    title: "Goal-Oriented Behavior",
    description:
      "Agents pursue objectives autonomously, breaking complex goals into manageable subtasks and adapting strategies as conditions change.",
  },
  {
    icon: Workflow,
    title: "Tool Use & Integration",
    description:
      "Modern agents can utilize external tools—search engines, calculators, databases, APIs—extending their capabilities far beyond their training.",
  },
  {
    icon: Shield,
    title: "Safety & Alignment",
    description:
      "Critical research ensures agents remain aligned with human values and operate within safe boundaries, even as they become more capable.",
  },
  {
    icon: Cog,
    title: "Self-Improvement",
    description:
      "Advanced agents can reflect on their own performance, identify weaknesses, and iteratively enhance their reasoning and action strategies.",
  },
]

const agentTypes = [
  { name: "ReAct Agents", description: "Interleave reasoning and acting for dynamic problem-solving" },
  { name: "Plan-and-Execute", description: "Create comprehensive plans before taking action" },
  { name: "Tree-of-Thought", description: "Explore multiple reasoning paths in parallel" },
  { name: "Multi-Agent Systems", description: "Coordinate multiple specialized agents for complex tasks" },
  { name: "Hierarchical Agents", description: "Decompose goals into subgoals with specialized sub-agents" },
  { name: "Reflexion Agents", description: "Learn from mistakes through self-reflection mechanisms" },
]

const industryApplications = [
  {
    icon: Users,
    title: "Customer Service",
    description: "Autonomous agents handling complex support queries end-to-end",
  },
  {
    icon: BarChart,
    title: "Financial Analysis",
    description: "Agents that research, analyze, and recommend investment strategies",
  },
  {
    icon: Network,
    title: "Operations",
    description: "Self-managing systems that optimize supply chains and logistics",
  },
  { icon: Zap, title: "Development", description: "AI that writes, tests, and deploys code autonomously" },
]

export default function AgenticAIPage() {
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
                <Bot className="w-4 h-4 text-[var(--color-highlight)]" />
                <span className="text-[var(--color-highlight)] text-sm font-medium">Research Lab 02</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-6">
                <span className="bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] bg-clip-text text-transparent">
                  Agentic AI
                </span>
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl">
                While generative AI creates, agentic AI{" "}
                <span className="text-[var(--color-highlight)] font-semibold">acts</span>. These autonomous systems
                perceive their environment, make decisions, take actions, and learn from outcomes— all without human
                intervention.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-highlight)]/30">
                  Autonomous Agents
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-highlight)]/30">
                  Tool Use
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-highlight)]/30">
                  Planning
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-highlight)]/30">
                  Memory Systems
                </span>
              </div>
            </div>

            <AgenticAIAnimation />
          </div>
        </div>
      </section>

      {/* The Agent Loop */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Core Concept"
            title="The Agent Loop"
            subtitle="At the heart of every agentic system is a continuous cycle: observe, think, act, and learn. This feedback loop enables increasingly sophisticated autonomous behavior."
          />

          <div className="mt-12">
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-highlight)] to-[var(--color-accent)] -translate-y-1/2 opacity-30" />

              <div className="grid md:grid-cols-4 gap-6 relative z-10">
                {agentLoop.map((step, index) => (
                  <div
                    key={step.title}
                    className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                        index % 2 === 0 ? "bg-[var(--color-accent)]/20" : "bg-[var(--color-highlight)]/20"
                      }`}
                    >
                      <step.icon
                        className={`w-7 h-7 ${
                          index % 2 === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Loop Indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                <RefreshCw
                  className="w-4 h-4 text-[var(--color-accent)] animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <span className="text-sm text-[var(--color-text-muted)]">Continuous cycle of improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Capabilities"
            title="What Makes Agents Powerful"
            subtitle="Agentic AI combines the creativity of generative models with the ability to take meaningful action in the real world."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {coreCapabilities.map((capability, index) => (
              <FeatureCard
                key={capability.title}
                icon={<capability.icon />}
                title={capability.title}
                description={capability.description}
                accentColor={index % 2 === 0 ? "gold" : "teal"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Agent Architectures"
            title="Types of Agentic Systems"
            subtitle="Different architectures excel at different tasks. Understanding these patterns is key to deploying effective autonomous systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {agentTypes.map((type, index) => (
              <div
                key={type.name}
                className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-highlight)]/20 hover:border-[var(--color-highlight)]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-highlight)] to-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold">{type.name}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Real-World Impact"
            title="Agents in Industry"
            subtitle="From customer service to code deployment, agentic AI is already transforming how businesses operate."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {industryApplications.map((app, index) => (
              <FeatureCard
                key={app.title}
                icon={<app.icon />}
                title={app.title}
                description={app.description}
                accentColor={index % 2 === 0 ? "teal" : "gold"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--color-highlight)]/10 to-[var(--color-accent)]/10 border border-[var(--color-highlight)]/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/20 rounded-full border border-[var(--color-accent)]/30 mb-4">
                  <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-[var(--color-accent)] text-sm font-medium">The Future is Autonomous</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-4">
                  Join Us in Building Autonomous Intelligence
                </h2>
                <p className="text-[var(--color-text-muted)] mb-6">
                  We're at the cusp of a paradigm shift. Agents that can work alongside humans, handle complex
                  multi-step tasks, and continuously improve themselves will define the next era of computing. Your
                  support accelerates this future.
                </p>
                <Link
                  href="/scuben-ai-labs/labs/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] text-[var(--color-primary)] rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                  <span>Fund Agentic Research</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-highlight)]/20 to-[var(--color-accent)]/20 blur-2xl rounded-full" />
                <div className="relative bg-[var(--color-card)] rounded-2xl border border-[var(--color-highlight)]/30 p-6">
                  <h4 className="font-semibold mb-4 text-[var(--color-highlight)]">Research Roadmap</h4>
                  <div className="space-y-3">
                    {[
                      { status: "complete", text: "Multi-tool agent framework" },
                      { status: "complete", text: "Memory and context systems" },
                      { status: "progress", text: "Multi-agent coordination" },
                      { status: "upcoming", text: "Real-world physical agents" },
                      { status: "upcoming", text: "Full autonomous operation" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            item.status === "complete"
                              ? "bg-[var(--color-success)]"
                              : item.status === "progress"
                                ? "bg-[var(--color-highlight)] animate-pulse"
                                : "bg-[var(--color-text-muted)]/30"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            item.status === "upcoming" ? "text-[var(--color-text-muted)]" : "text-white"
                          }`}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/scuben-ai-labs/labs/generative-ai"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Generative AI</span>
          </Link>
          <Link
            href="/scuben-ai-labs/labs/control-theory"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-highlight)] transition-colors font-medium"
          >
            <span>Next: Control Theory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
