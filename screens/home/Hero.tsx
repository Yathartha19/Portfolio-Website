'use client'

import FlipCard from "@/components/FlipCard";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaAngleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="min-h-screen w-full bg-[#0c0c0c] flex flex-col justify-between text-white">
      
      <section className="flex flex-col md:flex-row items-center justify-between mx-30 mt-[30vh] md:mt-[22vh] pb-12 gap-16">
        
        <div className="flex flex-col max-md:items-center max-md:justify-center gap-8 max-w-2xl md:pl-8">
          <h1 className="text-6xl lg:text-7xl max-md:text-center font-semibold tracking-tight">
            Yathartha Aarush
          </h1>

          <div className="flex flex-wrap max-md:border-l max-md:pl-2 max-md:flex-col gap-x-10 gap-y-3 text-[0.75rem] lg:text-sm tracking-widest text-gray-500 uppercase">
            <p>Web Developer</p>
            <p>SDE</p>
            <p>Startup Founder</p>
            <p>India</p>
          </div>

          <p className="max-md:hidden text-[1rem] lg:text-[1.4rem] text-gray-300 font-light leading-tight max-w-[45vw]">
            Hi, I’m a passionate full-stack developer from <span className="font-normal">Bangalore, India,</span> focused on creating reliable and thoughtfully designed applications that solve real problems.
          </p>

          <div className="flex flex-row items-center text-gray-500 max-md:hidden">
            <div className="mt-[0.1rem] mr-2 w-1.5 h-1.5 rounded-full bg-green-600"></div>
            <p className="hover:text-gray-300 transition-colors duration-200 cursor-default hover:cursor-pointer" onClick={() => window.open('https://ridetrailo.com', '_blank')}>
              Currently building <span className="text-gray-200 font-medium">Trailo</span>
            </p>
          </div>
        </div>

        <div className="flex-1 mr-8 flex justify-end w-full h-[50vh] md:h-[60vh]">
          <div className="w-full md:w-[25vw] rounded-md flex items-center justify-center max-xl:hidden">
            <FlipCard />
          </div>
        </div>

      </section>

      <section className="flex flex-col max-md:gap-4 md:flex-row items-center justify-between px-30 py-6 text-white/60 text-sm ">
        
        <div className="hover:text-gray-300 transition-colors duration-200 cursor-default">
          IST<span className="opacity-0">_</span>(UTC+05:30)
        </div>

        <div className="border-t border-white/60 w-full mx-6 max-md:hidden" />

        <div className="flex max-md:hidden items-center justify-center gap-2 hover:text-gray-300 transition-all duration-200 cursor-pointer">
          <span>Scroll</span>
          <FaAngleDown size={14} className="mb-px" />
        </div>

        <div className="border-t border-white/60 w-full mx-6" />

        <div className="flex gap-5">
          <Link href="https://www.instagram.com/yathartha_aarush" target="_blank">
            <FaInstagram size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/" target="_blank">
            <FaLinkedin size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.github.com/Yathartha19" target="_blank">
            <FaGithub size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
        </div>

      </section>
    </main>
  );
}
