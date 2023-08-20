'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


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
      className="flex flex-col-reverse items-center justify-center min-h-screen gap-10 py-20 overflow-hidden md:flex-row ">
      <div className='flex flex-col w-full h-full gap-10 md:w-3/5 '>
        <h1 className=" text-5xl  text-[#eeeeee] font-extrabold font-poppins text-left ">
        Powerhouse of AI <br />toolkits collected <br /> all in one place
        </h1>
        <div className='flex gap-5'>
          <div className='group'>
            <Link 
            className='w-40 px-14 rounded-xl py-2 border-2 border-[#11C8B2] shadow-sm  bg-[#171717] shadow-[#11C8B2] text-[#eeeeee] '
            href="/browse">Browse Ais</Link>
          </div>
          <div className=''>
            <Link 
            className='w-40 px-14 rounded-xl py-2 border-2 border-[#eeeeee] text-[#eeeeee] '
            href="/faq">What is this?</Link>
          </div>
        </div>
      </div>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      className='relative w-full md:w-2/5 h-96 '>
        <motion.div
        initial={{ x: 0, y: 0, rotate: 20 }}
        animate={{ x: 30, y: 0, rotate: 30, transition: { duration: 0.6, delay: 0.2}}}
        exit={{ x: 0, y: 0, rotate: 20, scale: 0.9, transition: { duration: 0.6, delay: 0.2}}}
        className='absolute -top-10 left-0 z-10 w-fit max-w-[450px] lg:max-w-[500px]'>
          <Image
          className='w-full'
          src={`/mobilescreenhome.png`} alt='mobile' width='400' height='400' />
        </motion.div>
        <motion.div
        initial={{ x: 0, y: 0, rotate: -10 }}
        animate={{ x: -30, y: 0, rotate: -20, transition: { duration: 0.6, delay: 0.2}}}
        className='absolute -top-10 left-0 w-fit max-w-[350px] lg:max-w-[400px] '>
          <Image
          className='w-full'
          src={`/mobilescreenchat.png`} alt='mobile' width='400' height='400' />
        </motion.div>
        
      </motion.div>
    </motion.div>
  )
}
