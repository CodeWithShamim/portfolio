import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
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
    <div id="home">
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience/>
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
