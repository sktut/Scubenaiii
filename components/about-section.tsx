"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  "AI-powered threat detection and prevention",
  "Ethical and intelligent technology solutions",
  "Scalable digital transformation initiatives",
  "24/7 real-time security monitoring",
  "Custom AI/ML system architecture",
  "Secure IoT solutions and integration",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary uppercase tracking-wider">About ScubenAI</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Where Deep Tech Meets <span className="text-muted-foreground">Human Mindset</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ScubenAI is led by a dedicated team focused on AI-powered innovation, digital solutions, and cybersecurity
              under strategic guidance. Our mission emphasizes ethical and intelligent technologies for businesses of
              all scales.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We architect AI/ML systems and facilitate scalable digital transformation initiatives, helping
              organizations navigate the complex landscape of modern cybersecurity with cutting-edge solutions.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-accent/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-primary/30"
              />

              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">AI</div>
                  <div className="text-sm text-muted-foreground font-mono">SECURITY</div>
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute bottom-4 right-0 w-2 h-2 rounded-full bg-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
