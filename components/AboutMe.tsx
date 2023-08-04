"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div className="relative" whileInView="reveal">
      <motion.div className="absolute top-0 left-0 z-20 overflow-hidden">
        <motion.h2 className=" text-6xl ">About me</motion.h2>
      </motion.div>
      <h2 className=" text-6xl relative stroke text-[#FF00F5] ">
        About me
        <Image
          src="/glasses.svg"
          width={60}
          height={60}
          alt="glasses"
          className="absolute right-0 -top-1/2 rotate-45 z-30"
        />
      </h2>
    </motion.div>
  );
}

export default AboutMe;
