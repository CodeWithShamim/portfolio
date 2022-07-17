import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectItem = ({ project }) => {
  const { name, img, live, clientCode, serverCode } = project;
  return (
    <motion.div
      whileHover={{ opacity: 1, scale: 1.1, transition: { duration: 0.5 } }}
      whileTap={{
        opacity: 0,
        scale: 1,
        borderRadius: "100%",
        transition: { duration: 0.5 },
      }}
      className="shadow w-full bg-slate-600"
    >
      <div className="relative project-img-box">
        <a href={live} rel="noreferrer" target="_blank">
          <img className="w-full rounded" src={img} alt={name} />
        </a>

        <div className="item hidden gap-5 absolute top-1/2 right-1/4 bg-slate-500 px-6 py-3 rounded-full">
          <a href={clientCode} rel="noreferrer" target="_blank">
            <FaGithub className="hover:text-accent text-2xl hover:scale-150 transition-all" />
          </a>
          {serverCode && (
            <a href={serverCode} rel="noreferrer" target="_blank">
              <FaGithub className="hover:text-accent text-2xl hover:scale-150 transition-all" />
            </a>
          )}
          <a href={live} rel="noreferrer" target="_blank">
            <FaEye className="hover:text-accent text-2xl hover:scale-150 transition-all" />
          </a>
        </div>
      </div>
      <h1 className="py-3">{name}</h1>

      {/* ---------btn------- */}
      <a href={live} rel="noreferrer" target="_blank">
        <button className="btn btn-xs btn-accent w-full rounded-none text-secondary font-bold">
          Details
        </button>
      </a>
    </motion.div>
  );
};

export default ProjectItem;
