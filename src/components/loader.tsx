'use client'

import { motion } from "framer-motion"


const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.6 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5, delay: 2 } },
};

export default function Loader({ setLoading } : { setLoading: any }) {
  return (
    <motion.div
      className='flex flex-col items-center justify-center'
      variants={item}
      animate='animate'
      initial='initial'
      exit='exit'
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.h1
        variants={item}
        className="text-[#eeeeee] font-bold text-5xl">
        NEXA
      </motion.h1>
      <motion.p
        variants={item}
      className="text-[#eeeeee]">AI toolkits collected in one place</motion.p>
      <motion.p
        variants={item}
        className=" animate-pulse pt-6 text-[#eeeeee]">Page is Loading...
      </motion.p>
    </motion.div>
  )
}