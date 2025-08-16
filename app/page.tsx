"use client"

import dynamic from 'next/dynamic'
import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
// import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import LightBeam from "@/components/light-beam"
import FluidCursor from '@/components/fluid-cursor';


export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -500])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])


  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="fixed inset-0 z-0 overflow-hidden bg-slate-100">
        <FluidCursor />
      </div>
      <div className="relative z-50">
        <CustomCursor />
        <Navbar />
      </div>
      {/* Hero Section with Parallax and Light Effect */}
      <motion.section
        id="home"
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1, y: 0, scale: 1 }} // ensures visible on load
        animate={{ opacity: 1, y: 0, scale: 1 }} // holds the initial state before scroll changes
        style={{
          y: heroY,
          opacity: heroOpacity,
          scale: heroScale,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <div className="container relative z-20 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black via-slate-600 to-black relative"
              animate={{
                textShadow: [
                  "0 0 40px rgba(6, 182, 212, 0.6)",
                  "0 0 80px rgba(6, 182, 212, 0.9)",
                  "0 0 40px rgba(6, 182, 212, 0.6)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Hey! I'm Muhammad Riyan
            </motion.h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-900">
              🤖 AI Software Engineer | Full-Stack Developer | DevOps Engineer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-black hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content sections with higher z-index to appear above hero */}
      <div className="relative z-30 bg-black" style={{ marginTop: "100vh" }}>
        <motion.section
          id="about"
          className="py-20 bg-gradient-to-b from-black to-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
     </motion.section>

      {/* Services Section */}
      <motion.section
          id="services"
          className="py-20 bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-purple-500" />}
                title="AI & Machine Learning"
                description="Computer vision pipelines, LLM integration, NLP solutions, and real-time AI model deployment with TensorFlow and PyTorch."
              />
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-cyan-500" />}
                title="Flutter Development"
                description="Cross-platform mobile applications with clean architecture, Firebase integration, and AI model integration."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="Full Stack Development"
                description="Node.js backends, Vue.js frontends, RESTful APIs, and database optimization with MongoDB and SQL."
              />
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-cyan-500" />}
                title="Blockchain Development"
                description="Smart contracts with Solidity, DeFi platforms, and blockchain-based lending solutions with Web3 integration."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-purple-500" />}
                title="API Design & Integration"
                description="Scalable RESTful APIs, FastAPI development, JWT authentication, and third-party service integrations."
              />
              <ServiceCard
                icon={<PenTool className="w-10 h-10 text-cyan-500" />}
                title="DevOps & Cloud"
                description="CI/CD pipelines, Docker containerization, AWS/GCP deployment, and automated testing workflows."
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Work Section */}
      <motion.section
          id="work"
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="ScholarChain"
                description="Blockchain-based lending platform with smart contracts, immutable ledger, and NLP-powered RAG system for automated customer support."
                tags={["Blockchain", "Smart Contracts", "NLP", "RAG", "MongoDB", "Web3"]}
              />
              <ProjectCard
                title="Vocal Aid"
                description="Flutter app with Firebase integration and TensorFlow AI model for speech-to-text conversion, helping the deaf community with real-time feedback."
                tags={["Flutter", "Firebase", "TensorFlow", "AI/ML", "Speech Recognition"]}
              />
              <ProjectCard
                title="Real-time CV Pipeline"
                description="Computer vision pipeline from camera stream to frontend with Redis Pub/Sub for low-latency delivery and optimized streaming protocols."
                tags={["Computer Vision", "Redis", "Real-time", "WebRTC", "OpenCV"]}
              />
              <ProjectCard
                title="LLM-Integrated Backend"
                description="Production-ready FastAPI backend with Large Language Model integration, JWT authentication, and automated CI/CD deployment."
                tags={["FastAPI", "LLM", "JWT", "CI/CD", "Python", "DigitalOcean"]}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
          id="contact"
          className="py-20 bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Prefer to schedule a meeting?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1OSWa8YUpq6vJaCGoOcaNO-CgzwT9rCwd/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/Riyan-Dev" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/muhammad-riyan-aslam-7b2340188" label="LinkedIn" />
            {/* <SocialIcon icon={<Twitter />} href="https://twitter.com/aakash4dev" label="Twitter" /> */}
            {/* <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/aakash4dev" label="Discord" /> */}
            {/* <SocialIcon icon={<PenTool />} href="https://medium.com/@aakash4dev" label="Medium" /> */}
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                // You can add a console.log here if you want to verify it's working
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Muhammad Riyan. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:riyan20riyan@icloud.com" className="text-cyan-400 hover:text-cyan-300">
        riyan20riyan@icloud.com
      </a>
    </div>
  )
}
