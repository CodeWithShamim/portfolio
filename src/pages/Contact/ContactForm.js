import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="basis-2/4">
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
              required
              placeholder="Full Name"
              className="w-full border outline-0 p-2 bg-secondary focus:placeholder-accent"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email Address"
              className="w-full my-2 border outline-0 p-2 bg-secondary focus:placeholder-accent"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            required
            placeholder="Your Message"
            className="w-full border outline-0 p-2 bg-secondary focus:placeholder-accent"
          ></textarea>

          {/* ----send msg btn---- */}
          <div className="btn btn-accent rounded-none text-secondary font-bold w-2/4 md:w-2/5 mx-auto flex items-center justify-center">
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

export default ContactForm;
