import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, name, position, comment } = testimonial;
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{comment}</p>
      <div className="flex items-center justify-center gap-4">
        <img
          className="rounded-bl-3xl rounded-tr-3xl w-20 h-20"
          src={img}
          alt={name}
        />
        <div className="flex flex-col text-left">
          <h3 className="font-semibold">{name}</h3>
          <p className="font-mono">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
