"use client"

import { useEffect, useState } from "react"
import type * as THREE from "three"

export function useThree() {
  const [three, setThree] = useState<typeof THREE | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadThree = async () => {
      try {
        const THREE = await import("three")
        if (isMounted) {
          setThree(THREE)
        }
      } catch (error) {
        console.error("Failed to load Three.js:", error)
      }
    }

    loadThree()

    return () => {
      isMounted = false
    }
  }, [])

  return three
}

