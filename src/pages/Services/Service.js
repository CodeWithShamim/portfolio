import React from "react";

const Service = ({ service }) => {
  const { name, description, icon } = service;
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="text-5xl text-accent">{icon}</p>
      <h2 className="text-xl lg:text-2xl font-semibold">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Service;
