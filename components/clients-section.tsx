"use client"

import { motion } from "framer-motion"

const clients = ["TechCorp", "SecureBank", "HealthPlus", "DataFlow", "CloudNine", "CyberShield"]

export function ClientsSection() {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-mono"
        >
          Trusted by leading companies worldwide
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
