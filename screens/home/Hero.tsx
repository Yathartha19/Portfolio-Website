'use client'

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaAngleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="lg:h-screen w-full bg-[#0c0c0c] text-white">

      <article className="lg:h-screen w-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[20px_20px] flex flex-col md:flex-row items-start sm:items-center justify-center gap-[5vw]">

        <div className="w-[25vw] xl:w-[20vw] hidden lg:flex items-center justify-center">
          <div className="w-full *:flex flex-col rounded-xl bg-linear-to-br from-neutral-900 to-zinc-900 p-4 text-white border border-white/10 hover:scale-101 transition-transform duration-300 ">

            {/* Top */}
            <div className="flex items-center justify-between">
              <span className="text-lg xl:text-xl opacity-80 font-black">Y.</span>
              <div className="flex px-3 py-1 rounded-md border border-white/20 bg-white/5 text-[0.6rem] tracking-wide hover:cursor-pointer">
                <span>VIEW RESUME</span>
              </div>
            </div>

            <div className="mt-3 h-px bg-white/15" />

            {/* Center */}
            <div className="flex flex-col *:text-center">

              <div className="flex items-center justify-center mt-14">
                <div className="w-32 h-34 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    width={600}
                    height={600}
                    src="/profile.jpeg"
                    alt="Yathartha Aarush"
                    className="object-cover scale-245 opacity-85"
                  />
                </div>
              </div>

              <div className="mb-8 mt-10">
                <h2 className="text-lg font-semibold tracking-wide mb-2">
                  YATHARTHA AARUSH
                </h2>
                <p className="text-[0.7rem] text-white/70 tracking-widest">
                  DEVELOPER
                </p>
              </div>

              <div className="h-px bg-white/15 mb-4" />

              <div className="flex items-end justify-between">
                <div className="flex flex-col items-start">
                  <p className="text-[0.6rem] tracking-widest text-white/60">
                    ID NUMBER
                  </p>
                  <p className="mt-1 text-[0.6rem] tracking-widest">
                    8901-2345-6789
                  </p>
                </div>

                <div className="flex gap-3 opacity-70">
                  <Link href="mailto:aarushyathartha19@gmail.com">
                    <FaEnvelope size={18} className="hover:opacity-100 transition" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/" target="_blank">
                    <FaLinkedin size={18} className="hover:opacity-100 transition" />
                  </Link>
                  <Link href="https://github.com/Yathartha19" target="_blank">
                    <FaGithub size={18} className="hover:opacity-100 transition" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-lg:px-30 max-lg:pt-20 lg:w-[50vw]">
          <div className="max-sm:hidden flex flex-col max-md:items-start max-md:justify-center gap-8 z-2 w-full">
          <h1 className="text-5xl xl:text-7xl font-semibold tracking-tight">
            I'm Yathartha Aarush
          </h1>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-[0.9rem] xl:text-sm tracking-widest text-gray-300 uppercase">
            <p>Web Developer</p>
            <p>SDE</p>
            <p>India</p>
          </div>

          <p className="max-md:hidden text-[1.2rem] xl:text-[1.4rem] text-white font-light leading-tight">
            A passionate full-stack developer from <span className="font-normal">Bangalore, India,</span> focused on creating reliable and thoughtfully designed applications that solve real problems.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.9rem] xl:text-sm tracking-widest uppercase">
            <button className="border border-slate-400/30 text-slate-300 rounded-lg px-3 xl:px-4 py-2
                              hover:bg-slate-400/15 hover:border-slate-400/60 hover:text-white
                              transition duration-200 hover:cursor-pointer bg-gray/20 backdrop-blur-sm hover:scale-105">
              About Me
            </button>
            <button className="border border-slate-400/30 text-slate-300 rounded-lg px-3 xl:px-4 py-2
                              hover:bg-slate-400/15 hover:border-slate-400/60 hover:text-white
                              transition duration-200 hover:cursor-pointer backdrop-blur-md hover:scale-105">
              Work
            </button>
            <button className="border border-slate-400/30 text-slate-300 rounded-lg px-3 xl:px-4 py-2
                              hover:bg-slate-400/15 hover:border-slate-400/60 hover:text-white
                              transition duration-200 hover:cursor-pointer backdrop-blur-md hover:scale-105">
              Gallery
            </button>
            <button className="border border-slate-400/30 text-slate-300 rounded-lg px-3 xl:px-4 py-2
                              hover:bg-slate-400/15 hover:border-slate-400/60 hover:text-white
                              transition duration-200 hover:cursor-pointer backdrop-blur-md hover:scale-105">
              Get in Touch
            </button>
          </div>

          <div className="flex text-gray-400 justify-between pr-2 text-[0.9rem] xl:text-[1rem]">
            <div className="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300">
              <div className="relative w-2 h-2 mr-2">
                <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping-slow"></div>
                <div className="absolute w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <p onClick={() => window.open('https://ridetrailo.com', '_blank')} className="cursor-pointer">
                Currently building <span className="font-medium text-gray-100">Trailo</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-1 text-sm animate-float">
              See More
              <FaAngleDown />
            </div>
          </div>
        </div>
        </div>

      </article>

    </main>
  );
}
