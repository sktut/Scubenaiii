"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
}

const botResponses: Record<string, string> = {
  hello: "Hello! Welcome to ScubenAI. How can I help you with your cybersecurity needs today?",
  hi: "Hi there! I'm ScubenAI's virtual assistant. What would you like to know about our AI-powered security solutions?",
  services:
    "We offer AI-powered threat detection, cloud security, data encryption, ML system architecture, and 24/7 security monitoring. Would you like to know more about any specific service?",
  pricing:
    "Our pricing is customized based on your organization's needs. Please contact our team at contact@scubenai.com for a personalized quote.",
  contact:
    "You can reach us at contact@scubenai.com or fill out the contact form on our website. We typically respond within 24 hours.",
  security:
    "We provide comprehensive AI-powered cybersecurity solutions including threat detection, vulnerability assessment, incident response, and security consulting.",
  ai: "Our AI systems use advanced machine learning algorithms to detect threats in real-time, predict vulnerabilities, and automate security responses.",
  demo: "We'd love to show you a demo! Please reach out to our team at contact@scubenai.com to schedule a personalized demonstration.",
  default:
    "I'm not sure I understand. You can ask me about our services, pricing, security solutions, or how to contact us. Or type 'help' for more options.",
  help: "Here's what I can help with:\n• Services - Learn about our offerings\n• Pricing - Get pricing information\n• Security - Our security solutions\n• AI - How we use AI\n• Contact - How to reach us\n• Demo - Request a demonstration",
}

function getBotResponse(input: string): string {
  const lowerInput = input.toLowerCase()

  for (const [key, response] of Object.entries(botResponses)) {
    if (lowerInput.includes(key)) {
      return response
    }
  }

  return botResponses.default
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm ScubenAI's virtual assistant. How can I help you today?", isBot: true },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 800)
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)]"
          >
            <Card className="overflow-hidden shadow-2xl border-primary/20">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">ScubenAI Assistant</h3>
                    <p className="text-xs opacity-80">Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot ? "bg-primary/10" : "bg-accent/10"
                      }`}
                    >
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-primary" />
                      ) : (
                        <User className="w-4 h-4 text-accent" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                        message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
