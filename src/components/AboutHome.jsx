import { motion } from 'framer-motion';

function AboutHome() {
  

  return (
    <motion.div 
      className="min-h-[100dvh] flex items-center"
      
      initial="hidden"
      animate="visible"
    >
      <div className="w-full  mx-auto px-4 sm:px-6 md:px-8 lg:px-6 py-20 sm:py-2 md:py-2 lg:py-2">
        <div className="flex flex-col gap-48 sm:gap-16 md:gap-24 lg:gap-36">
          <motion.h1 
            className="text-[clamp(7rem,12vw,11.5rem)] font-semibold leading-[0.85] tracking-tight"
            
          >
            About
          </motion.h1>
          
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <motion.p 
              className="text-sm sm:text-base border-b-2 md:text-lg text-gray-600 font-medium pl-1"
              
            >
              We are Kopper Flame 
            </motion.p>
            
            <motion.p 
              className="text-[clamp(1.45rem,4vw,2.7rem)] leading-[1.1] text-gray-900 max-w-full"
            >
              Kopper Flame ’s journey began in 2022 with two ambitious leaders—Shruti Mohan and Rishabh Suman Kapoor—who envisioned an agency that bridges the gap between creativity and results-driven strategy. What started as an idea over brainstorming sessions has now become a trusted name for brands looking to elevate their marketing and design.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutHome;