import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "../../utils/motion";

const Service = ({ index, service }) => {
  const { name, description, icon } = service;
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1.1], [0.2, 1.3]);

  return (
    <Tilt>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.7)}
        className="tilt-inner flex flex-col justify-center items-center gap-6 border-2 
        rounded-lg hover:bg-accent xs:w-[200px] w-full h-[300px]
        text-accent hover:text-secondary hover:border-none shadow-2xl shadow-slate-400"
      >
        <img src={icon} className="w-20 h-20" />
        <h2 className="text-white font-semibold sm:text-[18px] text-[14px] tracking-wider">
          {name}
        </h2>
      </motion.div>
    </Tilt>
  );
};

export default Service;
