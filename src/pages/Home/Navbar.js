import React from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between px-16 py-6 z-50">
        <div>
          <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-accent ">
            <Link to="/" className="shadow-zinc-500 shadow-xl">
              SHAMIM ISLAM
            </Link>
          </h1>
        </div>

        <div className="grid grid-flow-col gap-3">
          <h1>
            <Link to="/">About</Link>
          </h1>
          <h1>
            <Link to="/">Projects</Link>
          </h1>
          <h1>
            <Link to="/">Skills</Link>
          </h1>
          <h1>
            <Link to="/">Contact</Link>
          </h1>
          <h1>
            <Link to="/">Testimonials</Link>
          </h1>
        </div>
      </nav>
      <ParticlesContainer></ParticlesContainer>
    </div>
  );
};

export default Navbar;
