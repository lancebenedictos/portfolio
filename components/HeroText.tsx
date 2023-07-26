"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const animations = {
  initial: {
    x: 10,
    y: 10,
  },
  main: {
    x: 0,
    y: 0,

    transition: {
      duration: 1,
      ease: "backInOut",
    },
  },
  first: {
    x: 10,
    y: 10,

    transition: {
      duration: 1,
      ease: "backInOut",
    },
  },
  second: {
    x: 20,
    y: 20,

    transition: {
      duration: 1,
      ease: "backInOut",
    },
  },
  third: {
    x: 30,
    y: 30,

    transition: {
      duration: 1,
      ease: "backInOut",
    },
  },
};

function HeroText() {
  return (
    <div className="relative">
      <Image
        src="./code.svg"
        width={60}
        height={60}
        alt="computer icon"
        className="absolute -top-5 lg:top-0 right-16 z rotate-45"
      />
      <motion.h1
        className="text-4xl  lg:text-6xl font-bold absolute text-[#00bdbd] select-none"
        initial={animations.initial}
        animate={animations.third}
      >
        Web Developer
      </motion.h1>
      <motion.h1
        className=" text-4xl lg:text-6xl font-bold absolute text-[#01cccc] select-none"
        initial={animations.initial}
        animate={animations.second}
      >
        Web Developer
      </motion.h1>

      <motion.h1
        className="text-4xl  lg:text-6xl font-bold absolute text-[#00e6e6] select-none"
        initial={animations.initial}
        animate={animations.first}
      >
        Web Developer
      </motion.h1>

      <motion.h1
        className=" text-4xl lg:text-6xl font-bold z-10 relative select-none "
        initial={animations.initial}
        animate={animations.main}
      >
        Web Developer
      </motion.h1>
    </div>
  );
}

export default HeroText;
