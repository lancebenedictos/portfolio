"use client";
import React from "react";
import { motion } from "framer-motion";

function Calendar() {
  const variants = {
    show: {
      pathLength: 1,

      transition: { duration: 1, once: true },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[130px] p-4 stroke-red-300 fill-none"
      whileInView="show"
      strokeWidth={0.5}
      viewport={{ once: true }}
    >
      <motion.path
        variants={variants}
        initial={{ pathLength: 0 }}
        d="M7,7c-0.8,0-1.5,0.7-1.5,1.5v30c0,0.8,0.7,1.5,1.5,1.5h30c0.8,0,1.5-0.7,1.5-1.5h0V8.5c0-0.8-0.7-1.5-1.5-1.5H7Z"
      />

      <line x1="12.8166" y1="10.258" x2="12.8166" y2="4.5" />

      <line x1="35.1834" y1="10.258" x2="35.1834" y2="4.5" />

      <g id="a">
        <g>
          <line x1="21.25" y1="20.925" x2="24.75" y2="19" />

          <line x1="24.75" y1="19" x2="24.75" y2="33" />
        </g>
      </g>
    </motion.svg>
  );
}

export default Calendar;
