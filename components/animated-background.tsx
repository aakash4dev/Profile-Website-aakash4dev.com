"use client"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const boxes = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    rotate: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
  }))

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="absolute w-32 h-32 bg-primary/5 rounded-lg"
          style={{
            left: `${25 + box.x}%`,
            top: `${25 + box.y}%`,
          }}
          animate={{
            rotate: [box.rotate, box.rotate + 360],
            scale: [box.scale, box.scale * 1.2, box.scale],
            x: [box.x, box.x + 50, box.x],
            y: [box.y, box.y - 50, box.y],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

