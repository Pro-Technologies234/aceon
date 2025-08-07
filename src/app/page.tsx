'use client'

import Image from "next/image";
import hereo_bg from '@/assets/images/hero_bg.png'
import tennis_player from '@/assets/images/tennis_player.jpg'
import tennis_shot from '@/assets/images/15956.jpg'
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import SmoothScrollWrapper from "@/components/scroll-wrap";
import { ScrollLockScaling } from "@/components/shared/animated-scaled-text";
import { circIn, circInOut, easeIn, motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import tennis_showcase from '@/assets/images/tennis_showcase.png'

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <Navbar />

      <section className="relative overflow-hidden   w-full h-dvh">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-10">
          <Image src={hereo_bg} alt="hero_bg" className="object-cover contrast-110 saturate-110 w-full h-full" />
        </div>
        {/* Gradient Overlay + Main Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-700/25 to-cyan-500/5">
          <div className="py-10 h-dvh flex font-cabinet-grotesk flex-col justify-end text-white w-full max-w-7xl mx-auto">
            <div className="overflow-hidden" >
              <motion.h1
                initial={{y: 100}}
                animate={{y: 0}}
                transition={{duration: 1}}
                 className="text-5xl w-xl selection:bg-lime-200 selection:text-black">
                The Perfect Tennis Ball for
              </motion.h1>
              </div>
            <div className="overflow-hidden" >
              <motion.h1
                initial={{y: 100}}
                animate={{y: 0}}
                transition={{duration: 1}}
                 className="text-5xl w-xl selection:bg-lime-200 selection:text-black">
                 Every Match.
              </motion.h1>
            </div>
            <p className="w-md text-sm font-light mt-2">
              Aceon Balls are trusted by players of all levels, from casual enthusiasts to tournament champions.
            </p>
            <div className="space-x-4 mt-4">
              <Button size="lg" className="rounded-full bg-gray-900 hover:bg-blue-700 text-white">
                SHOP NOW
              </Button>
              <Button size="lg" className="rounded-full bg-gray-900/10 hover:bg-gray-900/50 backdrop-blur-sm text-white">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="group w-full h-dvh bg-black/50 hover:bg-black/20 transition-all duration-500  overflow-hidden relative " >
        <motion.div className='absolute overflow-hidden -z-20 inset-0'
          initial={{ opacity: 0, scale: 4 }}
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{duration:2,delay:.2}}
          >
          <Image src={tennis_shot} alt="tennis_player.png" className="object-cover group-hover:grayscale-0 transition-all duration-500 grayscale w-full h-full" />
        </motion.div>
        <div className="flex justify-center h-full items-center max-w-7xl m-auto" >
          <motion.h2 
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{duration:1,delay:.2}}
            className="text-7xl w-5xl leading-tight text-center selection:bg-lime-200 selection:text-black text-white uppercase font-light">
            {/* Performance. Precision. Power. Play. */}
            {/* Strike Every Ball With Relentless Focus */}
            Push Beyond Your Limits. Every Swing, Every Bounce, Every Win.
          </motion.h2>
        </div>

      </section>
       {/* <ScrollLockScaling/>
      <section className="grid grid-cols-2 gap-4 h-dvh w-full  mx-auto">
        <div className="flex items-center" >
          <div className="w-full h-[80dvh] rounded-tr-4xl rounded-br-[10rem] relative overflow-hidden" >
            <Image src={tennis_player} alt="tennis_player.png" className="object-cover contrast-125 saturate-150 w-full h-full" />
          </div>
        </div>
        <div className="py-10 h-full relative flex font-cabinet-grotesk flex-col justify-center text-white">
            <h2 className="text-5xl w-2xl selection:bg-lime-200 selection:text-black">
              Engineered for durability, precision bounce, and championship-level performance.
            </h2>
        </div>
      </section> */}
      <section className="" >
        <div className="  h-dvh flex flex-col justify-center items-center  max-w-7xl w-full m-auto" >
            <h2 className="text-5xl leading-0" >ABOUT</h2>
            <motion.h2 
              initial={{y:200}}
              whileInView={{y:0}}
              transition={{duration:1, ease: circInOut}}
              className="text-[25em] leading-tight font-medium">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                A
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                C
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                E
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                O
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                N
              </motion.span>
            </motion.h2>
            <Button size="lg" className="rounded-full bg-gray-50 hover:bg-blue-700 text-black hover:text-white shadow-blue-300 shadow-2xl">
              <ArrowDown/>CONTINUE SCROLLING <ArrowDown/>
            </Button>
        </div>
        <div className="grid grid-cols-2 py-20 h-dvh   max-w-7xl w-full m-auto" >
          <div className="flex items-start" >
            <motion.h3
              initial={{x: 400}}
              whileInView={{x: 0}}
              transition={{duration: 1, ease: circIn}}
              className="text-5xl font-medium selection:bg-lime-200 selection:text-black" >
              Aceon is dedicated to creating premium-quality tennis balls that deliver unmatched consistency and feel on the court.
            </motion.h3>
          </div>
          <div className="flex items-end" >
            <motion.h3
              initial={{x: -400}}
              whileInView={{x: 0}}
              transition={{duration: 1, ease: circIn}}
              className="text-5xl text-right font-medium selection:bg-lime-200 selection:text-black" >
              Whether you're practicing serves or battling it out in a final set, our balls are designed to keep up with your game.
            </motion.h3>
          </div>
        </div>
        <div>

        </div>
      <div className="flex justify-center items-center max-w-[90vw] h-[75dvh] rounded-4xl overflow-hidden relative py-50 text-white   w-full m-auto" >
        <div className="absolute inset-0  bg-black -z-1" >
          <video src="/videos/tennis_ball_fall.mp4" autoPlay playsInline loop muted className="object-cover saturate-150 w-full opacity-20 h-full" ></video>
        </div>
          <h3 className="text-3xl text-center w-3xl uppercase  selection:bg-lime-200 selection:text-black " >
            With years of research and collaboration with professional athletes, Aceon Balls are crafted to meet the highest standards of performance and sustainability.
          </h3>
      </div>
      </section>
      <div>
<div className="relative h-[300vh]">
  {/* Sticky Section */}
  <section className="sticky top-0 h-dvh z-1 bg-white grid grid-cols-2 w-full">
    <div className="flex flex-col items-end">
      <div className="p-20">
        <h2 className="text-4xl font-black">Why Choose Aceon Balls?</h2>
        <ul className="list-disc ml-4 text-justify">
          <li>Tournament-Grade Quality: Designed to meet ITF standards for official matches.</li>
          <li>Enhanced Durability: Lasts longer with superior felt and pressurized core.</li>
          <li>Consistent Bounce: Optimized for all court surfaces — clay, grass, and hard court.</li>
          <li>Eco-Conscious: Made with 40% recycled materials without compromising performance.</li>
        </ul>
      </div>
    </div>
    <div className="overflow-hidden shadow-2xl shadow-rose-200">
      <Image
        src={tennis_showcase}
        alt="tennis_showcase.png"
        className="object-cover w-full h-full"
      />
    </div>
  </section>

  {/* Footer Scrolls Over */}
  <footer className="absolute top-0 w-full h-[300vh] z-10">
    <div className="h-[200vh]" /> spacer to allow section to stay sticky
    <div className="h-dvh bg-zinc-900 text-white flex items-center justify-center">
      <p className="text-3xl font-bold">Footer Content Appears Over</p>
    </div>
  </footer>
</div>

      {/* <section className=" bg-white h-auto grid grid-cols-2 w-full m-auto" >
        <div className="flex flex-col items-end" >
          <div className="p-20" >
            <h2 className="text-4xl font-black" >Why Choose Aceon Balls?</h2>
            <ul className="list-disc ml-4 text-justify" >
              <li>Tournament-Grade Quality: Designed to meet ITF standards for official matches.
              </li>
              <li>
                  Enhanced Durability: Lasts longer with superior felt and pressurized core.
              </li>
              <li>
                  Consistent Bounce: Optimized for all court surfaces — clay, grass, and hard court.
              </li>
              <li>
                  Eco-Conscious: Made with 40% recycled materials without compromising performance.
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden shadow-2xl shadow-rose-200" >
          <Image src={tennis_showcase} alt="tennis_showcase.png" className="object-cover  w-full h-full" />
        </div>
        <footer className="w-full  z-1" >
          <div className="h-dvh bg-zinc-50 " >
            
          </div>
          <div className="h-100 bg-zinc-900 " >
            
          </div>
        </footer>
      </section> */}
      </div>

    </SmoothScrollWrapper>
  );
}
