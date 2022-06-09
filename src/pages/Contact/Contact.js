import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-3/6 mt-10 md:mt-20">
      <h1 className="mb-6 text-3xl">
        <span className="text-pink-500">Contact</span> with me...
      </h1>
      <form className="bg-[#3E4145] w-full flex flex-col">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="outline-0 border p-2 w-3/6 bg-transparent focus:text-white"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="outline-0 border p-2 w-3/6 bg-transparent"
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Message"
          className="outline-0 border p-2 bg-transparent"
        ></textarea>

        {/* ----send msg btn---- */}
        <div>
          <input type="submit" value="Send message" />
          <FaArrowRight />
        </div>
      </form>
    </div>
  );
};

export default Contact;
