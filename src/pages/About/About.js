import React from "react";
import SectionWrapper from "../../hoc/SectionWrapper";
import img from "../../images/my-pic.png";
import { styles } from "../../utils/styles";
import AboutDetails from "./AboutDetails";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import Tilt from "react-tilt";

const About = () => {
  return (
    <div>
      {/* ----------heading-------------- */}
      <div className="pb-16">
        <motion.h1
          variants={slideIn("left", "spring", 0.2, 1)}
          className={`${styles.sectionHeadText} border-b border-accent pb-3`}
        >
          About me
        </motion.h1>
      </div>

      {/* -----about content------ */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          variants={slideIn("left", "spring", 0.3, 1)}
          className="relative flex-1 flex justify-start h-[500px]">
          {/* <Tilt> */}
          <div className="w-96 md:w-4/5 rounded-xl bg-gradient-to-b 
          from-pink-500 via-violet-500 to-accent shadow-lg">
            <img
              className="w-full h-full rounded-2xl object-cover p-1"
              src={img}
              alt="myPic"
            />
          </div>
          {/* </Tilt> */}
        </motion.div>

        <AboutDetails />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
