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
    <div id="projects" className="px-4 md:px-10 py-12">
      <h1 className="text-5xl">Recent Projects</h1>
      <div>
        {projects?.map((project) => (
          <ProjectItem key={project.id} project={project}></ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default Projects;
