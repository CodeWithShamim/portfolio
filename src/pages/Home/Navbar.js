import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "../Shared/ParticlesContainer";
import Typewriter from "typewriter-effect";
import { FaBars } from "react-icons/fa";
import Resume from "../../images/resume/Resume_of_shamim_islam.pdf";
import { motion } from "framer-motion";

const Navbar = () => {
  // handle navbar visibility
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 60) {
      setVisible(true);
    } else if (scrolled <= 60) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  // animation added
  const buttonVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        // delay: 0.8,
      },
    },
    hover: {
      // x: [0, 20, -20, 25, -25, 0],
      transition: {
        type: "spring",
        stiffness: 400,
      },
      scale: 1.2,
      color: "#FF33FF",
    },
  };

  const titleVariants = {
    hidden: {
      opacitiy: 0,
      x: "-100vw",
    },
    visible: {
      opacitiy: 1,
      color: "#FF33FF",
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="navbar-background-img h-screen">
      {/* ------------------particles----------------------- */}
      <ParticlesContainer></ParticlesContainer>

      {/* -------------navbar------------------- */}
      <div className="absolute left-0 right-0 top-0">
        <nav
          className={
            visible
              ? "bg-primary shadow-2xl shadow-slate-400 fixed z-50 w-full px-4 md:px-10 py-1 lg:py-3 flex items-center justify-between transition ease-in-out delay-75"
              : "w-full px-4 md:px-10 py-10 flex items-center justify-between transition-all delay-75"
          }
        >
          <div>
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl text-accent"
              initial={{ opaticy: 0, x: "-100vw" }}
              animate={{ x: 0, opacitiy: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
              }}
            >
              <Link to="/">{`</SI>`}</Link>
            </motion.h1>
          </div>

          {/* --------------dropdown menu for mobile & tablet--------- */}
          <div className="flex lg:hidden dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-circle bg-slate-700 p-3 rounded-full"
            >
              <FaBars />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <motion.li
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <a href="#about">About</a>
              </motion.li>

              <motion.li
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <a href="#projects">Projects</a>
              </motion.li>

              <motion.li
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <a href="#skills">Skills</a>
              </motion.li>

              <motion.li
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <a href="#contacts">Contact</a>
              </motion.li>

              <motion.li
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <a href="#blogs">Blogs</a>
              </motion.li>
            </ul>
          </div>

          {/* ------visible for large device------- */}
          <div className="uppercase text-teal-300 text-sm font-bold tracking-widest hidden lg:flex gap-6">
            <motion.h1
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a href="#about" className="py-4">
                About
              </a>
            </motion.h1>

            <motion.h1
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a href="#projects" className="py-4">
                Projects
              </a>
            </motion.h1>
            <motion.h1
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a href="#skills" className="py-4">
                Skills
              </a>
            </motion.h1>
            <motion.h1
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a href="#contacts" className="py-4">
                Contact
              </a>
            </motion.h1>
            <motion.h1
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a href="#blogs" className="py-4">
                Blogs
              </a>
            </motion.h1>
          </div>
        </nav>

        {/* ---------banner------- */}
        <div className="flex justify-center items-center pt-40">
          <div>
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest"
            >
              SHAMIM ISLAM
            </motion.h1>

            {/* ---typewriter--- */}
            <p className="text-sm md:text-lg lg:text-xl tracking-widest text-teal-300 font-bold">
              <Typewriter
                options={{
                  strings: ["I am a Web Designer", "I am a Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 0.2,
                }}
              />
            </p>

            {/* ---download resume--- */}
            <motion.div
              whileHover={{
                scale: 1.1,
                x: [0, -10, 10, 0],
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
              }}
              className="p-5"
            >
              <a
                className="btn btn-outline rounded-full hover:bg-transparent hover:text-secondary btn-sm md:btn-md font-bold text-secondary"
                href={Resume}
                download="Resume of shamim islam"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
