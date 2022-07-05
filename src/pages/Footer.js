import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-slate-500 font-mono flex justify-around items-center py-2">
      <p className="flex items-center">
        <img className="w-10" src={logo} alt="logo" />
        <span className="text-xs">SHAMIM ISLAM</span>
      </p>
      <p className="text-xs">Copyright &copy; All Right Reserved </p>
    </div>
  );
};

export default Footer;
