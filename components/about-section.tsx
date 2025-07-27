"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-slate-800/30 rounded-3xl p-8 border border-slate-700/30"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-slate-300 leading-relaxed space-y-6"
          >
            <p>
              I'm a passionate full-stack developer with a deep love for creating innovative web applications that solve
              real-world problems. My journey in tech started with curiosity about how things work, and it has evolved
              into a mission to build technology that makes a meaningful impact.
            </p>

            <p>
              Currently, I'm exploring the fascinating world of Machine Learning and AI, combining it with my full-stack
              development skills to create intelligent applications. My goal is to contribute to educational technology
              that empowers learning and helps bridge the digital divide.
            </p>

            <p>
              When I'm not coding, you'll find me researching the latest tech trends, contributing to open-source
              projects, or planning my next big idea. I dream of working with top tech companies where I can push the
              boundaries of what's possible with technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["Learn", "Solve", "Innovate"].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="px-4 py-2 bg-sky-500/20 text-sky-300 rounded-full text-sm font-medium border border-sky-500/30"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
