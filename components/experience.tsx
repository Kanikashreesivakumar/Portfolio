"use client"

import { motion } from "framer-motion"
import { Calendar, Building } from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    title:"AIoT(AI+IoT) innovation intern",
    company: "Renault Nissan automotive india pvt ltd",
    duration: "june 2025 to july 2025",
    responsibilities: [
          "Developed and implemented AIoT-based solutions to enhance automation and quality assurance in automotive manufacturing.",
    "Integrated ArUco marker-based computer vision systems to automate component alignment and precision tracking within production lines.",
    "Designed and deployed 'KitKart' – a smart logistics and kit management system to optimize real-time inventory flow and part handling.",
    "Contributed to 'CanCap' – an AI-powered defect detection and cap misalignment recognition system using edge computing and image processing.",
    ]
  },
  {
    title: " Python developer intern",
    company: "NLC India Limited",
    duration: "January 2024 ",
    responsibilities: [
      "Developed and maintained Python applications for data analysis and automation",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions",
      "Implemented RESTful APIs and integrated with third-party services",
    ],
  },
  {
    title: "Cloud computing intern",
    company: "Tech Forge Solutions",
    duration: "july-2024",
    responsibilities: [
      "Assisted in deploying and managing cloud infrastructure on AWS",
      "Worked on serverless architecture using AWS Lambda and API Gateway",
      "Participated in cloud security assessments and best practices implementation",
    ],
  },
  {
    title: "Full Stack Developer intern",
    company: "Auttonotech Solutions",
    duration: "March 2025 - May 2025",
    responsibilities: [
      "Built and maintained client websites and web applications",
      "Implemented responsive designs and cross-browser compatibility",
      "Collaborated with designers and backend developers to deliver high-quality products",
    ],
  },
]

export default function Experience() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading"
        >
          Experience
        </motion.h2>

        <div className="relative">
        
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-white/70 via-white/50 to-white/30 rounded-full"></div>

          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Experience {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 30
    const rotateY = (centerX - x) / 30

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const resetRotation = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative mb-16 md:mb-24 ${
        index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
      } w-full md:w-[calc(50%-24px)]`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 md:left-auto md:right-0 transform translate-x-[-50%] md:translate-x-[50%] w-5 h-5 rounded-full bg-black border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.7)] z-10"
      ></motion.div>

      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)",
        }}
        className="relative ml-8 md:ml-0 perspective"
      >
        <div className="absolute -inset-0.5 bg-white/50 rounded-xl blur-sm opacity-20"></div>
        <div
          ref={cardRef}
          className="relative bg-black rounded-xl p-6 transform-style-3d"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
        >
          <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
            {experience.title}
          </h3>

          <div className="flex items-center mb-4">
            <Building className="h-4 w-4 text-white mr-2" />
            <span className="text-gray-300">{experience.company}</span>
          </div>

          <div className="flex items-center mb-6">
            <Calendar className="h-4 w-4 text-white mr-2" />
            <span className="text-gray-300">{experience.duration}</span>
          </div>

          <ul className="space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="text-gray-400 flex">
                <span className="text-white mr-2">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>

          <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-tl-xl blur-sm"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-tr-xl blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-bl-xl blur-sm"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-br-xl blur-sm"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
