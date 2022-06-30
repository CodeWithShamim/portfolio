import React from "react";
import img1 from "../../images/testimonials/1.jpg";
import img2 from "../../images/testimonials/2.jpg";
import img3 from "../../images/testimonials/3.jpg";
import img4 from "../../images/testimonials/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      img: img1,
      name: "Jonh Smith",
      position: "Marketing Director",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quisquam ad perferendis non aliquam laudantium.",
    },
    {
      _id: 2,
      img: img2,
      name: "Jonh Smith",
      position: "Marketing Director",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quisquam ad perferendis non aliquam laudantium.",
    },
    {
      _id: 3,
      img: img3,
      name: "Jonh Smith",
      position: "Marketing Director",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quisquam ad perferendis non aliquam laudantium.",
    },
    {
      _id: 4,
      img: img4,
      name: "Jonh Smith",
      position: "Marketing Director",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quisquam ad perferendis non aliquam laudantium.",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-16 bg-secondary text-primary">
      {/* ----heading---- */}
      <h1 className="text-3xl font-semibold pb-3 mb-16 border-b border-accent uppercase">
        Testimonials
      </h1>

      {/* -----------swiper items----------- */}
      <div>
        <Swiper
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
              slidesPerView: 2,
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
        >
          {/* ----maping items---- */}
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <Testimonial testimonial={testimonial}></Testimonial>
            </SwiperSlide>
          ))}
          {/* -----end--------- */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
