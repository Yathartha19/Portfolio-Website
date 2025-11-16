'use client'

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="lg:h-[70vh] w-full bg-[#0c0c0c] text-white">

      <article className="lg:h-[70vh] w-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[20px_20px] md:pb-8 flex flex-col md:flex-row items-start sm:items-center justify-between sm:px-30 pt-[17vh] md:pt-[22vh] gap-16">

        <div className="max-sm:hidden flex flex-col max-md:items-start max-md:justify-center gap-8 z-2 w-full">
          <h1 className="text-6xl lg:text-7xl font-semibold tracking-tight">
            Yathartha Aarush
          </h1>

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-[0.96rem] lg:text-sm tracking-widest text-gray-400 uppercase">
            <p>Web Developer</p>
            <p>SDE</p>
            <p>India</p>
          </div>

          <p className="max-md:hidden text-[1rem] lg:text-[1.4rem] text-gray-300 font-light leading-tight max-w-[45vw]">
            Hi, I&apos;m a passionate full-stack developer from <span className="font-normal">Bangalore, India,</span> focused on creating reliable and thoughtfully designed applications that solve real problems.
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
          <div>
              <div className="sm:max-xl:flex hidden w-[calc(100vw-240px)] justify-between items-center z-10 border-t border-white/10 pt-4">
                <div className="flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-200 hover:cursor-pointer">
                  <FaFileDownload size={16} />
                  <span className="text-sm">
                    Resume
                  </span>
                </div>

                <div className="flex gap-3">
                  <Link href="mailto:aarushyathartha19@gmail.com" target="_blank" aria-label="Email">
                    <FaEnvelope size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link href="https://www.instagram.com/yathartha_aarush" target="_blank">
                    <FaInstagram size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/" target="_blank">
                    <FaLinkedin size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link href="https://www.github.com/Yathartha19" target="_blank">
                    <FaGithub size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>
        </div>

        <div className="sm:max-xl:hidden flex justify-center md:justify-end w-full ">
          <div className="border border-white/10 rounded-xl bg-[#101010] md:bg-white/3 backdrop-blur-md flex flex-col justify-between p-6 gap-8 sm:gap-12 relative overflow-hidden">
            
            {/* subtle gradient glow */}
            <div className="absolute inset-0 bg-linear-to-br from-black/10 via-slate-900/10 to-transparent pointer-events-none"></div>

            {/* Top section */}
            <div className="flex items-center gap-4 z-10 border-b border-white/10 pb-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  src="/profile.jpeg" 
                  alt="Yathartha Aarush"
                  className="object-cover scale-245"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Yathartha Aarush</h2>
                <p className="text-gray-400 text-sm">Developer</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-2 text-sm text-gray-300 z-10">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="font-medium text-white/80">Bangalore, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Role:</span>
                <span className="font-medium text-white/80">Developer</span>
              </div>
              <div className="max-sm:hidden flex justify-between">
                <span className="text-gray-400">Hobbies:</span>
                <span className="font-medium text-white/80">Hiking</span>
              </div>

            </div>

            {/* down section */}
            <div>
              <div className="flex justify-between items-center sm:mt-6 z-10 border-t border-white/10 pt-4">
                <div className="flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-200 hover:cursor-pointer">
                  <FaFileDownload size={16} />
                  <span className="text-sm">
                    Resume
                  </span>
                </div>

                <div className="flex gap-3">
                  <Link href="mailto:aarushyathartha19@gmail.com" target="_blank" aria-label="Email">
                    <FaEnvelope size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link href="https://www.instagram.com/yathartha_aarush" target="_blank">
                    <FaInstagram size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/" target="_blank">
                    <FaLinkedin size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link href="https://www.github.com/Yathartha19" target="_blank">
                    <FaGithub size={16} className="text-gray-400 hover:text-white transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>

            {/* thin accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-500 via-blue-400 to-cyan-300"></div>
          </div>
        </div>

      </article>

    </main>
  );
}
