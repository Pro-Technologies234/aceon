'use client'

import Image from "next/image";
import hereo_bg from '@/assets/images/hero_bg.png'
// import tennis_player from '@/assets/images/tennis_player.jpg'
import tennis_shot from '@/assets/images/15956.jpg'
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import SmoothScrollWrapper from "@/components/scroll-wrap";
// import { ScrollLockScaling } from "@/components/shared/animated-scaled-text";
import { circIn, circInOut, easeInOut, motion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUp, Plus, Sparkle } from "lucide-react";
import tennis_racket from '@/assets/images/tennis_racket.jpg'
import tennis_strike from '@/assets/images/tennis_strike.jpg'
import tennis_player_girl from '@/assets/images/tennis_player_girl.jpg'
// import tennis_showcase from '@/assets/images/tennis_showcase.png'
import Link from "next/link";

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
            <h2 className="text-5xl leading-0" >ABOUT US</h2>
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
              Whether you&apos;re practicing serves or battling it out in a final set, our balls are designed to keep up with your game.
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
  <section className=" h-dvh z-1  grid grid-cols-2 items-center max-w-7xl py-20 m-auto w-full">
    <div className="grid grid-rows-5 gap-2 w-150 h-full  " >
      <div className="overflow-hidden row-span-3 relative rounded-3xl ">
        <Image
          src={tennis_racket}
          alt="tennis_racket.jpg"
          className="object-cover w-full h-full"
        />
          <Button size={'icon'} className="absolute bottom-4 right-4 rounded-full bg-white hover:bg-white  text-black"  >
            <Plus/>
          </Button>
      </div>
      <div className="grid grid-cols-2 row-span-2 gap-2" >        
        <div className="overflow-hidden relative rounded-3xl ">
          <Button size={'icon'} className="absolute bottom-4 right-4 rounded-full bg-white hover:bg-white  text-black"  >
            <Plus/>
          </Button>
          <Image
            src={tennis_player_girl}
            alt="tennis_racket.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        
        <div className="overflow-hidden relative rounded-3xl ">
          <Button size={'icon'} className="absolute bottom-4 right-4 rounded-full bg-white hover:bg-white  text-black"  >
            <Plus/>
          </Button>
          <Image
            src={tennis_strike}
            alt="tennis_racket.jpg"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
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
  </section>
  <div className="relative h-[300vh]">
    {/* Sticky Section */}
    <div className="sticky top-0 flex z-1 flex-col justify-center text-white items-center bg-black h-dvh w-full " >
      <Plus className="absolute left-80 top-20" />
      <Plus className="absolute right-80 top-20" />
      <Plus className="absolute left-80 bottom-20" />
      <Plus className="absolute right-80 bottom-20" />
          <div className="absolute inset-0  bg-black -z-1" >
            <video src="/videos/tennis_ball_roll.mp4" autoPlay playsInline loop muted className="object-cover saturate-150 contrast-115 w-full   h-full" ></video>
            <div className="absolute inset-0 bg-black/50 " >

            </div>
          </div>
      <span className="" >Contact us or explore our collection of high-performance tennis balls.</span>
      <h2 className="text-9xl capitalize tracking-wider font-medium text-white w-2xl text-center" >
        <span className="group relative " >
          Let&apos;s work
          <motion.div 
            initial={{width:0}}
            whileInView={{width:650}}
            transition={{duration:.1, delay:0.1, ease:easeInOut}}
            className="absolute left-2 bottom-2 w-full bg-white h-2 transition-all ease-out duration-300 " >
          </motion.div>
        </span  > 
        <span className="group relative " >
          together!
          <motion.div 
            initial={{width:0}}
            whileInView={{width:130}}
            transition={{duration:.1, delay:0.2, ease:easeInOut}}
            className="absolute left-0 bottom-4 w-full bg-white h-2 transition-all ease-out duration-300 " >
          </motion.div>
          <motion.div 
            initial={{width:0}}
            whileInView={{width:400}}
            transition={{duration:.1, delay:0.4, ease:easeInOut}}
            className="absolute left-55 bottom-4 w-full bg-white h-2 transition-all ease-out duration-300 " >
          </motion.div>
        </span  > 
        </h2>
        <Button size="lg" className="rounded-full z-1 bg-gray-50 p-6 px-8 hover:bg-blue-700 absolute bottom-8 text-black hover:text-white  ">
          <ArrowDown/>CONTINUE SCROLLING <ArrowDown/>
        </Button>
    </div>

    {/* Footer Scrolls Over */}
    <footer className="absolute top-0 z-1 w-full h-[300vh] selection:bg-lime-200 selection:text-black">
      <div className="h-[150vh] -z-10" /> spacer to allow section to stay sticky
      <div className="h-dvh bg-white" >
        <div className="max-w-7xl h-full w-full m-auto items-center z-10 grid grid-cols-6">
          <div className="flex flex-col h-full col-span-2 p-10 justify-end" >
            <h3>© 2025 Aceon Balls. All Rights Reserved.</h3>
            <h3>Terms & Conditions | Privacy Policy</h3>
          </div>
          <div  className="font-medium" >
            <div className="flex flex-col gap-4 text-xl" >
              <Link href='#twitter' >
                Twitter / X
              </Link>
              <Link href='#twitter' >
                Instagram
              </Link>
              <Link href='#twitter' >
                Linkedin
              </Link>
            </div>
            <div className="flex flex-col mt-20 text-xl" >
              <span>General Enquiries</span>
              <Link href={'#aceon@gmail.com'} className="group relative" >
                aceon@gmail.com
                <div className="absolute -bottom-1 w-0  bg-black h-0.5 transition-all ease-out duration-300 group-hover:w-[80%]" >
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-3 h-full py-6 justify-between flex flex-col" >
            <div className="h-10" >

            </div>
            <div>
              <h3 className="text-5xl font-medium " >Subscribe to <br /> our newsletter</h3>
              <div className="bg-gray-200 w-md mt-8 rounded-2xl flex items-center p-2 px-4" >
                <input type="email" name="" id="" placeholder="Enter Your Email" className="p-2 text-lg focus:outline-none w-full"  />
                <ArrowRight/>
              </div>
            </div>
            <div className="justify-self-end flex items-center  justify-between " > 
              <span>
                Built by Poye Kitoye with 💖
              </span>
              <Button size={'icon'} className="p-7 rounded-full bg-black cursor-pointer hover:bg-black text-white" >
                <ArrowUp/>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80 bg-zinc-900 text-white flex items-center justify-center">
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
