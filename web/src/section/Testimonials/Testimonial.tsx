import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { ITestimonial } from "./Testimonials";

interface IProps {
  testimonial: ITestimonial;
}

const Testimonial: React.FC<IProps> = ({ testimonial }) => {
  const { img, name, position, comment } = testimonial;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.1], [0.2, 1.3]);

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-[300px]"
      style={{ scale }}
    >
      <motion.p
        style={{
          scaleY: scrollYProgress,
        }}
        className="flex items-center justify-center bg-[#b31cb3] hover:bg-accent rounded-br-3xl rounded-tl-3xl px-6 py-6 text-left text-slate-100"
      >
        <span className="text-3xl md:text-4xl lg:text-5xl pr-6">
          <FaQuoteLeft />
        </span>
        {comment}
      </motion.p>

      {/* ---------------- */}
      <div className="flex items-center justify-start gap-4 pt-1 pl-1 w-full">
        <Image
          src={img}
          alt={name}
          height={100}
          width={100}
          layout="responsive"
          className="rounded-br-3xl rounded-tl-3xl w-20 h-20"
        />

        {/* -------------- */}
        <div className="flex flex-col text-left">
          <h3 className="font-semibold">{name}</h3>
          <p className="font-mono">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
