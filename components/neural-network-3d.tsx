"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function NeuronParticles({ count = 500 }) {
  const mesh = useRef<THREE.Points>(null!)
  const positions = useRef<Float32Array>()
  const velocities = useRef<Float32Array>()
  const connections = useRef<THREE.LineSegments>(null!)
  const linePositions = useRef<Float32Array>()
  const lineIndices = useRef<Uint16Array>()
  const maxConnections = 300 // Limit connections for performance

  // Initialize particles
  useEffect(() => {
    positions.current = new Float32Array(count * 3)
    velocities.current = new Float32Array(count * 3)
    linePositions.current = new Float32Array(maxConnections * 6) // 2 points per line, 3 values per point
    lineIndices.current = new Uint16Array(maxConnections * 2) // 2 indices per line

    // Initialize random positions and velocities
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions.current[i3] = (Math.random() - 0.5) * 15
      positions.current[i3 + 1] = (Math.random() - 0.5) * 15
      positions.current[i3 + 2] = (Math.random() - 0.5) * 15

      velocities.current[i3] = (Math.random() - 0.5) * 0.01
      velocities.current[i3 + 1] = (Math.random() - 0.5) * 0.01
      velocities.current[i3 + 2] = (Math.random() - 0.5) * 0.01
    }

    // Set initial positions
    mesh.current.geometry.setAttribute("position", new THREE.BufferAttribute(positions.current, 3))

    // Create line geometry
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions.current, 3))
    lineGeometry.setIndex(new THREE.BufferAttribute(lineIndices.current, 1))

    // Create line material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xaa44ff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    })

    // Create line mesh
    connections.current = new THREE.LineSegments(lineGeometry, lineMaterial)
    mesh.current.add(connections.current)
  }, [count])

  // Animation loop
  useFrame(() => {
    if (!positions.current || !velocities.current || !linePositions.current || !lineIndices.current) return

    // Update particle positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Update position based on velocity
      positions.current[i3] += velocities.current[i3]
      positions.current[i3 + 1] += velocities.current[i3 + 1]
      positions.current[i3 + 2] += velocities.current[i3 + 2]

      // Boundary check and bounce
      for (let j = 0; j < 3; j++) {
        if (Math.abs(positions.current[i3 + j]) > 7.5) {
          velocities.current[i3 + j] *= -1
        }
      }
    }

    // Update connections
    let connectionCount = 0
    for (let i = 0; i < count && connectionCount < maxConnections; i++) {
      const i3 = i * 3

      for (let j = i + 1; j < count && connectionCount < maxConnections; j++) {
        const j3 = j * 3

        // Calculate distance between particles
        const dx = positions.current[i3] - positions.current[j3]
        const dy = positions.current[i3 + 1] - positions.current[j3 + 1]
        const dz = positions.current[i3 + 2] - positions.current[j3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        // Create connection if particles are close enough
        if (distance < 2.5) {
          const c6 = connectionCount * 6
          const c2 = connectionCount * 2

          // Set line positions
          linePositions.current[c6] = positions.current[i3]
          linePositions.current[c6 + 1] = positions.current[i3 + 1]
          linePositions.current[c6 + 2] = positions.current[i3 + 2]
          linePositions.current[c6 + 3] = positions.current[j3]
          linePositions.current[c6 + 4] = positions.current[j3 + 1]
          linePositions.current[c6 + 5] = positions.current[j3 + 2]

          // Set line indices
          lineIndices.current[c2] = i
          lineIndices.current[c2 + 1] = j

          connectionCount++
        }
      }
    }

    // Update geometries
    mesh.current.geometry.attributes.position.needsUpdate = true
    connections.current.geometry.attributes.position.needsUpdate = true
    connections.current.geometry.index.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry />
      <pointsMaterial size={0.1} color={0xcc88ff} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </points>
  )
}

export function NeuralNetwork3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/20 via-black to-black"></div>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <NeuronParticles count={200} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} rotateSpeed={0.2} />
      </Canvas>
    </div>
  )
}
