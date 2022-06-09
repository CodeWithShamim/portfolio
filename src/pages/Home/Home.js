import React from "react";
import Contact from "../Contact/Contact";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="px-4 md:px-16 py-6">
      <Navbar />
      <Contact />
    </div>
  );
};

export default Home;
