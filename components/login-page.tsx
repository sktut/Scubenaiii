"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Shield } from "lucide-react"
import { InteractiveCursorGlow } from "./interactive-cursor-glow"

export function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [aliens, setAliens] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Create floating alien elements
  useEffect(() => {
    const newAliens = [
      { id: 1, x: 15, y: 10 },
      { id: 2, x: 85, y: 80 },
      { id: 3, x: 70, y: 20 },
    ]
    setAliens(newAliens)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    setTimeout(() => {
      router.push("/security/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
      <InteractiveCursorGlow mousePos={mousePos} />

      {/* Animated nebula background */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating alien security symbols */}
      {aliens.map((alien) => (
        <div
          key={alien.id}
          className="fixed opacity-10 pointer-events-none animate-float"
          style={{
            left: `${alien.x}%`,
            top: `${alien.y}%`,
            animationDelay: `${alien.id * 0.3}s`,
            filter: "blur(1px)",
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="text-cyan-400 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
          >
            {/* Alien head - big and prominent */}
            <circle cx="100" cy="70" r="45" strokeWidth="2" opacity="0.6" />
            {/* Large alien eyes */}
            <circle cx="80" cy="55" r="12" fill="currentColor" opacity="0.7" />
            <circle cx="120" cy="55" r="12" fill="currentColor" opacity="0.7" />
            {/* Alien mouth */}
            <path d="M 85 75 Q 100 85 115 75" strokeWidth="2" opacity="0.6" />
            {/* Antenna */}
            <line x1="75" y1="25" x2="70" y2="5" strokeWidth="2" opacity="0.5" />
            <line x1="125" y1="25" x2="130" y2="5" strokeWidth="2" opacity="0.5" />
            {/* Body */}
            <path d="M 60 110 L 50 160 L 100 170 L 150 160 L 140 110 Z" strokeWidth="2" opacity="0.5" />
            {/* Arms */}
            <line x1="60" y1="130" x2="20" y2="140" strokeWidth="2" opacity="0.4" />
            <line x1="140" y1="130" x2="180" y2="140" strokeWidth="2" opacity="0.4" />
          </svg>
        </div>
      ))}

      {/* Starfield */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8 group cursor-pointer">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 group-hover:from-cyan-500/50 group-hover:to-purple-500/50 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              ScubenAI
            </h1>
            <p className="text-cyan-300/80 text-sm font-medium">Cosmic Security Access</p>
          </div>

          {/* Login form card */}
          <div className="relative group mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email field */}
                <div className="relative group/input">
                  <label className="block text-xs font-semibold text-cyan-300/80 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="security@scubenai.com"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-slate-800/80 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-400/0 to-purple-500/0 opacity-0 group-focus-within/input:opacity-100 pointer-events-none blur transition duration-300" />
                  </div>
                </div>

                {/* Password field */}
                <div className="relative group/input">
                  <label className="block text-xs font-semibold text-cyan-300/80 mb-2 uppercase tracking-wider">
                    Secure Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-slate-800/80 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400/60 hover:text-cyan-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-slate-800 border border-cyan-500/30 rounded cursor-pointer accent-cyan-400"
                    />
                    <span>Remember security credentials</span>
                  </label>
                  <Link href="#" className="text-cyan-400/80 hover:text-cyan-300 transition-colors">
                    Forgot?
                  </Link>
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative group/btn mt-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-100 group-hover/btn:opacity-90 transition duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 animate-pulse transition duration-300" />
                  <div className="absolute inset-0 shadow-lg shadow-cyan-500/50 group-hover/btn:shadow-cyan-500/80 transition duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-black font-bold">
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Accessing...
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4" />
                        Secure Login
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-cyan-500/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-gradient-to-b from-slate-900/90 to-slate-950/90 text-slate-400">
                    New to ScubenAI?
                  </span>
                </div>
              </div>

              {/* Sign up link */}
              <button
                type="button"
                onClick={() => router.push("/security/dashboard")}
                className="w-full py-3 rounded-lg border-2 border-cyan-500/40 hover:border-cyan-400/60 text-cyan-400 font-semibold text-sm uppercase tracking-wider hover:bg-cyan-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Create Free Account
              </button>
            </div>
          </div>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Military-grade encryption • No data stored</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  )
}
