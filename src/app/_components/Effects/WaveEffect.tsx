import { motion } from "framer-motion";

type WaveEffectProps = {
  children: string;
};

export default function WaveEffect({ children }: WaveEffectProps) {
  const wordArray = children.split("");
  return wordArray.map((letter, index) =>
    letter === " " ? (
      <span key={index}> </span>
    ) : (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ y: "0%", opacity: 0 }}
        animate={{
          y: ["0%", "-20%", "0%"],
          opacity: [0, 1],
          transition: {
            y: {
              duration: 0.3,
              delay: index * 0.02,
            },
            opacity: {
              duration: 0.2,
              delay: index * 0.02,
            },
          },
        }}
      >
        {letter}
      </motion.span>
    )
  );
}
