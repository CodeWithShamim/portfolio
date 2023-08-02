"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";

import SocialIcon from "@/components/SocialIcon";
import MessangerChatBot from "@/components/MessangerChatBot";
import ScrollButton from "@/components/ScrollButton";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <About />
      {/* <Services /> */}
      <Projects />
      <Skills />
      <Experience />
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
