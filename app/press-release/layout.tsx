import type React from "react"

export const metadata = {
  title: "ScubenAI Launches Next-Gen AI Platform | AI, Cybersecurity, Web & Mobile Solutions",
  description:
    "ScubenAI officially relaunches with next-gen AI, cybersecurity, and digital solutions. Founded by Sandeep Kashyap, the company empowers global innovation with smart tech.",
  keywords:
    "ScubenAI, AI automation, cybersecurity startup, web development, mobile app development, ethical AI, Sandeep Kashyap, KIIT, MotionCraft, ScubenAI launch",
  authors: [{ name: "ScubenAI" }],
  openGraph: {
    title: "ScubenAI Launches New AI Innovation Platform | Smart Tech, Secure Future",
    description:
      "ScubenAI, founded by Sandeep Kashyap, officially launches a next-gen platform for AI, cybersecurity, and digital innovation.",
    url: "https://www.scubenai.com/news/scubenai-launch-press-release",
    type: "website",
    images: ["/images/founder_sandeep_kashyap.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
}

export default function PressReleaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "ScubenAI Officially Launches New AI Platform, Bridging Smart Tech with a Secure Future",
            image: [
              "https://www.scubenai.com/images/founder_sandeep_kashyap.jpg",
              "https://www.scubenai.com/images/scubenai_logo.png",
            ],
            datePublished: "2025-05-23",
            dateModified: "2025-05-23",
            author: {
              "@type": "Person",
              name: "Sandeep Kashyap",
              email: "admin@scubenai.com",
              url: "https://www.linkedin.com/in/sandeep-kashyap-0b160a255",
            },
            publisher: {
              "@type": "Organization",
              name: "ScubenAI",
              logo: {
                "@type": "ImageObject",
                url: "https://www.scubenai.com/images/scubenai_logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.scubenai.com/news/scubenai-launch-press-release",
            },
            description:
              "ScubenAI, a global AI technology company founded in 2013, officially launches its advanced platform to deliver AI, cybersecurity, and digital innovation solutions.",
          }),
        }}
      />
    </>
  )
}
