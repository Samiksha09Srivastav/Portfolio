import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion'
 
const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ y:-100, opacity: 0}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-3xl'>Education</motion.h2 >
      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center'
          >
            <motion.div  
              whileInView={{opacity: 1, x: 0}}
              initial={{ x:-100, opacity: 0}}
              transition={{duration: 0.5}}
              className='w-full lg:w-1/4'>
              <p className='text-sm text-neutral-400 mb-2'>{education.year}</p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 0.5}}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>
                {education.class} - 
                <span className='text-sm text-purple-200'> {education.percentage}</span>
                <span key={index} className='mr-2 mt-4  px-2 py-1 text-sm font-medium text-orange-400 rounded'>{education.board}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{education.college} </p>  
            </motion.div>
          </div >
        ))}
      </div>
    </div>
  );
}

export default Education;
