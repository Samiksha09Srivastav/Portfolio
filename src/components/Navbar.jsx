import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-10  flex justify-between items-center py-6'>
      <div>
        <h2 className=' text-black bg-white rounded-full py-2 text-lg px-2 '>SS</h2>
      </div>
      <div className='text-white flex items-center gap-4 justify-center m-4 text-2xl'>
        <a href="https://www.linkedin.com/in/samiksha-srivastav-b6a403262/"><FaLinkedin /></a>
        <a href="https://github.com/Samiksha09Srivastav"><FaGithub /></a>
        <FaInstagram />
        <FaHackerrank />
      </div>
    </nav>
  );
}

export default Navbar;




