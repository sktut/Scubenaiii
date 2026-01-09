import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Lightbulb,
  Target,
} from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { FeatureCard } from "@/components/feature-card"
import { GenerativeAIAnimation } from "@/components/generative-ai-animation"

const capabilities = [
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Understanding and generating human language with unprecedented fluency and context awareness.",
  },
  {
    icon: ImageIcon,
    title: "Image Synthesis",
    description: "Creating photorealistic images, art, and designs from textual descriptions or other inputs.",
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Writing, completing, and debugging code across hundreds of programming languages.",
  },
  {
    icon: Music,
    title: "Audio & Music",
    description: "Composing music, generating speech, and creating immersive audio experiences.",
  },
]

const architectureComponents = [
  {
    icon: Layers,
    title: "Transformer Architecture",
    description:
      "The backbone of modern generative AI, using self-attention mechanisms to process sequential data with remarkable efficiency and scalability.",
  },
  {
    icon: Cpu,
    title: "Neural Network Layers",
    description:
      "Deep layers of interconnected neurons that progressively learn abstract representations from raw data.",
  },
  {
    icon: Database,
    title: "Training Data",
    description:
      "Massive datasets containing billions of examples that teach the model patterns, relationships, and structures.",
  },
  {
    icon: Lightbulb,
    title: "Attention Mechanism",
    description:
      "The revolutionary technique allowing models to focus on relevant parts of input when generating each output token.",
  },
]

const useCases = [
  { title: "Content Creation", description: "Automating blog posts, marketing copy, and creative writing at scale" },
  {
    title: "Customer Service",
    description: "24/7 intelligent chatbots that handle complex queries with human-like understanding",
  },
  {
    title: "Research Acceleration",
    description: "Summarizing papers, generating hypotheses, and accelerating scientific discovery",
  },
  {
    title: "Personalized Education",
    description: "Adaptive learning systems that tailor content to individual student needs",
  },
  { title: "Drug Discovery", description: "Generating novel molecular structures for pharmaceutical research" },
  { title: "Design & Creativity", description: "Assisting artists and designers with ideation and iteration" },
]

export default function GenerativeAIPage() {
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
                <Brain className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] text-sm font-medium">Research Lab 01</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] leading-tight mb-6">
                <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent">
                  Generative AI
                </span>
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl">
                Generative AI represents one of humanity's greatest achievements: machines that don't just analyze—they
                <span className="text-[var(--color-accent)] font-semibold"> create</span>. From composing symphonies to
                writing code, these systems are redefining what's possible.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  LLMs
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  Diffusion Models
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  GANs
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  Transformers
                </span>
                <span className="px-3 py-1 text-sm bg-[var(--color-card)] rounded-full border border-[var(--color-accent)]/30">
                  Autoregressive
                </span>
              </div>
            </div>

            <GenerativeAIAnimation />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="The Science"
            title="How Generative AI Works"
            subtitle="At its core, generative AI learns the underlying probability distribution of training data, then samples from this distribution to create new, original content."
          />

          <div className="mt-12 space-y-12">
            {/* Process Flow */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Data Ingestion", desc: "Billions of examples are fed into the system" },
                { step: "02", title: "Pattern Learning", desc: "Neural networks identify statistical patterns" },
                {
                  step: "03",
                  title: "Probability Modeling",
                  desc: "The model builds a distribution over possible outputs",
                },
                { step: "04", title: "Generation", desc: "New content is sampled from learned distributions" },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/30 h-full">
                    <div className="text-4xl font-bold text-[var(--color-accent)]/30 mb-2">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-highlight)]/10 border border-[var(--color-accent)]/30">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-[var(--color-highlight)] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">The Magic of Next-Token Prediction</h3>
                  <p className="text-[var(--color-text-muted)]">
                    Large Language Models achieve their remarkable capabilities through a deceptively simple objective:
                    predict the next token. By training on trillions of tokens and optimizing this single task, the
                    model implicitly learns grammar, facts, reasoning, and even creativity. The emergent behaviors that
                    arise from scale continue to surprise researchers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Architecture"
            title="Inside the Neural Network"
            subtitle="Understanding the building blocks that enable machines to generate human-like content."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {architectureComponents.map((component, index) => (
              <FeatureCard
                key={component.title}
                icon={<component.icon />}
                title={component.title}
                description={component.description}
                accentColor={index % 2 === 0 ? "teal" : "gold"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Capabilities"
            title="What Generative AI Can Create"
            subtitle="From words to worlds, these systems are redefining the boundaries of machine creativity."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {capabilities.map((capability, index) => (
              <FeatureCard
                key={capability.title}
                icon={<capability.icon />}
                title={capability.title}
                description={capability.description}
                accentColor={index % 2 === 0 ? "teal" : "gold"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Market Impact"
            title="Transforming Every Industry"
            subtitle="Generative AI isn't a niche technology—it's reshaping how every sector operates and creates value."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  <h3 className="font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-light)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-highlight)]/10 border border-[var(--color-accent)]/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)]/20 rounded-full border border-[var(--color-highlight)]/30 mb-4">
                  <Target className="w-4 h-4 text-[var(--color-highlight)]" />
                  <span className="text-[var(--color-highlight)] text-sm font-medium">Investment Opportunity</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-4">
                  Be Part of the Generative AI Revolution
                </h2>
                <p className="text-[var(--color-text-muted)] mb-6">
                  The generative AI market is projected to reach $1.3 trillion by 2032. Early investors in foundational
                  AI research are positioning themselves at the forefront of the greatest technological shift since the
                  internet.
                </p>
                <Link
                  href="/scuben-ai-labs/labs/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-[var(--color-primary)] rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                  <span>Support Our Research</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20 text-center">
                  <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">$1.3T</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Market by 2032</div>
                </div>
                <div className="p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20 text-center">
                  <div className="text-3xl font-bold text-[var(--color-highlight)] mb-1">47%</div>
                  <div className="text-sm text-[var(--color-text-muted)]">CAGR Growth</div>
                </div>
                <div className="p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20 text-center">
                  <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">85%</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Enterprise Adoption</div>
                </div>
                <div className="p-6 rounded-xl bg-[var(--color-card)] border border-[var(--color-accent)]/20 text-center">
                  <div className="text-3xl font-bold text-[var(--color-highlight)] mb-1">∞</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Possibilities</div>
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
            href="/scuben-ai-labs/labs"
            className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Labs Home</span>
          </Link>
          <Link
            href="/scuben-ai-labs/labs/agentic-ai"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-highlight)] transition-colors font-medium"
          >
            <span>Next: Agentic AI</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
