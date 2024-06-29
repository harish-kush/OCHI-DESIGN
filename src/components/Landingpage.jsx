import { motion } from "framer-motion"
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 ">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div  className="w-fit flex gap-1">
                {index==1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76 , 0 , 0.24 , 1],duration:1}} className="w-[8vw] h-[6vw] bg-pink-700 relative -top-[-1.25vw] rounded-xl overflow-hidden">
                  <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                <h1
                  className="text-[9.5vw]  font-['sb'] leading-[7.5vw] flex items-center"
                  key={index}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-20 border-zinc-800 flex justify-around items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="text-[20px]">{item}</p>;
        })}
        <div className="start flex gap-1">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-700 mt-1 capitalize text-lg cursor-pointer">
            Start the Project
          </div>
          <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-700 rounded-full mt-2 cursor-pointer">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
