import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import MessangerChatBot from "./MessangerChatBot";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";
import SocialIcon from "./SocialIcon";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <About />
      <Blogs />
      <Contact />

      {/* ----------------- */}
      <SocialIcon />
      <MessangerChatBot />
      <ScrollButton />
    </div>
  );
};

export default Home;
