"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Background from "@/components/background"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollIndicator from "@/components/scroll-indicator"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Background />

      <div ref={scrollRef} className="relative z-10 snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
        <div className="snap-start snap-always h-screen">
          <Hero />
          <ScrollIndicator />
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <About />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Education />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Certifications />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Skills />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Experience />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Projects />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Services />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Contact />
          </motion.div>
        </div>

        <div className="snap-start snap-always min-h-[50vh]">
          <Footer />
        </div>
      </div>
    </div>
  )
}
