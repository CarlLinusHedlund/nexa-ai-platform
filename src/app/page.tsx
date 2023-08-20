'use client';
import { motion } from 'framer-motion';
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.6 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5, delay: 2 } },
}; 

export default function Home() {
  return (
    <motion.div
      variants={item}
      initial="initial"
      animate="animate"
      exit="exit"
    className="flex flex-col items-center justify-center min-h-screen p-24 ">
      <h1 className="text-4xl text-center text-[#eeeeee] font-black ">
        NEXA
      </h1>
    </motion.div>
  )
}
