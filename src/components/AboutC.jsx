"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { useEffect, useRef } from "react"
import "./AboutUs.css"

export default function AboutC() {
  const sectionRef = useRef(null)
  const lenisRef = useRef(null)

  const teamData = [
    {
      initial: "C",
      name: "Caspian",
      lastName: "Merlow",
      role: "Creative Director",
      image: "/team-member-one.png",
    },
    {
      initial: "E",
      name: "Evander",
      lastName: "Coren",
      role: "Executive Producer",
      image: "/team-member-2.png",
    },
    {
      initial: "L",
      name: "Leopold",
      lastName: "Draven",
      role: "Head of Production",
      image: "/diverse-team-member-3.png",
    },
  ]

  const additionalTeamData = [
    {
      initial: "M",
      name: "Maya",
      lastName: "Sterling",
      role: "Lead Designer",
      image: "/team-member-4.png",
    },
    {
      initial: "R",
      name: "Rafael",
      lastName: "Chen",
      role: "Technical Director",
      image: "/team-member-5.png",
    },
    {
      initial: "S",
      name: "Sophia",
      lastName: "Blackwood",
      role: "Brand Strategist",
      image: "/team-member-6.png",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()
    lenisRef.current = lenis

    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    const teamSection = sectionRef.current.querySelector(".team")
    const teamSection2 = sectionRef.current.querySelector(".team-section-2")
    const teamMembers = gsap.utils.toArray(".team .team-member")
    const teamMemberCards = gsap.utils.toArray(".team .team-member-card")
    const teamMembers2 = gsap.utils.toArray(".team-section-2 .team-member-2")
    const teamMemberCards2 = gsap.utils.toArray(".team-section-2 .team-member-card-2")

    let cardPlaceholderEntrance = null
    let cardSlideInAnimation = null
    let cardPlaceholderEntrance2 = null
    let cardSlideInAnimation2 = null

    function initTeamAnimations() {
      if (window.innerWidth < 1000) {
        if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill()
        if (cardSlideInAnimation) cardSlideInAnimation.kill()
        if (cardPlaceholderEntrance2) cardPlaceholderEntrance2.kill()
        if (cardSlideInAnimation2) cardSlideInAnimation2.kill()

        teamMembers.forEach((member) => {
          gsap.set(member, { clearProps: "all" })
          const teamMemberInitial = member.querySelector(".team-member-name-initial h1")
          gsap.set(teamMemberInitial, { clearProps: "all" })
        })

        teamMemberCards.forEach((card) => {
          gsap.set(card, { clearProps: "all" })
        })

        teamMembers2.forEach((member) => {
          gsap.set(member, { clearProps: "all" })
          const teamMemberInitial = member.querySelector(".team-member-name-initial-2 h1")
          gsap.set(teamMemberInitial, { clearProps: "all" })
        })

        teamMemberCards2.forEach((card) => {
          gsap.set(card, { clearProps: "all" })
        })

        return
      }

      if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill()
      if (cardSlideInAnimation) cardSlideInAnimation.kill()
      if (cardPlaceholderEntrance2) cardPlaceholderEntrance2.kill()
      if (cardSlideInAnimation2) cardSlideInAnimation2.kill()

      // First team section animations
      cardPlaceholderEntrance = ScrollTrigger.create({
        trigger: teamSection,
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          teamMembers.forEach((member, index) => {
            const entranceDelay = 0.15
            const entranceDuration = 0.7
            const entranceStart = index * entranceDelay
            const entranceEnd = entranceStart + entranceDuration

            if (progress >= entranceStart && progress <= entranceEnd) {
              const memberEntranceProgress = (progress - entranceStart) / entranceDuration
              const entranceY = 125 - memberEntranceProgress * 125
              gsap.set(member, { y: `${entranceY}%` })

              const teamMemberInitial = member.querySelector(".team-member-name-initial h1")
              const initialLetterScaleDelay = 0.4
              const initialLetterScaleProgress = Math.max(
                0,
                (memberEntranceProgress - initialLetterScaleDelay) / (1 - initialLetterScaleDelay),
              )
              gsap.set(teamMemberInitial, { scale: initialLetterScaleProgress })
            } else if (progress > entranceEnd) {
              gsap.set(member, { y: "0%" })
              const teamMemberInitial = member.querySelector(".team-member-name-initial h1")
              gsap.set(teamMemberInitial, { scale: 1 })
            }
          })
        },
      })

      cardSlideInAnimation = ScrollTrigger.create({
        trigger: teamSection,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          teamMemberCards.forEach((card, index) => {
            const slideInStagger = 0.075
            const xRotationDuration = 0.4
            const xRotationStart = index * slideInStagger
            const xRotationEnd = xRotationStart + xRotationDuration

            if (progress >= xRotationStart && progress <= xRotationEnd) {
              const cardProgress = (progress - xRotationStart) / xRotationDuration
              const cardInitialX = 300 - index * 100
              const cardTargetX = -50
              const cardSlideInX = cardInitialX + cardProgress * (cardTargetX - cardInitialX)
              const cardSlideInRotation = 20 - cardProgress * 20

              gsap.set(card, {
                x: `${cardSlideInX}%`,
                rotation: cardSlideInRotation,
              })
            } else if (progress > xRotationEnd) {
              gsap.set(card, {
                x: "-50%",
                rotation: 0,
              })
            }

            const cardScaleStagger = 0.12
            const cardScaleStart = 0.4 + index * cardScaleStagger
            const cardScaleEnd = 1

            if (progress >= cardScaleStart && progress <= cardScaleEnd) {
              const scaleProgress = (progress - cardScaleStart) / (cardScaleEnd - cardScaleStart)
              const scaleValue = 0.75 + scaleProgress * 0.25
              gsap.set(card, { scale: scaleValue })
            } else if (progress > cardScaleEnd) {
              gsap.set(card, { scale: 1 })
            }
          })
        },
      })

      // Second team section animations (completely independent)
      cardPlaceholderEntrance2 = ScrollTrigger.create({
        trigger: teamSection2,
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          teamMembers2.forEach((member, index) => {
            const entranceDelay = 0.15
            const entranceDuration = 0.7
            const entranceStart = index * entranceDelay
            const entranceEnd = entranceStart + entranceDuration

            if (progress >= entranceStart && progress <= entranceEnd) {
              const memberEntranceProgress = (progress - entranceStart) / entranceDuration
              const entranceY = 125 - memberEntranceProgress * 125
              gsap.set(member, { y: `${entranceY}%` })

              const teamMemberInitial = member.querySelector(".team-member-name-initial-2 h1")
              const initialLetterScaleDelay = 0.4
              const initialLetterScaleProgress = Math.max(
                0,
                (memberEntranceProgress - initialLetterScaleDelay) / (1 - initialLetterScaleDelay),
              )
              gsap.set(teamMemberInitial, { scale: initialLetterScaleProgress })
            } else if (progress > entranceEnd) {
              gsap.set(member, { y: "0%" })
              const teamMemberInitial = member.querySelector(".team-member-name-initial-2 h1")
              gsap.set(teamMemberInitial, { scale: 1 })
            }
          })
        },
      })

      cardSlideInAnimation2 = ScrollTrigger.create({
        trigger: teamSection2,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          teamMemberCards2.forEach((card, index) => {
            const slideInStagger = 0.075
            const xRotationDuration = 0.4
            const xRotationStart = index * slideInStagger
            const xRotationEnd = xRotationStart + xRotationDuration

            if (progress >= xRotationStart && progress <= xRotationEnd) {
              const cardProgress = (progress - xRotationStart) / xRotationDuration
              const cardInitialX = 300 - index * 100
              const cardTargetX = -50
              const cardSlideInX = cardInitialX + cardProgress * (cardTargetX - cardInitialX)
              const cardSlideInRotation = 20 - cardProgress * 20

              gsap.set(card, {
                x: `${cardSlideInX}%`,
                rotation: cardSlideInRotation,
              })
            } else if (progress > xRotationEnd) {
              gsap.set(card, {
                x: "-50%",
                rotation: 0,
              })
            }

            const cardScaleStagger = 0.12
            const cardScaleStart = 0.4 + index * cardScaleStagger
            const cardScaleEnd = 1

            if (progress >= cardScaleStart && progress <= cardScaleEnd) {
              const scaleProgress = (progress - cardScaleStart) / (cardScaleEnd - cardScaleStart)
              const scaleValue = 0.75 + scaleProgress * 0.25
              gsap.set(card, { scale: scaleValue })
            } else if (progress > cardScaleEnd) {
              gsap.set(card, { scale: 1 })
            }
          })
        },
      })
    }

    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        initTeamAnimations()
        ScrollTrigger.refresh()
      }, 250)
    }

    window.addEventListener("resize", handleResize)
    initTeamAnimations()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill()
      if (cardSlideInAnimation) cardSlideInAnimation.kill()
      if (cardPlaceholderEntrance2) cardPlaceholderEntrance2.kill()
      if (cardSlideInAnimation2) cardSlideInAnimation2.kill()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={sectionRef} className="team-section-wrapper">
      {/* Our Story Section */}
      <section className="hero">
        <h1 className="hero-title">Our Story</h1>
        <div className="story-description">
         

<div className="pb-4">At Kopper Flame, every frame tells a story. We weave narratives that resonate. With an artistry that captures both the spontaneous joy of candid moments and the composed elegance of posed shots, Kopper Flame transforms events into timeless memories.</div>
<div className="pb-4">In a world where mediocrity is common, Kopper Flame thrives on excellence. Clients not only achieve their goals but exceed them, propelled by the stunning results delivered time and again. We blend technical prowess with artistic flair, transforming ideas into realities that leave an indelible mark.</div>
<div className="">For those who seek not just imagery, but an experience, Kopper Flame stands ready, ensuring that every moment, every frame, is nothing short of extraordinary.</div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Faces Behind the Frame</h1>
      </section>

      {/* Team Section */}
      <section className="team">
        {teamData.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-name-initial">
              <h1>{member.initial}</h1>
            </div>
            <div className="team-member-card">
              <div className="team-member-img">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
              </div>
              <div className="team-member-info">
                <p>( {member.role} )</p>
                <h1>
                  {member.name} <span>{member.lastName}</span>
                </h1>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Additional Team Section */}
      <section className="team-section-2">
        {additionalTeamData.map((member, index) => (
          <div key={index} className="team-member-2">
            <div className="team-member-name-initial-2">
              <h1>{member.initial}</h1>
            </div>
            <div className="team-member-card-2">
              <div className="team-member-img">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
              </div>
              <div className="team-member-info">
                <p>( {member.role} )</p>
                <h1>
                  {member.name} <span>{member.lastName}</span>
                </h1>
              </div>
            </div>
          </div>
        ))}
      </section>
      

      {/* Outro Section */}
      <section className="outro">
        <h1 className="outro-title">Where Vision Becomes Work</h1>
      </section>
    </div>
  )
}
