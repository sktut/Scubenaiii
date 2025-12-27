"use client"

import { useEffect, useRef, useState } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const particles: Array<{
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number
      pulse: number
      pulseSpeed: number
    }> = []

    const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000))

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.5 ? 250 : 180, // Primary blue or accent cyan
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update pulse
        particle.pulse += particle.pulseSpeed
        const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1

        // Mouse interaction - particles move away from cursor
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.x -= (dx / distance) * force * 2
          particle.y -= (dy / distance) * force * 2
        } else {
          // Slowly return to base position
          particle.x += (particle.baseX - particle.x) * 0.01 + particle.speedX
          particle.y += (particle.baseY - particle.y) * 0.01 + particle.speedY
        }

        // Update base position slowly
        particle.baseX += particle.speedX
        particle.baseY += particle.speedY

        // Wrap around edges
        if (particle.baseX < 0) particle.baseX = canvas.width
        if (particle.baseX > canvas.width) particle.baseX = 0
        if (particle.baseY < 0) particle.baseY = canvas.height
        if (particle.baseY > canvas.height) particle.baseY = 0

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3 * pulseFactor,
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, ${particle.opacity * pulseFactor})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 60%, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3 * pulseFactor, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core of particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${particle.opacity * 1.5})`
        ctx.fill()
      })

      // Draw connections with gradient
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxConnectionDistance = 120

          if (distance < maxConnectionDistance) {
            const opacity = 0.15 * (1 - distance / maxConnectionDistance)
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `hsla(${p1.hue}, 80%, 60%, ${opacity})`)
            gradient.addColorStop(1, `hsla(${p2.hue}, 80%, 60%, ${opacity})`)

            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isClient])

  if (!isClient) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
