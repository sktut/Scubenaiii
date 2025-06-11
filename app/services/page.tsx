"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, Brain, ShieldCheck, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    description: "Cutting-edge web solutions with the latest technologies.",
    longDescription:
      "Our web development services combine stunning design with powerful functionality. We create responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.",
    features: [
      "Custom Website Development",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Development & Integration",
      "Web Performance Optimization",
    ],
    technologies: "React, Next.js, Vue.js, Node.js, TypeScript, GraphQL",
    image: "/images/web-development.jpg",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications.",
    longDescription:
      "We develop high-quality mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our solutions combine beautiful interfaces with powerful features to engage and delight your users.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform Apps",
      "App UI/UX Design",
      "Mobile Backend Development",
      "App Store Optimization",
      "App Maintenance & Support",
    ],
    technologies: "React Native, Flutter, Swift, Kotlin, Firebase",
    image: "/images/mobile-apps.jpg",
    color: "from-green-600 to-emerald-400",
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: Brain,
    description: "Advanced artificial intelligence and machine learning solutions.",
    longDescription:
      "Our AI and machine learning services help businesses leverage the power of data to gain insights, automate processes, and make better decisions. We build custom AI solutions tailored to your specific business needs.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation Systems",
      "AI Integration",
    ],
    technologies: "TensorFlow, PyTorch, OpenAI, Hugging Face, scikit-learn",
    image: "/images/ai-ml.jpg",
    color: "from-purple-600 to-fuchsia-400",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Comprehensive security solutions to protect your digital assets.",
    longDescription:
      "Our cybersecurity services provide robust protection for your digital infrastructure. We offer comprehensive security assessments, implementation of security measures, and ongoing monitoring to safeguard your business from threats.",
    features: [
      "Security Assessments",
      "Penetration Testing",
      "Security Architecture",
      "Vulnerability Management",
      "Compliance & Regulations",
      "Incident Response",
    ],
    technologies: "OWASP, NIST, ISO 27001, GDPR, SIEM, EDR",
    image: "/images/cybersecurity.jpg",
    color: "from-red-600 to-orange-400",
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    description: "Creative design services for digital products and brands.",
    longDescription:
      "Our design team creates stunning visual identities and user experiences that resonate with your audience. We combine aesthetics with functionality to deliver designs that not only look great but also drive results.",
    features: [
      "UI/UX Design",
      "Brand Identity Design",
      "Design Systems",
      "Responsive Web Design",
      "Mobile App Design",
      "Prototyping & Wireframing",
    ],
    technologies: "Figma, Adobe Creative Suite, Sketch, Framer",
    image: "/images/design.jpg",
    color: "from-yellow-600 to-amber-400",
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0].id)

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
              <Link href="/#contact">Get a Quote</Link>
            </Button>
            <Link href="/">
              <Button variant="ghost" className="text-purple-300 hover:text-white hover:bg-purple-900/20">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-purple-200 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Explore our comprehensive range of services designed to help businesses transform and thrive in the
                digital era.
              </motion.p>
            </div>

            <Tabs
              defaultValue={services[0].id}
              className="w-full"
              value={selectedService}
              onValueChange={setSelectedService}
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-black/50 border border-purple-900/30 p-1 mb-12">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-purple-900/40 data-[state=active]:text-white text-purple-300 flex items-center justify-center"
                  >
                    <service.icon className="h-5 w-5 sm:h-4 sm:w-4 sm:mr-2" />
                    <span className="hidden sm:inline">{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                      <p className="text-lg text-purple-200 mb-6">{service.longDescription}</p>

                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-purple-200">
                            <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Technologies</h3>
                      <p className="text-purple-200">{service.technologies}</p>

                      <div className="mt-8">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600"
                        >
                          <Link href="/login">
                            <span className="flex items-center gap-2">
                              Get Started
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </motion.div>

                    <motion.div
                      className="relative aspect-video overflow-hidden rounded-xl border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                      <div className="flex items-center justify-center h-full p-12">
                        <service.icon className="h-32 w-32 text-white/80" />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {[1, 2, 3].map((item) => (
                      <Card
                        key={item}
                        className="bg-black/40 border-purple-900/50 backdrop-blur-sm hover:border-purple-700 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1"
                      >
                        <CardHeader>
                          <CardTitle className="text-white">Case Study {item}</CardTitle>
                          <CardDescription className="text-purple-200">
                            Success story showcasing our {service.title.toLowerCase()} expertise
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-purple-200">
                            Will be uploaded soon{" "}
                            {service.title.toLowerCase()} solutions.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="text-purple-300 hover:text-white">
                            <span className="flex items-center gap-1">
                              Read More
                              <ArrowRight className="h-3 w-3" />
                            </span>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
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
    </div>
  )
}
