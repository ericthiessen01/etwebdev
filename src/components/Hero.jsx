import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            ET <span className='text-[#915EFF]'>Web Dev</span>
          </h1>
          <p className={`${styles.heroSubText} my-2 text-white-100 text-center`}>
           Web development that's out of this world
          </p>
          <div className="text-center">
          <button className="mt-4 px-4 py-2 bg-[#915EFF] text-white rounded-md shadow-md hover:bg-opacity-80 transition duration-200 mb-28"><a href="#about">Learn More</a></button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
