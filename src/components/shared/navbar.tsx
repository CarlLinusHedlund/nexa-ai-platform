import { motion } from "framer-motion";
import Link from "next/link"
import { useMediaQuery } from "react-responsive"


const item = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.9, delay: 2 } },
};

export default function Navbar() {

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 767px)" })
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <div className="fixed top-0 left-0 right-0 mx-auto h-fit">
      {isDesktopOrLaptop && 
        <div
        className="flex items-center w-full h-20 gap-14 inner">
          <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1} }}
          className="font-black text-[#eeeeee] text-2xl">NEXA</motion.div>
          <motion.div
          variants={item}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex items-center justify-center space-x-8 text-sm">
            <motion.span
            variants={item}
            >
              <Link className="font-semibold text-[#eeeeee]" href="/">Home</Link>
            </motion.span>
            <motion.span
            variants={item}
            >
              <Link className="font-semibold text-[#eeeeee]" href="/browse">Browse</Link>
            </motion.span>
            <motion.span
            variants={item}
            >
              <Link className="font-semibold text-[#eeeeee]" href="/faq">FAQ</Link>
            </motion.span>
          </motion.div>
        </div>}
      {isMobileOrTablet && <div>Mobile</div>}
    </div>
  )
}
