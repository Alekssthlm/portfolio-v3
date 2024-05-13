"use client";

import { motion } from "framer-motion";
import WaveEffect from "../Effects/WaveEffect";
import Reveal from "../Effects/Reveal";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GlassBlobs from "../GlassBlobs/GlassBlobs";

export default function Hero() {
  return (
    <div className="text-[#fff] h-dvh flex pt-10 lg:pt-20 flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[2rem] relative">
      <div className="glass-background fixed top-0 h-lvh w-lvw z-10"></div>
      <GlassBlobs />

      <div className="lg:h-[30rem] flex flex-col px-4 lg:px-0 lg:block z-20">
        <h1 className=" lg:block text-[1.8rem] lg:text-[2.5rem] ">
          <WaveEffect>Hi, I&apos;m Alexander</WaveEffect>
        </h1>

        <Reveal delay={0.5}>
          <h2 className="lg:block text-[1.2rem] lg:text-[1.6rem] mb-6 md:mb-7">
            and I&apos;m a <span className="text-[#01FFB9]">Web Developer</span>
            {"."}
          </h2>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="text-[0.9rem] lg:text-base text-[#fff] max-w-[35rem] mb-16 z-20 relative">
            &quot;I&apos;m passionate about web development and ready to embark
            on my professional journey. I&apos;m currently enrolled in studies
            at Hyper Island, learning how to program by crafting web apps using
            industry best practices. I invite you to{" "}
            <a href="/projects" className="text-[#01FFB9] underline">
              explore my work
            </a>{" "}
            and let&apos;s connect!&quot;
          </p>
        </Reveal>

        <motion.div
          initial={{ y: 75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="self-center lg:self-start"
        >
          <div className="flex justify-end items-center gap-4">
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
            <motion.a
              href="/contact"
              className="text-[#01FFB9] text-[2.5rem]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdEmail />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center order-1 lg:order-2 z-20 relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{
          scale: [0.95, 1],
          opacity: [0, 1],
          transition: {
            duration: 0.5,
          },
        }}
      >
        {/* <Image
          src={newportrait}
          alt="Alexander Heras portrait"
          className={`w-[60vmin] md:w-[20rem] md:max-w-[50rem] z-20 bg-[#ff6f00] border-[#470076] border-[10px] rounded-full`}
        /> */}
      </motion.div>
    </div>
  );
}
