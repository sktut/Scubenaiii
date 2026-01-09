"use client"

import { X, Play, AlertCircle, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [step, setStep] = useState(0)
  const [scanning, setScanning] = useState(false)

  const steps = [
    {
      title: "Enter Target URL",
      description: "Paste your website URL to begin security scanning",
      icon: "🌐",
    },
    {
      title: "Scanning in Progress",
      description: "Our AI-powered scanner analyzes your application",
      icon: "🔍",
    },
    {
      title: "AI Analysis",
      description: "Machine learning identifies vulnerabilities",
      icon: "🤖",
    },
    {
      title: "Security Report Generated",
      description: "Get a comprehensive, developer-ready report",
      icon: "📊",
    },
  ]

  useEffect(() => {
    if (scanning && step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else if (step === steps.length - 1) {
      setScanning(false)
    }
  }, [scanning, step])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => onOpenChange(false)}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-gradient-to-b from-slate-900/95 to-slate-950/95 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 max-w-md w-full p-6 z-10"
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
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Security Scan Demo
          </h2>
          <p className="text-slate-400 text-sm">See how ScubenAI analyzes your website</p>
        </div>

        {/* Step display */}
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  idx <= step ? "bg-cyan-500" : "bg-slate-700/50"
                }`}
              />
            ))}
          </div>

          {/* Current step */}
          <div className="text-center py-8">
            <div className="text-5xl mb-4">{steps[step].icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{steps[step].title}</h3>
            <p className="text-slate-400 text-sm">{steps[step].description}</p>

            {/* Demo input or loading state */}
            {step === 0 && !scanning && (
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full mt-4 px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            )}

            {scanning && (
              <div className="mt-4 flex justify-center gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Result preview */}
          {step === 3 && !scanning && (
            <div className="space-y-3 p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-300">Critical Issues Found: 3</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-300">Security Score: 62/100</span>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 px-4 py-2 border border-slate-600 rounded-lg text-slate-300 hover:border-slate-500 transition-colors"
          >
            Close
          </button>
          {!scanning ? (
            <button
              onClick={() => {
                setStep(0)
                setScanning(true)
              }}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Start Demo
            </button>
          ) : (
            <button
              onClick={() => {
                setScanning(false)
                setStep(0)
              }}
              className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
