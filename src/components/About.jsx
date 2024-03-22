import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // jetLight
        className="bg-[#ff00008c]   rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-20 h-20 object-contain" />
        <h3 className="text-[white] text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[18px] max-w-3xl leading-[40px] "
      >
        <span className="text-[red] flex text-justify s">Hi there ! </span> <p className="flex text-justify "> I am Chiranjiv D Adsul,
        Pursuing Bachelor of Computer Engineering from Mumbai University. A
        Passionate Web Developer with Good Hands on Practice. I have 2 years of
        experience in web development, I am proficient in front-end technologies
        such as HTML, CSS, JavaScript, React.jS, Tailwind CSS as well as
        back-end technologies like PHP with database MySql and familiar with
        Node.js, Express.js . If you're looking for a developer who can make
        your work easy, </p> <span className=" text-[red] flex text-justify">I'm here : )</span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
