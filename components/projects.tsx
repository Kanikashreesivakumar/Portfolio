"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "MINDSCRIBE -AI driven Thoughts to Text System",
    description: "A futuristic EEG prototype converting human Thoughts into Text",
    image: "/mind.png?height=400&width=600",
    tech: ["Next.js", "TailwindCSS", "NLP","Deepseek API","Supabase","vercel"],
    github: "https://github.com/Kanikashreesivakumar/mindscribe",
    live: "https://mindscribe-orpin.vercel.app/",
  },
  {
    title: "RECAUVA - physiotherapy platform",
    description: "Developed a webiste for localized physio appointment system with live seesion bookings and patient-therapist interaction",
    image: "/recauva.png?height=400&width=600",
    tech: ["Typescript", "mongodb", "Tailwind CSS","React","Vercel"],
    github: "https://github.com/Kanikashreesivakumar/Recauva",
    live: "https://www.recauva.com/",
  },
  {
    title: "AUTTONOTECH - Corporate website",
    description: "Developed a corporate website for Auttonotech Solutions with a focus on user experience and modern design.",
    image: "/auttono.png?height=400&width=600",
    tech: ["Supabase", "TailwindCSS", "Next.js","Vercel"],
    github: "https://github.com/Kanikashreesivakumar/auttonotech",
    live: "https://auttonotech-rose.vercel.app/",
  },
  {
    title: "HOPIN - AI Driven Real time campus event ride sharing",
    description: "AI-based ride matching system with seat booking, cost splitting and real time location tracking for campus events",
    image: "/hop.png?height=400&width=600",
    tech: ["Next.js", "TailwindCSS", "Mongodb","Google map API","Vercel","three.js"],
    github: "https://github.com/Kanikashreesivakumar/HOPIN",
    
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading glow-text"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  live?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div
        ref={cardRef}
        className="h-full rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-800/10 before:to-gray-900/10 before:rounded-xl before:z-[-1]"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-gray-800/60 border border-white/20 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              className="group relative overflow-hidden border-white/30 text-white hover:border-white/80 transition-colors"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10 flex items-center">
                  GitHub
                  <Github className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="group relative overflow-hidden border-white/30 text-white hover:border-white/80 transition-colors"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform" />
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-tl-xl blur-sm"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-tr-xl blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-bl-xl blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-br-xl blur-sm"></div>
      </div>
    </motion.div>
  )
}
