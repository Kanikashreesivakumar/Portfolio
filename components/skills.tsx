"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Code, FileJson, Braces, Layers, Server, PenTool, Cpu, Wind } from "lucide-react"

const skills = [
  
 
  {
    name: "Next.js",
    level: 90,
    color: "from-gray-300 to-white",
    icon: Code,
    description: "Building server-rendered React applications with optimized performance",
  },
  {
    name: "flask",
    level: 80,
    color: "from-gray-300 to-white",
    icon: PenTool,
    description: "backend framework for building web applications and APIs",
  },
  {
    name: "Figma",
    level: 90,
    color: "from-gray-300 to-white",
    icon: PenTool,
    description: "Designing user interfaces and prototypes with collaborative tools",
  },
  {
    name: "v0.dev and other AI tools",
    level: 95,
    color: "from-gray-300 to-white",
    icon: Layers,
    description: "Building and deploying serverless applications with ease",
  },
  
  {
    name: "Git & GitHub",
    level: 85,
    color: "from-gray-300 to-white",
    icon: Braces,
    description: "Version control and collaboration for code management",
  },
  {
    name: "AI & ML",
    level: 95,
    color: "from-gray-300 to-white",
    icon: Cpu,
    description: "Implementing machine learning algorithms and models",
  },
  {
    name: "React",
    level: 80,
    color: "from-gray-300 to-white",
    icon: Layers,
    description: "Building interactive UIs with component-based architecture",
  },
 
  {
    name: "Python",
    level: 70,
    color: "from-gray-300 to-white",
    icon: Cpu,
    description: "Building data processing and automation solutions",
  },
  {
    name: "JavaScript",
    level: 90,
    color: "from-gray-300 to-white",
    icon: Braces,
    description: "Creating dynamic web applications with modern ES6+ features",
  },
  {
    name: "TypeScript",
    level: 85,
    color: "from-gray-300 to-white",
    icon: FileJson,
    description: "Developing type-safe applications with enhanced tooling",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    color: "from-gray-300 to-white",
    icon: Wind,
    description: "Creating responsive, utility-first designs with minimal CSS",
  },
  {
    name: "Tablueau",
    level: 95,
    color: "from-gray-300 to-white",
    icon: FileJson,
    description: "analyzing and presenting data in a clear and effective manner",
  },
  
  {
    name: "Vercel",
    level: 95,
    color: "from-gray-300 to-white",
    icon: Layers,
    description: "Deploying and hosting applications with serverless architecture",
  },

  {
    name: "Supabase",
    level: 90,
    color: "from-gray-300 to-white",
    icon: Server,
    description: "Building real-time applications with PostgreSQL and authentication",
  },
]

export default function Skills() {
  const [current, setCurrent] = useState(0)
  const controls = useAnimation()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    controls.start("visible")
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % skills.length)
    }, 2500) // Change skill every 2.5 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [controls])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading glow-text"
        >
          Skills
        </motion.h2>
        <SkillItem skill={skills[current]} index={current} controls={controls} />
        <div className="flex justify-center mt-6 space-x-2">
          {skills.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-500"}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to skill ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`col-${i}`} className="h-full w-px bg-white/10"></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`row-${i}`} className="w-full h-px bg-white/10"></div>
        ))}
      </div>

     
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full bg-white/5 border border-white/10"
          style={{
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

interface Skill {
  name: string
  level: number
  color: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

function SkillItem({ skill, index, controls }: { skill: Skill; index: number; controls: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const iconControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      iconControls.start("visible")
    }
  }, [isInView, controls, iconControls])

  // Alternate between different skill visualizations
  const SkillVisualization = () => {
    switch (index % 3) {
      case 0:
        return <BarSkill skill={skill} controls={controls} />
      case 1:
        return <CircleSkill skill={skill} controls={controls} />
      case 2:
        return <HexagonSkill skill={skill} controls={controls} />
      default:
        return <BarSkill skill={skill} controls={controls} />
    }
  }

  const IconComponent = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)",
      }}
      className="relative p-6 rounded-xl backdrop-blur-sm"
    >
      <div className="absolute -inset-0.5 bg-white/30 rounded-xl blur-sm opacity-20"></div>
      <div className="relative bg-black/60 rounded-xl p-6 border border-white/10">
        <div className="flex items-start mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={iconControls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
            className="relative mr-4 flex-shrink-0"
          >
            <div className="absolute -inset-1 rounded-xl bg-white/30 blur-md opacity-70 animate-pulse-slow"></div>
            <div className="relative w-12 h-12 rounded-xl bg-black border border-white/30 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <div>
            <h3 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-400">{skill.description}</p>
          </div>
        </div>

        <SkillVisualization />

        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-tl-xl blur-sm"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-tr-xl blur-sm"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-bl-xl blur-sm"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-br-xl blur-sm"></div>
      </div>
    </motion.div>
  )
}

function BarSkill({ skill, controls }: { skill: Skill; controls: any }) {
  return (
    <div>
      <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: {
              width: `${skill.level}%`,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
        >
          <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse-slow"></div>
        </motion.div>

        {/* Glowing effect for the progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 0.5,
              width: `${skill.level}%`,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          className="absolute top-0 left-0 h-full rounded-full bg-white blur-sm"
        ></motion.div>

        <div className="absolute top-0 right-0 -mt-8 text-right">
          <span className="text-white text-sm font-medium">{skill.level}%</span>
        </div>
      </div>
    </div>
  )
}

function CircleSkill({ skill, controls }: { skill: Skill; controls: any }) {
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (skill.level / 100) * circumference

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1f2937" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={controls}
            variants={{
              visible: {
                strokeDashoffset,
                transition: { duration: 1.5, ease: "easeOut" },
              },
            }}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e5e5e5" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 0.5,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          className="absolute inset-0 rounded-full border-8 border-white/20 blur-md"
          style={{
            clipPath: `circle(${skill.level}% at 50% 50%)`,
          }}
        ></motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{skill.level}%</span>
        </div>

        {/* Pulsing glow */}
        <div className="absolute inset-0 rounded-full bg-white/10 blur-xl animate-pulse-slow"></div>
      </div>
    </div>
  )
}

function HexagonSkill({ skill, controls }: { skill: Skill; controls: any }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: {
              width: `${skill.level}%`,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          className="h-full bg-gradient-to-r from-gray-300 to-white relative"
        >
          <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse-slow"></div>
        </motion.div>

        {/* Glowing effect for the progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 0.5,
              width: `${skill.level}%`,
              transition: { duration: 1.5, ease: "easeOut" },
            },
          }}
          className="absolute top-0 left-0 h-full rounded-full bg-white blur-sm"
        ></motion.div>
      </div>

      <div className="flex justify-between w-full">
        {[0, 20, 40, 60, 80, 100].map((mark) => (
          <div key={mark} className="flex flex-col items-center">
            <div className={`w-1 h-2 ${mark <= skill.level ? "bg-white" : "bg-gray-600"}`}></div>
            <span className="text-xs text-gray-500 mt-1">{mark}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
