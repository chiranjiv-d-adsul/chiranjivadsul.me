import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
 // Assuming you have a separate file for work experiences
import { SectionWrapper } from "../hoc";
import { download, downloadHover, linkedin, resume, github } from "../assets";
import { textVariant } from "../utils/motion";

//

const WorkExperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Here's my profile to connect : )
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Profile
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">


          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between
              sm:text-[18px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 px-4
              whitespace-nowrap gap-1 sm:w-[180px] sm:h-[58px]
              w-[142px] h-[46px] rounded-[10px] bg-jetLight
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/chiranjiv-adsul-21126a279/", //paste the link to your resume here
                  "_blank"
                )
              }
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download);
              }}
            >
              Linkedin Profile

            </button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={github}
                  alt="github"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between
              sm:text-[18px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 px-4
              whitespace-nowrap gap-1 sm:w-[160px] sm:h-[58px]
              w-[135px] h-[46px] rounded-[10px] bg-jetLight
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
              onClick={() =>
                window.open(
                  "https://github.com/adsulchiru17", //paste the link to your here
                  "_blank"
                )
              }
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download);
              }}
            >
              GitHub Profile

            </button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between
              sm:text-[18px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 px-5
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px]
              w-[125px] h-[46px] rounded-[10px] bg-jetLight
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
              onClick={() =>
                window.open(
                  "resume link", //paste the link to your resume here
                  "_blank"
                )
              }
              onMouseOver={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download);
              }}
            >
              RESUME
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px]
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");
