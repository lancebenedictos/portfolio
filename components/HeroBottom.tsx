"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  content: Array<string>;
  separator: React.ReactNode;
  bg?: string;
};
function Banner({ content, separator }: Props) {
  return (
    <motion.div
      className=" min-w-full flex justify-around items-center shrink-0 gap-4 "
      animate={{
        x: "-100%",
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        },
      }}
    >
      {content.map((word, index) => (
        <>
          <p className="banner select-none text-[#7DF9FF]">{word}</p>
          {separator}
        </>
      ))}
    </motion.div>
  );
}

function HeroBottom({ content, separator, bg }: Props) {
  return (
    <div
      className={`h-[60px] bg-[${bg}] w-full border-t-4 border-b-4 overflow-hidden border-black flex`}
    >
      <Banner content={content} separator={separator} />
      <Banner content={content} separator={separator} />
    </div>
  );
}

export default HeroBottom;
