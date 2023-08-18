import React from "react";
import { img1 } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the useInView hook

const About = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Adjust the threshold for when the About section comes into view
  });

  return (
    <div
      ref={aboutRef}
      className="section bg-[#050816] md:min-h-screen lg:min-h-[700px] flex flex-col justify-center"
      id="about"
    >
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <motion.div
          className="border-[3px] border-solid border-[#8c52ffa9] rounded-lg md:w-[80%] lg:w-[75%]"
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img src={img1} alt="" className="p-4" />
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className={`${styles.heroHeadText} text-white text-start`}>
            <motion.h2
              className={`${styles.heroHeadText} lg:text-left text-center justify-center`}
            >
              <span className="text-[#915EFF]">About</span> Us
            </motion.h2>
          </div>

          <motion.div
            className="lg:w-[75%] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="hidden md:block text-[18px] text-secondary leading-7 mb-4 sm:w-[100%] px-4 md:px-0">
              {/* Desktop */}
              Welcome to ET Web Dev, your trusted partner in bespoke web solutions. Every project here is a personal endeavor, crafted with dedication, passion, and a deep understanding of the digital world. As a one-person team, I ensure that each client receives undivided attention and a unique touch that only a dedicated web artisan can offer.<br/><br/>

              My mission at ET Web Dev is simple: to help businesses thrive in the online realm. Having transformed numerous visions into digital realities, I understand the nuances of the web and the stories brands wish to tell. Partner with me, and together, we'll weave your digital narrative.<br/><br/>
            </p>

             {/* Mobile */}

            <p className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px] text-center justify-center md:hidden">
            Welcome to ET Web Dev, your trusted partner in bespoke web solutions. Every project here is a personal endeavor, crafted with dedication, passion, and a deep understanding of the digital world. As a one-person team, I ensure that each client receives undivided attention and a unique touch that only a dedicated web artisan can offer.<br/><br/>

            My mission at ET Web Dev is simple: to help businesses thrive in the online realm. Having transformed numerous visions into digital realities, I understand the nuances of the web and the stories brands wish to tell. Partner with me, and together, we'll weave your digital narrative.
           </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
