'use client'
import { motion } from "framer-motion"

export default function Faq() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    exit={{ opacity: 0}}
    animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.2}}}
    className="min-h-screen py-20">FAQ</motion.div>
  )
}
