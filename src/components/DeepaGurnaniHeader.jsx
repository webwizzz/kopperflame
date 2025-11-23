import { motion } from 'framer-motion'
import { header } from 'framer-motion/client'

const DeepaGurnaniHeader = ({header}) => {
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
    <header className=" lg:min-h-[50vh]  flex flex-col justify-center items-center px-3 md:px-2 lg:px-4 pb-10  pt-24 md:pt-20 lg:pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=""
      >
        <motion.h1 
          variants={itemVariants}
          className="text-[2rem] font-grand md:text-[5rem] lg:text-[7rem] leading-tighter font-[550]"
        >
          {header}
        </motion.h1>
      </motion.div>

     
    </header>
  )
}

export default DeepaGurnaniHeader

