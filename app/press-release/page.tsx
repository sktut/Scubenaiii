"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Download,
  Linkedin,
  Mail,
  Phone,
  Globe,
  Code,
  CheckCircle,
  Sparkles,
  ExternalLink,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NeuralNetwork3D } from "@/components/neural-network-3d"

// Logo Component
function ScubenAILogo() {
  return (
    <div className="flex items-center justify-center group">
      <div className="relative w-10 h-10 mr-2 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-fuchsia-700 to-purple-800 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z"
              fill="#E9D5FF"
              fillOpacity="0.9"
            />
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              fill="#D8B4FE"
            />
            <path
              d="M20 12C20 12 17 16 12 16C7 16 4 12 4 12C4 12 7 8 12 8C17 8 20 12 20 12Z"
              stroke="#E9D5FF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-300 transition-all duration-500 group-hover:from-purple-200 group-hover:to-fuchsia-200">
        ScubenAI
      </span>
    </div>
  )
}

export default function PressReleasePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col bg-black text-white">
      <NeuralNetwork3D />

      <header className="sticky top-0 z-40 w-full border-b border-purple-900/20 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ScubenAILogo />
          </Link>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Link href="/">
              <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-900/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center text-sm text-purple-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>May 23, 2025</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 min read</span>
                </div>
                <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="mb-8">
                <div className="inline-block rounded-lg bg-purple-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-100 border border-purple-800/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4">
                  FOR IMMEDIATE RELEASE
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                  ScubenAI Officially Launches Its New AI Innovation Platform, Bridging Smart Tech with a Secure Future
                </h1>
                <p className="text-xl text-purple-200 mb-4">
                  <strong>📍 Bangalore, India | May 23, 2025</strong> — Today marks a significant milestone for the AI
                  and cybersecurity landscape as ScubenAI, a pioneering artificial intelligence company founded in 2013,
                  launches a new wave of intelligent solutions, products, and services tailored for businesses and
                  individuals worldwide.
                </p>
                <p className="text-lg text-purple-200 mb-4">
                  ScubenAI's relaunch positions it at the forefront of AI innovation, combining cutting-edge machine
                  learning, cybersecurity, web and mobile development, and digital design to empower organizations with
                  secure, scalable, and intelligent 
                </p>
              </div>

              <div className="prose prose-invert prose-purple max-w-none">
                <blockquote className="border-l-4 border-purple-500 pl-6 italic my-8 bg-gradient-to-r from-purple-950/30 to-transparent p-6 rounded-r-lg">
                  <p className="text-lg mb-4">
                    "At ScubenAI, we believe that smart technology is the foundation of a secure future. Our new
                    platform represents years of research, collaboration, and innovation—built to solve real problems
                    and unlock new opportunities for digital transformation."
                  </p>
                  <footer className="text-purple-300 font-medium">— Sandeep Kashyap, Founder of ScubenAI</footer>
                </blockquote>

                <p className="text-purple-200 mb-4">
                  Kashyap, a former intern at Steel Authority of India Limited (SAIL), brings hands-on experience in AI,
                  cybersecurity, and IoT. He has led numerous impactful projects such as:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">MotionCraft</h4>
                      <p className="text-sm text-purple-200">
                        A motion-sensing gaming controller using Arduino and MPU6050
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">SkMap & SkBuster</h4>
                      <p className="text-sm text-purple-200">
                        Cybersecurity tools for port scanning and reconnaissance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Honeypot AI Implementation</h4>
                      <p className="text-sm text-purple-200">Advanced AI-powered cybersecurity honeypot system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">QR-Based Security System</h4>
                      <p className="text-sm text-purple-200">At SAIL for secure gate management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30 md:col-span-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Web-based Gate Pass System</h4>
                      <p className="text-sm text-purple-200">Used in industrial security environments</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-white flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-purple-400" />
                  About ScubenAI
                </h2>

                <p className="text-purple-200 mb-4">
                  Founded in 2019, ScubenAI is a next-generation technology company committed to crafting intelligent
                  ecosystems that enhance security, drive innovation, and support sustainable digital transformation.
                  The company offers tailored solutions to startups, enterprises, and institutions across various
                  sectors.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">Mission</h3>
                <p className="text-purple-200 mb-8">
                  To democratize access to AI technologies and deliver secure, scalable solutions that redefine how
                  businesses operate and grow.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">Core Services</h3>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Web Development</h4>
                      <p className="text-sm text-purple-200">Custom, secure, scalable web platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Mobile App Development</h4>
                      <p className="text-sm text-purple-200">Cross-platform and native mobile solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">AI/ML Solutions</h4>
                      <p className="text-sm text-purple-200">From NLP to computer vision and predictive analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cybersecurity</h4>
                      <p className="text-sm text-purple-200">End-to-end digital protection and compliance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-950/20 border border-purple-800/30 md:col-span-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">UI/UX Design</h4>
                      <p className="text-sm text-purple-200">Engaging, accessible digital product design</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4 text-white">Why ScubenAI?</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-200">AI Expertise backed by hands-on projects and research</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-200">Trusted by startups and global enterprises alike</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-200">Ethical AI with global data privacy compliance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-200">24x7 support, collaborative development, and scalable systems</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-white" id="contact">
                  Contact
                </h2>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-950/50 to-black/50 border border-purple-800/30 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4">ScubenAI</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-purple-200">
                    <div className="space-y-2">
                      <p className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-purple-400" />
                        <a
                          href="https://www.scubenai.com"
                          className="text-purple-300 hover:text-white transition-colors"
                        >
                          www.scubenai.com
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <a
                          href="mailto:contact@scubenai.com"
                          className="text-purple-300 hover:text-white transition-colors"
                        >
                          contact@scubenai.com
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-purple-400" />
                        <a href="tel:+919905729444" className="text-purple-300 hover:text-white transition-colors">
                          +91 9905729444
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-purple-400" />
                        <a
                          href="https://www.linkedin.com/in/sandeep-kashyap-0b160a255"
                          className="text-purple-300 hover:text-white transition-colors"
                        >
                          LinkedIn – Sandeep Kashyap
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-xl font-bold text-purple-300">ScubenAI – Smart Tech, Secure Future</p>
                  <p className="text-lg italic text-purple-200 mt-2">We don't just imagine the future. We build it.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Founder Profile with Enhanced Animations */}
              <motion.div
                className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-950/50 to-black/50 border border-purple-800/30 p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Animated top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 animate-pulse"></div>

                <div className="flex flex-col items-center text-center">
                  {/* Enhanced Photo Container with Thinner Rim and More Dots */}
                  <div className="relative w-48 h-48 mb-8">
                    {/* Outer thin rotating ring */}
                    <div
                      className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 via-cyan-400 to-purple-500 animate-spin"
                      style={{ animationDuration: "8s" }}
                    >
                      <div className="w-full h-full rounded-full border border-black"></div>
                    </div>

                    {/* Middle pulsing ring - thinner */}
                    <div className="absolute inset-1 rounded-full border border-purple-400/50 animate-pulse"></div>

                    {/* Inner glowing background */}
                    <div className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-600/30 via-fuchsia-600/30 to-cyan-500/30 blur-xl animate-pulse"></div>

                    {/* Main photo container with thinner border */}
                    <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black relative">
                        {/* Photo */}
                        <motion.div
                          initial={{ scale: 1.3, filter: "brightness(0.6) contrast(1.3) saturate(1.2)" }}
                          animate={{ scale: 1, filter: "brightness(1) contrast(1) saturate(1)" }}
                          transition={{ duration: 2.5, ease: "easeOut" }}
                          className="w-full h-full relative"
                        >
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandeep-removebg-preview-ARAnD7GmEsVnwAaYGAFp8G9SowUlV9.png"
                            alt="Sandeep Kashyap - Founder & CEO of ScubenAI"
                            fill
                            className="object-cover object-center scale-110"
                            sizes="(max-width: 768px) 100vw, 384px"
                            priority
                          />
                          {/* Holographic overlay effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-400/10 animate-pulse"></div>
                        </motion.div>

                        {/* Scanning line effect */}
                        <div
                          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 animate-bounce"
                          style={{ animationDuration: "3s" }}
                        ></div>
                      </div>
                    </div>

                    {/* Enhanced floating particles - more dots with varied animations */}
                    <div
                      className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "0s", animationDuration: "2s" }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "1s", animationDuration: "2.5s" }}
                    ></div>
                    <div
                      className="absolute top-8 -left-5 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "0.5s", animationDuration: "3s" }}
                    ></div>
                    <div
                      className="absolute -top-3 left-8 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "1.5s", animationDuration: "2.2s" }}
                    ></div>
                    <div
                      className="absolute top-12 -right-6 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "0.8s", animationDuration: "2.8s" }}
                    ></div>
                    <div
                      className="absolute -bottom-2 right-8 w-1 h-1 bg-fuchsia-300 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "2s", animationDuration: "2.3s" }}
                    ></div>
                    <div
                      className="absolute bottom-8 -left-3 w-1 h-1 bg-cyan-200 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "1.2s", animationDuration: "2.7s" }}
                    ></div>
                    <div
                      className="absolute top-4 right-12 w-1.5 h-1.5 bg-purple-200 rounded-full animate-bounce opacity-80"
                      style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}
                    ></div>

                    {/* Corner accents - thinner */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-cyan-400 rounded-tl-lg"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-fuchsia-400 rounded-tr-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-purple-400 rounded-bl-lg"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-cyan-400 rounded-br-lg"></div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Sandeep Kashyap</h3>
                    {/* Animated Founder & CEO text */}
                    <motion.p
                      className="text-purple-300 mb-1 font-medium"
                      animate={{
                        color: ["#d8b4fe", "#ffffff", "#d8b4fe"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      Founder 
                    </motion.p>
                    <p className="text-sm text-purple-400 mb-6">ScubenAI</p>

                    <p className="text-sm text-purple-200 mb-6 leading-relaxed">
                      Expertise in AI/ML, cybersecurity, and IoT. Former intern at Steel Authority of India Limited
                      (SAIL) with hands-on experience in innovative technology solutions.
                    </p>

                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-600 hover:bg-purple-900/20 transition-all duration-300"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/sandeep-kashyap-0b160a255"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-3 w-3 mr-1" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-600 hover:bg-purple-900/20 transition-all duration-300"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Portfolio
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-600 hover:bg-purple-900/20 transition-all duration-300"
                      >
                        <Twitter className="h-3 w-3 mr-1" />
                        Twitter
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Technical Expertise */}
              <Card className="bg-black/40 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">💻 Technical Expertise</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-purple-200">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span>AI/ML & Data Science</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span>Cybersecurity Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span>Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span>IoT & Hardware Integration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card className="bg-black/40 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">🚀 Notable Projects</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-purple-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">MotionCraft</p>
                        <p className="text-xs text-purple-300">Motion-sensing gaming controller</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-purple-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Honeypot AI Implementation</p>
                        <p className="text-xs text-purple-300">AI-powered cybersecurity honeypot system</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-purple-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">SkMap & SkBuster</p>
                        <p className="text-xs text-purple-300">Cybersecurity tools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-purple-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">QR-Based Security System</p>
                        <p className="text-xs text-purple-300">At SAIL for secure gate management</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-purple-200">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Web-based Gate Pass System</p>
                        <p className="text-xs text-purple-300">Industrial security solution</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-black/40 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">📞 Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-200">
                      <Globe className="h-4 w-4 text-purple-400" />
                      <a href="https://www.scubenai.com" className="hover:text-white transition-colors">
                        www.scubenai.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Mail className="h-4 w-4 text-purple-400" />
                      <a href="mailto:contact@scubenai.com" className="hover:text-white transition-colors">
                        contact@scubenai.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Phone className="h-4 w-4 text-purple-400" />
                      <a href="tel:+919905729444" className="hover:text-white transition-colors">
                        +91 9905729444
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Resources */}
              <Card className="bg-black/40 border-purple-900/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">📸 Media Resources</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-between border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-600"
                    >
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Press Kit
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-600"
                    >
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Founder Photo
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-purple-800/40 text-purple-300 hover:text-white hover:border-purple-600"
                    >
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        Company Logo
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-purple-900/20 bg-black py-6 text-purple-300 text-sm">
        <div className="container text-center">
          <p>© Since 2013 ScubenAI. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/privacy-policy" className="text-purple-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-purple-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-purple-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* Custom CSS for additional animations */}
      <style jsx global>{`
        @keyframes holographic {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400%);
            opacity: 0;
          }
        }

        .holographic-border {
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6);
          background-size: 400% 400%;
          animation: holographic 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
