import React from "react";
import project1 from "../../images/projects/1.png";
import project2 from "../../images/projects/2.png";
import project3 from "../../images/projects/3.png";

const Projects = () => {
  return (
    <div id="projects" className="px-4 md:px-10 py-12">
      <h1 className="text-5xl">Recent Projects</h1>

      {/* -----projects----- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  pt-8 md:pt-12 lg:pt-16">
        {/* -------------------------1--------------------------- */}
        <div className="bg-secondary rounded-2xl relative">
          <p>
            <a
              href="https://ryan-refrigerator-instrument.web.app"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={project1}
                alt="project1"
                className="w-full rounded-2xl hover:scale-105 transition-all"
              />
            </a>
          </p>

          {/* see details  */}
          <div>
            <button className="btn btn-primary text-secondary font-semibold animate-bounce">
              Details
            </button>
          </div>

          <h1 className="my-4 text-xl font-bold text-primary">
            Ryan refrigerator instrument (Full Stack)
          </h1>

          {/* technologies used */}
          <div className="px-2 pb-10 grid grid-cols-4 gap-1 ">
            <span className="bg-primary rounded-full px-2">React</span>
            <span className="bg-primary rounded-full px-2">TailwindCSS</span>
            <span className="bg-primary rounded-full px-2">Daisy UI</span>
            <span className="bg-primary rounded-full px-2">Stripe</span>
            <span className="bg-primary rounded-full px-2">JWT</span>
            <span className="bg-primary rounded-full px-2">Express.js</span>
            <span className="bg-primary rounded-full px-2">Node.js</span>
            <span className="bg-primary rounded-full px-2">MongoDB</span>
            <span className="bg-primary rounded-full px-2">Firebase</span>
          </div>
          {/* code link*/}
          <div className="font-bold grid grid-flow-col bg-secondary text-blue-500 rounded-2xl py-2 absolute bottom-0 left-0 right-0">
            <p>
              <a
                href="https://ryan-refrigerator-instrument.web.app"
                rel="noreferrer"
                target="_blank"
              >
                Live
              </a>
            </p>
            <p>
              <a
                href="https://github.com/CodeWithShamim/manufacturer-website-client-side"
                rel="noreferrer"
                target="_blank"
              >
                Client Code
              </a>
            </p>
            <p>
              <a
                href="https://github.com/CodeWithShamim/manufacturer-website-server-side"
                rel="noreferrer"
                target="_blank"
              >
                Server Code
              </a>
            </p>
          </div>
        </div>

        {/* -----------------------------2------------------------------- */}
        <div className="bg-secondary rounded-2xl relative mt-6 md:mt-0">
          <p>
            <a
              href="https://ryan-books-store.web.app"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={project2}
                alt="project1"
                className="w-full rounded-2xl hover:scale-105 transition-all"
              />
            </a>
          </p>

          {/* see details  */}
          <div>
            <button className="btn btn-primary text-secondary font-semibold animate-bounce">
              Details
            </button>
          </div>

          <h1 className="my-4 text-xl font-bold text-primary">
            Ryan books store (Full Stack)
          </h1>

          {/* technologies used */}
          <div className="px-2 pb-10 grid grid-cols-4 gap-1 ">
            <span className="bg-primary rounded-full px-2">React</span>
            <span className="bg-primary rounded-full px-2">Bootstrap</span>
            <span className="bg-primary rounded-full px-2">JWT</span>
            <span className="bg-primary rounded-full px-2">Express.js</span>
            <span className="bg-primary rounded-full px-2">Node.js</span>
            <span className="bg-primary rounded-full px-2">MongoDB</span>
            <span className="bg-primary rounded-full px-2">Firebase</span>
          </div>
          {/* code link*/}
          <div className="font-bold grid grid-flow-col bg-secondary text-blue-500 rounded-2xl py-2 absolute bottom-0 left-0 right-0">
            <p>
              <a
                href="https://ryan-books-store.web.app"
                rel="noreferrer"
                target="_blank"
              >
                Live
              </a>
            </p>
            <p>
              <a
                href="https://github.com/CodeWithShamim/Ryan-books-store-client-side"
                rel="noreferrer"
                target="_blank"
              >
                Client Code
              </a>
            </p>
            <p>
              <a
                href="https://github.com/CodeWithShamim/Ryan-books-store-server-side"
                rel="noreferrer"
                target="_blank"
              >
                Server Code
              </a>
            </p>
          </div>
        </div>

        {/* -------------------------3----------------------- */}
        <div className="bg-secondary rounded-2xl relative mt-6 md:mt-0">
          <p>
            <a
              href="https://eyun-fitness.web.app"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={project3}
                alt="project1"
                className="w-full rounded-2xl hover:scale-105 transition-all"
              />
            </a>
          </p>

          {/* see details  */}
          <div>
            <button className="btn btn-primary text-secondary font-semibold animate-bounce">
              Details
            </button>
          </div>

          <h1 className="my-4 text-xl font-bold text-primary">
            Eyun fitness (Gym website)
          </h1>

          {/* technologies used */}
          <div className="px-2 pb-10 grid grid-cols-3 gap-1">
            <span className="bg-primary rounded-full px-2">React</span>
            <span className="bg-primary rounded-full px-2">Bootstrap</span>
            <span className="bg-primary rounded-full px-2">Firebase</span>
          </div>
          {/* code link*/}
          <div className="font-bold grid grid-flow-col bg-secondary text-blue-500 rounded-2xl py-2 absolute bottom-0 left-0 right-0">
            <p>
              <a
                href="https://eyun-fitness.web.app"
                rel="noreferrer"
                target="_blank"
              >
                Live
              </a>
            </p>
            <p>
              <a
                href="https://github.com/CodeWithShamim/independent-service-provider-Gym-webiste"
                rel="noreferrer"
                target="_blank"
              >
                Project Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
