"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, X } from "lucide-react"

const certifications = [
  {
    title: "Certified Frontend Developer",
    issuer: "Tech Academy",
    date: "March 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Advanced React Specialist",
    issuer: "React Masters",
    date: "January 2025",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Three.js & WebGL Expert",
    issuer: "3D Web Institute",
    date: "November 2024",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Design School",
    date: "August 2024",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

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
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} index={index} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && <CertificationModal certification={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </section>
  )
}

function CertificationCard({ certification, index, onClick }) {
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
      className="relative cursor-pointer perspective"
      onClick={onClick}
    >
      <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
      <div
        ref={cardRef}
        className="relative bg-black rounded-xl p-6 flex flex-col items-center transform-style-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-700 to-white/30 flex items-center justify-center mb-6">
          <Award className="h-8 w-8 text-white" />
        </div>

        <h3 className="text-xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          {certification.title}
        </h3>

        <p className="text-gray-300 text-center mb-1">{certification.issuer}</p>
        <p className="text-white text-sm">{certification.date}</p>

        <div className="mt-4 text-sm text-gray-400">Click to view</div>

        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-tl-xl blur-sm"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-tr-xl blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-bl-xl blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-br-xl blur-sm"></div>
      </div>
    </motion.div>
  )
}

function CertificationModal({ certification, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-3xl w-full bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
        <div className="relative p-1">
          <div className="bg-black rounded-xl overflow-hidden">
            <div className="relative aspect-video w-full">
              <img
                src={certification.image || "/placeholder.svg"}
                alt={certification.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                {certification.title}
              </h3>
              <p className="text-gray-300 mb-1">{certification.issuer}</p>
              <p className="text-white">{certification.date}</p>

              <div className="mt-4 p-4 bg-black/50 rounded-lg border border-white/20">
                <h4 className="text-lg font-semibold mb-2 text-gray-300">Certificate Details</h4>
                <p className="text-gray-400 mb-2">
                  This certificate validates expertise in {certification.title.toLowerCase()} and related technologies.
                </p>
                <p className="text-gray-400">Credential ID: CERT-{Math.floor(Math.random() * 10000)}</p>
              </div>
            </div>
          </div>

          <button
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-tl-xl blur-sm"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-tr-xl blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-white rounded-bl-xl blur-sm"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-br-xl blur-sm"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
