import React from 'react';
import {HERO_CONTENT} from '../constants/index';
// import profilePic from '../assets/samikshaSriProfile.png';
import profilePic from '../assets/Profile.png';
import { motion } from "framer-motion";

const Hero = () => {

  const container = (delay) =>({
    hidden:{ x : -100, opacity: 0},
    visible: { x:0 , 
      opacity: 1,
      transition : {duration: 0.5 , delay: delay}
    }
  })

  return (
    <div className='border-b mb-4 border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className='fle flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 '
            >
                Samiksha Srivastav
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Frontend Developer</motion.span >
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=' max-w-xl py-6 font-light text-sm tracking-tighter'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:pb-8  '>
            <div className='flex lg:justify-end justify-center '>
              <motion.img 
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 1.2}}
                src={profilePic} alt="profile" className='lg:h-fit lg:w-fit h-96 w-96 bg-gradient-to-r from-gray-400 via-gray-500 to-slate-600 rounded-full' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
