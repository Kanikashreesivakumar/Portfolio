"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Creative developer blending 3D, motion, and elegance into code."

  useEffect(() => {
    let currentIndex = 0
    let interval: NodeJS.Timeout

    if (currentIndex < fullText.length) {
      interval = setInterval(() => {
        setText(fullText.substring(0, currentIndex + 1))
        currentIndex++

        if (currentIndex >= fullText.length) {
          clearInterval(interval)
        }
      }, 50)
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl mb-4 text-gray-300 font-light tracking-wide"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Welcome! I'm</span>
        </motion.h2>

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tight font-heading"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white glow-text">
                K4ni'z
              </span>
              <span className="absolute inset-0 z-0 blur-md bg-gradient-to-r from-gray-300/30 to-white/30 opacity-70 transform translate-y-1"></span>
              <span className="absolute inset-0 z-0 blur-sm bg-gradient-to-r from-gray-300/20 to-white/20 opacity-50 transform -translate-y-1"></span>
            </span>
          </motion.h1>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl mb-2 text-gray-300 font-light"
        >
          Kanikashree Sivakumar
        </motion.h3>

        <div className="h-20 mt-8">
          <p className="text-lg text-gray-300 font-light">
            {text}
            <span className={`inline-block w-2 h-5 ml-1 bg-white ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <a
            href="https://github.com/k4niz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black border border-white/30 hover:border-white/80 transition-all group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-300"></span>
            <Github className="mr-2 h-5 w-5 text-white" />
            <span className="relative z-10 text-white">GitHub</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ top: `${10 + i * 20}%` }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ top: `${20 + i * 20}%` }}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  )
}
