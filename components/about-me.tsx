"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Airchains",
    role: "Sr Blockchain Developer",
    period: "Apr 2022 - Present",
    location: "Gurugram, Haryana, India",
    type: "Full-time",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DEsMNlYMWuOymRm7e6c0t8qNlnGmld.png",
    skills: ["Golang", "Rust", "FHE", "ZK", "Blockchain Infrastructure"],
    description:
      "Specializing in Golang, Rust, and core blockchain development, focusing on Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZK), and deep blockchain infrastructure. Building secure, scalable blockchain solutions, optimizing consensus mechanisms, and advancing cryptographic innovations in decentralized systems.",
  },
  {
    id: 2,
    company: "Retcons Technology",
    role: "Blockchain Developer",
    period: "Nov 2021 - Mar 2022",
    location: "Raipur, Chhattisgarh, India",
    type: "Full-time",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HOhx6dzS7fVPgGWywMnlx9mykVF4PN.png",
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
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GneHILnpMqR0ejz6nnszQtrTCrIyY.png",
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
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TujRuHbIqQ3EmgqT3E699wMHMeo683.png",
    skills: ["Computer Science", "Engineering"],
    description:
      "Bachelor's degree in Computer Science and Engineering. Grade: 75.5%. Activities: Chess, Dance, Hackathons 👨‍💻",
  },
]


export default function AboutMe() {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Timeline Section */}
          <div id="experience" className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={48}
                            height={48}
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mt-4 text-center md:text-left">{item.description}</p>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
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

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
