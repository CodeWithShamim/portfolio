import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { styles } from "../../utils/styles";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8ap9m38",
        "template_3l10xqj",
        {
          from_name: form.name,
          to_name: "SHAMIM ISLAM",
          from_email: form.email,
          to_email: "shamimislamonline@gmail.com",
          message: form.message,
        },
        "Mvt1MU3M3CTR0C5Ms"
      )
      .then((res) => {
        setLoading(false);
        console.log(res);
        alert("Thanks. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Something went wrong.");
      });
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 0.5)}
      className="flex-[0.75] p-6 rounded-2xl bg-slate-700 h-screen"
    >
      <h1 className={`${styles.sectionHeadText} mb-10`}>Contact.</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="flex-1 text-primary">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full border-none rounded-lg text-white outline-0 p-3 bg-slate-800"
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full my-10 border-none rounded-lg text-white outline-0 p-3 bg-slate-800"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full border-none rounded-lg text-white outline-0 p-3 bg-slate-800"
          ></textarea>

          {/* ----send msg btn---- */}
          <button className="btn border-0 bg-gradient-to-l from-pink-500 to-violet-800 hover:bg-slate-500 mt-6 rounded-lg text-secondary font-bold w-2/4 md:w-2/5 flex items-center justify-center">
            <input
              className="pr-1 font-bold"
              type="submit"
              value={loading ? "Sending..." : "Send"}
            />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
