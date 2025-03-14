"use client"

import { useRef, useMemo, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { PointMaterial } from "@react-three/drei"
import * as THREE from "three"

// Generate random points in a 3D space with a spherical tendency
function generatePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = radius * Math.cbrt(Math.random()) // Cube root for more uniform distribution

    points[i3] = r * Math.sin(phi) * Math.cos(theta)
    points[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    points[i3 + 2] = r * Math.cos(phi)
  }

  return points
}

function ParticlesInstance({ count = 2000, size = 0.05, radius = 5 }) {
  const pointsRef = useRef<THREE.Points>(null)
  const [hovered, setHovered] = useState(false)
  const { mouse, viewport, size: canvasSize } = useThree()

  // Adjust particle count based on screen size
  const adjustedCount = useMemo(() => {
    const baseCount = count
    if (canvasSize.width < 768) return Math.floor(baseCount * 0.5)
    return baseCount
  }, [count, canvasSize.width])

  // Adjust particle size based on screen size
  const adjustedSize = useMemo(() => {
    if (canvasSize.width < 768) return size * 0.8
    return size
  }, [size, canvasSize.width])

  // Generate points only once
  const points = useMemo(() => generatePoints(adjustedCount, radius), [adjustedCount, radius])

  // Create a buffer geometry with the points
  const bufferGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(points, 3))
    return geometry
  }, [points])

  // Animation frame
  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()

    // Rotate the entire points system
    pointsRef.current.rotation.y = time * 0.1

    // Get the positions attribute for manipulation
    const positions = pointsRef.current.geometry.attributes.position

    // Animate each point
    for (let i = 0; i < adjustedCount; i++) {
      const i3 = i * 3

      // Get the original position
      const x = points[i3]
      const y = points[i3 + 1]
      const z = points[i3 + 2]

      // Calculate distance from mouse in normalized coordinates
      const mouseX = (mouse.x * viewport.width) / 2
      const mouseY = (mouse.y * viewport.height) / 2
      const dx = mouseX - x
      const dy = mouseY - y
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Apply a wave effect
      const angle = time * 0.5 + dist * 0.5
      const wave = Math.sin(angle) * 0.1

      // Apply hover effect - particles move away from mouse when hovered
      let hoverEffect = 0
      if (hovered && dist < 2) {
        hoverEffect = (1 - dist / 2) * 0.5
      }

      // Update positions with animation
      positions.setXYZ(
        i,
        x + (hovered ? dx * hoverEffect : 0) + Math.sin(time + i * 0.01) * 0.03,
        y + (hovered ? dy * hoverEffect : 0) + Math.cos(time + i * 0.01) * 0.03,
        z + wave,
      )
    }

    positions.needsUpdate = true
  })

  return (
    <points ref={pointsRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <primitive object={bufferGeometry} attach="geometry" />
      <PointMaterial transparent color="#8b5cf6" size={adjustedSize} sizeAttenuation={true} depthWrite={false} />
    </points>
  )
}

export default function ParticlesAnimation() {
  return <ParticlesInstance />
}

