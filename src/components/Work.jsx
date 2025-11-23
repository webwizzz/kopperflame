import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "Photography",
    category: "Visual Identity",
    image: "https://static.wixstatic.com/media/0af55b_b2d0ffffa1144b09b840fc21aea2da6c~mv2.png",
    route: "/work/photography"
  },
  {
    id: 2,
    title: "Graphic Designing",
    category: "Visual Identity",
    image: "https://static.wixstatic.com/media/0af55b_54f9cd5377094c7ca650c46cc03854f2~mv2.png",
    route: "/work/graphic-designing"
  },
  {
    id: 3,
    title: "Cinematography",
    category: "Brand Strategy",
    image: "https://static.wixstatic.com/media/0af55b_daef115c54224960ad242774326b9e98~mv2.png",
    route: "/work/cinematography"
  },
  {
    id: 4,
    title: "Social Media Management",
    category: "Web Design",
    image: "https://static.wixstatic.com/media/0af55b_daef115c54224960ad242774326b9e98~mv2.png",
    route: "/work/social-media"
  },
  {
    id: 5,
    title: "3D",
    category: "Web Design",
    image: "https://static.wixstatic.com/media/0af55b_daef115c54224960ad242774326b9e98~mv2.png",
    route: "/work/3d"
  },
  {
    id: 6,
    title: "Web Development",
    category: "Web Design",
    image: "https://static.wixstatic.com/media/0af55b_b8959bb718064f0db07ae7c61190eca3~mv2.png",
    route: "/work/web-development"
  },
]

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

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true)
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  )
}

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const controls = useAnimation()
  const [isFirstRowLoaded, setIsFirstRowLoaded] = useState(false)
  const [isSecondRowLoaded, setIsSecondRowLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      setTimeout(() => setIsFirstRowLoaded(true), 1000) // Delay second row animation
      setTimeout(() => setIsSecondRowLoaded(true), 2000) // Delay third row animation
    }
  }, [inView, controls])

  const firstRowProjects = projects.slice(0, 2)
  const secondRowProjects = projects.slice(2, 4)
  const thirdRowProjects = projects.slice(4)

  return (
    <section className="min-h-screen bg-[#171717] text-white px-4 sm:px-6 md:px-8 py-10 md:py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto"
      >
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b-2 mb-6 sm:mb-10 pb-4 sm:pb-6">
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-5xl md:text-6xl font-grand lg:text-8xl xl:text-[10rem] font-[500] mb-2 sm:mb-0"
          >
            Services
          </motion.h2>
          <div className="flex flex-col sm:flex-row w-1/2 justify-between items-start sm:items-center gap-2 sm:gap-8">
            <motion.span
              variants={itemVariants}
              className="text-sm sm:text-lg"
            >
              (2014-2024)
            </motion.span>
            <motion.div variants={itemVariants}>
              <Link 
                to="/work"
                className="text-sm underline hover:opacity-70 transition-opacity"
              >
                View All
              </Link>
            </motion.div>
          </div>
        </div>

        <div className='flex justify-start sm:justify-end mx-0 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20 mb-8 sm:mb-12 md:mb-16'>
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[500] leading-tight max-w-2xl"
          >
            We help brands grow and tell their stories to the world
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {firstRowProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group h-40"
            >
              <Link to={project.route}>
                <div className="relative overflow-hidden h-full w-full border-2 border-white/30 hover:border-white/60 transition-colors duration-300">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-start justify-between p-6">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-grand font-light text-white">{project.title}</h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                        <HiArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {isFirstRowLoaded && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6"
          >
            {secondRowProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group h-40"
              >
                <Link to={project.route}>
                  <div className="relative overflow-hidden h-full w-full border-2 border-white/30 hover:border-white/60 transition-colors duration-300">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-start justify-between p-6">
                      <div>
                        <h3 className="text-xl font-grand sm:text-4xl font-light text-white">{project.title}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                          <HiArrowUpRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {isSecondRowLoaded && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6"
          >
            {thirdRowProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group h-40"
              >
                <Link to={project.route}>
                  <div className="relative overflow-hidden h-full w-full border-2 border-white/30 hover:border-white/60 transition-colors duration-300">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-start justify-between p-6">
                      <div>
                        <h3 className="text-2xl sm:text-4xl font-grand font-light text-white">{project.title}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                          <HiArrowUpRight className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Work

