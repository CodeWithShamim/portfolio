import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({
  index,
  type,
  name,
  description,
  tags,
  image,
  live_link,
  client_code_link,
  server_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn(
        "up",
        "spring",
        type === "app" ? index * 0.5 : index * 1.5,
        0.75
      )}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-700 p-5 rounded-2xl sm:w-[360px] h-[520px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className={`${
              type === "app" ? "h-48" : "h-full"
            } w-full object-cover rounded-2xl`}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-90">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="bg-slate-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaEye className="w-1/2 h-1/2 object-contain" />
            </div>

            <div
              onClick={() => window.open(client_code_link, "_blank")}
              className="bg-slate-500 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaGithub className="w-1/2 h-1/2 object-contain" />
            </div>

            {server_code_link && (
              <div
                onClick={() => window.open(server_code_link, "_blank")}
                className="bg-slate-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <FaGithub className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] text-left">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
