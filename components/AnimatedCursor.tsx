"use client";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <AnimatedCursor
      color="0, 0, 0"
      outerAlpha={0.5}
      innerScale={0.7}
      innerSize={12}
      showSystemCursor={true}
    />
  );
}

export default Cursor;
