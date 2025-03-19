import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Aakash Singh Rajput - Blockchain Developer & Web3 Engineer",
  description:
      "A Senior Blockchain Developer at Airchains. Specializing in Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZK), and Cosmos SDK.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png", // Apple-specific favicon
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png" },
    ],
  },
  keywords: [
    "Aakash Singh Rajput",
    "Blockchain Developer",
    "Web3 Engineer",
    "FHE",
    "Zero-Knowledge Proofs",
    "ZK",
    "Cosmos SDK",
    "Solidity",
    "Rust",
    "Go",
    "Smart Contracts",
    "Next.js",
    "Tailwind CSS",
    "Full Stack Development",
  ],
  author: "Aakash Singh Rajput",
  generator: "Next.js",
  openGraph: {
    title: "Aakash Singh Rajput - Blockchain Developer & Web3 Engineer",
    description:
        "Senior Blockchain Developer at Airchains. Passionate about Fully Homomorphic Encryption (FHE), Zero-Knowledge Proofs (ZK), and Cosmos SDK.",
    url: "https://aakash4dev.com",
    siteName: "Aakash Singh Rajput Portfolio",
    images: [
      {
        url: "/portfolio_website.png",
        width: 1200,
        height: 630,
        alt: "Aakash Singh Rajput Portfolio Website",
      },
    ],
    type: "website",
    social: {
      github: "https://github.com/aakash4dev",
      blog: "https://aakash4dev.blog",
      twitter: "https://twitter.com/aakash4dev",
      instagram: "https://www.instagram.com/aakash4dev",
      linkedin: "https://www.linkedin.com/in/aakash4dev",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@aakash4dev",
    title: "Aakash Singh Rajput - Blockchain Developer & Web3 Engineer",
    description:
        "Blockchain developer specializing in FHE, ZK, and Cosmos SDK. Senior Developer at Airchains.",
    image: "/portfolio_website.png",
    creator: "@aakash4dev",
  },
  links: {
    github: "https://github.com/aakash4dev",
    blog: "https://aakash4dev.blog",
    twitter: "https://twitter.com/aakash4dev",
    instagram: "https://www.instagram.com/aakash4dev",
    linkedin: "https://www.linkedin.com/in/aakash4dev",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Aakash - Blockchain Developer</title>
        <meta name="description" content="Aakash - Blockchain & AI Developer | Senior Blockchain Dev at Airchains" />
        <meta name="keywords" content="Next.js, Blockchain, AI, Developer, Web3, Smart Contracts" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Aakash" />
        <meta property="og:title" content="Aakash - Blockchain Developer" />
        <meta property="og:description" content="I build AI & Web3 applications." />
        <meta property="og:image" content="https://aakash4dev.com/Profile.jpeg" />
        <meta property="og:url" content="https://aakash4dev.com" />
        <meta property="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        {children}
        <Analytics/>
      </body>

    </html>
  )
}



import './globals.css'