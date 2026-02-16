"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Mathias Kalanda</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Computer Science Graduate & Full Stack Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <Link
            href="https://github.com/MathiasKalanda"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail size={24} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="#about"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
