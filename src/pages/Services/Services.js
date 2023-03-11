import React from "react";
import Service from "./Service";
import SectionWrapper from "../../hoc/SectionWrapper";
import wd from "../../images/web.png";
import rd from "../../images/backend.png";
import rn from "../../images/mobile.png";
import fs from "../../images/creator.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Web Designer",
      icon: wd,
    },
    {
      _id: 2,
      name: "ReactJS Developer",
      icon: rd,
    },
    {
      _id: 3,
      name: "React Native Developer",
      icon: rn,
    },
    {
      _id: 4,
      name: "Full Stack Developer",
      icon: fs,
    },
  ];
  return (
    <div className="md:py-16 bg-primary text-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        {services?.map((service, index) => (
          <Service key={service._id} service={service} index={index}></Service>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "Services");
