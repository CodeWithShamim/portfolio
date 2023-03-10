import React from "react";
import SectionWrapper from "../../hoc/SectionWrapper";
import ContactForm from "./ContactForm";
import Planet from "./Planet";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <ContactForm />
      <Planet />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
