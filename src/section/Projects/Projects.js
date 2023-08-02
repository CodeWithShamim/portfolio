import React from "react";
import SectionWrapper from "@/hoc/SectionWrapper";
import { styles } from "@/utils/styles";
import AppProjects from "./AppProjects";
import WebProjects from "./WebProjects";

const Projects = () => {
  return (
    <div>
      <h1 className={`${styles.sectionHeadText} border-b border-accent p-3`}>
        Projects
      </h1>

      <AppProjects />
      <WebProjects />
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
