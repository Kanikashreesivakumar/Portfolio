"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, PhoneCallIcon } from "lucide-react"
import { useRef } from "react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/20 relative overflow-hidden">
      {/* Particle effect */}
      <ParticleEffect />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center mb-4"
        >
          <span className="text-gray-300">Built with</span>
          <Heart className="h-4 w-4 text-white mx-2 animate-pulse" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">by K4ni'z</span>
        </motion.div>

        <div className="flex space-x-4 mb-6">
          <motion.a
            href="https://github.com/Kanikashreesivakumar"
            whileHover={{
              y: -5,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
          >
            <Github className="h-4 w-4 text-white relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kanikashree-sivakumar/"
            whileHover={{
              y: -5,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
          >
            <Linkedin className="h-4 w-4 text-white relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.a>

          <motion.a
            href="mailto:kanikashreesivakumar16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -5,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
          >
            <Mail className="h-4 w-4 text-white relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.a>
          <motion.a
            href="tel:+917418761589"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -5,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
            }}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
          >
            <PhoneCallIcon className="h-4 w-4 text-white relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.a>
        </div>

        <p className="text-white text-sm text-center">
          © {new Date().getFullYear()} Kanikashree Sivakumar. All rights reserved.
        </p>

        <div className="mt-4 relative">
          <div className="absolute -inset-0.5 bg-white/30 rounded-full blur-sm opacity-20"></div>
          <p className="relative bg-black px-4 py-2 rounded-full text-white text-sm italic">
            "Turning imagination into immersive digital experiences"
          </p>
        </div>
      </div>
    </footer>
  )
}

function ParticleEffect() {
  const particlesRef = useRef([])

  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    color: "bg-white",
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} opacity-30 blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
