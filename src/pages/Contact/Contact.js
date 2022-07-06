import React from "react";
import ContactForm from "./ContactForm";
import { FaUser, FaMailBulk, FaLocationArrow, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="w-full mx-auto px-4 md:px-10 lg:mx-0 my-10 md:my-20"
    >
      {/* -------heading--------- */}
      <div className="pb-6">
        <h1 className="text-2xl lg:text-3xl uppercase font-bold">Contact me</h1>
        <p className="text-accent">________get in touch________</p>
      </div>

      {/* -----main content------- */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* ----contact form (left side)---- */}
        <ContactForm />

        {/* --------(right side)------- */}
        <div className="basis-2/4 items-center justify-center text-left">
          <p>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>

          {/* -----info----- */}
          <div className="m-6">
            {/* ---name--- */}
            <div className="flex items-center justify-start gap-6 pb-4">
              <p className="text-accent text-3xl">
                <FaUser />
              </p>
              <div>
                <h2 className="font-bold text-lg text-gray-300">Name</h2>
                <p className="text-sm font-mono">Shamim Islam</p>
              </div>
            </div>

            {/* ---address--- */}
            <div className="flex items-center justify-start gap-6">
              <p className="text-accent text-3xl">
                <FaLocationArrow />
              </p>
              <div>
                <h2 className="font-bold text-lg text-gray-300">Address</h2>
                <p className="text-sm font-mono">
                  Taragonj-5420, Rangpur, Bangladesh
                </p>
              </div>
            </div>

            {/* ---name--- */}
            <div className="flex items-center justify-start gap-6 py-4">
              <p className="text-accent text-3xl">
                <FaMailBulk />
              </p>
              <div>
                <h2 className="font-bold text-lg text-gray-300">Email</h2>
                <p className="text-sm font-mono">shamimislamonline@gmail.com</p>
              </div>
            </div>

            {/* ---Phone--- */}
            <div className="flex items-center justify-start gap-6">
              <p className="text-accent text-3xl">
                <FaPhone />
              </p>
              <div>
                <h2 className="font-bold text-lg text-gray-300">Phone</h2>
                <p className="text-sm font-mono">01762812568</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
