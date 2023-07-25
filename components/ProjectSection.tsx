import React from "react";
import Camera from "./Camera";
import Project from "./Project";
import Sneaker from "./Sneaker";
import Computer from "./Computer";

type Project = {
  svg: React.ReactNode;
  tech: string;
  projectImgSrc: string;
  projectUrl: string;
  reverse?: boolean;
  title: string;

  githubUrl: string;
};

const projects: Array<Project> = [
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
    tech: "TailwindCSS, NextJS, Framer Motion",
    projectImgSrc: "/flexxible.png",
    projectUrl: "https://flexibble-wheat.vercel.app/",
    title: "03. Dribbble clone",
    githubUrl: "https://github.com/lancebenedictos/flexibble",
  },
];
function ProjectSection() {
  return (
    <section className="min-h-full h-fit pb-[300px] relative">
      <div className=" -z-10 absolute top-0 right-0  translate-x-1/2 border-2 rounded-full border-black p-2 ">
        <div className="w-[150px] h-[150px] rounded-full bg-[#7DF9FF]"></div>
      </div>

      <div className=" -z-10 absolute bottom-1/3 left-1/3  translate-x-1/2 border-2 rounded-full border-black p-2 ">
        <div className="w-[150px] h-[150px] rounded-full bg-[#7DF9FF]"></div>
      </div>
      <div className="w-[80%] mx-auto pt-[54px] flex flex-col gap-4">
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
            />
          )
        )}
      </div>
    </section>
  );
}

export default ProjectSection;