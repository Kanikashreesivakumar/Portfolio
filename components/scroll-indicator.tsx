"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  const scrollToNext = () => {
    const nextSection = document.querySelector('.snap-start:nth-child(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={scrollToNext}
      onMouseEnter={scrollToNext}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="relative hover:scale-110 transition-transform flex flex-column justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-white blur-md opacity-50"></div>
        <ChevronDown className="h-8 w-8 text-white relative z-10" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-xs text-gray-400 mt-2 text-center"
      >
        Scroll to explore
      </motion.p>
    </div>
  )
}
