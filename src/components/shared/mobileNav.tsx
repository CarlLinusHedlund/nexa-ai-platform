import { motion, useCycle, AnimatePresence } from "framer-motion"
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
      {mobileNav && (<div className="fixed inset-0 bg-blue-600">
          <motion.div 
          variants={{
            open: {x: '0%'},
            closed: {x: '-100%'}
          }}
          initial="closed"
          animate="open"
          exit='closed'
          className="flex flex-col items-center justify-center h-full gap-4 ">
            <Link href="/">Home</Link>
            <Link href="/browse">Browse</Link>
            <Link href="/faq">FAQ</Link>
          </motion.div>
      </div>)}
    </AnimatePresence>
    
    
    </>
  )
}
