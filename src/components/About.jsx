// File Name: About.jsx
// Student's Name: Saiyam Shah
// Student Id: 301431836
// Date: 27-01-2024

import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-personal text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Saiyam Shah, nice to meet you. Please Take A Look Around.</p>
            </div>
            <div>
              <p>I Am Passionating About Building An Excellent Software That Improves
              The Lives Of Those Around Me. I Am Specializing In Creating Software
              For Clients Ranging From Individuals And Small-Businesses All The
              Way To Large Enterprise Corporations.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
