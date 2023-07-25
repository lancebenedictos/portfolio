import Image from "next/image";
import React from "react";
import LevelIndicator from "./LevelIndicator";

function About() {
  return (
    <section className="bg-[#FF00F5] flex flex-col">
      <div className="w-[80%] mx-auto text-[#FCFD96] grid grid-cols-2 gap-6 items-center h-full">
        <div className="w-full flex flex-col gap-4">
          <span>
            <h2 className=" text-3xl">About me</h2>
            <p>
              I am a college student in Ontario, studying computer programming.
              As a developer I like creating visually pleasing websites with
              amazing interactions
            </p>
          </span>
          <span>
            <h2 className=" text-xl">Awards</h2>
            <a href="https://www.senecahackathon.com/history" target="_blank">
              Seneca Smart Cities Hackathon
            </a>
            <p>Runner up | Category winner</p>
          </span>
        </div>

        <div className="border w-full bg-[#FCFD96] rounded-lg text-[#FF00F5] p-4 relative overflow-visible">
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
              content="Typescript"
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
              content="Node JS"
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
        </div>
      </div>
    </section>
  );
}

export default About;
