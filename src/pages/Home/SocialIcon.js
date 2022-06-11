import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div className="absolute rounded-lg left-3 top-1/4 md:top-1/2 flex flex-col gap-3 text-sm md:text-lg lg:xl shadow-xl transition-all">
      {/* ----linkedin---- */}
      <a
        href="https://www.linkedin.com/in/codewithshamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaLinkedin className="text-secondary hover:scale-125 hover:text-accent animate-spin" />
      </a>

      {/* ----github---- */}
      <a
        href="https://github.com/CodeWithShamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaGithub className="text-secondary hover:scale-125 hover:text-accent" />
      </a>

      {/* -----facebook---- */}
      <a
        href="https://www.facebook.com/codewithshamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaFacebook className="text-secondary hover:scale-125 hover:text-accent" />
      </a>

      {/* -----instagram---- */}
      <a
        href="https://www.instagram.com/codewithshamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaInstagram className="text-secondary hover:scale-125 hover:text-accent" />
      </a>

      {/* -----twitter---- */}
      <a
        href="https://twitter.com/CodeWithShamim"
        rel="noreferrer"
        target="_blank"
        className="bg-teal-500 p-2 rounded-full"
      >
        <FaTwitter className="text-secondary hover:scale-125 hover:text-accent" />
      </a>
    </div>
  );
};

export default SocialIcon;
