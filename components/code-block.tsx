"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "typescript", title, showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden border border-border bg-card"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          {title && <span className="text-sm text-muted-foreground font-mono">{title}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="flex">
                {showLineNumbers && (
                  <span className="select-none text-muted-foreground/50 w-8 flex-shrink-0 text-right pr-4">
                    {index + 1}
                  </span>
                )}
                <span className="text-foreground">{line || " "}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  )
}
