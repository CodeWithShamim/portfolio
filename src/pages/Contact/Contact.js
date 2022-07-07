import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

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
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
