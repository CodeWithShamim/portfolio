import { motion } from "framer-motion";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const SocialIcon = () => {
  const containerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="fixed z-[99999] rounded-lg left-3 top-1/4 md:top-1/2 flex flex-col gap-3 text-sm md:text-lg lg:xl shadow-xl transition-all">
      {/* ----linkedin---- */}
      <motion.a
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        href="https://www.linkedin.com/in/codewithshamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaLinkedin className="text-secondary hover:scale-125 hover:text-accent" />
      </motion.a>

      {/* ----github---- */}
      <motion.a
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        href="https://github.com/CodeWithShamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaGithub className="text-secondary hover:scale-125 hover:text-accent" />
      </motion.a>

      {/* -----facebook---- */}
      <motion.a
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        href="https://www.facebook.com/codewithshamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaFacebook className="text-secondary hover:scale-125 hover:text-accent" />
      </motion.a>

      {/* -----instagram---- */}
      <motion.a
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        href="https://www.instagram.com/codewithshamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaInstagram className="text-secondary hover:scale-125 hover:text-accent" />
      </motion.a>

      {/* -----twitter---- */}
      <motion.a
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        href="https://twitter.com/CodeWithShamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaTwitter className="text-secondary hover:scale-125 hover:text-accent" />
      </motion.a>
    </div>
  );
};

export default SocialIcon;
