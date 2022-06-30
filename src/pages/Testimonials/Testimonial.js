import React from "react";

const Testimonial = ({ testimonial }) => {
  const { img, name, position, comment } = testimonial;
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Testimonial;
