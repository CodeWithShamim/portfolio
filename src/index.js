import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* -----animated cursor----- */}
      <AnimatedCursor
        color="224, 71, 0"
        innerSize={10}
        outerSize={60}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.8}
      />
    </BrowserRouter>
  </React.StrictMode>
);
