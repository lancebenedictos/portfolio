"use client";
import React from "react";
import { motion } from "framer-motion";

const duration = 3;
const textOneAnimation = {
  opacity: [0, 1, 0, 0, 0, 0, 1],
  transition: {
    duration,
  },
};

const textTwoAnimation = {
  opacity: [0, 0, 1, 0, 0, 0, 1],
  transition: {
    duration,
  },
};

const textThreeAnimation = {
  opacity: [0, 0, 0, 1, 0, 0, 1],
  transition: {
    duration,
  },
};

function HeroBGText() {
  return (
    <div className="absolute w-full h-full flex flex-col justify-around top-0 left-0 items-end pr-6">
      <motion.p
        className=" text-6xl font-black opacity-30"
        initial={{ opacity: 0 }}
        animate={textOneAnimation}
      >
        Full
      </motion.p>
      <motion.p
        className=" text-6xl font-black opacity-30"
        initial={{ opacity: 0 }}
        animate={textTwoAnimation}
      >
        Stack
      </motion.p>
      <motion.p
        className=" text-6xl font-black opacity-30"
        initial={{ opacity: 0 }}
        animate={textThreeAnimation}
      >
        Developer
      </motion.p>
    </div>
  );
}

export default HeroBGText;
