import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Service = ({ service }) => {
  const { name, description, icon } = service;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.1], [0.2, 1.3]);

  return (
    <motion.div
      style={{ scale }}
      className="flex flex-col justify-center items-center gap-3 border-2 hover:border-0 rounded py-4 md:py-10 lg:py-16 md:px-3 hover:bg-accent text-accent hover:text-secondary transition-all shadow-2xl shadow-slate-400"
    >
      <p className="text-5xl">{icon}</p>
      <h2 className="text-xl lg:text-2xl font-semibold text-secondary">
        {name}
      </h2>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
};

export default Service;
