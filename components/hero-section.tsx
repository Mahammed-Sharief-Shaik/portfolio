"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import InfinitySymbol from "@/components/infinity-symbol"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <InfinitySymbol />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-slate-900/30 rounded-3xl p-8 border border-slate-700/30"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent"
          >
            Hey, I'm Mahammed Sharief Shaik
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-sky-300 mb-6 font-medium"
          >
            Full-stack Developer | Problem Solver | AI Explorer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            A passionate developer building real-world web applications and exploring the potential of AI to make life
            easier. I'm currently diving into ML, building full-stack apps, and aiming to contribute to tech that
            empowers education and society.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
            >
              See My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
