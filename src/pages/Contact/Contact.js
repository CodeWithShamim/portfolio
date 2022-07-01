import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="w-full mx-auto px-4 md:px-10 lg:mx-0 my-10 md:my-20"
    >
      {/* ----contact form---- */}
      <form
        action="https://formsubmit.co/0bf67c005d234851024f28a0b87d9bbf"
        method="POST"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="flex-1">
          <h1 className="mb-6 text-2xl md:text-4xl">
            <span className="text-accent">Contact</span> with me...
          </h1>
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
              required
              placeholder="Full Name"
              className="w-1/2 outline-0 border border-gray-400 border-r-0 p-2 bg-slate-500 focus:placeholder-white rounded rounded-r-none rounded-b-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email Address"
              className="w-1/2 outline-0 border border-gray-400 p-2 bg-slate-500  focus:placeholder-white rounded rounded-l-none rounded-b-none"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            required
            placeholder="Your Message"
            className="w-full outline-0 border border-gray-400 border-y-0 p-2 rounded-bl rounded-br bg-slate-500  focus:placeholder-white"
          ></textarea>

          {/* ----send msg btn---- */}
          <div className="btn btn-error btn-sm rounded-sm text-secondary font-bold w-full mx-auto flex items-center justify-center">
            <input
              className="pr-1 font-bold"
              type="submit"
              value="Send Message"
            />
            <FaArrowRight />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
