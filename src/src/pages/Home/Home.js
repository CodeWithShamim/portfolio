import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import MessangerChatBot from "../Shared/MessangerChatBot";
import ScrollButton from "../Shared/ScrollButton";
import SocialIcon from "../Shared/SocialIcon";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />

      {/* ----------------- */}
      <SocialIcon />
      <MessangerChatBot />
      <ScrollButton />
    </div>
  );
};

export default Home;
