import React from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";
import Typewriter from "typewriter-effect";
import { FaBars } from "react-icons/fa";
import Resume from "../../images/resume/Resume_Shamim_islam.pdf";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const buttonVariants = {
    visible: {
      // x: [0, 20, -20, 25, -25, 0],
      transition: {
        type: "spring",
        stiffness: 400,
      },
      scale: 1.2,
      color: "#FF33FF",
    },
  };

  const menuVariants = {
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
      {/* -------------navbar------------------- */}
      <nav className="w-full px-4 md:px-10 py-10 flex items-center justify-between">
        <div>
          <h1>
            <Link to="/">
              <motion.img
                initial={{ opaticy: 0, y: "-100vh" }}
                animate={{ y: 0, opacitiy: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1.5,
                  delay: 0.2,
                }}
                src={logo}
                alt="logo"
                className="w-16 lg:w-20"
              />
            </Link>
          </h1>
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
            <motion.li variants={buttonVariants} whileHover="visible">
              <a href="#about">About</a>
            </motion.li>

            <motion.li variants={buttonVariants} whileHover="visible">
              <a href="#projects">Projects</a>
            </motion.li>

            <motion.li variants={buttonVariants} whileHover="visible">
              <a href="#skills">Skills</a>
            </motion.li>

            <motion.li variants={buttonVariants} whileHover="visible">
              <a href="#contacts">Contact</a>
            </motion.li>

            <motion.li variants={buttonVariants} whileHover="visible">
              <a href="#blogs">Blogs</a>
            </motion.li>
          </ul>
        </div>

        {/* ------visible for large device------- */}
        <div className="uppercase text-teal-300 text-md font-bold tracking-widest hidden lg:flex gap-6">
          <motion.h1 variants={buttonVariants} whileHover="visible">
            <a href="#about" className="py-4">
              About
            </a>
          </motion.h1>

          <motion.h1 variants={buttonVariants} whileHover="visible">
            <a href="#projects" className="py-4">
              Projects
            </a>
          </motion.h1>
          <motion.h1 variants={buttonVariants} whileHover="visible">
            <a href="#skills" className="py-4">
              Skills
            </a>
          </motion.h1>
          <motion.h1 variants={buttonVariants} whileHover="visible">
            <a href="#contacts" className="py-4">
              Contact
            </a>
          </motion.h1>
          <motion.h1 variants={buttonVariants} whileHover="visible">
            <a href="#blogs" className="py-4">
              Blogs
            </a>
          </motion.h1>
        </div>
      </nav>

      {/* ---------banner------- */}
      <div className="flex justify-center items-center h-4/5">
        <div>
          <motion.h1
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest"
          >
            I'm SHAMIM
          </motion.h1>

          {/* ---typewriter--- */}
          <p className="text-sm md:text-lg lg:text-xl tracking-widest text-teal-300 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "WEB DEVELOPER",
                  "MERN STACK DEVELOPER",
                  "I LOVE CODE",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 5,
              }}
            />
          </p>

          {/* ---download resume--- */}
          <div className="py-4 md:py-10 text-base-100">
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
              className="btn btn-outline rounded-full hover:bg-transparent hover:text-secondary btn-sm md:btn-md font-bold text-secondary"
              href={Resume}
              download="Resume of shamim islam"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
      {/* ------------------particles----------------------- */}
      <ParticlesContainer></ParticlesContainer>
    </div>
  );
};

export default Navbar;
