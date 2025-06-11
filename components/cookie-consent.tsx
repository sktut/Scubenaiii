"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isClient) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-black/95 border-t border-purple-800/50 shadow-[0_-5px_25px_rgba(0,0,0,0.3)] backdrop-blur-md text-white p-4 sm:p-6">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1 pr-8">
                  <h3 className="text-lg font-semibold mb-2 text-purple-200">Cookie Policy</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    We use cookies to enhance your experience on our website, analyze site usage, and assist in our
                    marketing efforts.
                  </p>
                  <p className="text-xs text-gray-400">
                    By clicking "Accept All", you consent to our use of cookies. Visit our{" "}
                    <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                      Privacy Policy
                    </a>{" "}
                    to learn more.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDecline}
                    className="whitespace-nowrap border-purple-800/50 text-purple-200 hover:bg-purple-900/20 hover:text-white"
                  >
                    Decline
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="whitespace-nowrap bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600"
                  >
                    Accept All
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-white hover:bg-purple-900/20"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
