import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Reacting from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
            <p className='text-4xl font-bold border-b-4 border-pink-500 inline'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
         </div>

         <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

           <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
              <img className="w-20 mx-auto" src={HTML} alt="HTMl Logo"/>
              <p className='my-4'>HTML</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
              <img className="w-20 mx-auto" src={CSS} alt="HTMl Logo"/>
              <p className='my-4'>CSS</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
              <img className="w-20 mx-auto" src={JavaScript} alt="HTMl Logo"/>
              <p className='my-4'>JavaScript</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
              <img className="w-20 mx-auto" src={Reacting} alt="HTMl Logo"/>
              <p className='my-4'>REACT</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
              <img className="w-20 mx-auto" src={Tailwind} alt="HTMl Logo"/>
              <p className='my-4'>TAILWIND</p>
           </div>
           <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
              <img className="w-20 mx-auto" src={GitHub} alt="HTMl Logo"/>
              <p className='my-4'>GITHUB</p>
           </div>
           
         </div>

      </div>
    </div>
  )
}

export default Skills