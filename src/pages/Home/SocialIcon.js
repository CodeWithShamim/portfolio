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
    <div className="absolute left-3 top-1/4 md:top-1/2 flex flex-col gap-3 text-xl md:text-2xl shadow-xl transition-all">
      {/* ----linkedin---- */}
      <a
        href="https://www.linkedin.com/in/codewithshamim"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin className="text-accent hover:text-secondary hover:scale-125 animate-pulse" />
      </a>

      {/* ----github---- */}
      <a
        href="https://github.com/CodeWithShamim"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub className="text-accent hover:text-secondary hover:scale-125" />
      </a>

      {/* -----facebook---- */}
      <a
        href="https://www.facebook.com/codewithshamim"
        rel="noreferrer"
        target="_blank"
      >
        <FaFacebook className="text-accent hover:text-secondary hover:scale-125" />
      </a>

      {/* -----instagram---- */}
      <a
        href="https://www.instagram.com/codewithshamim"
        rel="noreferrer"
        target="_blank"
      >
        <FaInstagram className="text-accent hover:text-secondary hover:scale-125" />
      </a>

      {/* -----twitter---- */}
      <a
        href="https://twitter.com/CodeWithShamim"
        rel="noreferrer"
        target="_blank"
      >
        <FaTwitter className="text-accent hover:text-secondary hover:scale-125" />
      </a>
    </div>
  );
};

export default SocialIcon;
