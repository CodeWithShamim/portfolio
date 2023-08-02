import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
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
      className="bg-accent z-[999] rounded-full p-2 fixed right-9 bottom-24 animate-bounce"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <FaRegArrowAltCircleUp className="text-xl" />
    </div>
  );
};

export default ScrollButton;
