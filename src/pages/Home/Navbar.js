import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-16 py-6">
      <div>
        <h1 className="">
          <Link to="/">SHAMIM ISLAM</Link>
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
  );
};

export default Navbar;
