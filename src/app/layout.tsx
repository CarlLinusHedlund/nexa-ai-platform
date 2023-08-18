import type { Metadata } from 'next'
'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/loader'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  return (
    <html lang="en">
      <body className={`${inter.className} relative body-bg `}>
        <div className=' absolute w-full h-full pattern-dots pattern-opacity-10 pattern-bg-transparent pattern-size-2 pattern-gray-100'>
        </div>
        <AnimatePresence mode='wait'>
          {loading ? (
            <motion.div key='loader' className='h-screen w-full flex items-center justify-center'>
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              {children}
            </>
          )}
        </AnimatePresence>
        
        
      </body>
    </html>
  )
}
