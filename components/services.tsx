"use client"

import { motion } from "framer-motion"
import { Code, Palette, Globe, Layers } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    title: "Web Development",
    description: "Creating responsive, modern websites with cutting-edge technologies",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces",
    icon: Palette,
  },
  {
    title: "3D Web Experiences",
    description: "Building immersive 3D experiences for the web using Three.js",
    icon: Layers,
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development from frontend to backend",
    icon: Globe,
  },
]

export default function Services() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetRotation = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="relative h-full perspective"
    >
      <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
      <div
        ref={cardRef}
        className="relative h-full bg-black rounded-xl p-6 flex flex-col items-center text-center transform-style-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-700 to-white/30 flex items-center justify-center mb-6 relative">
          <service.icon className="h-8 w-8 text-white" />
          <div className="absolute inset-0 rounded-full bg-white/20 blur-md animate-pulse-slow"></div>
        </div>

        <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          {service.title}
        </h3>

        <p className="text-gray-400">{service.description}</p>

        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-tl-xl blur-sm"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-tr-xl blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-bl-xl blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-br-xl blur-sm"></div>
      </div>
    </motion.div>
  )
}
