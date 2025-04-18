"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading text-glow"
        >
          The Person Behind the Pixels
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)",
          }}
          className="relative z-10"
        >
          <div className="absolute -inset-0.5 bg-white rounded-2xl blur-sm opacity-20"></div>
          <div className="relative bg-black p-8 rounded-2xl border border-white/20 shadow-xl overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 animate-gradient-slow"></div>
            </div>

            {/* Glowing corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-tl-xl rounded-br-xl blur-sm"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-tr-xl rounded-bl-xl blur-sm"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-white rounded-bl-xl rounded-tr-xl blur-sm"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-br-xl rounded-tl-xl blur-sm"></div>

            <div className="relative z-10">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a creative Aspiring AI Developer, passionate about transforming bold ideas into intelligent, elegant digital experiences. As an Artificial Intelligence and Data Science (AIDS) student, I specialize in blending low-code development, human-centered UI/UX design, and data-driven storytelling with the evolving power of AI. From crafting seamless interfaces to decoding complex data patterns and building adaptive, smart applications — I thrive at the crossroads of creativity, technology, and machine intelligence. My approach is driven by curiosity and purpose: to design experiences that not only function but truly connect and inspire. Always learning, always innovating — I’m here to shape the future, one intelligent interaction at a time.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or refining my skills through continuous learning. I believe in the power of technology to transform
                ideas into impactful experiences that resonate with users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
