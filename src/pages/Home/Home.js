import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Footer from "../Shared/Footer";
import Testimonials from "../Testimonials/Testimonials";
import Maps from "./Maps";
import MessangerChatBot from "./MessangerChatBot";
import Navbar from "./Navbar";
import ScrollButton from "./ScrollButton";
import SocialIcon from "./SocialIcon";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Blogs />
      <Contact />

      {/* ----------------- */}
      <SocialIcon />
      <MessangerChatBot />
      <ScrollButton />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
