import React from "react";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <Contact />
      <ScrollButton />
    </div>
  );
};

export default Home;
