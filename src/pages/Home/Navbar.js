import React from "react";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";

const Navbar = () => {
  return (
    <div className="navbar-background-img h-screen">
      <nav className="w-full flex items-center justify-between px-16 py-6 z-50">
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

        <div className="grid grid-flow-col gap-3 uppercase text-md font-bold tracking-widest">
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
      {/* ---------banner-------
      <div>
        <div>
          <img src={img} alt="banner-img" />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
