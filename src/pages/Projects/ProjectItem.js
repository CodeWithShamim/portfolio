import React from "react";

const ProjectItem = ({ project }) => {
  const { name, img } = project;
  return (
    <div className="shadow w-ful">
      <div>
        <img className="w-full" src={img} alt={name} />
      </div>
      <h1 className="py-3">{name}</h1>
      <button className="btn btn-xs btn-error w-full text-secondary font-bold">
        Details
      </button>
    </div>
  );
};

export default ProjectItem;
