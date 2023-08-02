import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { FaGithub, FaEye, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

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
      variants={
        window.innerWidth > 500
          ? fadeIn(
              "down",
              "spring",
              type === "app" ? index * 0.5 : index * 1.5,
              0.75
            )
          : null
      }
    >
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-700 p-5 rounded-2xl sm:w-[360px] h-full w-full"
      > */}
      <div className="relative w-full md:h-[230px] sm:h-[220] xs:h-[210px]">
        <Image
          src={image}
          alt="project_image"
          height={100}
          width={100}
          layout="responsive"
          className={`${
            type === "app" ? "md:h-48 sm:h-40 xs:h-32 w-full " : "h-full w-full"
          } object-cover rounded-2xl`}
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {type !== "app" && (
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="bg-slate-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaEye className="w-1/2 h-1/2 object-contain" />
            </div>
          )}

          <div
            onClick={() => window.open(client_code_link, "_blank")}
            className="bg-slate-500 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            {type === "app" ? (
              <FaGooglePlay className="w-1/2 h-1/2 object-contain" />
            ) : (
              <FaGithub className="w-1/2 h-1/2 object-contain" />
            )}
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
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

export default ProjectCard;
