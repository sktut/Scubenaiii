"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Home } from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    setSent(true)
    setEmail("")
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050814] to-black relative overflow-hidden text-white">
      
      {/* 🌌 Cosmic Nebula Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[160px] animate-pulse delay-2000" />
      </div>

      {/* ✨ Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[size:3px_3px] opacity-30" />

      {/* 🚀 Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text">
            ScubenAI • Cosmic Console
          </h1>
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/10 transition"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>
      </header>

      {/* 🌠 Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        
        {/* 🪐 Title */}
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Something Cosmic Is Forming
        </h2>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          We are engineering an <span className="text-cyan-400">intelligent security universe</span> —  
          where vulnerabilities collapse, threats evaporate, and systems evolve autonomously.
        </p>

        {/* 🧬 Coming Soon Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Autonomous Scans",
              desc: "Self-thinking agents probing systems like cosmic explorers.",
              icon: "🛰️",
            },
            {
              title: "Threat Intelligence",
              desc: "Signals gathered across the cyber multiverse.",
              icon: "🧠",
            },
            {
              title: "Quantum-Grade Reports",
              desc: "Actionable insights forged from chaos.",
              icon: "📡",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl hover:border-cyan-400/40 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 📩 Email Capture */}
        <div className="max-w-xl mx-auto p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl">
          <h3 className="text-2xl font-bold mb-3">
            Join the Transmission List
          </h3>
          <p className="text-slate-300 mb-6">
            Be notified when the portal opens 🚀
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition"
            >
              Notify Me
            </button>
          </div>
        </div>
      </main>

      {/* 🔮 Cosmic Popup */}
      {sent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative p-10 rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-[#0a0f2a] to-black text-center animate-[fadeIn_0.4s_ease-out]">
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-xl" />
            <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transmission Sent 🚀
            </h4>
            <p className="text-slate-300">
              Your signal has been received.  
              We’ll contact you when the universe aligns.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
