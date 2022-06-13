import React from "react";

const ProjectItem = ({ project }) => {
  const { name, img } = project;
  return (
    <div>
      <div>
        <img src={img} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
