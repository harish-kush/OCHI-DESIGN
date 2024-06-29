import { easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  
  const [hover, sethover] = useState(false)
  const [hover2, sethover2] = useState(false)

  return (
    <div className='w-full py-20 bg-white'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-16">
       <h1 className="text-7xl font-['nm1'] tracking-tight text-black"> Featured Projects </h1>
      </div>
      <div className='px-10'>
      <div className="cards w-full flex gap-8 mt-10">
        <div onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} className="cardcontainer1 relative w-1/2 h-[75vh] ">
        <h1 className="absolute  left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[999] font-['sb'] text-8xl  text-[#a9c73b] overflow-hidden flex">
        {"FYDE".split('').map(( item, index)=>(
            <motion.span initial={{y:"100%"}} animate={hover ? {y:"0%"} : {y:"100%"}} transition={{ease:easeInOut,delay:index*0.1}} className='inline-block translate-y-full'>{item}</motion.span>
        ))}
        </h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">
        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
        </div>
        </div>
        <div onMouseEnter={()=>sethover2(true)} onMouseLeave={()=>sethover2(false)} className="cardcontainer2 relative w-1/2 h-[75vh] ">
        <h1 className="absolute  right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[999] font-['sb'] text-8xl  text-[#a9c73b] overflow-hidden flex">
        {"VISE".split('').map(( item, index)=>(
            <motion.span initial={{y:"100%"}} animate={hover2 ? {y:"0%"} : {y:"100%"}} transition={{ease:easeInOut,delay:index*0.1}} className='inline-block translate-y-full'>{item}</motion.span>
        ))}
        </h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">
        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Featured
