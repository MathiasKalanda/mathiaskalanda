"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  Award,
  Calendar,
  MapPin,
  Heart,
  Coffee,
  Gamepad2,
  BookOpen,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");
  const constraintsRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Stats data
  const stats = [
    { label: "Projects Completed", value: "15+", icon: Code2 },
    { label: "Years Experience", value: "2+", icon: Briefcase },
    { label: "Technologies", value: "20+", icon: Sparkles },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
  ];

  // Timeline data
  const timeline = {
    education: [
      {
        year: "2020 - 2024",
        title: "B.Sc. Computer Science",
        institution: "University of Technology",
        description:
          "Graduated with honors. Specialized in Web Technologies and Distributed Systems.",
        achievements: [
          "GPA: 3.8/4.0",
          "Dean's List 2022-2024",
          "Capstone Project Excellence Award",
        ],
      },
      {
        year: "2018 - 2020",
        title: "High School Diploma",
        institution: "Science & Technology High School",
        description:
          "Focused on Mathematics and Computer Science fundamentals.",
        achievements: ["Valedictorian", "National Science Fair Finalist"],
      },
    ],
    experience: [
      {
        year: "2023 - Present",
        title: "Full Stack Developer",
        institution: "Freelance",
        description: "Building modern web applications for clients worldwide.",
        achievements: [
          "Delivered 10+ production apps",
          "100% client satisfaction",
          "Specialized in e-commerce",
        ],
      },
      {
        year: "2022 - 2023",
        title: "Frontend Developer Intern",
        institution: "Tech Startup Inc.",
        description:
          "Worked on React/Next.js applications and component libraries.",
        achievements: [
          "Built 5+ major features",
          "Improved performance by 40%",
          "Mentored 2 junior devs",
        ],
      },
    ],
  };

  // Hobbies
  const hobbies = [
    { icon: Gamepad2, name: "Gaming", color: "from-purple-500 to-pink-500" },
    { icon: BookOpen, name: "Reading", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, name: "Open Source", color: "from-red-500 to-orange-500" },
    {
      icon: Coffee,
      name: "Coffee Brewing",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-pink-900/20"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Cyber Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              <span className="text-purple-400 font-mono text-sm">
                _about.me
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-pink-500 to-transparent"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Image with cyberpunk frame */}
            <div ref={constraintsRef} className="relative group">
              {/* Animated border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900">
                <Image
                  src="/profile.jpg"
                  alt="Mathias Kalanda"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with tech pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pink-400"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-400"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Bio with typing effect */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold flex items-center space-x-2">
                <span className="text-purple-400">{"{"}</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mathias Kalanda
                </span>
                <span className="text-pink-400">{"}"}</span>
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                A passionate{" "}
                <span className="text-purple-400">
                  Computer Science graduate
                </span>{" "}
                with a Bachelor's degree and a burning desire to build
                exceptional digital experiences. I blend creative design with
                technical precision to craft web applications that are not just
                functional, but memorable.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech started with curiosity and evolved into
                expertise across
                <span className="text-pink-400"> full-stack development</span>,
                from crafting intuitive interfaces with React and Next.js to
                building robust backend systems with Node.js and PostgreSQL.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-2 border-b border-gray-800 pb-2">
              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-purple-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="space-y-6">
              {timeline[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:ring-4 before:ring-purple-500/20"
                >
                  <div className="absolute left-1 top-5 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500"></div>

                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm font-mono text-purple-400">
                        {item.year}
                      </span>
                      <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-300">
                        {activeTab === "education" ? (
                          <GraduationCap size={12} className="inline mr-1" />
                        ) : (
                          <Briefcase size={12} className="inline mr-1" />
                        )}
                        {activeTab === "education" ? "Education" : "Experience"}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-purple-400 mb-3">{item.institution}</p>
                    <p className="text-gray-400 mb-4">{item.description}</p>

                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <Award size={14} className="text-purple-400" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hobbies/Skills Tags */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Beyond the Code</span>
              </h4>

              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => {
                  const Icon = hobby.icon;
                  return (
                    <motion.div
                      key={hobby.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`px-4 py-2 bg-gradient-to-r ${hobby.color} rounded-full text-white text-sm font-medium flex items-center space-x-2 cursor-default`}
                    >
                      <Icon size={14} />
                      <span>{hobby.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} className="text-purple-400" />
                <span>Kampala Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
