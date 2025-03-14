"use client"

import { Suspense, useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import Three.js components
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
})

const DynamicFloatingBoxes = dynamic(() => import("./floating-boxes"), {
  ssr: false,
})

export default function ThreeScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="w-full h-full bg-black"></div>
  }

  return (
    <Suspense fallback={<div className="w-full h-full bg-black"></div>}>
      <DynamicCanvas shadows camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <DynamicFloatingBoxes />
      </DynamicCanvas>
    </Suspense>
  )
}

