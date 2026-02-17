"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronRight,
  Code2,
  Sparkles,
  Star,
  GitFork,
  Eye,
  Calendar,
  Tag,
  X,
} from "lucide-react";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { MdMonitor } from "react-icons/md";

// Add tech colors for badges
const techColors = {
  "Next.js": "from-black to-gray-800",
  React: "from-cyan-500 to-blue-500",
  Medusa: "from-red-500 to-pink-500",
  "Tailwind CSS": "from-cyan-400 to-blue-400",
  PostgreSQL: "from-blue-600 to-indigo-600",
  Stripe: "from-purple-600 to-pink-600",
  Redis: "from-red-600 to-orange-600",
  "Sanity.io": "from-red-500 to-orange-500",
  TypeScript: "from-blue-500 to-indigo-500",
  GROQ: "from-green-500 to-emerald-500",
  "TanStack Query": "from-pink-500 to-rose-500",
  "Node.js": "from-green-600 to-emerald-600",
  Express: "from-gray-700 to-gray-900",
  "Socket.io": "from-gray-600 to-slate-700",
  "Chart.js": "from-orange-500 to-yellow-500",
  Shopify: "from-green-500 to-teal-500",
  GraphQL: "from-pink-600 to-purple-600",
  Oxygen: "from-blue-500 to-cyan-500",
  JWT: "from-yellow-500 to-orange-500",
  Swagger: "from-green-500 to-lime-500",
  Jest: "from-red-600 to-rose-600",
  Remix: "from-black to-gray-800",
  MDX: "from-orange-600 to-red-600",
  Prisma: "from-blue-600 to-indigo-600",
  SQLite: "from-blue-400 to-cyan-400",
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const constraintsRef = useRef(null);

  const filters = [
    { id: "all", label: "All Projects", icon: Code2 },
    { id: "featured", label: "Featured", icon: Sparkles },
    { id: "ecommerce", label: "E-Commerce", icon: Tag },
    { id: "cms", label: "CMS", icon: FaDatabase },
    { id: "fullstack", label: "Full Stack", icon: GitFork },
    { id: "backend", label: "Backend", icon: FaServer },
    { id: "frontend", label: "Frontend", icon: MdMonitor },
  ];
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "ecommerce") return project.category === "ecommerce";
    if (filter === "fullstack") return project.category === "fullstack";
    return true;
  });

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section
      id="projects"
      ref={constraintsRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #4f4f4f 1px, transparent 1px),
            linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating project cards background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-40 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-xl border border-purple-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              <span className="text-purple-400 font-mono text-sm">
                _portfolio
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-pink-500 to-transparent"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Work
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Real-world projects that solve problems and showcase technical
            excellence
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => {
            const Icon = f.icon;
            return (
              <motion.button
                key={f.id}
                onClick={() => setFilter(f.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === f.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-800/50 backdrop-blur-sm text-gray-400 hover:text-white border border-gray-700 hover:border-purple-500"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon size={16} />
                  <span>{f.label}</span>
                </div>

                {/* Glow effect on active */}
                {filter === f.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10 blur-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  {/* Card Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredProject === project.id ? 0.6 : 0,
                      scale: hoveredProject === project.id ? 1.05 : 1,
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl transition-opacity duration-300"
                  />

                  {/* Main Card */}
                  <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 group-hover:border-purple-500 transition-all duration-500">
                    {/* Project Image with Overlay */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.div
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ x: 100 }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs text-white font-medium"
                        >
                          <Sparkles size={12} />
                          <span>Featured</span>
                        </motion.div>
                      )}

                      {/* Category Tag */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-1 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-gray-700">
                        <Tag size={12} className="text-purple-400" />
                        <span>{project.category || "Full Stack"}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack with Colored Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${
                              techColors[tech] || "from-gray-700 to-gray-800"
                            } text-white border border-gray-600 shadow-lg`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-300">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Project Stats */}
                      <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="text-yellow-400" />
                          <span>{project.stars || "12"}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork size={14} className="text-purple-400" />
                          <span>{project.forks || "8"}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye size={14} className="text-blue-400" />
                          <span>{project.views || "234"}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} className="text-green-400" />
                          <span>{project.year || "2024"}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group/btn"
                          >
                            <Github
                              size={18}
                              className="text-gray-300 group-hover/btn:text-white"
                            />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group/btn"
                          >
                            <ExternalLink
                              size={18}
                              className="text-gray-300 group-hover/btn:text-white"
                            />
                          </motion.a>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors group/btn"
                        >
                          <span className="text-sm font-medium">
                            View Details
                          </span>
                          <ChevronRight
                            size={16}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </motion.button>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-500 rounded-tl-2xl"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-pink-500/0 group-hover:border-pink-500 transition-all duration-500 rounded-tr-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-pink-500/0 group-hover:border-pink-500 transition-all duration-500 rounded-bl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-500 rounded-br-2xl"></div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Load More Projects</span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          Showing {Math.min(visibleProjects, filteredProjects.length)} of{" "}
          {filteredProjects.length} projects
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-6 text-lg">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${
                          techColors[tech] || "from-gray-700 to-gray-800"
                        } text-white text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {selectedProject.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    )) || (
                      <>
                        <li>
                          Full-stack implementation with modern technologies
                        </li>
                        <li>Responsive and mobile-first design</li>
                        <li>Optimized for performance and SEO</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
