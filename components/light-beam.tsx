"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LightBeam() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main light beam */}
      <motion.div
        className="absolute top-0 w-1 h-full opacity-80"
        style={{
          left: "60%",
          background:
            "linear-gradient(180deg, transparent 0%, #06b6d4 20%, #8b5cf6 50%, #06b6d4 80%, transparent 100%)",
          filter: "blur(2px)",
          boxShadow: "0 0 20px #06b6d4, 0 0 40px #8b5cf6, 0 0 60px #06b6d4",
        }}
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Secondary light beam */}
      <motion.div
        className="absolute top-0 w-0.5 h-full opacity-60"
        style={{
          left: "60.5%",
          background:
            "linear-gradient(180deg, transparent 0%, #ffffff 30%, #06b6d4 50%, #ffffff 70%, transparent 100%)",
          filter: "blur(1px)",
          boxShadow: "0 0 10px #ffffff, 0 0 20px #06b6d4",
        }}
        animate={{
          scaleY: [1, 1.1, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Flowing particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70"
          style={{
            left: `${58 + Math.random() * 4}%`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 4px #06b6d4",
          }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Glow effect around the name */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-30"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, #8b5cf6 30%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Interactive light following mouse */}
      <motion.div
        className="absolute w-32 h-32 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(20px)",
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Side flowing effect */}
      <motion.div
        className="absolute top-1/2 left-3/5 w-64 h-0.5 opacity-60"
        style={{
          background: "linear-gradient(90deg, #8b5cf6, #06b6d4, transparent)",
          filter: "blur(2px)",
          boxShadow: "0 0 10px #06b6d4",
        }}
        animate={{
          scaleX: [0, 1, 0],
          x: [0, 100, 200],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}
