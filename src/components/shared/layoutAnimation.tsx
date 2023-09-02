'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useAnimationStore } from '@/store/loader';
import Navbar from "./navbar";
import Loader from "../loader";


export default function LayoutAnimation({
  children,
}: {
  children: React.ReactNode
}) {
  const { animationComplete } = useAnimationStore();

  return (
    <AnimatePresence mode='wait'>
          {!animationComplete ? (
            <motion.div key='loader' className='flex items-center justify-center w-full h-screen'>
              <Loader />
            </motion.div>
          ) : (
            <>
            <Navbar />
            <main className='items-center justify-center w-full min-h-screen inner'>
              {children}
            </main>
            </>
          )}
      </AnimatePresence>
  )
}
