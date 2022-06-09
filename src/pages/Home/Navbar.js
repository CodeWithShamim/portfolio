import React from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";
import Typewriter from "typewriter-effect";
import Resume from "../../images/resume/Resume_Shamim_islam.pdf";

const Navbar = () => {
  return (
    <div className="navbar-background-img h-screen">
      {/* -------------navbar------------------- */}
      <nav className="w-full flex items-center justify-between">
        <div>
          <h1 className="font-bold tracking-wide text-xl text-accent hover:scale-x-105 transition-all">
            <Link
              to="/"
              className="border p-1 hover:text-blue-400 transition-all"
            >
              SHAMIM ISLAM
            </Link>
          </h1>
        </div>

        <div className="uppercase text-md font-bold tracking-widest hidden lg:flex gap-6">
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <Link to="/">About</Link>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <Link to="/">Projects</Link>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <Link to="/">Skills</Link>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <Link to="/">Contact</Link>
          </h1>
          <h1 className="hover:text-pink-400 hover:scale-105 transition-all">
            <Link to="/">Testimonials</Link>
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
          <p className="text-sm md:text-lg lg:text-xl tracking-widest text-accent font-semibold">
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
              className="btn md:btn-error btn-sm bg-red-400 text-white md:btn-md md:text-white font-bold hover:btn-accent transition-all hover:text-white hover:scale-x-110"
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
