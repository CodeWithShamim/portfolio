import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Maps from "../Shared/Maps";
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
      <Blogs />
      <Contact />

      {/* ----------------- */}
      <SocialIcon />
      <MessangerChatBot />
      <ScrollButton />
      {/* <Maps /> */}
      <Footer />
    </div>
  );
};

export default Home;
