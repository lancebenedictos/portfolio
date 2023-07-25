"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  classes: string;
};

function MouseIcon({ classes }: Props) {
  return (
    <motion.img
      src="./mouse.svg"
      width={50}
      height={70}
      alt="mouse icon"
      className={classes}
      initial={{
        y: 10,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    />
  );
}

export default MouseIcon;
