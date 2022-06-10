import React from "react";
import project1 from "../../images/projects/1.png";
import project2 from "../../images/projects/2.png";
import project3 from "../../images/projects/3.png";

const Projects = () => {
  return (
    <div className="px-4 md:px-10 py-12">
      <h1 className="text-5xl">Recent Projects</h1>

      {/* -----projects----- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  pt-8 md:pt-12 lg:pt-16">
        {/* ---1---- */}
        <div className="bg-secondary rounded-2xl">
          <img
            src={project1}
            alt="project1"
            className="w-full rounded-2xl hover:scale-105 transition-all"
          />

          <h1 className="my-4 text-lg font-semibold text-primary">
            Ryan refrigerator instrument (Full Stack)
          </h1>
          {/* technologies used */}
          <div className="overflow-scroll px-4">
            <span className="bg-accent rounded-full px-2">React</span>
            <span className="bg-accent rounded-full px-2">React Router</span>
            <span className="bg-accent rounded-full px-2">Tailwind CSS</span>
            <span className="bg-accent rounded-full px-2">Daisy UI</span>
            <span className="bg-accent rounded-full px-2">Stripe</span>
            <span className="bg-accent rounded-full px-2">JWT</span>
            <span className="bg-accent rounded-full px-2">Express.js</span>
            <span className="bg-accent rounded-full px-2">Node.js</span>
            <span className="bg-accent rounded-full px-2">MongoDB</span>
            <span className="bg-accent rounded-full px-2">Axios</span>
            <span className="bg-accent rounded-full px-2">Swiper.js</span>
            <span className="bg-accent rounded-full px-2">React query</span>
            <span className="bg-accent rounded-full px-2">React hook form</span>
            <span className="bg-accent rounded-full px-2">Firebase</span>
          </div>
        </div>
        {/* ---2--- */}
        <div>
          <img
            src={project2}
            alt="project2"
            className="w-full h-full hover:translate-x-4 transition-all"
          />
          <div>
            <h1>Ryan books store (Full Stack)</h1>
          </div>
        </div>
        {/* ---3--- */}
        <div>
          <img
            src={project3}
            alt="project3"
            className="w-full h-full hover:translate-x-4 transition-all"
          />
          <div>
            <h1>Eyun fitness (Gym website)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
