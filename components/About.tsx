import Image from "next/image";
import React from "react";
import LevelIndicator from "./LevelIndicator";
import SkillsSection from "./SkillsSection";

function About() {
  return (
    <section className="bg-[#FF00F5] flex flex-col pb-16 lg:pb-0" id="about">
      <div className="w-[80%] mx-auto text-[#FCFD96] flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center flex-1">
        <div className="w-full flex flex-col gap-4">
          <span className="relative">
            <h2 className="textShadow text-3xl relative">
              About me
              <Image
                src="/glasses.svg"
                width={60}
                height={60}
                alt="glasses"
                className="absolute right-0 -top-1/2 rotate-45 -z-5"
              />
            </h2>
            <p className="textShadow">
              I am a college student in Ontario, studying computer programming.
              As a developer I like creating visually pleasing websites with
              amazing interactions
            </p>
          </span>
          <span>
            <h2 className=" text-xl textShadow">Awards</h2>
            <a
              href="https://www.senecahackathon.com/history"
              target="_blank"
              className=" fontBold textShadow underline underline-offset-2 hover:underline-offset-4 transition-all"
            >
              Seneca Smart Cities Hackathon
            </a>
            <p className="textShadow">Runner up | Category winner</p>
          </span>
        </div>

        <SkillsSection />
      </div>
    </section>
  );
}

export default About;
