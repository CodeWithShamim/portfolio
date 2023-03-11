import React, { useEffect, useState } from "react";
import SectionWrapper from "../../hoc/SectionWrapper";
import { styles } from "../../utils/styles";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1 className={`${styles.sectionHeadText} border-b border-accent p-3`}>
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
        {projects?.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
