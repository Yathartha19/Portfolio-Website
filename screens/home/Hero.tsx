'use client'

import CodeCard from "@/components/CodeCard";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaAngleDown, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="md:min-h-screen w-full bg-[#0c0c0c] flex flex-col justify-between text-white">
      
      <article className="flex flex-col md:flex-row items-start sm:items-center justify-between mx-8 md:mx-30 pt-[17vh] md:pt-[30vh] xl:pt-[22vh] md:pb-12 gap-16">

        <div className="absolute right-[10%] top-[30%] md:right-[60%] w-[180px] h-[180px] rounded-full bg-linear-to-br from-blue-800/40 to-blue-800/40 blur-3xl pointer-events-none z-0"></div> 
        <div className="absolute top-[25%] right-[10%] md:right-[60%] w-[320px] h-80 bg-linear-to-br from-purple-500/40 to-purple-500/40 blur-[100px] rounded-full pointer-events-none z-0" /> 
        <div className="absolute bottom-[8%] lg:bottom-[40%] left-[8%] w-60 h-60 bg-linear-to-tr from-red-400/30 to-red-300/30 blur-[80px] rounded-full pointer-events-none z-0" />

        <div className="max-md:hidden absolute right-[12%] top-[20%] w-[300px] h-[200px] rounded-full bg-linear-to-br from-violet-900/40 to-blue-900/40 blur-3xl pointer-events-none z-0"></div>
        <div className="max-md:hidden absolute right-[10%] top-[60%] w-[300px] h-[200px] rounded-full bg-linear-to-br from-blue-900/40 to-blue-900/40 blur-3xl pointer-events-none z-0"></div>

        <div className="flex flex-col max-md:items-start max-md:justify-center gap-8 max-w-2xl md:pl-8 z-2">
          <h1 className="text-6xl lg:text-7xl font-semibold tracking-tight">
            Yathartha Aarush
          </h1>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-[0.96rem] lg:text-sm tracking-widest text-gray-400 uppercase">
            <p>Web Developer</p>
            <p>SDE</p>
            <p>Startup Founder</p>
            <p>India</p>
          </div>

          <p className="max-md:hidden text-[1rem] lg:text-[1.4rem] text-gray-300 font-light leading-tight max-w-[45vw]">
            Hi, I’m a passionate full-stack developer from <span className="font-normal">Bangalore, India,</span> focused on creating reliable and thoughtfully designed applications that solve real problems.
          </p>

          <div className="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300">
            <div className="relative w-2 h-2 mr-2">
              <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping-slow"></div>
              <div className="absolute w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <p onClick={() => window.open('https://ridetrailo.com', '_blank')} className="cursor-pointer">
              Currently building <span className="font-medium text-gray-100">Trailo</span>
            </p>
          </div>
        </div>

        <div className="max-xl:hidden flex-1 mr-8 flex justify-end w-full h-[50vh] md:h-[60vh]">
          <div className="w-full md:w-[25vw] rounded-md flex items-center justify-center max-xl:hidden">
            <CodeCard />
          </div>
        </div>

      </article>

      <section className="max-md:hidden flex flex-col-reverse max-md:gap-4 md:flex-row items-center justify-between px-30 py-6 text-white/60 text-sm ">
        
        <div className="hover:text-gray-300 transition-colors duration-200 cursor-default">
          IST<span className="opacity-0">_</span>(UTC+05:30)
        </div>

        <div className="border-t border-white/60 w-full mx-6 max-md:hidden" />


        <div className="flex gap-5">
          <Link href="mailto:aarushyathartha19@gmail.com" target="_blank" aria-label="Email">
            <FaEnvelope size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
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
