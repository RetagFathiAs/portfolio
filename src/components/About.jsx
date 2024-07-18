import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  
  <Tilt className='xs:w-[250px] w-full relative'>
    <div className='absolute top-0 left-0 w-full h-full'>
      
    </div>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card relative z-10'
    >
      <div
        className='bg-blue rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[30px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Quick me :</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className=' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       A software engineering student at Zuwarah Technical College;
and a current ALX- FULL STACK ENGINEERING student .
beside I have a deep understanding of programming languages ,
such as SQL, Java, Python, C#, C++, PHP, HTML, CSS, JavaScript, and C. 
Additionally, I have experience in web design and graphic identity creation, 
along with practical expertise in event organization and project management.
as I mention I am also currently enrolled in the ALX Full Stack course, specializing in front-end development, 
and I successfully completed the foundational period, gaining valuable insights.
I also appreciate collaborative work in any team, as I consider it a fundamental factor for success, directly 
after gaining technical experience</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
   
    </>
  );
};

export default SectionWrapper(About, "about");
