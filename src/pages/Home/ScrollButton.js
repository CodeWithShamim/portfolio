import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="bg-pink-700 rounded-full p-1 fixed right-8 bottom-24"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp className="text-xl" />
    </div>
  );
};

export default ScrollButton;
