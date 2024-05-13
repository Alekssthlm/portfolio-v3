"use client";

import { projectsData } from "@/data/projectsData";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation } from "framer-motion";
import Reveal from "../_components/Effects/Reveal";
import WaveEffect from "../_components/Effects/WaveEffect";
import GlassBlobs from "../_components/GlassBlobs/GlassBlobs";

export default function Projects() {
  return (
    <section className="flex flex-col pt-[6rem] pb-10 lg:pt-[8rem] lg:flex-row justify-center items-center lg:gap-[6rem] px-4 max-w-[60rem] mx-auto z-40">
      <div className="glass-background fixed top-0 h-[120lvw] w-lvw z-10"></div>
      <GlassBlobs />
      <div className="w-[100%] max-w-5xl grid grid-cols-1 gap-4 z-40">
        <Reveal delay={0.5}>
          <div className="flex justify-end">
            <h1 className="text-[#9d9d9d] text-[1.5rem] lg:text-[1.5rem]">
              projects<span className="text-[#01FFB9]">{"."}</span>
            </h1>
          </div>
        </Reveal>
        <div className="flex flex-col gap-10">
          {projectsData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: {
    name: string;
    src: string | StaticImageData;
    id: string;
    url: string;
    preview: string;
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  const controls = useAnimation();

  return (
    <motion.a
      className="flex flex-col md:flex-row bg-black p-4 cursor-pointer gap-4 z-40 border-[1px] rounded-[5px] border-[#202020] relative"
      href={`projects/${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onHoverStart={() =>
        controls.start({ scale: 1.2, transition: { duration: 0.2 } })
      }
      onHoverEnd={() =>
        controls.start({ scale: 1, transition: { duration: 0.2 } })
      }
    >
      <div className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-start pb-4">
        <h1 className="text-[#01FFB9] text-[1.8rem] lg:text-[1.5rem] font-[900] text-wrap">
          <WaveEffect>{project.name}</WaveEffect>
        </h1>
        <Reveal delay={0.5}>
          <p className="text-[#fffaf1] text-[0.9rem] text-center md:text-left select-none ">
            {project.preview}
          </p>
        </Reveal>
        <span className="text-[#9d9d9d] absolute bottom-2 underline transition-all duration-[1000] hover:text-[#01FFB9]">
          visit
        </span>
      </div>
      <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
        <motion.div>
          <Image
            src={project.src}
            alt={project.name}
            loading="lazy"
            className="h-[10rem] w-auto rounded-[5px] border-[1px] border-[#4e4e4e]"
          />
        </motion.div>
      </div>
    </motion.a>
  );
}
