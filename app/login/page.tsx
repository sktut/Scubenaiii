"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import Script from "next/script"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 0 20px rgba(185, 93, 255, 0.7)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect or handle login success
    }, 1500)
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/futuristic-neural-circuitry.png')",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5 animate-[moveBackground_60s_linear_infinite] z-0"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
        }}
      ></div>

      {/* Back to home button */}
      <motion.div
        className="absolute top-6 left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-300 group"
        >
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      <motion.div
        className="login-container flex max-w-[1000px] w-[90%] m-[40px_auto] rounded-[20px] overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] bg-black/30 backdrop-blur-[10px] z-10 flex-col md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Login Box */}
        <motion.div className="login-box flex-1 p-[40px_30px] text-white">
          <motion.div className="logo-section flex items-center gap-[15px] mb-[20px]" variants={itemVariants}>
            <div className="brand text-[25px] font-semibold text-[rgba(168,93,255,0.902)]">ScubenAI</div>
          </motion.div>

          <motion.div
            className="welcome text-[40px] sm:text-[55px] font-bold my-[20px] mb-[10px] leading-[1.1]"
            variants={itemVariants}
          >
            Welcome back
          </motion.div>

          <motion.div
            className="slogan text-[20px] sm:text-[25px] leading-[1.4] text-[#c2bfff] mb-[30px]"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
            }}
          >
            <span>
              <strong className="bg-gradient-to-r from-[#c286fc] to-[#edbefe] bg-clip-text text-transparent animate-[colorFlow_3s_ease-in-out_infinite_alternate] font-bold">
                Your Vision, Our Innovation.
              </strong>
            </span>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <motion.div
              className="input-group bg-white/10 w-full sm:w-[85%] rounded-[12px] border-[4px] border-[#a682ff]/0 p-[10px_15px] flex items-center my-[15px] transition-all duration-300 hover:bg-white/15 hover:shadow-[0_0_10px_rgba(194,191,255,0.3)]"
              variants={itemVariants}
            >
              <i className="fas fa-user mr-[10px] text-[#c2bfff]"></i>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none outline-none text-white text-[16px] flex-1 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="input-group bg-white/10 w-full sm:w-[85%] rounded-[12px] border-[4px] border-[#a682ff]/0 p-[10px_15px] flex items-center my-[15px] transition-all duration-300 hover:bg-white/15 hover:shadow-[0_0_10px_rgba(194,191,255,0.3)]"
              variants={itemVariants}
            >
              <i className="fa fa-lock mr-[10px] text-[#c2bfff]"></i>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="bg-transparent border-none outline-none text-white text-[16px] flex-1 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password cursor-pointer text-[#c2bfff] ml-[10px] transition-transform duration-300 hover:scale-[1.2]`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </motion.div>

            <motion.a
              href="/forgot-password"
              className="forgot text-[14px] text-[#c2bfff] inline-block my-[10px] no-underline hover:text-purple-300 transition-colors"
              variants={itemVariants}
            >
              Forgot password?
            </motion.a>

            <motion.button
              type="submit"
              className="btn bg-gradient-to-r from-[#7e21cd] to-[#a11cb0] text-white border-none p-[12px_30px] text-[20px] rounded-[12px] w-full sm:w-[90%] cursor-pointer mt-[20px] font-bold transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-[0_0_20px_#b95dff]"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </motion.button>

            <motion.div className="signup-text text-[15px] mt-[20px]" variants={itemVariants}>
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#a682ff] no-underline hover:text-purple-300 transition-colors">
                Sign up
              </Link>
            </motion.div>
          </form>
        </motion.div>

        {/* Side Graphic */}
        <motion.div
          className="side-graphic flex-1 bg-transparent flex justify-center items-center p-[20px] sm:p-[40px] hidden md:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full h-full">
            <dotlottie-player
              src="https://lottie.host/e2367261-0d40-4bb2-89f6-bad445850f17/u00Lqk2V5T.lottie"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </motion.div>
      </motion.div>

      {/* Load Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Load the dotlottie player script */}
      <Script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
        strategy="afterInteractive"
      />

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes colorFlow {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 100%;
          }
        }
        
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 10px #b95dff;
          }
          50% {
            box-shadow: 0 0 20px #b95dff, 0 0 40px #a682ff;
          }
          100% {
            box-shadow: 0 0 10px #b95dff;
          }
        }

        @keyframes moveBackground {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 1000px 1000px;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Import Poppins font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
      `}</style>
    </div>
  )
}
