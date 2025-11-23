"use client"

import { useGSAP } from "@gsap/react"
import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Card = ({ title, copy, index, bgColor, textColor, imgSrc }) => {
  return (
    <div className="relative w-screen h-screen" id={`card-${index + 1}`}>
      <div
        className="relative will-change-transform w-full h-full p-8 flex gap-16 card-inner"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="flex-[3]">
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-grand leading-none mb-10">{title}</h1>
          <p className="text-xl font-medium">{copy}</p>
        </div>
        <div className="flex-1 aspect-video rounded-xl overflow-hidden">
          <img src={imgSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default function PhotoPage() {
  const cards = [
    {
      title: "PORTRAIT PHOTOGRAPHY",
      copy: "We specialize in capturing your unique personality and style through captivating portrait photography. We try and create stunning portraits that will stay with you for a lifetime. We understand the importance of individuality and work closely with you to deliver portraits that exceeds their expectations.",
      bgColor: "#c3abff",
      textColor: "#000",
      imgSrc: "https://static.wixstatic.com/media/0af55b_91d7d39baf864310adce92dfe5f1435b~mv2.jpg",
    },
    {
      title: "EVENT PHOTOGRAPHY",
      copy: "Our Event Photography is tailored to fit your specific event needs. We are passionate about capturing special moments and turning them into stunning visual for your memories. From high-quality images to personalised edits, we ensure that you receive unforgettable photos that capture the essence of your event.",
      bgColor: "#ffffff",
      textColor: "#000",
      imgSrc: "https://static.wixstatic.com/media/0af55b_9a912cfde8294ceebe3dffa2c8cb6fe1~mv2.jpg",
    },
    {
      title: "PRODUCT PHOTOGRAPHY",
      copy: "With our Product Photography we offer stunning visual content that can help take your brand to the next level. We strives to capture the essence of your products, presenting them in the best possible way & showcase your products with high-quality images that will set you apart from your competitors.",
      bgColor: "#fed35b",
      textColor: "#000",
      imgSrc: "https://static.wixstatic.com/media/0af55b_50dd44f732774f8fb391636d99edb51b~mv2.jpeg",
    },
    {
      title: "FOOD PHOTOGRAPHY",
      copy: "Our Food Photography service is all about creating beautiful and appetising imagery that leaves a lasting impression. Our team of experienced photographers work closely with you to bring your culinary vision to life that showcases your food in the best possible way.",
      bgColor: "#1e1e1e",
      textColor: "#fff",
      imgSrc: "https://static.wixstatic.com/media/0af55b_cee45e3cfc824950b21f0e2671ad93e1~mv2.png",
    },
     {
      title: "AUTOMOBILE PHOTOGRAPHY",
      copy: "Our Automobile Photography service captures the beauty and design of vehicles with precision and creativity. We work closely with you to showcase your automobiles in the best light, highlighting their unique features and craftsmanship.",
      bgColor: "#FF5E1A",
      textColor: "#000",
      imgSrc: "https://static.wixstatic.com/media/0af55b_82b3d7b8a9544ce5b23ca58f347e0c3e~mv2.jpg",
    },
     {
      title: "INTERIOR PHOTOGRAPHY",
      copy: "We offer top-quality interior photography services  that are guaranteed to impress. Our photographers uses state-of-the-art equipment and techniques to create stunning images that capture the essence of your property. Let us help you take your property to the next level with exceptional interior photography.",
      bgColor: "#e0ff98",
      textColor: "#000",
      imgSrc: "https://static.wixstatic.com/media/0af55b_096e0aa9868f47a3812753964d5528a6~mv2.jpg",
    },
  ]

  const container = useRef()

  useGSAP(
    () => {
      gsap.from("#hero-text", { y: 100, opacity: 0, duration: 1, ease: "power2.out" })

      const cards = gsap.utils.toArray(".card-inner")

      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 30%",
        pin: ".intro-section",
        pinSpacing: false,
      })

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro-section",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          })

          gsap.to(card, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: ".outro-section",
              end: "top 65%",
              scrub: true,
            },
          })
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    },
    { scope: container },
  )

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <section className="relative w-screen h-screen p-0">
          <img
            src="/assets/hero.jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-white font-grand text-4xl lg:text-9xl font-bold" id="hero-text">PHOTOGRAPHY</h1>
          </div>
        </section>

        <section className="intro-section relative w-screen h-[70vh] p-8 flex items-center text-white bg-[#171717]">
          <h1 className="text-2xl lg:text-5xl font-thin tracking-normal  leading-none">
            Kopper Flame Studio offers top-tier videography, photography, web design, graphic design, and branding services.
Renowned for excellence and attention to detail, we craft compelling narratives for any occasion. With a focus on collaboration and creativity, we bring our clients' visions to life with precision and flair.
          </h1>
        </section>

        <section className="cards">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </section>

        <section className="outro-section relative w-screen h-screen p-8 flex items-center bg-white ">
          <p className="text-2xl lg:text-5xl font-thin leading-none tracking-normal">Kopper Flame Studio offers top-tier videography, photography, web design, graphic design, and branding services.
Renowned for excellence and attention to detail, we craft compelling narratives for any occasion. With a focus on collaboration and creativity, we bring our clients' visions to life with precision and flair.</p>
        </section>
      </div>
    </ReactLenis>
  )
}
