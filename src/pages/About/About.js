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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          corrupti assumenda quas tempore exercitationem, corporis quos
          consequuntur ab voluptate quae consequatur suscipit pariatur alias
          molestias, iusto similique? Quisquam, impedit ipsum?
        </h1>
      </div>
    </div>
  );
};

export default About;
