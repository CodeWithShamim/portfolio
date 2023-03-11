import React from "react";
import Resume from "../../images/resume/Resume_of_shamim_islam.pdf";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const AboutDetails = () => {
  return (
    <motion.div
      variants={slideIn("up", "spring", 0.5, 1)}
      className="font-mono text-gray-300 text-left md:mb-0 flex-1"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-0">
        I am <span className="text-accent">Shamim Islam</span>
      </h1>
      <p className="py-6">
        I am a Full Stack moblie & web application developer. I can provide
        clean code and pixel perfect design. I also make website & app more &
        more interactive with animations.
      </p>
      {/* -----------info-------- */}
      <ul className="text-lg grid gap-2">
        <li className="border p-2">
          <span className="font-semibold">Full Name</span> : Shamim Islam
        </li>
        <li className="border p-2">
          <span className="font-semibold">Age</span> : 22 Years
        </li>
        <li className="border p-2">
          <span className="font-semibold">Nationality</span> : Bangladeshi
        </li>
        <li className="border p-2">
          <span className="font-semibold">Languages</span> : English, Bengali
        </li>
        <li className="border p-2">
          <span className="font-semibold">Address</span> :{" "}
          <cite>Taragonj-5420, Rangpur, Bangladesh</cite>
        </li>
      </ul>

      {/* ----------resume download btn----------- */}
      <a
        href={Resume}
        download="Resume of shamim islam"
        className="font-serif font-semibold md:font-bold my-6 btn btn-accent btn-sm md:btn-md rounded-none text-secondary"
      >
        Download Resume
      </a>
    </motion.div>
  );
};

export default AboutDetails;
