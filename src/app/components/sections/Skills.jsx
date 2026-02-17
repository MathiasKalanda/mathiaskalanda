"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiShopify,
  SiVercel,
  SiSanity,
  SiExpress,
  SiRemix,
  SiMedusa,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiPrisma,
  SiFigma,
} from "react-icons/si";
import { TbApi, TbSeo, TbCloudComputing } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

// Categorized skills
const skillCategories = [
  {
    name: "Frontend",
    icon: BiCodeAlt,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90 },
      { name: "React", icon: SiReact, color: "#61DAFB", level: 85 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 88 },
      { name: "Remix", icon: SiRemix, color: "#ffffff", level: 75 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 82 },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        level: 90,
      },
    ],
  },
  {
    name: "Backend",
    icon: FaDatabase,
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "Node.js/Express",
        icon: SiNodedotjs,
        color: "#339933",
        level: 85,
      },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 80 },
      { name: "API Integration", icon: TbApi, color: "#FF6B6B", level: 88 },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 75 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 70 },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748", level: 78 },
    ],
  },
  {
    name: "E-commerce & CMS",
    icon: FaRocket,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Shopify", icon: SiShopify, color: "#7AB55C", level: 82 },
      { name: "Medusa", icon: SiMedusa, color: "#FF4D4D", level: 75 },
      { name: "Sanity.io", icon: SiSanity, color: "#F03E2F", level: 85 },
      { name: "SEO", icon: TbSeo, color: "#4CAF50", level: 80 },
      {
        name: "Domain Setup",
        icon: TbCloudComputing,
        color: "#FFA500",
        level: 85,
      },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: FaCloud,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#ffffff", level: 90 },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: 65 },
      { name: "Git", icon: FaCode, color: "#F05032", level: 88 },
      { name: "TanStack", icon: VscServerProcess, color: "#FF4154", level: 80 },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 75 },
    ],
  },
];

// Flatten skills for grid view
const allSkills = skillCategories.flatMap((cat) => cat.skills);

export default function Skills() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "categories"
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #4f4f4f 1px, transparent 1px),
            linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating tech orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-40 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-40 right-10 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
                _tech.stack
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-pink-500 to-transparent"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technical Arsenal
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
            Technologies and tools I use to bring ideas to life
          </p>

          {/* View Toggle */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("categories")}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                viewMode === "categories"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Categories
            </button>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedSkill(skill)}
                className="group relative cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>

                {/* Card */}
                <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center gap-3 h-full border border-gray-700 group-hover:border-transparent transition-all duration-300">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <skill.icon
                      className="w-10 h-10 relative z-10 transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Skill name */}
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                    {skill.name}
                  </span>

                  {/* Skill level indicator (hidden by default, show on hover) */}
                  {skill.level && (
                    <div className="w-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Categories View */}
        {viewMode === "categories" && (
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}
                    >
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                  </div>

                  {/* Category Skills */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + index * 0.02,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                        <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center gap-2 h-full border border-gray-700 group-hover:border-transparent transition-all duration-300">
                          <skill.icon
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                          />
                          <span className="text-xs text-center font-medium text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>

                          {/* Progress ring */}
                          <div className="absolute -top-1 -right-1 w-6 h-6">
                            <svg className="w-full h-full" viewBox="0 0 20 20">
                              <circle
                                cx="10"
                                cy="10"
                                r="8"
                                fill="none"
                                stroke="#374151"
                                strokeWidth="2"
                              />
                              <circle
                                cx="10"
                                cy="10"
                                r="8"
                                fill="none"
                                stroke={`url(#gradient-${index})`}
                                strokeWidth="2"
                                strokeDasharray={`${2 * Math.PI * 8}`}
                                strokeDashoffset={`${2 * Math.PI * 8 * (1 - skill.level / 100)}`}
                                transform="rotate(-90 10 10)"
                              />
                              <defs>
                                <linearGradient
                                  id={`gradient-${index}`}
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#a855f7" />
                                  <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Skill Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700"
        >
          <h4 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <FaShieldAlt className="text-purple-400" />
            <span>Skill Distribution</span>
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => {
              const avgLevel = Math.round(
                category.skills.reduce((acc, skill) => acc + skill.level, 0) /
                  category.skills.length,
              );
              const CategoryIcon = category.icon;

              return (
                <div key={category.name} className="text-center">
                  <div
                    className={`inline-flex p-3 bg-gradient-to-r ${category.color} rounded-lg mb-2`}
                  >
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {avgLevel}%
                  </div>
                  <div className="text-xs text-gray-400">{category.name}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Modal (if a skill is selected) */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4 mb-4">
                <selectedSkill.icon
                  className="w-12 h-12"
                  style={{ color: selectedSkill.color }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-purple-400">
                    Proficiency: {selectedSkill.level}%
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>

                <p className="text-gray-300">
                  Experienced in building production applications with{" "}
                  {selectedSkill.name}. Used in multiple projects including
                  e-commerce platforms, dashboards, and APIs.
                </p>

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
