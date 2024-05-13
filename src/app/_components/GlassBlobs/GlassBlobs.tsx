"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function GlassBlobs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, delay: 1 }}
      className="fixed md:block bottom-[-20%] left-[-40%] z-1 w-full h-full"
    >
      <Spline
        scene="https://prod.spline.design/9Baf9Kt2f9hm2c3d/scene.splinecode"
        className="scale-[2] "
      />
    </motion.div>
  );
}
