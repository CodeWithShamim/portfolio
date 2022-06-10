import React from "react";
import bg from "../../images/pattern.png";
import img from "../../images/my-pic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="px-4 md:px-10 py-16 flex flex-col md:flex-row items-center justify-center bg-red-900"
      // style={{
      //   background: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* ----------left side----------- */}
      <div className="pr-10 text-left mb-6 md:mb-0">
        <h1>
          <p className="text-4xl text-indigo-500 font-bold"> Who Am I ?</p>
          <p className="text-xl">
            I'm Shamim Islam, A Visual{" "}
            <span className="text-indigo-500 font-semibold">Web Designer</span>{" "}
            And{" "}
            <span className="text-indigo-500 font-semibold">Web Developer</span>
          </p>
        </h1>
        <p className="pt-6">
          I am a web designer for years, which comply with the latest design
          trends. I help convert a vision and an idea into meaningful and useful
          products. Having a sharp eye for product evolution helps me prioritize
          tasks, iterate fast and deliver faster.
        </p>
      </div>

      {/* --------right side---------- */}
      <div>
        <img className="rounded-full" src={img} alt="about-img" />
      </div>
    </div>
  );
};

export default About;
