import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ y:-100, opacity: 0}}
        transition={{duration: 0.5}}
        className='my-20  text-center text-3xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div  
              whileInView={{opacity: 1, x: 0}}
              initial={{ x:-100, opacity: 0}}
              transition={{duration: 0.5}}
              className='w-full lg:w-1/4'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  width={150}
                  height={150}
                  className='mb-6 rounded'
                />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 0.5}} 
              className="max-w-xl w-full lg:w-3/4">
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='bg-neutral-900 mr-2 rounded px-2 py-1 text-sm font-medium text-orange-200'>{tech} </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
