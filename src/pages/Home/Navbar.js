import React from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";
import Typewriter from "typewriter-effect";
import { FaBars } from "react-icons/fa";
import Resume from "../../images/resume/Resume_Shamim_islam.pdf";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-background-img h-screen">
      {/* -------------navbar------------------- */}
      <nav className="w-full px-4 md:px-10 py-10 flex items-center justify-between">
        <div>
          <h1 className="">
            <Link to="/">
              <img src={logo} alt="logo" className="w-16 lg:w-20" />
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
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
        </div>

        {/* ------visible for large device------- */}
        <div className="uppercase text-teal-300 text-md font-bold tracking-widest hidden lg:flex gap-6">
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <a href="#about">About</a>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <a href="#projects">Projects</a>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <a href="#skills">Skills</a>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <a href="#contacts">Contact</a>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <a href="#blogs">Blogs</a>
          </h1>
        </div>
      </nav>

      {/* ---------banner------- */}
      <div className="flex justify-center items-center h-4/5">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-widest">
            I'm SHAMIM
          </h1>

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
            <a
              className="btn btn-outline btn-info btn-sm md:btn-md animate-pulse hover:animate-none font-bold text-secondary rounded-tl-full rounded-br-full"
              href={Resume}
              download="Resume of shamim islam"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ------------------particles----------------------- */}
      <ParticlesContainer></ParticlesContainer>
    </div>
  );
};

export default Navbar;
