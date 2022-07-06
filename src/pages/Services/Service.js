import React from "react";

const Service = ({ service }) => {
  const { name, description, icon } = service;
  return (
    <div className="flex flex-col justify-center items-center gap-3 border-2 hover:border-0 rounded py-4 md:py-10 lg:py-16 md:px-3 hover:bg-accent text-accent hover:text-secondary transition-all shadow-2xl shadow-slate-400">
      <p className="text-5xl">{icon}</p>
      <h2 className="text-xl lg:text-2xl font-semibold text-secondary">
        {name}
      </h2>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default Service;
