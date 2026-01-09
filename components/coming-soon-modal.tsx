"use client"

import type React from "react"

import { X, Mail, Calendar } from "lucide-react"
import { useState } from "react"

interface ComingSoonModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComingSoonModal({ open, onOpenChange }: ComingSoonModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => onOpenChange(false)}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-gradient-to-b from-slate-900/95 to-slate-950/95 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-w-md w-full p-8 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl mb-4">
            <Calendar className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Coming Soon
          </h2>
          <p className="text-slate-400 text-sm">Premium plans launching Q2 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-slate-300 text-center">
            We're preparing exclusive features and enhanced plans to supercharge your security testing. Be the first to
            know when they launch!
          </p>

          {/* Email signup */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="text-center py-4 px-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-semibold">✓ Thanks for signing up!</p>
              <p className="text-green-300/80 text-sm mt-1">Check your email for updates</p>
            </div>
          )}

          {/* Features coming */}
          <div className="space-y-2 pt-4 border-t border-slate-700/50">
            <p className="text-xs font-semibold text-slate-400 uppercase">Coming Features</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Advanced API scanning
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Real-time monitoring
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Team collaboration tools
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <button
          onClick={() => onOpenChange(false)}
          className="w-full mt-6 px-4 py-2 border border-slate-600 rounded-lg text-slate-300 hover:border-slate-500 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
