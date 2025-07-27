"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="backdrop-blur-md bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
          >
            <h3 className="text-2xl font-bold mb-8 text-sky-300">Let's Connect</h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Email</p>
                  <p className="text-white font-medium">mahammedshariefsk@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <p className="text-white font-medium">+91-9381707017</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-700/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm">Location</p>
                  <p className="text-white font-medium">Tenali, Andhra Pradesh</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-slate-300 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Mahammed-Sharief-Shaik"
                  className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-sky-500/20 hover:text-sky-400 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/mahammed-sharief-shaik/"
                  className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-sky-500/20 hover:text-sky-400 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="backdrop-blur-md bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
          >
            <h3 className="text-2xl font-bold mb-8 text-sky-300">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500/20 resize-none"
                  required
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-slate-700/50"
        >
          <p className="text-slate-400">Made with 🤍 by <a className="text-sky-400" href="https://www.linkedin.com/in/mahammed-sharief-shaik/">Sharief</a></p>
        </motion.div>
      </div>
    </section>
  )
}
