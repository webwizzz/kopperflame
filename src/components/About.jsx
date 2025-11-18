'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="min-h-screen text-white bg-black px-4 md:px-8 py-2 md:py-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-sm md:text-sm font-light mb-2"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <motion.p
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-[500] leading-tight lg:col-span-2"
          >
We are a team of creative professionals dedicated to helping businesses thrive in today's competitive market. With our expertise in design and marketing strategies, we aim to create impactful campaigns that drive results and improve brand visibility. At our agency, we understand the importance of effective design in capturing the attention of your target audience
</motion.p>

          <div className="space-y-8 md:space-y-12 w-96 tracking-[-0.06rem] lg:col-start-2 lg:row-start-2">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light"
            >
              But it's not just about creating visually appealing designs. We believe in the power of strategic marketing to help businesses reach their goals. Our team of marketing experts will collaborate with you to develop tailored strategies that effectively communicate your unique value proposition, engage your audience, and drive conversions           
               </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light"
            >
                We take pride in delivering exceptional results that go beyond aesthetics, helping you achieve sustainable growth and business success            </motion.p>

            <motion.a
              variants={itemVariants}

              className="inline-block text-lg md:text-xl font-light border-b border-black pb-1 hover:opacity-70 transition-opacity"
            >
            <Link to= '/about'>
              More About Us
              </Link>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

