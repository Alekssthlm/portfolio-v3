"use client";

import { motion } from "framer-motion";
import WaveEffect from "../_components/Effects/WaveEffect";
import Reveal from "../_components/Effects/Reveal";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Stack from "../_components/Stack/Stack";
import GlassBlobs from "../_components/GlassBlobs/GlassBlobs";
import { useEffect, useState } from "react";

export default function About() {
  const [renderSpline, setRenderSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderSpline(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col pt-[6rem] pb-10 lg:pt-[8rem] lg:flex-row justify-center items-center lg:gap-[6rem] px-4 max-w-[60rem] mx-auto z-40">
      <div className="glass-background fixed top-0 h-lvh w-lvw z-10"></div>
      {renderSpline && <GlassBlobs />}

      <div className="flex flex-col px-3 lg:px-0 gap-4 z-20">
        <Reveal>
          <div className="flex justify-end">
            <motion.div
              initial={{ y: 75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/alexander-heras/"
                  target="_blank"
                  className="text-[#01FFB9] text-[2rem]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/Alekssthlm"
                  target="_blank"
                  className="text-[#01FFB9] text-[2rem]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <h1 className="text-[#9d9d9d] text-[1.2rem] lg:text-[1.5rem]">
                  About<span className="text-[#01FFB9]">{"."}</span>
                </h1>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h2 className="text-[#9d9d9d] text-[0.9rem]">
              <WaveEffect>stack/tools:</WaveEffect>
            </h2>
            <Reveal delay={0.5}>
              <Stack />
            </Reveal>
          </div>

          <div className="flex flex-col gap-4 order-1 md:order-2">
            <h2 className="text-[#9d9d9d] text-[0.9rem]">
              <WaveEffect>Welcome!</WaveEffect>
            </h2>
            <Reveal delay={0.8} customClass={"lg:block"}>
              <p className="text-[0.9rem] lg:text-base text-[#fff] mb-6 z-20 relative">
                My name is Alexander and I am a Web Development student at Hyper
                Island. I am proud to share my progress through my journey with
                you and I hope to connect and nurture meaningful relations that
                lead to growth. <br />
                <br />
                My journey started back in 2022 when I realized that building
                dummy web stores on Shopify was something I enjoyed. My interest
                led me to research how to make personalized changes to my sites
                and I quickly realised that I needed more; the fact that I could
                build with code and see the result on the screen motivated me to
                see web development as a change of career. <br />
                <br />
                In the summer of 2023, I got admitted to the Front-End Developer
                program at Hyper Island in Stockholm, Sweden - and it has been a
                rollercoaster. I started by learning the fundamentals of web
                development by building sites with plain HTML and styling them
                with CSS, then progressed towards implementing interactivity
                with Javascript, and now half-way through the program, I find
                myself building full-stack applications with React and Node.js
                on the server side. <br />
                <br />
                The Hyper Island approach of learning by doing and the excellent
                mentorship and guidance of industry experts has implanted a
                growth mindset that motivates me even further in my journey,
                pushing me to seek knowledge through research and self-led
                courses that shape me into a better developer. <br />
                <br />
                Looking ahead, I will be learning more concepts and reinforcing
                my current knowledge. My program also includes a mandatory
                internship that lasts 6 months, starting in September 2024, and
                I welcome gladly suggestions for potential internship companies
                where I can provide value and develop my skills.
              </p>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
