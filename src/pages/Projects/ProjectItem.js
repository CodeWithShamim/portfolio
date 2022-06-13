import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectItem = ({ project }) => {
  const { name, img, live, clientCode, serverCode } = project;
  return (
    <div className="shadow w-ful bg-slate-600">
      <div className="relative project-img-box">
        <img className="w-full rounded" src={img} alt={name} />
        <div className="item hidden gap-5  absolute top-1/2 right-1/4 bg-slate-500 px-6 py-3 rounded-full">
          <a href={clientCode} rel="noreferrer" target="_blank">
            <FaGithub className="hover:text-accent text-2xl hover:scale-150 transition-all" />
          </a>
          <a href={serverCode} rel="noreferrer" target="_blank">
            <FaGithub className="hover:text-accent text-2xl hover:scale-150 transition-all" />
          </a>
          <a href={live} rel="noreferrer" target="_blank">
            <FaEye className="hover:text-accent text-2xl hover:scale-150 transition-all" />
          </a>
        </div>
      </div>
      <h1 className="py-3">{name}</h1>
      <button className="btn btn-sm btn-error w-full text-secondary font-bold">
        Details
      </button>
    </div>
  );
};

export default ProjectItem;
