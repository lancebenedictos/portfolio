"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  svg: React.ReactNode;
  tech: string;
  projectImgSrc: string;
  projectUrl: string;
  reverse?: boolean;
  title: string;

  githubUrl: string;
};

const variants = {
  hide: {
    x: 20,
  },
  expand: {
    x: 100,
    transition: { duration: 1 },
  },
};

function Project({
  svg,
  tech,
  projectImgSrc,
  projectUrl,
  reverse,
  title,
  githubUrl,
}: Props) {
  return (
    <motion.div
      className={`w-full flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } justify-center`}
    >
      <div className="w-[40%]">
        <div className="flex items-center">
          {svg}
          <h1 className="text-2xl">{title}</h1>
        </div>
        <div className="bg-red-200 px-2 py-3 mx-2 rounded-lg">
          <p>{tech}</p>

          <div className="flex gap-2 mt-4">
            <a href={githubUrl} target="_blank">
              <Image
                src="/github.svg"
                width={30}
                height={30}
                alt="github url"
              />
            </a>
            <a href={projectUrl} target="_blank">
              <Image src="/live.svg" width={30} height={30} alt="live site" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-[60%]">
        <motion.a
          whileInView="expand"
          href={projectUrl}
          target="_blank"
          className="relative w-fit"
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute w-full h-full bg-white  origin-right"
            variants={{
              expand: {
                scaleX: 0,
                transition: { duration: 0.5, ease: "easeIn" },
              },
            }}
            initial={{
              scaleX: "100%",
            }}
          ></motion.div>
          <img
            src={projectImgSrc}
            alt="blog website screenshot"
            className=" border rounded-lg w-[full] max-w-[500px]"
          />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Project;