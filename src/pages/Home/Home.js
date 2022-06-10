import React from "react";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import MessangerChatBot from "./MessangerChatBot";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Projects />
      <Contact />
      <MessangerChatBot />
      <ScrollButton />
    </div>
  );
};

export default Home;
