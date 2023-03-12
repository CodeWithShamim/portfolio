import React from "react";
import { webProjects } from "../../utils/data";
import ProjectCard from "./ProjectCard";

const WebProjects = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
      {webProjects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
};

export default WebProjects;
