import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  const { img, name, position, comment } = testimonial;
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="flex items-center justify-center bg-[#b31cb3] hover:bg-accent rounded-br-3xl rounded-tl-3xl px-6 py-6 text-left text-slate-100">
        <span className="text-3xl md:text-4xl lg:text-5xl pr-6">
          <FaQuoteLeft />
        </span>
        {comment}
      </p>

      {/* ---------------- */}
      <div className="flex items-center justify-start gap-4 pt-1 pl-1 w-full">
        <img
          className="rounded-br-3xl rounded-tl-3xl w-20 h-20"
          src={img}
          alt={name}
        />

        {/* -------------- */}
        <div className="flex flex-col text-left">
          <h3 className="font-semibold">{name}</h3>
          <p className="font-mono">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
