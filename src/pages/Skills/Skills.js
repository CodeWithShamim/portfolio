import React from "react";
import "./Skills.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Skills = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.2], [0.2, 1.5]);

  return (
    <div id="skills" className="px-4 md:px-10 py-16 bg-primary text-secondary">
      {/* ----heading---- */}
      <h1 className="text-2xl lg:text-3xl font-semibold pb-3 mb-16 border-b border-accent uppercase">
        Skills
      </h1>

      {/* --------------skills--------------- */}
      <motion.div
        style={{ scale }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center justify-items-center"
      >
        {/* --HTML-- */}
        <div className="radial-html radial-progress text-accent">
          90% <p className="font-bold text-secondary">HTML</p>
        </div>

        {/* --CSS-- */}
        <div className="radial-css radial-progress text-accent">
          80% <p className="font-bold text-secondary">CSS</p>
        </div>

        {/* --TailwindCSS-- */}
        <div className="radial-tailwindcss radial-progress text-accent">
          90% <p className="font-bold text-secondary">TailwindCSS</p>
        </div>

        {/* -----------Bootstrap-------------- */}
        <div className="radial-bootstrap radial-progress text-accent">
          90% <p className="font-bold text-secondary">Bootstrap</p>
        </div>

        {/* --JavaScript-- */}
        <div className="radial-js radial-progress text-accent">
          80% <p className="font-bold text-secondary">JavaScript</p>
        </div>

        {/* --React-- */}
        <div className="radial-react radial-progress text-accent">
          90% <p className="font-bold text-secondary">ReactJS</p>
        </div>

        {/* --Next-- */}
        <div className="radial-next radial-progress text-accent">
          80% <p className="font-bold text-secondary">NextJs</p>
        </div>

        {/* --Express-- */}
        <div className="radial-express radial-progress text-accent">
          75% <p className="font-bold text-secondary">ExpressJS</p>
        </div>

        {/* --Node-- */}
        <div className="radial-node radial-progress text-accent">
          60% <p className="font-bold text-secondary">NodeJS</p>
        </div>

        {/* --MongoDB-- */}
        <div className="radial-mongodb radial-progress text-accent">
          60% <p className="font-bold text-secondary">MongoDB</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
