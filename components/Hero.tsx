import Image from "next/image";
import React from "react";
import MouseIcon from "./MouseIcon";
import HeroText from "./HeroText";
import HeroBottom from "./HeroBottom";

function Hero() {
  return (
    <header
      className=" h-screen w-full bg-[#FCFD96] relative flex flex-col overflow-hidden "
      id="hero"
    >
      <div className="px-4 w-full lg:w-[80%] mx-auto h-full flex flex-col items-center justify-center lg:grid lg:grid-cols-2 content-center z-10 relative gap-4 ">
        <div className="relative ">
          <h3 className=" text-xl text-[#3300FF] font-semibold">
            Hello, I'm Lance
          </h3>
          <HeroText />

          <div className="flex gap-2 mt-16 justify-center">
            <a
              className="flex items-center gap-2"
              href="https://github.com/lancebenedictos"
              target="_blank"
            >
              <Image src="./github.svg" width={40} height={40} alt="github" />
              GitHub
            </a>
            <a
              className="flex items-center gap-2"
              href="https://www.linkedin.com/in/lance-justine-benedictos-9800b11b5"
              target="_blank"
            >
              <Image
                src="./linkedin.svg"
                width={40}
                height={40}
                alt="linkedin"
              />
              LinkedIn
            </a>
            <a
              href="./res.pdf"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Image src="./cv.svg" width={40} height={40} alt="cv" />
              CV
            </a>
          </div>
        </div>

        <div className=" hidden md:block relative  lg:h-full">
          <div className=" border-4  w-fit rounded-full border-dashed border-[#3300FF] overflow-hidden">
            <img
              src="/me.jpeg"
              alt="Lance Benedictos"
              className="bg-white m-2 rounded-full w-[200px] lg:w-[400px] "
            />
          </div>

          <Image
            src="./computer.svg"
            width={60}
            height={60}
            alt="computer icon"
            className="absolute -bottom-10 right-16 -rotate-12"
          />
        </div>

        <MouseIcon classes="absolute bottom-4 left-1/2 -translate-x-1/2" />
      </div>
      <div className="absolute top-0 right-0  translate-x-1/2 border-2 rounded-full border-black p-2 ">
        <div className="w-[150px] h-[150px] rounded-full bg-[#7DF9FF]"></div>
      </div>

      <HeroBottom
        bg="#FF00F5"
        content={["React", "NodeJS", "SQL", "MongoDB"]}
        separator={
          <Image src="./smiley.svg" width={20} height={20} alt="smiley face" />
        }
      />
    </header>
  );
}

export default Hero;
