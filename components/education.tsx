"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const educationData = [
  {
    degree: "Bachelor of technology in Artificial Intelligence and Data Science",
    institution: "Excel engineering college || Affiliated to Anna University",
    date: "2022-2026  (Currently in pre-final year)",
    description: " Currently pursuing an honors degree with a CGPA of 86%, specializing in Machine Learning, Data Analytics, and AI-driven technologies — maintaining a clean academic record with no arrears",
  },
  {
    degree: "Higher Secondary Education (HSC)",
  institution: "Reliance Matric Higher Secondary School, Namakkal",
  date: "2020–2022",
  description: "Graduated with 86% marks, with a focus on Computer Science and Biology",
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading"
        >
          Academic Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationCard({ item, index }: { item: typeof educationData[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative h-full perspective"
    >
      <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
      <div
        ref={cardRef}
        className="relative h-full bg-black rounded-xl p-6 flex flex-col transform-style-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        {/* Glowing corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-tl-xl rounded-br-sm blur-sm"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-tr-xl rounded-bl-sm blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-bl-xl rounded-tr-sm blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-br-xl rounded-tl-sm blur-sm"></div>

        <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
          {item.degree}
        </h3>

        <h4 className="text-lg font-semibold mb-2 text-gray-300">{item.institution}</h4>
        <p className="text-sm text-white mb-4">{item.date}</p>
        <p className="text-gray-400 mt-auto">{item.description}</p>
      </div>
    </motion.div>
  )
}
