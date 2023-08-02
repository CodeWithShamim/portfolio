import React from "react";
import "./Skills.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import SectionWrapper from "@/hoc/SectionWrapper";
import { slideIn } from "@/utils/motion";

const Skills = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      id="skills"
      variants={slideIn("up", "tween", 0.3, 0.7)}
      className="pt-16 bg-primary text-secondary"
    >
      {/* ----heading---- */}
      <h1 className="text-2xl lg:text-3xl font-semibold pb-3 border-b border-accent uppercase">
        Skills
      </h1>

      {/* --------------skills--------------- */}
      <motion.div
        style={{ scale }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center justify-items-center"
      >
        {/* --React Native-- */}
        <div className="radial-rn radial-progress text-accent">
          95% <p className="font-bold text-secondary">React Native</p>
        </div>

        {/* --React-- */}
        <div className="radial-react radial-progress text-accent">
          90% <p className="font-bold text-secondary">ReactJS</p>
        </div>

        {/* --Redux toolkit-- */}
        <div className="radial-redux radial-progress text-accent">
          80% <p className="font-bold text-secondary">Redux toolkit</p>
        </div>

        {/* --TS-- */}
        <div className="radial-ts radial-progress text-accent">
          75% <p className="font-bold text-secondary">TypeScript</p>
        </div>

        {/* --TailwindCSS-- */}
        <div className="radial-tailwindcss radial-progress text-accent">
          90% <p className="font-bold text-secondary">TailwindCSS</p>
        </div>

        {/* --HTML-- */}
        <div className="radial-html radial-progress text-accent">
          90% <p className="font-bold text-secondary">HTML</p>
        </div>

        {/* --CSS-- */}
        <div className="radial-css radial-progress text-accent">
          80% <p className="font-bold text-secondary">CSS</p>
        </div>

        {/* -----------Bootstrap-------------- */}
        <div className="radial-bootstrap radial-progress text-accent">
          90% <p className="font-bold text-secondary">Bootstrap</p>
        </div>

        {/* --JavaScript-- */}
        <div className="radial-js radial-progress text-accent">
          80% <p className="font-bold text-secondary">JavaScript</p>
        </div>

        {/* --Express-- */}
        <div className="radial-express radial-progress text-accent">
          80% <p className="font-bold text-secondary">ExpressJS</p>
        </div>

        {/* --Node-- */}
        <div className="radial-node radial-progress text-accent">
          80% <p className="font-bold text-secondary">NodeJS</p>
        </div>

        {/* --MongoDB-- */}
        <div className="radial-mongodb radial-progress text-accent">
          80% <p className="font-bold text-secondary">MongoDB</p>
        </div>

        {/* --Firebase-- */}
        <div className="radial-firebase radial-progress text-accent">
          50% <p className="font-bold text-secondary">Firebase</p>
        </div>

        {/* --AWS Amplify-- */}
        <div className="radial-awsAmplify radial-progress text-accent">
          50% <p className="font-bold text-secondary">AWS Amplify</p>
        </div>

        {/* --Next JS-- */}
        <div className="radial-next radial-progress text-accent">
          70% <p className="font-bold text-secondary">NextJs</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Skills, "skills");
