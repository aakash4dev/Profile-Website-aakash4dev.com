"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
  ArrowRight,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import HeaderParticles from "@/components/header-particles"
import {
  BlockchainExplorerImage,
  BlogPlatformImage,
  SolidityGeneratorImage,
  CrossChainBridgeImage,
  ZkVotingImage,
  FheMarketplaceImage,
} from "@/components/project-images"
import TypingText from "@/components/typing-text"
import Skills from "@/components/skills"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

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
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative min-h-screen flex items-center">
        <HeaderParticles />
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Image Column - Left aligned on large screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 mb-12 lg:mb-0 flex justify-center lg:justify-start"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Circular animation in the background */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-spin-slow"></div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-pink-500 animate-reverse-spin-slow"
                    style={{ animationDelay: "-2s" }}
                  ></div>
                </div>
                <div className="absolute inset-4 rounded-full bg-black"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay rounded-full" />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%201.43.47%20AM-vg0n1lLfN82dsB5yON28zhRtpRJA4K.jpeg"
                    alt="Aakash Singh Rajput"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Column - Right aligned on large screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I am{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Aakash
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-300">
                I'm a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  <TypingText
                    texts={["Blockchain Developer", "Entrepreneur", "YouTuber", "Traveler"]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetweenTexts={2000}
                  />
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Specializing in Golang, Rust, and core blockchain development. Building secure, scalable solutions with
                a focus on FHE, ZK proofs, and deep blockchain infrastructure.
              </p>

              {/* Social Icons */}
              <div className="flex gap-6 mb-8 justify-center lg:justify-start">
                <motion.a
                  href="https://linkedin.com/in/aakash4dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/aakash4dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/aakash4dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>My Projects</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </ScrollLink>
                <a
                  href="https://calendly.com/aakash4dev/quickchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-purple-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-purple-500/20 flex items-center justify-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Schedule a Meet</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section (The Road So Far) */}
      <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      <section id="experience" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <Skills />
        </div>
      </section>

      {/* Projects Section (What I've Built) */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Built
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EnhancedProjectCard
                title="Blockchain Explorer"
                description="A comprehensive blockchain explorer for tracking transactions, blocks, and smart contracts with real-time data visualization."
                tags={["Go", "React", "GraphQL", "Web3"]}
                imageComponent={<BlockchainExplorerImage />}
                link="https://github.com/aakash4dev/blockchain-explorer"
              />
              <EnhancedProjectCard
                title="Decentralized Blog Platform"
                description="A blockchain-powered blogging platform with permanent storage on Arweave and crypto micropayments for content creators."
                tags={["Next.js", "Arweave", "Solidity", "IPFS"]}
                imageComponent={<BlogPlatformImage />}
                link="https://github.com/aakash4dev/decentralized-blog"
              />
              <EnhancedProjectCard
                title="Solidity Code Generator"
                description="An AI-powered tool for rapid development and testing of secure smart contracts with built-in security analysis."
                tags={["Solidity", "TypeScript", "OpenAI", "Hardhat"]}
                imageComponent={<SolidityGeneratorImage />}
                link="https://github.com/aakash4dev/solidity-generator"
              />
              <EnhancedProjectCard
                title="Cross-Chain Bridge"
                description="A secure bridge for asset transfers between different blockchain networks with multi-signature validation."
                tags={["Rust", "Solidity", "Cosmos SDK", "DeFi"]}
                imageComponent={<CrossChainBridgeImage />}
                link="https://github.com/aakash4dev/cross-chain-bridge"
              />
              <EnhancedProjectCard
                title="ZK Voting System"
                description="A privacy-preserving voting system using zero-knowledge proofs to ensure vote secrecy while maintaining verifiability."
                tags={["ZK Proofs", "Rust", "Circom", "Ethereum"]}
                imageComponent={<ZkVotingImage />}
                link="https://github.com/aakash4dev/zk-voting"
              />
              <EnhancedProjectCard
                title="FHE Data Marketplace"
                description="A secure data marketplace using Fully Homomorphic Encryption allowing computation on encrypted data without revealing the underlying information."
                tags={["FHE", "Go", "React", "Privacy"]}
                imageComponent={<FheMarketplaceImage />}
                link="https://github.com/aakash4dev/fhe-marketplace"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (My Expertise) */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-purple-500" />}
                title="Blockchain Development"
                description="Custom blockchain solutions, smart contracts, and decentralized applications with a focus on security and efficiency."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="ZK & FHE Implementation"
                description="Zero-knowledge proofs and fully homomorphic encryption solutions for privacy-preserving applications."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="Full Stack Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Smart Contract Auditing"
                description="Comprehensive security audits for smart contracts to identify vulnerabilities and ensure robust implementation."
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" />}
                title="Web3 Integration"
                description="Seamless integration of Web3 technologies into existing applications and platforms."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title="Technical Consultation"
                description="Expert advice on blockchain architecture, technology stack selection, and implementation strategies."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form action="https://getform.io/f/amdkyqqb" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
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
                      required
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
                      required
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Prefer to schedule a meeting?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://calendly.com/aakash4dev/quickchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1Prtj5UBWzvVys8TviXZL-yN_551cRQJQ/view"
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
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/aakash4dev" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/aakash4dev" label="LinkedIn" />
            <SocialIcon icon={<Twitter />} href="https://twitter.com/aakash4dev" label="Twitter" />
            <SocialIcon icon={<MessageSquare />} href="https://discord.com/users/aakash4dev" label="Discord" />
            <SocialIcon icon={<PenTool />} href="https://medium.com/@aakash4dev" label="Medium" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Aakash Singh Rajput. All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function EnhancedProjectCard({ title, description, tags, imageComponent, link }) {
  return (
    <motion.div
      className="rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
    >
      <div className="h-48 overflow-hidden">{imageComponent}</div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 flex items-center justify-center mt-2"
        >
          <span>View Project</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:aakash4dev.me@gmail.com" className="text-purple-400 hover:text-purple-300">
        aakash4dev.me@gmail.com
      </a>
    </div>
  )
}

