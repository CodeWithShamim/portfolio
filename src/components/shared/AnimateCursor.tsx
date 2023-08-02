"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimateCursor = () => {
  return (
    <div>
      <AnimatedCursor
        color="224, 71, 0"
        innerSize={10}
        outerSize={60}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.8}
      />
    </div>
  );
};

export default AnimateCursor;
