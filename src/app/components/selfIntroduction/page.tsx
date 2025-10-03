 "use client";
import React from 'react'
import { motion } from 'framer-motion';
import { fadeInUp,  } from '../../utils/animations';
function SelfIntroduction() {
  return (
    <div className='my-20 sm:my-32 md:my-40  mb-40 sm:mb-60 md:mb-70 lg:mb-80 mx-4 sm:mx-8 md:mx-12 lg:mx-20'>
 <div className='flex flex-col mx-4 sm:mx-8 md:mx-12 space-y-4'>
 <motion.h1
 {...fadeInUp}
 transition={{ delay: 0.3 }}
 className='text-2xl sm:text-3xl md:text-4xl'
 >
 Computer Engineering Graduate
 </motion.h1>
 <motion.div
 {...fadeInUp}
 transition={{ delay: 0.5 }}
 className='text-5xl sm:text-6xl md:text-7xl flex flex-wrap space-x-3'
 >
 <span>Hi, I am</span>
 <span className='text-red-400'>Simon</span>
 </motion.div>
 <motion.div
 {...fadeInUp}
 transition={{ delay: 0.5 }}
 className='text-4xl sm:text-5xl md:text-7xl'
 >
 Assfaw from Ethiopia
 </motion.div>
 </div>
</div>
  )
}

export default SelfIntroduction