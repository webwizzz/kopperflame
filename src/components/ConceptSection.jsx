import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ConceptSection = ({pdp1,pdp2,d1,d2,d3}) => {
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
    hidden: { opacity: 0, y: 20 },
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
    <section className="min-h-screen bg-[#171717] text-white px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-[2000px] mx-auto py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-thin  leading-tight mb-32"
        >
          {pdp1}
        </motion.h2>

        <div className="grid grid-cols-1 border-t-2 lg:grid-cols-2 gap-8 lg:gap-32">
          <motion.div variants={itemVariants} className="space-y-3 ">
            <div className="flex  items-center gap-4">
              <span className="text-lg">Deliverable</span>
            </div>
            <div className="flex justify-between border-t w-80 items-center gap-4">
                
              <span className="text-lg">{d1}</span>
              <span className="w-2 h-2 bg-[#171717] rounded-full"></span>
            </div>
            <div className="flex justify-between border-t w-80 items-center gap-4">
            
              <span className="text-lg">{d2}</span>
              <span className="w-2 h-2 bg-[#171717] rounded-full"></span>
            </div>
            <div className="flex justify-between border-t w-80 items-center gap-4">
             
              <span className="text-lg">{d3}</span>
              <span className="w-2 h-2 bg-[#171717] rounded-full"></span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg leading-relaxed">
                  {pdp2}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ConceptSection

