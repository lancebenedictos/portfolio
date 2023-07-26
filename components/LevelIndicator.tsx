"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  percents: number;
  counter: boolean;
  emptyStrokeOpacity: number;
  strokeWidth: number;
  content: string;
};

const images = {
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  NextJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  NodeJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

function LevelIndicator({
  percents,
  content,
  emptyStrokeOpacity,
  strokeWidth,
}: Props) {
  const [inView, setInView] = useState(false);
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100))
  );

  //@ts-ignore
  const image = images[content];
  const transition = {
    duration: 1,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      opacity: 0,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      opacity: 1,
      transition,
    },
  };

  return (
    <div className="flex flex-col gap-4 w-fit items-center ">
      <motion.div
        className="relative "
        // whileInView="show"
        // @ts-ignore
        whileInView={() => setInView(true)}
      >
        <img
          src={image}
          className="rounded-full absolute w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <svg
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="circle"
            strokeWidth={strokeWidth}
            stroke="#fff"
            strokeOpacity={emptyStrokeOpacity}
            fill="transparent"
          />
        </svg>
        <motion.svg
          viewBox="0 0 100 100"
          width={50}
          height={50}
          className=" top-0  absolute rotate-90"
        >
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            stroke="#FF00F5"
            fill="transparent"
            strokeDashoffset={fillPercents}
            strokeDasharray={circumference}
            variants={variants}
            initial="hidden"
            animate={inView && "show"}
          />
        </motion.svg>
      </motion.div>
      <p>{content}</p>
    </div>
  );
}

export default LevelIndicator;
