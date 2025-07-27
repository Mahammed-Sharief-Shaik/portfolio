"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code } from "lucide-react"

const projects = [
  {
    title: "doIT",
    description:
      "A comprehensive MERN stack todo application with user authentication, real-time updates, and intuitive task management. Features include priority levels, due dates, and collaborative workspaces.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Recharts"],
    image: "/doIT.png",
    frontendCode: "https://github.com/Mahammed-Sharief-Shaik/doIT-frontend",
    backendCode: "https://github.com/Mahammed-Sharief-Shaik/doIT-backend",
    liveDemo: "https://do-it-frontend-three.vercel.app",
  },
  {
    title: "Shopnest",
    description:
      "A modern e-commerce platform built with React, featuring product catalog, shopping cart, user profiles, and secure payment integration. Responsive design with smooth animations.",
    stack: ["React", "Redux", "Tailwind CSS"],
    image: "/shopnest.png",
    frontendCode: "https://github.com/Mahammed-Sharief-Shaik/shopnext",
    liveDemo: "https://shopnest-rust.vercel.app/",
  },
  {
    title: "Employee Data Generator",
    description:
      "A MEN stack application for generating and managing employee data with advanced filtering, export capabilities, and data visualization. Perfect for HR management and testing purposes.",
    stack: ["MongoDB", "Express.js", "Node.js"],
    image: "/emp.png",
    frontendCode: "https://github.com/Mahammed-Sharief-Shaik/Employee_Data_Generator",
    // No liveDemo or backendCode
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent"
        >
          Some Things I've Built
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group backdrop-blur-md bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/30 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-300">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium border border-sky-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.frontendCode && (
                    <a href={project.frontendCode} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-sky-400/50 text-sky-400 hover:bg-sky-400 hover:text-slate-900 text-xs bg-transparent"
                      >
                        <Code className="w-3 h-3 mr-1" />
                        Frontend
                      </Button>
                    </a>
                  )}

                  {project.backendCode && (
                    <a href={project.backendCode} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-sky-400/50 text-sky-400 hover:bg-sky-400 hover:text-slate-900 text-xs bg-transparent"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Backend
                      </Button>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full bg-sky-500 hover:bg-sky-600 text-white text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
