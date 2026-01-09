"use client"

import { useRouter } from "next/navigation"
import { Shield, ArrowLeft } from "lucide-react"

export default function Signup() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-8 group cursor-pointer">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 group-hover:from-cyan-500/50 group-hover:to-purple-500/50 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Create Account
            </h1>
            <p className="text-cyan-300/80 text-sm font-medium">Join ScubenAI's security community</p>
          </div>

          {/* Signup form */}
          <div className="relative group mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  router.push("/dashboard")
                }}
                className="space-y-6"
              >
                {/* Name field */}
                <div className="relative group/input">
                  <label className="block text-xs font-semibold text-cyan-300/80 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-slate-800/80 transition-all duration-300"
                  />
                </div>

                {/* Email field */}
                <div className="relative group/input">
                  <label className="block text-xs font-semibold text-cyan-300/80 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="security@scubenai.com"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-slate-800/80 transition-all duration-300"
                  />
                </div>

                {/* Password field */}
                <div className="relative group/input">
                  <label className="block text-xs font-semibold text-cyan-300/80 mb-2 uppercase tracking-wider">
                    Create Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-slate-800/80 transition-all duration-300"
                  />
                </div>

                {/* Terms checkbox */}
                <label className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors text-sm">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 bg-slate-800 border border-cyan-500/30 rounded cursor-pointer accent-cyan-400"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#" className="text-cyan-400 hover:underline">
                      Terms of Service
                    </a>
                  </span>
                </label>

                {/* Create Account button */}
                <button
                  type="submit"
                  className="w-full relative group/btn mt-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-100 group-hover/btn:opacity-90 transition duration-300" />
                  <div className="absolute inset-0 shadow-lg shadow-cyan-500/50 group-hover/btn:shadow-cyan-500/80 transition duration-300" />
                  <span className="relative flex items-center justify-center text-black font-bold">Create Account</span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-cyan-500/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-gradient-to-b from-slate-900/90 to-slate-950/90 text-slate-400">
                    Already have an account?
                  </span>
                </div>
              </div>

              {/* Login link */}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="w-full py-3 rounded-lg border-2 border-cyan-500/40 hover:border-cyan-400/60 text-cyan-400 font-semibold text-sm uppercase tracking-wider hover:bg-cyan-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Sign In Instead
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  )
}
