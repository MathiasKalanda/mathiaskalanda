"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Computer Science Graduate with a Passion for Modern Web
              Technologies
            </h3>

            <p className="text-gray-300 text-lg">
              I'm a recent Computer Science graduate with a Bachelor of Science
              degree, specializing in full-stack development. My journey in tech
              has equipped me with a diverse skill set ranging from modern
              frontend frameworks to robust backend solutions.
            </p>

            <p className="text-gray-300 text-lg">
              I specialize in building scalable web applications using
              cutting-edge technologies like Next.js, React, and Node.js. My
              experience includes working with various CMS platforms, e-commerce
              solutions, and cloud deployments.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold text-purple-400">Education</h4>
                <p className="text-gray-300">B.Sc. Computer Science</p>
                <p className="text-sm text-gray-400">
                  University Name • 2020-2024
                </p>
              </div>
              <div>
                <h4 className="font-bold text-purple-400">Experience</h4>
                <p className="text-gray-300">2+ Years Development</p>
                <p className="text-sm text-gray-400">Freelance & Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
