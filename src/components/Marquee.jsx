import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] border rounded-[20px] z-[998]'>
      <div className='text border-t-2 border-b-2 flex whitespace-nowrap overflow-x-hidden overflow-y-hidden'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:5}} className='text-[25vw] leading-none font-["sb"] font-semibold -mb-[1vw]'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear",duration:5}} className='text-[25vw] leading-none font-["sb"] font-semibold -mb-[1vw]'>&nbsp;&nbsp;WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
