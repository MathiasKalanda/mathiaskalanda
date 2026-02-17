"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";
  const containerRef = useRef(null);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          containerRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setTypedText("");
          i = 0;
        }, 3000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"
      />
      <motion.div
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute top-40 right-40 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">
              Computer Science Graduate
            </span>
          </div>
        </motion.div>

        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mathias Kalanda
              </span>
              {/* Glitch effect layers */}
              <span className="absolute top-0 left-0 -translate-x-[2px] -translate-y-[2px] z-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent opacity-50 blur-[2px] animate-glitch-1">
                Mathias Kalanda
              </span>
              <span className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] z-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-50 blur-[2px] animate-glitch-2">
                Mathias Kalanda
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Title with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-gray-300 font-mono">
            <span className="text-purple-400">{"<"}</span>
            {typedText}
            <span className="animate-pulse text-purple-400">|</span>
            <span className="text-pink-400">{"/>"}</span>
          </h2>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "Tailwind",
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm text-gray-300 hover:text-purple-300 hover:border-purple-500 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-8 mb-10"
        >
          {[
            { icon: Code2, label: "Projects", value: "15+" },
            { icon: Award, label: "Experience", value: "2+ Years" },
            { icon: Zap, label: "Commits", value: "1k+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links with Cool Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            {
              href: "https://github.com/MathiasKalanda",
              icon: Github,
              label: "GitHub",
              color: "hover:bg-gray-700",
            },
            {
              href: "https://linkedin.com/in/mathiaskalanda",
              icon: Linkedin,
              label: "LinkedIn",
              color: "hover:bg-blue-600",
            },
            {
              href: "mailto:mathias@example.com",
              icon: Mail,
              label: "Email",
              color: "hover:bg-red-600",
            },
          ].map((social, i) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={social.href}
                target="_blank"
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <div
                  className={`relative p-4 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-purple-500 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={24} className="relative z-10" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          {/* View My Work Button - Simple */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-block"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Download Resume Button with Sliding Overlay */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/resume.pdf"
              className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 rounded-lg text-white font-medium overflow-hidden"
            >
              {/* Background (visible when overlay slides out) */}
              <span className="relative z-10">Download Resume</span>

              {/* Sliding overlay - covers button on hover */}
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "100%" }} // Start hidden on the right
                whileHover={{ x: 0 }} // Slide in from right on hover
                transition={{ duration: 0.3 }}
                style={{ zIndex: 5 }}
              /> */}

              {/* Text appears above overlay on hover */}
              <span className="absolute inset-0 flex items-center justify-center z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Download Resume
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors group"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
