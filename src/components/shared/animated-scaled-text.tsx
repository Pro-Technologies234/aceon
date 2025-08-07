'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function ScrollLockScaling() {
  const pinRef = useRef<HTMLDivElement>(null)

  // Using scrollY (pixel-based scroll position)
  const { scrollY } = useScroll({
    target: pinRef,
    offset: ['start center', 'end center'] // when top hits center to when bottom hits center
  })

  // Let's say we want to scale up by 0.01 per pixel scrolled
  const scale = useTransform(scrollY, (value) => {
    // Example: scale up 0.005 per pixel scrolled, starting from scale 1
    return 0.01 + value * 0.005;
  })

  return (
    <div className="h-[300vh] font-cabinet-grotesk bg-black text-white">
      <div  className="h-[200vh] relative">
        <div ref={pinRef} className="sticky top-0 h-screen flex items-center justify-center">
          <motion.h2 
            whileInView={{opacity:1}}
            animate={{opacity:0}}
            transition={{ duration: 0.5 }}
            style={{ scale }} className="text-xl text-center w-sm uppercase font-light">
            Engineered for durability, precision bounce, and championship-level performance.
          </motion.h2>
        </div>
      </div>
    </div>
  )
}
