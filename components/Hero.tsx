import Image from "next/image";
import React from "react";
import MouseIcon from "./MouseIcon";
import HeroText from "./HeroText";
import HeroBottom from "./HeroBottom";
import ContactDeck from "./ContactDeck";

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

          <ContactDeck />
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
