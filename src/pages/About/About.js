import React from "react";
import bg from "../../images/pattern.png";
import img from "../../images/pattern.png";

const About = () => {
  return (
    <div
      className="bg-accent"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ----------left side----------- */}
      <div>
        <img src={img} alt="about-img" />
      </div>
      {/* --------right side---------- */}
      <div>
        <h1>
          Who Am I ? I'm Ruby Smith, A Visual UX/UI Designer And Web Developer
        </h1>
        <p>
          I am a freelancer based in the United Kingdom and i have been building
          noteworthy UX/UI designs and websites for years, which comply with the
          latest design trends. I help convert a vision and an idea into
          meaningful and useful products. Having a sharp eye for product
          evolution helps me prioritize tasks, iterate fast and deliver faster.
        </p>
      </div>
    </div>
  );
};

export default About;
