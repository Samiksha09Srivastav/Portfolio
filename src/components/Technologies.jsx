
import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: {y: -10},
    animate : {
      y: [10, -10] ,
      transition : {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  })

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ y:-100, opacity: 0}}
        transition={{duration: 0.5}}
        className='my-10 text-center text-3xl'>Technologies </motion.h1>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ x:-100, opacity: 0}}
        transition={{duration: 0.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-5xl text-cyan-400 '/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <TbBrandJavascript className='text-5xl text-yellow-400 '/>
        </motion.div>
        <motion.div  
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          < RiTailwindCssFill className='text-5xl text-sky-700 '/>
        </motion.div >
        <motion.div  
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <FaBootstrap  className='text-5xl text-fuchsia-700 '/>
        </motion.div >
        <motion.div  
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-5xl text-orange-600 '/>
        </motion.div >
        <motion.div  
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <SiCss3 className='text-5xl text-blue-600 '/>
        </motion.div >
        <motion.div  
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <SiMui className='text-5xl text-blue-800 '/>
        </motion.div >
        <motion.div  
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=' rounded-2xl  border-4 border-neutral-800 p-4'>
          <SiFramer className='text-5xl '/>
        </motion.div >
      </motion.div>
    </div>
  );
}

export default Technologies;
