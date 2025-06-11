"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  Rocket,
  ChevronRight,
  Send,
  X,
  Clock,
  Sparkles,
  Menu,
  MessageCircle,
  Phone,
  Code,
  Smartphone,
  Brain,
  ShieldCheck,
  Palette,
  ArrowRight,
  Newspaper,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AIChatbot } from "@/components/ai-chatbot"
import { NeuralNetwork3D } from "@/components/neural-network-3d"
import { LoginButton } from "@/components/login-button"
import { motion } from "framer-motion"

/* Logo Component */
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

/* NavItem Component */
function NavItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden flex items-center text-sm font-medium text-purple-300 transition-colors hover:text-white group"
      onClick={onClick}
    >
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  )
}

/* Contact Item Component */
function ContactItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-purple-500" />
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

/* Footer Column Component */
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-purple-300">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
            >
              <span className="relative overflow-hidden">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Section Header Component */
function SectionHeader({ tag, title, description }: { tag: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <span className="inline-block rounded-lg bg-purple-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-100 border border-purple-800/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
        {tag}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
        {title}
      </h2>
      <p className="max-w-2xl text-purple-200 md:text-lg">{description}</p>
    </div>
  )
}

/* Service Card Component */
interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group flex flex-col items-center text-center bg-black/40 border-purple-900/50 backdrop-blur-sm hover:border-purple-700 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
      <CardHeader className="flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-950/80 group-hover:bg-purple-900/80 transition-colors duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-fuchsia-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Icon className="h-10 w-10 text-purple-300 group-hover:text-purple-200 transition-all duration-500 group-hover:scale-110" />
        </div>
        <CardTitle className="mt-4 text-xl font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-purple-200">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

/* Contact Form Component */
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      if (formRef.current) formRef.current.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Your Name"
            required
            className="bg-black/30 border-purple-900/50 focus:border-purple-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Your Email"
            required
            className="bg-black/30 border-purple-900/50 focus:border-purple-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Subject"
          required
          className="bg-black/30 border-purple-900/50 focus:border-purple-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Your Message"
          required
          className="min-h-[120px] bg-black/30 border-purple-900/50 focus:border-purple-500 transition-all duration-300 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-purple-300">
          Messages will be sent to <span className="font-semibold">contact@scubenai.com</span>
        </p>
        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700 text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Sending...
            </span>
          ) : isSubmitted ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Sent!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </span>
          )}
        </Button>
      </div>
    </form>
  )
}

/* Coming Soon Modal */
function ComingSoonModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Close modal with escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full max-w-md p-6 rounded-xl bg-gradient-to-br from-purple-950 to-black border border-purple-700/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-fadeIn"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full bg-purple-900/50 hover:bg-purple-800/70 text-purple-200 transition-all duration-300 hover:rotate-90"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-fuchsia-800/30 animate-pulse"></div>
            <Clock className="h-8 w-8 text-purple-200" />
          </div>
          <h3 className="text-2xl font-bold text-white">Coming Soon!</h3>
          <p className="text-purple-200">
            Our login system is currently under development. We're working hard to bring you a secure and seamless
            experience.
          </p>
          <div className="w-full h-2 bg-purple-900/30 rounded-full overflow-hidden mt-4">
            <div className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 w-3/4 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-purple-300">75% Complete</p>
          <Button
            onClick={onClose}
            className="mt-4 bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  )
}

/* Feature Card Component */
function FeatureCard({
  title,
  description,
  icon: Icon,
}: { title: string; description: string; icon: React.ElementType }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-950/30 to-black/30 border border-purple-900/30 p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 transition-all duration-500 group-hover:w-full"></div>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-950 text-purple-200 group-hover:bg-purple-900 transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-purple-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

/* Mobile Menu */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-4/5 max-w-sm bg-black border-r border-purple-900/30 p-6 h-full overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <ScubenAILogo />
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-purple-900/50 hover:bg-purple-800/70 text-purple-200 transition-all duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6">
          <NavItem href="/" label="Home" onClick={onClose} />
          <NavItem href="/services" label="Services" onClick={onClose} />
          <NavItem href="/press-release" label="Press" onClick={onClose} />
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              onClose()
              setTimeout(() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }, 100)
            }}
            className="relative overflow-hidden flex items-center text-sm font-medium text-purple-300 transition-colors hover:text-white group"
          >
            <span className="relative">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              onClose()
              setTimeout(() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }, 100)
            }}
            className="relative overflow-hidden flex items-center text-sm font-medium text-purple-300 transition-colors hover:text-white group"
          >
            <span className="relative">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <div className="pt-4 border-t border-purple-900/30">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700"
            >
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isSessionLoaded, setIsSessionLoaded] = useState(true)

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative flex min-h-screen flex-col bg-black text-white">
      {/* Replace static background with 3D neural network */}
      <NeuralNetwork3D />

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Add the AI Chatbot component */}
      <AIChatbot />

      <header className="sticky top-0 z-40 w-full border-b border-purple-900/20 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10 items-center">
            <div className="md:block hidden">
              <Link href="/" className="flex items-center space-x-2 group">
                <Rocket className="h-6 w-6 text-purple-400 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="inline-block font-bold text-white text-xl">Home</span>
              </Link>
            </div>
            {/* ScubenAI Logo */}
            <ScubenAILogo />
            <nav className="hidden md:flex gap-6 text-purple-200">
              <Link
                href="/services"
                className="relative overflow-hidden flex items-center text-sm font-medium text-purple-300 transition-colors hover:text-white group"
              >
                <span className="relative">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/press-release"
                className="relative overflow-hidden flex items-center text-sm font-medium text-purple-300 transition-colors hover:text-white group"
              >
                <span className="relative">
                  Press
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className={`relative overflow-hidden flex items-center text-sm font-medium transition-colors hover:text-white group ${
                  activeSection === "about" ? "text-white" : "text-purple-300"
                }`}
              >
                <span className="relative">
                  About
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 ${
                      activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className={`relative overflow-hidden flex items-center text-sm font-medium transition-colors hover:text-white group ${
                  activeSection === "contact" ? "text-white" : "text-purple-300"
                }`}
              >
                <span className="relative">
                  Contact
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 ${
                      activeSection === "contact" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </span>
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>
            {isSessionLoaded ? (
              <LoginButton className="bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
            ) : null}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-purple-300 hover:text-white hover:bg-purple-900/20"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 overflow-hidden">
          <div className="container relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800/30 text-purple-300 text-xs font-medium">
                    <Sparkles className="h-3 w-3 mr-1 text-purple-400" />
                    <span>Next-Generation AI Technology</span>
                  </div>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
                  <span className="block">ScubenAI</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-200">
                    Smart Tech, Secure Future
                  </span>
                </h1>
                <p className="max-w-[600px] text-purple-200 md:text-xl">
                  Pioneering the next generation of AI solutions with cutting-edge technology that transforms how
                  businesses operate and innovate.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LoginButton
                  size="lg"
                  className="px-8 bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-800/40 text-purple-200 hover:bg-purple-900/20 hover:border-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => scrollToSection("services")}
                >
                  <span className="flex items-center gap-2">
                    Explore Services{" "}
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-2xl transform transition-all duration-500 hover:scale-[1.02]">
                {/* Decorative corner elements */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-purple-500 rounded-tl-xl"></div>
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-xl"></div>

                {/* Main image with border only - no overlays */}
                <div className="relative p-2 rounded-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue%20Memphis%20Blank%20Page%20A4%20Document%20Landscape%20%281%29-g9fKrLqAf63QhYPaSgSNdHJy15eSGZ.png"
                    width={900}
                    height={900}
                    alt="AI brain circuit visualization"
                    className="rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] border-2 border-purple-500/50"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="w-full py-12 relative">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Latest News</h2>
              </div>
              <Button asChild variant="ghost" className="text-purple-300 hover:text-white">
                <Link href="/press-release" className="flex items-center gap-1">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-black/40 border-purple-900/50 backdrop-blur-sm hover:border-purple-700 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-center text-xs text-purple-400 mb-2">
                    <span>May 22, 2025</span>
                    <span>5 min read</span>
                  </div>
                  <CardTitle className="text-white">
                    ScubenAI Announces Breakthrough in Neural Network Technology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200 mb-4">
                    ScubenAI unveils revolutionary neural network technology that promises to transform how businesses
                    leverage artificial intelligence.
                  </CardDescription>
                  <Button asChild variant="ghost" className="text-purple-300 hover:text-white p-0">
                    <Link href="/press-release" className="flex items-center gap-1">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-900/50 backdrop-blur-sm hover:border-purple-700 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-center text-xs text-purple-400 mb-2">
                    <span>April 15, 2025</span>
                    <span>4 min read</span>
                  </div>
                  <CardTitle className="text-white">ScubenAI Announces Integration of AI in Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200 mb-4">
                    ScubenAI introduces advanced AI-powered cybersecurity solutions, including honeypot implementations
                    and intelligent threat detection systems.
                  </CardDescription>
                  <Button asChild variant="ghost" className="text-purple-300 hover:text-white p-0">
                    <Link href="/press-release" className="flex items-center gap-1">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-900/50 backdrop-blur-sm hover:border-purple-700 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-center text-xs text-purple-400 mb-2">
                    <span>March 3, 2025</span>
                    <span>6 min read</span>
                  </div>
                  <CardTitle className="text-white">ScubenAI Partners with Leading Healthcare Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200 mb-4">
                    New partnership aims to develop AI-powered diagnostic tools that could significantly improve early
                    detection of critical conditions.
                  </CardDescription>
                  <Button asChild variant="ghost" className="text-purple-300 hover:text-white p-0">
                    <Link href="/press-release" className="flex items-center gap-1">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-24 relative">
          <div className="container">
            <SectionHeader
              tag="Services"
              title="Intelligent Solutions for Modern Challenges"
              description="Leverage our cutting-edge AI technologies to transform your business and stay ahead of the competition."
            />
            <div className="grid gap-8 mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              <ServiceCard
                icon={Code}
                title="Web Development"
                description="Custom websites and web applications built with the latest technologies."
              />
              <ServiceCard
                icon={Smartphone}
                title="Mobile Apps"
                description="Native and cross-platform mobile applications for iOS and Android."
              />
              <ServiceCard
                icon={Brain}
                title="AI / ML"
                description="Advanced artificial intelligence and machine learning solutions."
              />
              <ServiceCard
                icon={ShieldCheck}
                title="Cybersecurity"
                description="Comprehensive security solutions to protect your digital assets."
              />
              <ServiceCard
                icon={Palette}
                title="Design"
                description="Creative design services for digital products and brands."
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700"
              >
                <Link href="/services">
                  <span className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Press Release Section */}
        <section className="w-full py-16 relative">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <span className="inline-block rounded-lg bg-purple-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-100 border border-purple-800/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4">
                  Latest News
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl mb-6">
                  ScubenAI Launches Revamped Website and Next-Gen AI Solutions
                </h2>
                <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                  Discover our newly enhanced platform designed to drive business innovation with cutting-edge AI
                  technology, comprehensive cybersecurity solutions, and world-class development services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-800 to-fuchsia-800 hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    <Link href="/press-release">
                      <span className="flex items-center gap-2">
                        Read Full Press Release
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-800/40 text-purple-200 hover:bg-purple-900/20 hover:border-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => scrollToSection("contact")}
                  >
                    <span className="flex items-center gap-2">
                      Schedule Consultation
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-24 relative">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-block rounded-lg bg-purple-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-100 border border-purple-800/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-4">
                  About Us
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl mb-6">
                  Pioneering the Future of AI Technology
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    ScubenAI was founded with a vision to make advanced artificial intelligence accessible to businesses
                    of all sizes. Our team of experts combines deep technical knowledge with industry experience to
                    deliver solutions that drive real business value.
                  </p>
                  <p>
                    We believe that AI should be powerful yet ethical, innovative yet reliable. Our commitment to these
                    principles guides everything we do, from research and development to implementation and support.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <FeatureCard
                    icon={CheckCircle}
                    title="Expert Team"
                    description="Our team includes PhDs and industry veterans with decades of combined experience."
                  />
                  <FeatureCard
                    icon={CheckCircle}
                    title="Cutting-Edge Research"
                    description="We continuously invest in R&D to stay at the forefront of AI innovation."
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-fuchsia-600/10 rounded-full filter blur-3xl"></div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ScubenAI-ER6xge7Ad4kJFbc89yb8cECtFyFqWL.png"
                      width={500}
                      height={500}
                      alt="ScubenAI Logo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-24 relative">
          <div className="container">
            <SectionHeader
              tag="Contact"
              title="Get in Touch"
              description="Have questions or ready to start your AI journey? Reach out to our team."
            />
            <div className="grid gap-12 mt-16 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6 text-purple-200">
                  <p>
                    Our team is available to answer your questions and discuss how ScubenAI can help transform your
                    business with cutting-edge AI solutions.
                  </p>
                  <div className="space-y-4">
                    <ContactItem icon={Phone} text="<span class='text-white'>+91 9905729444</span>" />
                    <ContactItem icon={MessageCircle} text="<span class='text-white'>contact@scubenai.com</span>" />
                  </div>
                  <div className="pt-6 border-t border-purple-900/30">
                    <h4 className="font-medium text-white mb-4">Office Hours</h4>
                    <p>24x7</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-purple-900/20 bg-black py-8 text-purple-300 text-sm">
        <div className="container grid gap-10 md:grid-cols-4 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ScubenAILogo />
            </div>
            <p className="text-purple-400">Smart Tech, Secure Future</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-purple-300">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Web Development
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Mobile Apps
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    AI / ML
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Cybersecurity
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Design
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-purple-300">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/press-release"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Press
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-purple-300">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Terms
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Privacy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-purple-400 transition-all duration-300 hover:text-white hover:translate-x-1 flex items-center"
                >
                  <span className="relative overflow-hidden">
                    Cookies
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-4 border-t border-purple-900/20 text-center text-purple-500">
          <p>© Since 2013 ScubenAI. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
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
    </div>
  )
}
