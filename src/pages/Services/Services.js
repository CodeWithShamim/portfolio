import React from "react";
import Service from "./Service";
import { FaLaptopCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Web Development",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, natus!",
      icon: <FaLaptopCode />,
    },
    {
      _id: 2,
      name: "Android & IOS",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, natus!",
      icon: <FaEye />,
    },
    {
      _id: 3,
      name: "React Native",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, natus!",
      icon: <FaLaptopHouse />,
    },
    {
      _id: 4,
      name: "3D Animations",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, natus!",
      icon: <FaCamera />,
    },
  ];
  return (
    <div className="px-4 md:px-10 py-16 bg-primary text-secondary">
      {/* ----heading---- */}
      <h1 className="text-2xl lg:text-3xl font-bold pb-3 mb-16 border-b border-accent uppercase">
        Services
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
