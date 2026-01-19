"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, FileText, X, PhoneCall } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [showResume, setShowResume] = useState(false)
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  interface FormState {
    name: string
    email: string
    message: string
  }

  interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    
    
    const messageText = `
      New Message from Portfolio:
      Name: ${formState.name}
      Email: ${formState.email}
      Message: ${formState.message}
    `
  
    const whatsappUrl = `https://wa.me/917418761589?text=${encodeURIComponent(messageText)}`
    
    window.open(whatsappUrl, '_blank')
    
    
    setFormState({ name: "", email: "", message: "" })
    
    alert("Message sent! Redirecting to WhatsApp...")
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-heading"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
            <div className="relative bg-black rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                Get In Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full bg-black border-white/50 focus:border-white text-white shadow-md focus:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-shadow"
                    />
                    <div
                      className={`absolute inset-0 -z-10 bg-white/20 blur-sm opacity-0 transition-opacity ${focusedInput === "name" ? "opacity-100" : ""}`}
                    ></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      className="w-full bg-black border-white/50 focus:border-white text-white shadow-md focus:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-shadow"
                    />
                    <div
                      className={`absolute inset-0 -z-10 bg-white/20 blur-sm opacity-0 transition-opacity ${focusedInput === "email" ? "opacity-100" : ""}`}
                    ></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      required
                      rows={5}
                      className="w-full bg-black border-white/50 focus:border-white text-white shadow-md focus:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-shadow"
                    />
                    <div
                      className={`absolute inset-0 -z-10 bg-white/20 blur-sm opacity-0 transition-opacity ${focusedInput === "message" ? "opacity-100" : ""}`}
                    ></div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full group relative overflow-hidden border-white/50 bg-black text-white py-6 hover:border-white transition-all duration-300"
                >
                  <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center">Send Message</span>
                </Button>
              </form>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-tl-xl blur-sm"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-tr-xl blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-bl-xl blur-sm"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-br-xl blur-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
            <div className="relative bg-black rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                  Connect With Me
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-white mr-4" />
                  <span className="text-gray-300">kanikashreesivakumar16@gmail.com</span>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={() => setShowResume(true)}
                    className="group relative overflow-hidden border-white/50 bg-black text-white py-6 hover:border-white transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-300"></span>
                    <span className="relative z-10 flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      View Resume
                    </span>
                  </Button>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                  Find Me On
                </h4>

                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/Kanikashreesivakumar"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                    className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
                  >
                    <Github className="h-5 w-5 text-white relative z-10" />
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/kanikashree-sivakumar/"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                    className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
                  >
                    <Linkedin className="h-5 w-5 text-white relative z-10" />
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
                  </motion.a>

                  <motion.a
                    href="mailto:Kanikashreesivakumar16@gmail.com"
                    target="_blank"
                     rel="noopener noreferrer"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                    className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
                  >
                    <Mail className="h-5 w-5 text-white relative z-10" />
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
            className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/50 shadow-md transition-shadow relative"
          >
            <PhoneCall className="h-4 w-4 text-white relative z-10" />
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.a>
                </div>
              </div>

              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-tl-xl blur-sm"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-tr-xl blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-bl-xl blur-sm"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-br-xl blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>{showResume && <ResumeModal onClose={() => setShowResume(false)} />}</AnimatePresence>
    </section>
  )
}

function ResumeModal({ onClose }: { onClose: () => void }) {
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
        className="relative max-w-4xl w-full h-[80vh] bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-0.5 bg-white rounded-xl blur-sm opacity-20"></div>
        <div className="relative h-full p-1">
          <div className="bg-black rounded-xl h-full overflow-hidden">
            <iframe
              src="/kani%20resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full"
              title="Resume"
            ></iframe>
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
