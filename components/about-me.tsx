"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Airchains",
    role: "Sr Blockchain Developer",
    period: "Oct 2022 - May 2025",
    location: "Gurugram, Haryana, India",
    type: "Full-time",
    logo: "/airchains_logo.jpeg",
    skills: ["Golang", "Rust", "FHE", "ZK", "Blockchain Infrastructure"],
    description:
      "Specializing in Golang, Rust, and core blockchain development, focusing on Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZK), and deep blockchain infrastructure. Building secure, scalable blockchain solutions, optimizing consensus mechanisms, and advancing cryptographic innovations in decentralized systems.",
  },
  {
    id: 2,
    company: "Retcons Technology",
    role: "Blockchain Developer",
    period: "Nov 2021 - Sept 2022",
    location: "Raipur, Chhattisgarh, India",
    type: "Full-time",
    logo: "/retcons.jpeg",
    skills: ["Solidity", "JavaScript", "Web3"],
    description:
      "Started my journey into Web3, Solidity, and blockchain. Explored cryptocurrencies, their underlying algorithms, and investment strategies. Became a bit more extroverted along the way. Had an amazing experience and great moments with friends.",
    },
  {
    id: 3,
    company: "QuadKubes Technology",
    role: "Full Stack Web Developer",
    period: "Mar 2021 - Aug 2021",
    location: "India",
    type: "Internship",
    logo: "/quadkubesLogo.jpeg",
    skills: ["Full Stack Development"],
    description:
      "Internship as a Full Stack Web Developer, gaining hands-on experience in web technologies and development practices.",
  },
  {
    id: 4,
    company: "Rungta College of Engineering & Technology",
    role: "Bachelor of Engineering - BE",
    period: "May 2018 - Jun 2022",
    location: "Bhilai, India",
    type: "Education",
    logo: "/rungtaLogo.jpeg",
    skills: ["Computer Science", "Engineering"],
    description:
      "Bachelor's degree in Computer Science and Engineering. Grade: 75.5%. Activities: Chess, Dance, Hackathons 👨‍💻",
  },
]



export default function AboutMe() {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Timeline Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              My Journy
            </span>
            <span className="ml-2 text-white">🛤️</span>
          </h3>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Centered */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Horizontal Connector Line - Fixed positioning for both sides */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 h-[2px] w-[10%] bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{
                      transform: index % 2 === 0 ? 'translateX(-100%)' : 'translateX(0)',
                    }}
                  ></div>

                  {/* Timeline Content Box */}
                  <div className="md:w-5/12 bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-md relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Company Logo */}
                      <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.logo || "/placeholder.svg"}
                          alt={item.company}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Job Info */}
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                        <h4 className="text-lg text-purple-400">{item.company}</h4>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{item.type}</span>
                        </div>
                      </div>
                    </div>
                    {/* Job Description */}
                    <p className="text-gray-300 mt-4">{item.description}</p>
                    {/* Skills */}
                    {item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Timeline Point (Centered) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-black"></div>

                  {/* Timeline Vertical Connector */}
                  {index < timelineData.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "120px" }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                      className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-full w-[2px] bg-gradient-to-b from-purple-500 to-pink-500"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}