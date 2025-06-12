"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { Star } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    name: "Opulence Byte",
    video: "/videos/OpulenceByte.mp4",
    review:
      "ScubenAI's team delivered a world-class website for our business. Professional, efficient, and creative!",
    stars: 5,
  },
  {
    name: "Travellers Choice",
    video: "/videos/TravellersChoice.mp4",
    review:
      "ScubenAI developed a stunning travel platform for us. We highly recommend their services!",
    stars: 5,
  },
]

const services = [
  {
    title: "Web Development",
    description: "Modern websites and web apps tailored to your business.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps with React Native & Flutter.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Pixel-perfect, user-friendly interfaces.",
    icon: "🎨",
  },
  {
    title: "AI Integration",
    description: "Add Chatbots, NLP, and AI features to your platform.",
    icon: "🤖",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Secure your systems with our advanced security protocols.",
    icon: "🛡️",
  },
]

export default function ServicesPage() {
  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      video?.addEventListener("play", () => {
        videoRefs.current.forEach((v, j) => {
          if (i !== j && v) v.pause()
        })
      })
    })
  }, [])

  return (
    <main className="bg-gradient-to-br from-black via-purple-950 to-black text-white min-h-screen relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute animate-[spin_20s_linear_infinite] w-[150%] h-[150%] -top-[25%] -left-[25%] bg-[radial-gradient(circle_at_center,_#7e22ce_0%,_transparent_70%)] opacity-20" />
      </div>

      <section className="py-20 px-6 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ScubenAI offers a range of next-gen digital solutions for businesses of all sizes.
        </motion.p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto pb-24 relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-purple-900 to-black p-6 rounded-2xl shadow-md border border-purple-700 text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-200">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="w-full py-20 bg-gradient-to-r from-purple-950 via-black to-purple-950 text-white relative z-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-400">
            What Our Clients Say
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={false}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full max-w-4xl mx-auto"
          >
            {testimonials.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="bg-black/40 border border-purple-700 rounded-2xl p-6 md:p-8 text-center shadow-md">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={client.video}
                    controls
                    className="rounded-lg w-full max-h-[480px] object-contain mb-4 border border-purple-800 mx-auto"
                  />

                  <h3 className="text-2xl font-semibold text-purple-200">
                    {client.name}
                  </h3>

                  <div className="flex justify-center mt-2 mb-4">
                    {[...Array(client.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400 w-5 h-5"
                      />
                    ))}
                  </div>

                  <p className="text-purple-300 text-base max-w-xl mx-auto italic">
                    “{client.review}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  )
}
