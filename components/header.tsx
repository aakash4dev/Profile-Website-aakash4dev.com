"use client"

import { motion } from "framer-motion"

export function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Aakash</h1>
            <p className="text-xl text-muted-foreground">Full Stack Developer & Tech Enthusiast</p>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 animate-spin-slow" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J0vuKv11ebiVWrb1hvpghX1RBMFg4e.png"
                alt="Profile"
                className="relative rounded-full w-full h-full object-cover border-4 border-background"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

