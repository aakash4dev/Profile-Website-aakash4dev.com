"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"


const skillsData = {
    Blockchain: [
      { name: "Go", proficiency: 90 },
      { name: "Rust", proficiency: 85 },
      { name: "Solidity", proficiency: 80 },
      { name: "Cosmos SDK", proficiency: 75 },
      { name: "Ignite CLI", proficiency: 70 },
    ],
    "Full Stack": [
      { name: "NextJS", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "NodeJS", proficiency: 80 },
      { name: "HTML/CSS/JS", proficiency: 95 },
    ],
    "Cloud & Tools": [
      { name: "GCP", proficiency: 80 },
      { name: "AWS", proficiency: 75 },
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 85 },
      { name: "ChatGPT", proficiency: 95 },
    ],
  }

  export default function Skills() {
    return (
      <section className="py-12 bg-gradient-to-b from-black to-gray-900"  id="skills">
        <div className="container px-4 mx-auto" >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
     )
    }
    
    function SkillBar({ name, proficiency }) {
      return (
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-gray-300">{name}</span>
            <span className="text-gray-400">{proficiency}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </div>
      )
    }
    
    