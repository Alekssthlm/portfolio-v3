"use client"
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSanity,
  SiSwagger,
  SiThreedotjs,
  SiGreensock,
} from "react-icons/si"
import { LuRotate3D } from "react-icons/lu"
import { RiTailwindCssFill } from "react-icons/ri"
import { BiLogoPostgresql } from "react-icons/bi"
import { TbTools } from "react-icons/tb"
import StackElement from "./StackElement"

export default function Stack() {
  return (
    <div className="grid grid-cols-[1fr,_1fr,_1fr,_1fr] sm:grid-cols-[1fr,_1fr,_1fr,_1fr,_1fr] md:grid-cols-[1fr,_1fr,_1fr] gap-2 justify-items-center">
      <StackElement iconHex="#F87315" title="html">
        <FaHtml5 />
      </StackElement>

      <StackElement iconHex="#2965f1" title="css">
        <FaCss3Alt />
      </StackElement>

      <StackElement iconHex="#f0db4f" title="javascript">
        <SiJavascript />
      </StackElement>

      <StackElement iconHex="#2965f1" title="typescript">
        <SiTypescript />
      </StackElement>

      <StackElement iconHex="#61DAFB" title="react">
        <FaReact />
      </StackElement>

      <StackElement iconHex="#fff" title="next.js">
        <SiNextdotjs />
      </StackElement>

      <StackElement iconHex="#68A063" title="node.js">
        <FaNodeJs />
      </StackElement>

      <StackElement iconHex="#06B6D4" title="tailwind">
        <RiTailwindCssFill />
      </StackElement>

      <StackElement iconHex="#F36458" title="sanity">
        <SiSanity />
      </StackElement>

      <StackElement iconHex="#336791" title="postgresql">
        <BiLogoPostgresql />
      </StackElement>

      <StackElement iconHex="#fff" title="github">
        <FaGithub />
      </StackElement>

      <StackElement iconHex="#f0db4f" title="seo/a11y">
        <TbTools />
      </StackElement>

      <StackElement iconHex="#61DAFB" title="swagger">
        <SiSwagger />
      </StackElement>

      <StackElement iconHex="#7011EF" title="bootstrap">
        <FaBootstrap />
      </StackElement>

      <StackElement iconHex="#f0db4f" title="spline 3d">
        <LuRotate3D />
      </StackElement>

      <StackElement iconHex="#f0db4f" title="R3F">
        <SiThreedotjs />
      </StackElement>

      <StackElement iconHex="#04e347" title="gsap">
        <SiGreensock />
      </StackElement>
    </div>
  )
}
