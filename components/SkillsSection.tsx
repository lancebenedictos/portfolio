"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import LevelIndicator from "./LevelIndicator";

function SkillsSection() {
  return (
    <motion.div whileInView="show" viewport={{ once: true }}>
      <motion.div
        className="border w-full bg-[#FCFD96] rounded-lg text-[#FF00F5] p-4 relative mt-16 md:mt-0 overflow-hidden"
        initial={{ rotateZ: 45, opacity: 0 }}
        variants={{
          show: {
            // x: 0,
            opacity: 1,
            rotateZ: 0,
            transition: { duration: 0.4, ease: "backInOut" },
          },
        }}
      >
        <Image
          src="./slug.svg"
          width={60}
          height={60}
          alt="slug"
          className="absolute -top-[53px]"
        />
        <h2 className=" text-3xl">Skills</h2>
        <div className="flex flex-wrap gap-6 justify-evenly h-full mt-6">
          <LevelIndicator
            percents={90}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="TypeScript"
          />
          <LevelIndicator
            percents={95}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="HTML5"
          />{" "}
          <LevelIndicator
            percents={90}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="CSS3"
          />{" "}
          <LevelIndicator
            percents={95}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="JavaScript"
          />
          <LevelIndicator
            percents={85}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="React"
          />{" "}
          <LevelIndicator
            percents={85}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="NextJS"
          />
          <LevelIndicator
            percents={70}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="NodeJS"
          />
          <LevelIndicator
            percents={90}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="SQL"
          />
          <LevelIndicator
            percents={80}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="MongoDB"
          />
          <LevelIndicator
            percents={90}
            counter={true}
            emptyStrokeOpacity={1}
            strokeWidth={8}
            content="Git"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SkillsSection;
