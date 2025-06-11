import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ScubenAI - Intelligent Solutions",
  description: "Harness the power of artificial intelligence with ScubenAI - Smart Tech, Secure Future",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ScubenAI - Intelligent Solutions",
    description: "Harness the power of artificial intelligence with ScubenAI - Smart Tech, Secure Future",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScubenAI - Intelligent Solutions",
    description: "Harness the power of artificial intelligence with ScubenAI - Smart Tech, Secure Future",
    images: ["/logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
