import React from "react";
import img from "../../images/my-pic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="about-bg-img px-4 md:px-10 py-16 flex flex-col md:flex-row items-center justify-center"
    >
      {/* ----------left side----------- */}
      <div className="pr-10 text-left mb-6 md:mb-0">
        <h1>
          <p className="text-4xl text-teal-500 font-bold"> Who Am I ?</p>
          <p className="text-xl">
            I'm Shamim Islam, A Visual{" "}
            <span className="text-teal-500 font-semibold">Web Designer</span>{" "}
            And{" "}
            <span className="text-teal-500 font-semibold">Web Developer</span>
          </p>
        </h1>
        <p className="pt-6 font-medium">
          I am a web designer for years, which comply with the latest design
          trends. I help convert a vision and an idea into meaningful and useful
          products. Having a sharp eye for product evolution helps me prioritize
          tasks, iterate fast and deliver faster.
        </p>
      </div>

      {/* --------right side---------- */}
      <div>
        <img
          className="rounded-full blur-sm hover:blur-0"
          src={img}
          alt="about-img"
        />
      </div>
    </div>
  );
};

export default About;
