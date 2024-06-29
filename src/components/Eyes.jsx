import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Eyes = () => {

  const [rotate, setrotate] = useState()
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX
      let mouseY = e.clientY
      let deltaX = mouseX - window.innerWidth/2
      let deltaY = mouseY - window.innerHeight/2

      let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI) 
      setrotate(angle-180)
    })
  })

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className="absolute flex gap-10  left-1/2 top-1/2 translate-x-[-50%] translate-y-[-80%]">
      <div className="w-[15vw] bg-zinc-100 h-[15vw] rounded-full flex items-center justify-center">
        <div className="w-2/3 bg-black h-2/3 rounded-full relative ">
        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line w-full h-10 rotate-90  absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
        </div>
        </div>
      </div>
      <div className="w-[15vw] bg-zinc-100 h-[15vw] rounded-full flex items-center justify-center">
      <div  className="w-2/3 bg-black h-2/3 rounded-full relative ">
      <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-10 rotate-90  absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Eyes;
