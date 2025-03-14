"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Box({ position, size, color, speed }) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!mesh.current) return

    // Rotate the box
    mesh.current.rotation.x += 0.01 * speed
    mesh.current.rotation.y += 0.01 * speed

    // Make the box float up and down
    const time = state.clock.getElapsedTime()
    mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.5
  })

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}

export default function FloatingBoxes() {
  // Generate random boxes
  const boxes = useMemo(() => {
    const temp = []
    const count = 10 // Reduced count for better performance

    for (let i = 0; i < count; i++) {
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5, // Push boxes back in z-space
      ]

      const size = Math.random() * 1.5 + 0.5
      const color = new THREE.Color().setHSL(
        Math.random() * 0.2 + 0.5, // Purple to pink hue range
        0.7,
        0.5,
      )
      const speed = Math.random() * 0.5 + 0.5

      temp.push({ position, size, color, speed })
    }

    return temp
  }, [])

  return (
    <>
      {boxes.map((box, i) => (
        <Box key={i} position={box.position} size={box.size} color={box.color} speed={box.speed} />
      ))}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
    </>
  )
}

