"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github, Building } from "lucide-react"
import { Card } from "@/components/ui/card"

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Leadership & Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary behind ScubenAI{"'"}s mission to revolutionize cybersecurity with AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src="/images/sandeep.png"
                  alt="Founder - ScubenAI"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-sm font-mono text-primary uppercase tracking-wider">Founder & CEO</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">Sandeep</h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A visionary leader with a passion for AI-powered innovation and cybersecurity. Currently pursuing
                    Computer Science at KIIT DU, with expertise in software and web development, and certifications in
                    Python and web technologies.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Previously at SAIL - Steel Authority of India</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Tech Intern at JAP-IT</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Building className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">IoT Lab Member at KIIT</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Github, href: "#", label: "GitHub" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
