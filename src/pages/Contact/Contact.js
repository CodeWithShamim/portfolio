import React from "react";
import SectionWrapper from "../../hoc/SectionWrapper";
import StarsCanvas from "../canvas/Stars";
import ContactForm from "./ContactForm";
import Planet from "./Planet";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 py-12">
        <StarsCanvas />
        <ContactForm />
        <Planet />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contacts");
