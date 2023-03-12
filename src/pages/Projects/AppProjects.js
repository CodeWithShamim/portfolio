import React from "react";
import { appProjects } from "../../utils/data";
import ProjectCard from "./ProjectCard";

const AppProjects = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
      {appProjects.map((project, index) => (
        <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
          type="app"
        />
      ))}
    </div>
  );
};

export default AppProjects;
