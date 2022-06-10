import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bg from "../../images/contact-bg.png";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="w-full mx-auto px-4 md:px-10 lg:mx-0 my-10 md:my-20"
    >
      <h1 className="mb-6 text-5xl">
        <span className="text-pink-500">Contact</span> with me...
      </h1>

      {/* ----contact form---- */}

      <form
        action="https://formsubmit.co/0bf67c005d234851024f28a0b87d9bbf"
        method="POST"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="flex-1">
          <input
            type="hidden"
            name="_next"
            value="https://codewithshamim.web.app"
          ></input>

          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-1/2 outline-0 border border-gray-400 border-r-0 p-2 bg-transparent focus:placeholder-white rounded rounded-r-none rounded-b-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-1/2 outline-0 border border-gray-400 p-2 bg-transparent focus:placeholder-white rounded rounded-l-none rounded-b-none"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Your Message"
            className="w-full outline-0 border border-gray-400 border-y-0 p-2 bg-transparent focus:placeholder-white"
          ></textarea>

          {/* ----send msg btn---- */}
          <div className="w-full mx-auto flex items-center justify-center bg-pink-500">
            <input
              className="pr-1 py-2 font-bold"
              type="submit"
              value="Send Message"
            />
            <FaArrowRight />
          </div>
        </div>

        {/* ---------------------------------*/}
        <div className="flex-1 pl-10">
          <img src={bg} alt="contact-bg" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
