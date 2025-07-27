"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Python", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Java", color: "bg-red-500" },
      { name: "C++", color: "bg-purple-500" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "React", color: "bg-cyan-500" },
      { name: "Next.js", color: "bg-slate-700" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "Express.js", color: "bg-gray-600" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "JWT", color: "bg-purple-600" },
      // { name: "PostgreSQL", color: "bg-blue-700" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", color: "bg-orange-500" },
      { name: "GitHub", color: "bg-pink-500" },
      { name: "VS Code", color: "bg-blue-500" },
      { name: "OCI", color: "bg-red-500" },
      // { name: "Linux", color: "bg-yellow-600" },
      // { name: "Docker", color: "bg-blue-500" },
      // { name: "AWS", color: "bg-orange-400" },
      { name: "Vercel", color: "bg-slate-800" },
      // { name: "Firebase", color: "bg-yellow-500" },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="backdrop-blur-md bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-sky-300">{category.title}</h3>

              <div className="overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, -100, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="flex gap-4 w-max"
                >
                  {[...category.skills, ...category.skills].map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex items-center gap-3 px-6 py-3 bg-slate-700/50 rounded-full border border-slate-600/50 hover:border-sky-500/50 transition-all duration-300 whitespace-nowrap"
                    >
                      <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
