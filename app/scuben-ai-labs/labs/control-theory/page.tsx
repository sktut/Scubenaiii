import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Gauge,
  Activity,
  GitBranch,
  Repeat,
  Settings,
  AlertTriangle,
  CheckCircle,
  Target,
  Compass,
  BarChart3,
  Cpu,
  Layers,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { FeatureCard } from "@/components/feature-card"
import { ControlTheoryAnimation } from "@/components/control-theory-animation"

const feedbackLoop = [
  { step: "Reference", description: "Desired state or goal (setpoint)", icon: Target },
  { step: "Error", description: "Difference between desired and actual", icon: AlertTriangle },
  { step: "Controller", description: "Computes corrective action", icon: Cpu },
  { step: "Plant", description: "The system being controlled", icon: Settings },
  { step: "Output", description: "Measured system response", icon: BarChart3 },
]

const controlConcepts = [
  {
    icon: Activity,
    title: "Stability",
    description:
      "Ensuring the system returns to equilibrium after disturbances—the foundation of reliable autonomous operation.",
  },
  {
    icon: GitBranch,
    title: "Controllability",
    description:
      "The ability to drive the system from any state to any other state using available inputs within finite time.",
  },
  {
    icon: Repeat,
    title: "Feedback",
    description:
      "Using output measurements to adjust inputs, enabling self-correction and adaptation to changing conditions.",
  },
  {
    icon: Compass,
    title: "Observability",
    description: "The capability to infer the complete internal state of a system from its outputs and inputs.",
  },
]

const controlTypes = [
  {
    name: "PID Control",
    description: "Proportional-Integral-Derivative: The workhorse of industrial control systems",
    color: "teal",
  },
  { name: "Model Predictive Control", description: "Optimizes future behavior using predictive models", color: "gold" },
  {
    name: "Adaptive Control",
    description: "Self-adjusting parameters in response to changing dynamics",
    color: "teal",
  },
  { name: "Robust Control", description: "Maintains performance despite uncertainty and disturbances", color: "gold" },
  { name: "Optimal Control", description: "Minimizes cost functions over trajectories", color: "teal" },
  { name: "Neural Control", description: "Learning-based controllers using neural networks", color: "gold" },
]

const aiApplications = [
  {
    title: "Autonomous Vehicles",
    description: "Real-time control of steering, throttle, and brakes with safety guarantees",
  },
  { title: "Robot Manipulation", description: "Precise control of robotic arms for manufacturing and surgery" },
  { title: "Drone Swarms", description: "Coordinated control of multiple aerial vehicles" },
  { title: "HVAC Systems", description: "Energy-efficient building climate control" },
  { title: "Power Grid Stability", description: "Balancing supply and demand in electrical networks" },
  { title: "AI Training", description: "Controlling hyperparameters and training dynamics" },
]

export default function ControlTheoryPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/30 mb-6">
                <Gauge className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] text-sm font-medium">Research Lab 03</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-6">
                <span className="bg-gradient-to-r from-[var(--color-accent)] to-white bg-clip-text text-transparent">
                  Control Theory
                </span>
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl">
                The mathematical backbone of autonomous systems. Control theory provides the rigorous framework for
                ensuring AI systems remain <span className="text-[var(--color-accent)] font-semibold">stable</span>,
                <span className="text-[var(--color-highlight)] font-semibold"> predictable</span>, and
                <span className="text-white font-semibold"> safe</span> in real-world deployments.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  Stability Analysis
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  Feedback Systems
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  State Estimation
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  Optimal Control
                </span>
              </div>
            </div>

            <ControlTheoryAnimation />
          </div>
        </div>
      </section>

      {/* Feedback Loop Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Fundamental Concept"
            title="The Feedback Loop"
            subtitle="At the heart of control theory is the closed-loop system: continuously measuring outputs and adjusting inputs to achieve desired behavior."
          />

          <div className="mt-12">
            {/* Visual Feedback Loop */}
            <div className="relative p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/30">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-2">
                {feedbackLoop.map((item, index) => (
                  <div key={item.step} className="flex items-center">
                    <div className="flex flex-col items-center p-4 min-w-[120px]">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                          index % 2 === 0 ? "bg-[var(--color-accent)]/20" : "bg-[var(--color-highlight)]/20"
                        }`}
                      >
                        <item.icon
                          className={`w-6 h-6 ${
                            index % 2 === 0 ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                          }`}
                        />
                      </div>
                      <div className="text-sm font-semibold text-center">{item.step}</div>
                      <div className="text-xs text-[var(--color-text-muted)] text-center mt-1">{item.description}</div>
                    </div>
                    {index < feedbackLoop.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-[var(--color-accent)] hidden md:block" />
                    )}
                  </div>
                ))}
              </div>

              {/* Loop Back Arrow */}
              <div className="hidden md:flex absolute -bottom-4 left-1/2 transform -translate-x-1/2 items-center gap-2 px-4 py-2 bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                <Repeat className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-xs text-[var(--color-text-muted)]">Continuous Loop</span>
              </div>
            </div>

            {/* Mathematical Representation */}
            <div className="mt-8 p-6 rounded-xl bg-[var(--color-primary)] border border-[var(--color-accent)]/20 text-center">
              <p className="text-[var(--color-text-muted)] text-sm mb-2">The Classic Control Equation</p>
              <div className="text-2xl md:text-3xl font-mono text-[var(--color-accent)]">
                u(t) = Kp·e(t) + Ki·∫e(τ)dτ + Kd·de(t)/dt
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">
                PID Controller: Proportional + Integral + Derivative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Core Principles"
            title="The Pillars of Control Theory"
            subtitle="These fundamental concepts form the foundation for designing systems that behave predictably and safely."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {controlConcepts.map((concept, index) => (
              <FeatureCard
                key={concept.title}
                icon={<concept.icon />}
                title={concept.title}
                description={concept.description}
                accentColor={index % 2 === 0 ? "teal" : "gold"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Control Strategies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Control Strategies"
            title="Modern Control Approaches"
            subtitle="From classical PID to learning-based methods, control engineers have developed diverse tools for different challenges."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {controlTypes.map((type) => (
              <div
                key={type.name}
                className={`p-6 rounded-2xl bg-[var(--color-card)] border ${
                  type.color === "teal"
                    ? "border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]"
                    : "border-[var(--color-highlight)]/30 hover:border-[var(--color-highlight)]"
                } transition-all hover:-translate-y-1`}
              >
                <h3
                  className={`font-bold mb-2 ${
                    type.color === "teal" ? "text-[var(--color-accent)]" : "text-[var(--color-highlight)]"
                  }`}
                >
                  {type.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Applications"
            title="Control Theory Meets AI"
            subtitle="Every autonomous system—from self-driving cars to robot surgeons—relies on control theory principles."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {aiApplications.map((app, index) => (
              <div
                key={app.title}
                className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="font-semibold">{app.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-highlight)]/10 border border-[var(--color-accent)]/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)]/20 rounded-full border border-[var(--color-highlight)]/30 mb-4">
                  <Layers className="w-4 h-4 text-[var(--color-highlight)]" />
                  <span className="text-[var(--color-highlight)] text-sm font-medium">Critical Infrastructure</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-4">
                  Control Theory: The Silent Guardian of AI Safety
                </h2>
                <p className="text-[var(--color-text-muted)] mb-6">
                  As AI systems take on more critical roles—from medical devices to power grids—control theory provides
                  the mathematical guarantees we need. It's not enough for AI to be intelligent; it must be provably
                  safe and stable.
                </p>
                <Link
                  href="/scuben-ai-labs/labs/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-[var(--color-primary)] rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                  <span>Support Safety Research</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                    <span className="font-medium">Proven Mathematical Foundations</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                    <span className="font-medium">Decades of Real-World Validation</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                    <span className="font-medium">Formal Safety Guarantees</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--color-success)]" />
                    <span className="font-medium">Critical for AI Alignment</span>
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
            href="/scuben-ai-labs/labs/agentic-ai"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Agentic AI</span>
          </Link>
          <Link
            href="/scuben-ai-labs/labs/demos"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-highlight)] transition-colors font-medium"
          >
            <span>Next: Live Demos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
