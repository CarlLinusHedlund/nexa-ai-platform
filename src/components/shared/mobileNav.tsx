import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion"
import Link from "next/link";



export default function MobileNav() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <>
    <div className="relative z-10 flex items-center justify-between w-full h-16 px-4">
      <motion.button
      animate={mobileNav ? "open" : "closed"}
      onClick={() => toggleMobileNav()}
      className="flex flex-col items-center justify-center gap-1 rounded-full border border-[#eeeeee64] h-10 w-10">
        <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 5}
        }}
        className={`w-5 h-px block ${mobileNav ? 'bg-[#eeeeee]' : 'bg-[#eeeeee70]'}`}></motion.span>
        <motion.span
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0, }
        }}
        className="w-5 h-px block bg-[#eeeeee85]"></motion.span>
        <motion.span
        variants={{
          closed: { rotate: 0,  },
          open: { rotate: -45, y: -4  }
        }}
        className="w-5 h-px block bg-[#eeeeee]"></motion.span>
      </motion.button>
      <div className="font-black text-[#eeeeee]  font-poppins">
        NEXA
      </div>
      <div>
        settings
      </div>
    </div>
    <AnimatePresence>
      <MotionConfig transition={{
        type: 'spring',
        stiffness: 80,
        bounce: .20,
      }}>
        {mobileNav && (<motion.div
          key="mobile-nav"
          variants={{
            open: {x: '0%', transition: {when: 'beforeChildren', staggerChildren: 0.2}},
            closed: {x: '-100%', transition: {when: 'afterChildren', staggerChildren: 0.2}}
          }}
          initial="closed"
          animate="open"
          exit='closed'
          className="fixed inset-0 bg-gray-900 ">
            <div className="absolute w-full h-full pattern-dots pattern-opacity-10 pattern-bg-transparent pattern-size-2 pattern-gray-100 ">

            </div>
            <motion.div 
            variants={{
              open: {y: '0%', opacity: 1},
              closed: {y: '100%', opacity: 0}}}
              className="flex flex-col  items-center justify-center w-full h-full gap-4 text-[#eeeeee] font-extrabold font-poppins text-3xl  ">
              <motion.div className="">
                <Link onClick={() => toggleMobileNav()} href="/">Home</Link>
              </motion.div>
              <motion.div>
                <Link onClick={() => toggleMobileNav()} href="/browse">Browse</Link>
              </motion.div>
              <motion.div>
                <Link onClick={() => toggleMobileNav()} href="/faq">FAQ</Link>
              </motion.div>
            </motion.div>
        </motion.div>)}
      </MotionConfig>
    </AnimatePresence>
    </>
  )
}
