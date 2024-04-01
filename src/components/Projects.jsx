import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple, pineappleHover } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Popup = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="bg-white   mt-[90px]  p-4 rounded-lg relative overflow-y-auto md:w-[56%]  "
        style={{
          maxHeight: "70vh",
          maxWidth: "90vw",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        }}
      >
        <button
          onClick={onClose}
          className=" sticky top-3 left-[100%] text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="">
          <div className="flex justify-center items-center    border-b-2  pb-1    ">
            <img
              src={project.image}
              alt={project.name}
              className=" w-full h-full md:h-[300px] object-contain"
            />
          </div>

          <div className="mt-3  px-4 flex justify-between">
            <h1 className="font-bold sm:text-[32px] text-[24px] text-black percase font-beckman   ">
              {project.name}
            </h1>
            <div
              onClick={() => window.open(project.repo, "_blank")}
              className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
            >
              <img
                src={github}
                alt="source code"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
          <div className="mt-3 px-4 ">
            <h2 className="text-[red]  mb-2 max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] flex text-justify">
              {project.description}
            </h2>

            <p className="text-[black]  mb-2 max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] flex text-justify"> {project.detailed}</p>

          </div>
          <div className="flex justify-between items-center  px-4">
            <button
              className="live-demo flex justify-between sm:text-[16px]  text-[14px] text-white font-bold font-beckman items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px] rounded-[10px] glassmorphism sm:mt-[22px] mt-[16px] hover:bg-white hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              onMouseOver={() => {
                document
                  .querySelector(".btn-icon")
                  .setAttribute("src", pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".btn-icon")
                  .setAttribute("src", pineapple);
              }}
            >
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
              />
              <a href={project.demo}>LIVE DEMO</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,

  handleClick,
}) => {
  const [clickedUpperHalf, setClickedUpperHalf] = useState(false);

  const handleCardClick = (e) => {
    const clickedUpperHalf =
      e.clientY <
      e.currentTarget.getBoundingClientRect().top +
        e.currentTarget.getBoundingClientRect().height / 2;
    if (!clickedUpperHalf) {
      return false;
    }
    setClickedUpperHalf(false);
  };

  const handleUpperHalfClick = (e) => {
    e.stopPropagation();

    setClickedUpperHalf(true);

    handleClick(id);
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[2] flex-[6]"
      } flex items-center justify-center sm:min-w-[32%] min-w-[200px]
     sm:h-[480px] h-[600px] cursor-pointer card-shadow`}
      onClick={handleCardClick}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-[#FF0000]
      h-full w-full opacity-[0.5] rounded-[24px] "
        onClick={handleUpperHalfClick}
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      <div className="absolute bottom-0 p-8 pb-6 justify-start w-full   flex-col bg-[rgba(175,174,174,0.5)]  rounded-b-[24px] z-20">
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(repo, "_blank")}
            className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
          >
            <img
              src={github}
              alt="source code"
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
        </div>
        <h2 className="font-bold sm:text-[32px] text-[24px] text-white uppercase font-beckman sm:mt-0 -mt-[1rem]">
          {name}
        </h2>
        <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] text-jus">
          {description}
        </p>
        <button
          className="live-demo flex justify-between sm:text-[16px] text-[14px] text-white font-bold font-beckman items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px] rounded-[10px] glassmorphism sm:mt-[22px] mt-[16px] hover:bg-white hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
          onClick={() => window.open(demo, "_blank")}
          onMouseOver={() => {
            document
              .querySelector(".btn-icon")
              .setAttribute("src", pineappleHover);
          }}
          onMouseOut={() => {
            document.querySelector(".btn-icon").setAttribute("src", pineapple);
          }}
        >
          <img
            src={pineapple}
            alt="pineapple"
            className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
          />
          LIVE DEMO
        </button>

        <button
          className=" sm:text-[14px] text-[12px] text-white hover:bg-white   hover:text-black font-mono    glassmorphism rounded-[10px] p-1 px-2 sm:mt-[14px] mt-[8px]  transition duration-[0.2s] ease-in-out"
          onClick={handleUpperHalfClick}
        >
          Learn more
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState(null);
  const handleOpenPopup = (projectId) => {
    setActive(projectId);
    document.body.style.overflow = "hidden";

    // prevent scrolling when popup is open
  };
  const handleClosePopup = () => {
    setActive(null);
    document.body.style.overflow = "auto";
    // restore scolling
  };
  return (
    <div className="-mt-[6rem] overflow:hidden">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight} `}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-eerieBlack text-[18px] max-w-3xl leading-[30px]  text-justify"
        >
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
          <h1 className="md:block hidden glassmorphism font-mono bg-black text-white border-2 w-max rounded-2xl mt-4 p-2">
            Scroll right to view more projects -{">"}
          </h1>
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div
          className="mt-[50px] flex   lg:flex-row flex-col min-h-[150rem] sm:min-h-[70vh]  gap-5 "
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "msOverflowStyle": "none",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={handleOpenPopup}
            />
          ))}
        </div>
      </motion.div>
      {active && (
        <Popup
          project={projects.find((project) => project.id === active)}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
