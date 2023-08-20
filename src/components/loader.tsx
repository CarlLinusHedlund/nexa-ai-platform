'use client'
import { useAnimationStore } from "@/store/loader";
import { motion } from "framer-motion"



const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.6 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.9, delay: 2 } },
};


export default function Loader() {
  const { setAnimationComplete } = useAnimationStore()

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className='flex flex-col items-center justify-center'
      variants={item}
      animate='animate'
      initial='initial'
      exit='exit'
      onAnimationComplete={handleAnimationComplete}
    >
      <motion.h1
        variants={item}
        className="text-[#eeeeee] font-bold text-5xl">
        NEXA
      </motion.h1>
      <motion.p
        variants={item}
      className="text-[#eeeeee]">AI toolkits collected in one place</motion.p>
    </motion.div>
  )
}