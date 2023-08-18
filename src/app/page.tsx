// import Image from 'next/image'
'use-client'
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', staggerChildren: 0.6 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5, delay: 2 } },
}; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24  ">
      <h1 className="text-4xl font-bold text-center text-[#eeeeee]">
        NEXA
      </h1>
    </main>
  )
}
