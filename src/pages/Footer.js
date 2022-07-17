import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-500 font-mono flex justify-around items-center py-2">
      <div className="flex items-center">
        <p className="text-accent text-2xl px-2">
          <Link to="/">{`</SI>`}</Link>
        </p>
        <span className="text-xs">SHAMIM ISLAM</span>
      </div>
      <p className="text-xs">Copyright &copy; All Right Reserved </p>
    </div>
  );
};

export default Footer;
