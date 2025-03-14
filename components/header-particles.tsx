"use client"

import { Suspense, useRef, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// Dynamically import the Canvas component
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})

// Dynamically import our ParticlesAnimation component
const DynamicParticlesAnimation = dynamic(() => import("./particles-animation"), {
  ssr: false,
})

export default function HeaderParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    // Initial dimensions
    updateDimensions()

    // Update dimensions on resize
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <Suspense fallback={<div className="w-full h-full bg-black"></div>}>
        {dimensions.width > 0 && (
          <DynamicCanvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            style={{ width: "100%", height: "100%" }}
            dpr={[1, 2]} // Responsive pixel ratio
          >
            <ambientLight intensity={0.5} />
            <DynamicParticlesAnimation />
          </DynamicCanvas>
        )}
      </Suspense>
    </motion.div>
  )
}

