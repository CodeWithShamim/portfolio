import React from "react";
import img1 from "@/images/testimonials/1.jpg";
import img2 from "@/images/testimonials/2.jpg";
import img3 from "@/images/testimonials/3.jpg";
import img4 from "@/images/testimonials/4.jpg";
import { SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import Testimonial from "./Testimonial";
import SectionWrapper from "@/hoc/SectionWrapper";

export interface ITestimonial {
  _id: number;
  img: any;
  name: string;
  position: string;
  comment: string;
}

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      img: img1,
      name: "Chris Brown",
      position: "CEO",
      comment:
        "I thought it was impossible to make a website as beautiful as our product.",
    },
    {
      _id: 2,
      img: img2,
      name: "Lisa Wang",
      position: "CTO",
      comment:
        " I've never met a web developer who truly cares about their clients' success like Rick does.",
    },
    {
      _id: 3,
      img: img3,
      name: "Jonh Smith",
      position: "CFO",
      comment:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    },
    {
      _id: 4,
      img: img4,
      name: "Sara Lee",
      position: "COO",
      comment:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    },
  ];

  return (
    <div className="py-16 bg-primary text-secondary">
      {/* ----heading---- */}
      <h1 className="text-2xl lg:text-3xl font-semibold pb-3 border-b border-accent uppercase">
        Testimonials
      </h1>

      {/* -----------swiper items----------- */}
      <div>
        {/* <Swiper
          spaceBetween={50}
          loop="true"
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
            920: {
              width: 920,
              slidesPerView: 2,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        > */}
        {/* ----maping items---- */}
        {testimonials?.map((testimonial: ITestimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Testimonial
              key={testimonial._id}
              testimonial={testimonial}
            ></Testimonial>
          </SwiperSlide>
        ))}
        {/* -----end--------- */}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "Testimonials");
