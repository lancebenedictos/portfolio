import React from "react";
import Camera from "./Camera";
import Project from "./Project";
import Sneaker from "./Sneaker";
import Computer from "./Computer";
import Calendar from "./Calendar";

type Project = {
  svg: React.ReactNode;
  tech: string;
  projectImgSrc: string;
  projectUrl: string;
  reverse?: boolean;
  title: string;
  githubUrl: string;
  nodeUrl?: string;
};

const projects: Array<Project> = [
  {
    svg: <Calendar />,
    tech: "TailwindCSS, ReactJS, NodeJS, Express, AWS S3, AWS Rekognition",
    projectImgSrc: "/eventsnap.png",
    projectUrl: "https://eventsnap.vercel.app/",
    title: "01. Event management app",
    githubUrl: "https://github.com/lancebenedictos/eventsnap",
    reverse: true,
    nodeUrl: "https://github.com/lancebenedictos/EventSnapServer",
  },
  {
    svg: <Camera />,
    tech: "TailwindCSS, NextJS, Framer Motion",
    projectImgSrc: "/blog.png",
    projectUrl: "https://film-blog-iota.vercel.app/",
    title: "01. Film blog",
    githubUrl: "https://github.com/lancebenedictos/film-blog",
  },
  {
    svg: <Sneaker />,
    tech: "TailwindCSS, NextJS, Framer Motion",
    projectImgSrc: "/sneaker.png",
    projectUrl: "https://elev.vercel.app/",
    reverse: true,
    title: "02. Sneaker store",
    githubUrl: "https://github.com/lancebenedictos/elev",
  },
  {
    svg: <Computer />,
    tech: "TailwindCSS, NextJS, Framer Motion, Grafbase",
    projectImgSrc: "/flexxible.png",
    projectUrl: "https://flexibble-wheat.vercel.app/",
    title: "03. Dribbble clone",
    githubUrl: "https://github.com/lancebenedictos/flexibble",
  },
];
function ProjectSection() {
  return (
    <section
      className="min-h-full h-fit pb-16 lg:pb-[300px] relative overflow-hidden"
      id="projects"
    >
      <div className=" -z-10 absolute top-0 right-0  translate-x-1/2 border-2 rounded-full border-black p-2 ">
        <div className="w-[150px] h-[150px] rounded-full bg-[#7DF9FF]"></div>
      </div>

      <div className=" -z-10 absolute bottom-1/3 left-1/3  translate-x-1/2 border-2 rounded-full border-black p-2 ">
        <div className="w-[150px] h-[150px] rounded-full bg-[#7DF9FF]"></div>
      </div>
      <div className="w-full px-4 lg:w-[80%] max-w-6xl mx-auto lg:pt-[54px] flex flex-col gap-4">
        {projects.map(
          (
            {
              svg,
              tech,
              projectImgSrc,
              projectUrl,
              title,
              reverse,
              githubUrl,
              nodeUrl,
            }: Project,
            index
          ) => (
            <Project
              svg={svg}
              tech={tech}
              title={title}
              projectImgSrc={projectImgSrc}
              projectUrl={projectUrl}
              key={index}
              reverse={reverse}
              githubUrl={githubUrl}
              nodeUrl={nodeUrl}
            />
          )
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
