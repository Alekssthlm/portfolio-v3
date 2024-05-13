"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed w-lvw top-0 z-[99] h-20 flex flex-col gap-0 mx-auto `}
    >
      <nav
        className="flex items-center justify-between px-4 lg:px-4 lg:py-4 flex-1 glass-background"
        aria-label="Global"
      >
        <div className="flex">
          {/* LOGO */}
          <a href="/">
            <div className="relative border-solid border-black text-[#fff]">
              <span className="font-[900] text-[1.2rem] lg:text-[2rem] select-none">
                ah
                <motion.span
                  className="text-[#01FFB9] absolute top-0"
                  animate={{
                    y: ["0%", "-10%", "0%", "-10%", "0%"],
                    transition: {
                      repeat: Infinity,
                      duration: 0.8,
                      repeatDelay: 4,
                    },
                  }}
                >
                  {"."}
                </motion.span>
              </span>
            </div>
          </a>
        </div>

        {/* NAVIGATION MENU BUTTON */}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center text-black bg-[#01FFB9] rounded-lg p-1 lg:p-3"
          aria-label="Open Menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className={`h-7 w-7 md:h-7 md:w-7`} aria-hidden="true" />
        </motion.button>
      </nav>
      <Breadcrumbs />

      {/* MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed bg-[#000000e7] top-0 left-0 w-lvw h-lvh z-50"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="absolute w-[20%] h-lvh bg-[#000000e7] top-0 left-[-20%]"
              style={{ borderRadius: "80% 0% 0% 80% / 50% 0% 0% 50% " }}
            ></div>

            <div className=" w-lvw flex flex-col h-full py-4 px-8 gap-4">
              <div className="flex justify-end">
                <button
                  className=" text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon
                    className={`h-7 w-7 md:h-12 md:w-12 text-white`}
                    role="button"
                    aria-label="Close"
                  />
                </button>
              </div>

              <div className="flex flex-col items-start justify-center flex-1 gap-8 mx-auto">
                <Link
                  href="/"
                  className="block text-[#9d9d9d] font-[900] rounded-lg px-3 py-2 text-[2rem] leading-7 hover:scale-[1.5] hover:text-white transition-all ease-in-out duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="block text-[#9d9d9d] font-[900] rounded-lg px-3 py-2 text-[2rem] leading-7 hover:scale-[1.5] hover:text-white transition-all ease-in-out duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="block text-[#9d9d9d] font-[900] rounded-lg px-3 py-2 text-[2rem] leading-7 hover:scale-[1.5] hover:text-white transition-all ease-in-out duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About me
                </Link>
                <Link
                  href="/contact"
                  className="block text-[#9d9d9d] font-[900] rounded-lg px-3 py-2 text-[2rem] leading-7 hover:scale-[1.5] hover:text-white transition-all ease-in-out duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const MoonIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1.5rem"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5rem"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

const SunIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1.5rem"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5rem"
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
