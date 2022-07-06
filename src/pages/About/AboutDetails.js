import React from "react";
import Resume from "../../images/resume/Resume_Shamim_islam.pdf";

const AboutDetails = () => {
  return (
    <div className="font-mono text-gray-300 text-left px-6 md:mb-0 flex-1">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-6 md:pt-0">
        I am <span className="text-accent">Shamim Islam</span>
      </h1>
      <p className="py-6">
        I am a frontend web developer. I can provide clean code and pixel
        perfect design. I also make website more & more interactive with web
        animations.
      </p>
      {/* -----------info-------- */}
      <ul className="text-lg grid gap-2">
        <li className="border p-2">
          <span className="font-semibold">Full Name</span> : Shamim Islam
        </li>
        <li className="border p-2">
          <span className="font-semibold">Age</span> : 20 Years
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
    </div>
  );
};

export default AboutDetails;
