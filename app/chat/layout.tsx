import type React from "react"

export const metadata = {
  title: "Chat - ScubenAI",
  description: "Chat with ScubenAI - Your intelligent AI assistant",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
