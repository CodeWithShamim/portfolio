import React from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between px-16 py-6 z-50">
        <div>
          <h1 className="font-bold tracking-wide text-xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent hover:from-pink-400 hover:scale-105 transition-all">
            <Link to="/">SHAMIM ISLAM</Link>
          </h1>
        </div>

        <div className="grid grid-flow-col gap-3 uppercase text-sm font-bold tracking-widest">
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
      <ParticlesContainer></ParticlesContainer>
    </div>
  );
};

export default Navbar;
