"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, X, Phone, HelpCircle, Lightbulb, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type ChatOption = "contact" | "query" | "improvement" | null
type Message = {
  type: "user" | "bot"
  text: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<ChatOption>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Reset chat when option changes
  useEffect(() => {
    if (selectedOption) {
      setMessages([
        {
          type: "bot",
          text: getBotGreeting(selectedOption),
        },
      ])
    }
  }, [selectedOption])

  const getBotGreeting = (option: ChatOption) => {
    switch (option) {
      case "contact":
        return "You can reach us at +91 9905729444 or email us at contact@scubenai.com. How can we help you today?"
      case "query":
        return "I'm here to answer any questions you have about ScubenAI. What would you like to know?"
      case "improvement":
        return "We value your feedback! Please share any suggestions or improvements you'd like to see in our services."
      default:
        return "Hello! How can I assist you today?"
    }
  }

  const getBotResponse = (message: string, option: ChatOption) => {
    if (!option) return "Please select an option first."

    switch (option) {
      case "contact":
        if (message.toLowerCase().includes("phone") || message.toLowerCase().includes("call")) {
          return "Our phone line is open Monday-Friday, 9am-5pm EST at +91 9905729444."
        } else if (message.toLowerCase().includes("email")) {
          return "You can email us at contact@scubenai.com. We typically respond within 24 hours."
        } else {
          return "For immediate assistance, please call +91 9905729444 or email contact@scubenai.com. Is there anything specific you need help with?"
        }

      case "query":
        if (message.toLowerCase().includes("pricing")) {
          return "Our pricing plans start at $49/month for the Basic plan, $99/month for Pro, and $199/month for Enterprise. Each plan includes different features and capabilities. Would you like to know more about a specific plan?"
        } else if (message.toLowerCase().includes("service")) {
          return "ScubenAI offers a range of services including AI-powered analytics, predictive modeling, natural language processing, and custom AI solutions. Which service are you interested in learning more about?"
        } else {
          return "Thanks for your question. ScubenAI specializes in cutting-edge AI solutions for businesses of all sizes. We offer custom AI development, data analysis, and automation tools. Can I provide more specific information about any of these areas?"
        }

      case "improvement":
        return "Thank you for your feedback! We've recorded your suggestion and will forward it to our product team. We're constantly working to improve our services based on customer input. Is there anything else you'd like to share?"

      default:
        return "I'm not sure I understand. Could you please clarify your question?"
    }
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: input }])
    const userMessage = input
    setInput("")

    // Simulate bot typing
    setIsTyping(true)

    // Add bot response after delay
    setTimeout(
      () => {
        setIsTyping(false)
        setMessages((prev) => [...prev, { type: "bot", text: getBotResponse(userMessage, selectedOption) }])
      },
      1000 + Math.random() * 1000,
    )
  }

  const resetChat = () => {
    setSelectedOption(null)
    setMessages([])
    setInput("")
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 shadow-lg bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600 z-50 flex items-center justify-center"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Open chat</span>
      </Button>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 rounded-xl overflow-hidden shadow-2xl border border-purple-800/50 bg-black z-50"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-purple-900 to-fuchsia-900 p-4 flex justify-between items-center">
              <h3 className="font-semibold text-white">ScubenAI Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full text-purple-200 hover:text-white hover:bg-purple-800/50"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Chat content */}
            <div className="flex flex-col h-96">
              {selectedOption === null ? (
                <div className="flex flex-col items-center justify-center h-full p-6 space-y-4 bg-gradient-to-b from-black to-purple-950/30">
                  <h4 className="font-medium text-purple-200 text-center">How can we help you today?</h4>
                  <div className="grid gap-3 w-full">
                    <Button
                      onClick={() => setSelectedOption("contact")}
                      className="bg-purple-900/80 hover:bg-purple-800 text-white border border-purple-700/50 justify-start"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Information
                    </Button>
                    <Button
                      onClick={() => setSelectedOption("query")}
                      className="bg-purple-900/80 hover:bg-purple-800 text-white border border-purple-700/50 justify-start"
                    >
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Ask a Question
                    </Button>
                    <Button
                      onClick={() => setSelectedOption("improvement")}
                      className="bg-purple-900/80 hover:bg-purple-800 text-white border border-purple-700/50 justify-start"
                    >
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Suggest Improvement
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Messages area */}
                  <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-black to-purple-950/30 space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.type === "user"
                              ? "bg-purple-700 text-white"
                              : "bg-purple-900/40 border border-purple-800/50 text-purple-100"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-lg px-4 py-2 bg-purple-900/40 border border-purple-800/50 text-purple-100">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input area */}
                  <div className="p-3 border-t border-purple-900/50 bg-black">
                    <div className="flex items-end gap-2">
                      <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="min-h-[60px] max-h-[120px] bg-purple-950/20 border-purple-800/50 focus:border-purple-600 resize-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!input.trim()}
                        className="bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600 h-10 w-10 p-0"
                      >
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetChat}
                        className="text-xs text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 px-2"
                      >
                        Change option
                      </Button>
                      <span className="text-xs text-purple-500">Powered by ScubenAI</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
