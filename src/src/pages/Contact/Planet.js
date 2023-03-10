import { motion } from "framer-motion";
import React from "react";
import { slideIn } from "../../utils/motion";
import EarthCanvas from "../canvas/Earth";

const Planet = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
    >
      <EarthCanvas />
    </motion.div>
  );
};

export default Planet;
