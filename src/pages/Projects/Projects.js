import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="projects" className="px-4 md:px-10 py-20">
      <h1 className="text-3xl">Recent Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {projects?.map((project) => (
          <ProjectItem key={project.id} project={project}></ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default Projects;
