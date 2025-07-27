"use client"

import { motion } from "framer-motion"

export default function InfinitySymbol() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Main Infinity Symbol Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative"
      >
        {/* Central Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 blur-3xl bg-sky-400/30 rounded-full"
          style={{ width: "800px", height: "400px", left: "-150px", top: "-75px" }}
        />

        {/* Radial Light Beams from Infinity Symbol */}
        <div className="absolute inset-0" style={{ width: "500px", height: "250px" }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`radial-${i}`}
              className="absolute bg-gradient-to-r from-sky-400/20 via-sky-300/40 to-transparent"
              style={{
                width: "400px",
                height: "2px",
                left: "250px",
                top: "125px",
                transformOrigin: "0 50%",
                transform: `rotate(${i * 30}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Diagonal Light Beams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`diagonal-${i}`}
              className="absolute bg-gradient-to-br from-sky-400/10 via-sky-300/20 to-transparent"
              style={{
                width: "600px",
                height: "3px",
                left: `${-100 + i * 80}px`,
                top: `${-50 + i * 40}px`,
                transform: `rotate(${-45 + i * 15}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                x: [-200, 200, -200],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Infinity Symbol SVG */}
        <motion.svg
          width="500"
          height="250"
          viewBox="0 0 500 250"
          className="relative z-10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="25%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="1" />
              <stop offset="75%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Glow Path */}
          <motion.path
            d="M 125 125 C 125 75, 175 75, 175 125 C 175 175, 225 175, 225 125 C 225 75, 275 75, 275 125 C 275 175, 325 175, 325 125 C 325 75, 375 75, 375 125"
            fill="none"
            stroke="url(#infinityGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            opacity="0.6"
          />

          {/* Main Path */}
          <motion.path
            d="M 125 125 C 125 75, 175 75, 175 125 C 175 175, 225 175, 225 125 C 225 75, 275 75, 275 125 C 275 175, 325 175, 325 125 C 325 75, 375 75, 375 125"
            fill="none"
            stroke="url(#infinityGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#innerGlow)"
            animate={{
              strokeDasharray: ["0 1000", "1000 0", "0 1000"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Inner Bright Path */}
          <motion.path
            d="M 125 125 C 125 75, 175 75, 175 125 C 175 175, 225 175, 225 125 C 225 75, 275 75, 275 125 C 275 175, 325 175, 325 125 C 325 75, 375 75, 375 125"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* Energy Particles flowing along the infinity path */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-sky-400 rounded-full shadow-lg shadow-sky-400/50"
            style={{
              left: "125px",
              top: "125px",
            }}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.7,
              ease: "linear",
            }}
            style={{
              offsetPath:
                "path('M 125 125 C 125 75, 175 75, 175 125 C 175 175, 225 175, 225 125 C 225 75, 275 75, 275 125 C 275 175, 325 175, 325 125 C 325 75, 375 75, 375 125')",
              offsetRotate: "0deg",
            }}
          />
        ))}

        {/* Vertical Light Beams */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-sky-400/20 to-transparent"
            style={{
              width: "2px",
              height: "100vh",
              left: `${150 + i * 50}px`,
              top: "-50vh",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Pulsing Light Orbs at intersection points */}
        <motion.div
          className="absolute w-8 h-8 bg-sky-400/60 rounded-full blur-sm"
          style={{ left: "242px", top: "117px" }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Energy Wisps */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`wisp-${i}`}
            className="absolute w-1 h-1 bg-sky-300 rounded-full"
            style={{
              left: `${100 + Math.random() * 300}px`,
              top: `${50 + Math.random() * 150}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Background Ambient Light */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-sky-400/5 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
