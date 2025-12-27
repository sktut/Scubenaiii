"use client"

import { motion } from "framer-motion"
import { Shield, Brain, Cloud, Lock, Eye, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const solutions = [
  {
    icon: Shield,
    title: "AI-Powered Security",
    description: "Advanced machine learning algorithms that detect and neutralize threats in real-time.",
    id: "ai-security",
  },
  {
    icon: Eye,
    title: "Threat Detection",
    description: "24/7 monitoring with predictive analytics to identify vulnerabilities before they're exploited.",
    id: "threat-detection",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Comprehensive protection for your cloud infrastructure and data assets.",
    id: "cloud-security",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "Military-grade encryption protocols to secure your sensitive information.",
    id: "encryption",
  },
  {
    icon: Brain,
    title: "ML Systems",
    description: "Custom AI/ML system architecture for intelligent automation and security.",
    id: "ml-systems",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Automated incident response with sub-second threat mitigation.",
    id: "response",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Comprehensive Security Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our collection of tech services spans various needs at every stage of the digital transformation process.
            Explore how we help businesses transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <solution.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-0.5 bg-gradient-to-r from-primary to-accent mt-6"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
