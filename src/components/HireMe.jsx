import React from 'react'
import {hire} from  '../assets'


const HireMe = () => {
    return (
      <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden hireme'>
          <div className='xl:w-48 h-auto items-center justify-center relative sm:right-8 sm:left-0 sm:top-0 sm:w-24'>
             
              <img src={hire} alt="hire" className="animate-spin-slow"/>
              <a href="mailto:chris.imanuel2015@gmail.com"
              className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full font-semibold hover:bg-light hover:text-dark'
              
              > Hire Me </a>
  
          </div>
      </div>
    )
  }
  
  export default HireMe