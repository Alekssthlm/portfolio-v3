"use client";
import { motion } from "framer-motion";
import Reveal from "../_components/Effects/Reveal";
import ContactForm from "../_components/ContactForm/ContactForm";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import GlassBlobs from "../_components/GlassBlobs/GlassBlobs";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(true);
  return (
    <section className="flex flex-col pt-[6rem]  lg:pt-[8rem] lg:flex-row justify-center items-center lg:gap-[6rem] px-4 max-w-[60rem] mx-auto z-40">
      <GlassBlobs />
      <div className="glass-background fixed top-0 h-lvh w-lvw z-10"></div>
      <div className="w-[100%] max-w-5xl grid grid-cols-1 gap-4 z-40">
        <Reveal delay={0.5}>
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
            <h1 className="text-[#9d9d9d] text-[1.2rem] lg:text-[1.5rem]">
              Contact<span className="text-[#01FFB9]">{"."}</span>
            </h1>
          </div>
        </Reveal>
        {messageSent && (
          <>
            <div
              className="fixed z-40 top-0 left-0 h-full w-full bg-[#000000db] flex justify-center items-center"
              onClick={() => setMessageSent(false)}
            ></div>
            <div className="text-white border-[1px] w-[90%] max-w-[40rem] rounded-[5px] border-[#202020] p-10 flex text-[1rem] flex-col gap-8 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
              <p className="z-40 text-center">Your message has been sent.</p>
              <button
                className="text-[0.9rem] border-[2px] border-[#01FFB9] hover:text-black hover:bg-[#01FFB9] px-5 py-1 hover:scale-[1.05] transition-all ease-in-out duration-300 self-center"
                onClick={() => setMessageSent(false)}
              >
                close
              </button>
            </div>
          </>
        )}
        <ContactForm setMessageSent={setMessageSent} />
      </div>
    </section>
  );
}
