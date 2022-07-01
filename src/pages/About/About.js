import React from "react";
import img from "../../images/my-pic.jpg";
import AboutDetails from "./AboutDetails";

const About = () => {
  return (
    <div className="bg-secondary flex flex-col md:flex-row items-center justify-center py-6">
      <div className="flex-1 flex justify-center">
        <img
          className="w-4/5 border-[15px] border-transparent bg-gradient-to-r from-accent via-primary to-purple-500 shadow-lg"
          src={img}
          alt="myPic"
        />
      </div>
      <AboutDetails />
    </div>
  );
};

export default About;
