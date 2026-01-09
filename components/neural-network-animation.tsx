"use client"

import { useEffect, useRef } from "react"

export function NeuralNetworkAnimation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener("resize", resize)

    // Create neural network nodes
    const layers = [4, 6, 8, 6, 4, 2]
    const nodes: Array<{ x: number; y: number; layer: number; pulse: number }> = []

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    const layerSpacing = width / (layers.length + 1)

    layers.forEach((nodeCount, layerIndex) => {
      const nodeSpacing = height / (nodeCount + 1)
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: layerSpacing * (layerIndex + 1),
          y: nodeSpacing * (i + 1),
          layer: layerIndex,
          pulse: Math.random() * Math.PI * 2,
        })
      }
    })

    let dataFlowOffset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      dataFlowOffset += 0.02

      // Draw connections with animated data flow
      nodes.forEach((node) => {
        const nextLayerNodes = nodes.filter((n) => n.layer === node.layer + 1)
        nextLayerNodes.forEach((nextNode) => {
          const gradient = ctx.createLinearGradient(node.x, node.y, nextNode.x, nextNode.y)

          const flowProgress = (Math.sin(dataFlowOffset + node.y * 0.01) + 1) / 2

          gradient.addColorStop(0, `hsla(250, 80%, 60%, ${0.1 + flowProgress * 0.2})`)
          gradient.addColorStop(flowProgress, `hsla(180, 80%, 60%, ${0.3 + flowProgress * 0.3})`)
          gradient.addColorStop(1, `hsla(250, 80%, 60%, ${0.1 + flowProgress * 0.1})`)

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(nextNode.x, nextNode.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.stroke()
        })
      })

      // Draw nodes with pulse effect
      nodes.forEach((node) => {
        node.pulse += 0.03

        const pulseSize = Math.sin(node.pulse) * 2 + 6
        const glowSize = pulseSize * 3

        // Glow
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize)
        glowGradient.addColorStop(0, `hsla(${node.layer * 30 + 200}, 80%, 60%, 0.4)`)
        glowGradient.addColorStop(1, `hsla(${node.layer * 30 + 200}, 80%, 60%, 0)`)

        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${node.layer * 30 + 200}, 80%, 70%, 0.9)`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("resize", resize)
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
