"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-sky-400">
            MS
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-300 hover:text-sky-400 transition-colors duration-200"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
