'use client'

import { motion } from "framer-motion";
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import MobileNav from "./mobileNav";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'





const item = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.9, delay: 2 } },
};

export default function Navbar() {
  const { userId } = useAuth();
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 767px)" })
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" })
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 mx-auto h-fit">
      {isDesktopOrLaptop && 
        <div
        className="flex items-center justify-between w-full h-20 gap-14 inner">
          <div className="flex gap-24">
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
                <Link className={`font-semibold duration-200 ${pathname === "/" ? "text-[#11C8B2]" : "text-[#eeeeee]"}`} href="/">Home</Link>
              </motion.span>
              <motion.span
              variants={item}
              >
                <Link className={`font-semibold duration-200 ${pathname === "/browse" ? "text-[#11C8B2]" : "text-[#eeeeee]"}`} href={"/browse"}>Browse</Link>
              </motion.span>
              <motion.span
              variants={item}
              >
                <Link className={`font-semibold duration-200 ${pathname === "/faq" ? "text-[#11C8B2]" : "text-[#eeeeee]"}`} href={"/faq"}>FAQ</Link>
              </motion.span>
              {userId && <motion.span
              variants={item}
              >
                <Link className={`font-semibold duration-200 ${pathname === "/publish" ? "text-[#11C8B2]" : "text-[#eeeeee]"}`} href="/publish">Publish</Link>
              </motion.span>}
              
            </motion.div>
          </div>
          <div className="flex gap-5 text-sm ">
              {!userId ? (<><Link className=" text-center w-28 py-[6px] border rounded-xl border-[#11C8B2] hover:shadow-md  bg-[#17171778] duration-300 hover:shadow-[#11c8b363] text-[#eeeeee] " href="/sign-in">Sign In</Link><Link className=" text-center w-28 py-[6px] border rounded-xl border-[#eeeeee] bg-[#17171778] hover:shadow-md duration-300 hover:shadow-[#eeeeee36] text-[#eeeeee] " href="/sign-up">Sign Up</Link></>) : (<UserButton
                afterSignOutUrl="/" />)}
          </div>
        </div>}
      {isMobileOrTablet && <MobileNav />}
    </div>
  )
}
