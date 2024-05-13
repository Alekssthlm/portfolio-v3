import {motion} from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  customClass?: string;
}

export default function Reveal({ children, delay, customClass }: RevealProps){
  return (
    <div className={`overflow-hidden relative ${customClass}`}>
    <motion.div
    initial={{ opacity: 0, y: 75 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay}}
    >
      {children}
    </motion.div>
      </div>
  )
}