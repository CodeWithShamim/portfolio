"use client";

import React, { useEffect, useState } from "react";
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
import dynamic from "next/dynamic";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <h1 className="flex h-screen justify-center items-center">
        <span className="loading loading-bars loading-lg text-accent"></span>
      </h1>
    );

  return (
    <div id="home">
      <Navbar />
      <About />
      <Services />
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
