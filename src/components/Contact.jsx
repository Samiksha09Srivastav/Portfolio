import React from 'react';
import { CONTACT } from '../constants';
import { motion }  from 'framer-motion';

const Contact = () => {
  return (
    <div className=' pb-4'>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ y:-100, opacity: 0}}
        transition={{duration: 0.5}}
        className='my-10 text-center text-3xl'>To Get In Touch</motion.h2>  
      <div 
        whileInView={{opacity: 1, y: 0}}
        initial={{ y:-100, opacity: 0}}
        transition={{duration: 0.5}}
        className="text-center text-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        {CONTACT.email.map((email, index) => (
          <a key={index} className='border-b  mr-2 '>{email}</a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
