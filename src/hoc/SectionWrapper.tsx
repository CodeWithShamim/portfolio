import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/utils/styles";

const SectionWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(undefined, undefined)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 bg-primary`}
      >
        <span id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
