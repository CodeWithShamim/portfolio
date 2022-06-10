import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-10 lg:mx-0 lg:w-3/6  mt-10 md:mt-20">
      <h1 className="mb-6 text-3xl">
        <span className="text-pink-500">Contact</span> with me...
      </h1>

      {/* ----contact form---- */}
      <form
        action="https://formsubmit.co/0bf67c005d234851024f28a0b87d9bbf"
        method="POST"
        className="w-full flex flex-col"
      >
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
            className="outline-0 border border-gray-400 border-r-0 p-2 w-3/6 bg-transparent focus:placeholder-white rounded rounded-r-none rounded-b-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="outline-0 border border-gray-400 p-2 w-3/6 bg-transparent focus:placeholder-white rounded rounded-l-none rounded-b-none"
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Your Message"
          className="outline-0 border border-gray-400 border-y-0 p-2 bg-transparent focus:placeholder-white"
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
      </form>
    </div>
  );
};

export default Contact;
