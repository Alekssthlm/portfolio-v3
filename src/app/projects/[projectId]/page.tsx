"use client";

import { motion } from "framer-motion";
import { ParsedUrlQuery } from "querystring";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import WaveEffect from "@/app/_components/Effects/WaveEffect";
import Reveal from "@/app/_components/Effects/Reveal";
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

type PageProps = {
  params: ParsedUrlQuery;
};

export default function SelectedProject({ params }: PageProps) {
  const [renderSpline, setRenderSpline] = useState(false);
  const filteredProject = projectsData.filter(
    (project) => project.id === params.projectId
  )[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderSpline(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex h-lvh z-50">
      {renderSpline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 6 }}
          className="fixed md:block top-[200px] left-[-40%] z-1 w-full"
        >
          <Spline
            scene="https://prod.spline.design/UWKTftQGJ5SiWN3U/scene.splinecode"
            className="scale-[2]"
          />
        </motion.div>
      )}
      <div className="glass-background fixed top-0 h-[120lvh] w-lvw z-10"></div>
      <article className="h-full w-full mx-auto z-50 pt-[6rem] lg:pt-40 px-3 lg:px-0">
        <div className="text-white max-w-[70rem] mx-auto">
          {/* GRID */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <section className="flex flex-col pb-10 gap-4 order-2 lg:order-1">
              <h1 className="text-[#01FFB9] text-[0.9rem]">
                <WaveEffect>{filteredProject.id}</WaveEffect>
              </h1>

              <h2 className="text-[#9d9d9d] text-[0.9rem]">
                <WaveEffect>key learnings:</WaveEffect>
              </h2>
              <Reveal>
                <p className="lg:max-w-[30rem] text-[0.9rem]">
                  {filteredProject.learnings.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                      <br />
                    </span>
                  ))}
                </p>
              </Reveal>
              <h2 className="text-[#9d9d9d] text-[0.9rem]">
                <WaveEffect>tools:</WaveEffect>
              </h2>
              <Reveal>
                <div className="flex flex-wrap gap-2 text-[0.9rem]">
                  {filteredProject.badges.map((badge) => (
                    <span key={crypto.randomUUID()}>
                      <span className="text-[#01FFB9] mx-1">[</span>
                      {badge}
                      <span className="text-[#01FFB9] mx-1">]</span>
                    </span>
                  ))}
                </div>
              </Reveal>
            </section>
            <motion.div
              className="flex flex-col lg:gap-4 order-1 lg:order-2 lg:pt-[4.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <a
                href={filteredProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={filteredProject.src}
                  alt={filteredProject.name}
                  className="h-auto w-auto rounded-[5px] border-[1px] border-[#4e4e4e]"
                />
              </a>
              <div className="grid grid-cols-1 text-center">
                <a
                  href={filteredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" py-[1rem] cursor-pointer underline hover:scale-[1.1]"
                >
                  visit site
                </a>
              </div>
            </motion.div>
          </section>
        </div>
      </article>
    </section>
  );
}
