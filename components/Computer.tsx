"use client";
import React from "react";
import { motion } from "framer-motion";

function Computer() {
  const variants = {
    show: {
      pathLength: 1,

      transition: { duration: 3, once: true },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[130px] p-4 stroke-red-300  "
      strokeWidth={0.5}
    >
      <motion.path
        fill-rule="evenodd"
        clip-rule="evenodd"
        strokeWidth={0.5}
        initial={{ pathLength: 0 }}
        variants={variants}
        d="M80,27.13H61a2,2,0,0,0-2,2v2.94H20a2,2,0,0,0-2,2V64.65a2,2,0,0,0,2,2h9.41a8.13,8.13,0,0,0-1.18,4.23,2,2,0,0,0,2,2H50.79a2,2,0,0,0,2-2,8.13,8.13,0,0,0-1.18-4.23H59v4.23a2,2,0,0,0,2,2H80a2,2,0,0,0,2-2V29.13A2,2,0,0,0,80,27.13ZM32.73,68.88a4.23,4.23,0,0,1,3.72-2.23h8.12a4.23,4.23,0,0,1,3.72,2.23ZM59,62.65H22V36.07H59Zm19,6.23H63V31.13H78Z"
        fill="none"
      />
    </motion.svg>
  );
}

export default Computer;
