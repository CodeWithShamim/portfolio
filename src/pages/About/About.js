import React from "react";
import img from "../../images/my-pic.jpg";
import AboutDetails from "./AboutDetails";

const About = () => {
  return (
    <div className="bg-primary md:py-6">
      {/* ----------heading-------------- */}
      <div className="py-16">
        <h1 className="text-3xl uppercase font-semibold">About me</h1>
        <p className="text-accent pt-1">________Who i am________</p>
      </div>

      {/* -----about content------ */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 flex justify-center">
          <img
            className="w-96 md:w-4/5 border-[12px] border-transparent bg-gradient-to-r from-accent via-primary to-purple-500 shadow-lg"
            src={img}
            alt="myPic"
          />
        </div>
        <AboutDetails />
      </div>
    </div>
  );
};

export default About;
