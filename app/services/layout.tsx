import type React from "react"

export const metadata = {
  title: "Services - ScubenAI",
  description: "Explore our comprehensive AI services - Web Development, Mobile Apps, AI/ML, Cybersecurity, and Design",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
