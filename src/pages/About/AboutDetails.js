import React from "react";
import Resume from "../../images/resume/Resume_of_shamim_islam.pdf";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const AboutDetails = () => {
  return (
    <motion.div
      variants={slideIn("up", "spring", 0.5, 1)}
      className="text-gray-300 text-left md:mb-0 flex-1 tracking-wider xs:text-[14px] sm:text-[16px] text-12"
    >
      {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-0">
        I am <span className="text-accent">Shamim Islam</span>
      </h1> */}
      <p className="py-6">
        I'm a skilled developer with experience in TypeScript and JavaScript,
        and expertise in frameworks like React, React Native, Node.js, and mongodb. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life
      </p>
      {/* -----------info-------- */}
      <ul className="text-lg grid gap-2">
        <li className="border p-2">
          <span className="font-medium">Full Name</span> : Shamim Islam
        </li>
        <li className="border p-2">
          <span className="font-medium">Age</span> : 22 Years
        </li>
        <li className="border p-2">
          <span className="font-medium">Nationality</span> : Bangladeshi
        </li>
        <li className="border p-2">
          <span className="font-medium">Languages</span> : English, Bengali
        </li>
        <li className="border p-2">
          <span className="font-medium">Address</span> :{" "}
          <cite>Taragonj-5420, Rangpur, Bangladesh</cite>
        </li>
      </ul>

      {/* ----------resume download btn----------- */}
      <a
        href={Resume}
        download="Resume of shamim islam"
        className="font-serif font-semibold md:font-bold my-6 btn btn-accent btn-xs md:btn-sm lg:btn-md rounded-none text-secondary"
      >
        Download Resume
      </a>
    </motion.div>
  );
};

export default AboutDetails;
