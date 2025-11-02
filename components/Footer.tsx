'use client'

import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/20 text-white/60 py-8 px-6 sm:px-10 md:px-20 mx-8 lg:mx-30">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-6 text-center md:text-left">

        <p className="text-sm tracking-wide order-2 md:order-1">
          © <span className="text-gray-300">Yathartha Aarush</span> {new Date().getFullYear()}
        </p>

        <div className="flex gap-5 order-1 md:order-2 justify-center">
          <Link href="mailto:aarushyathartha19@gmail.com" target="_blank" aria-label="Email">
            <FaEnvelope size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.instagram.com/yathartha_aarush" target="_blank" aria-label="Instagram">
            <FaInstagram size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.github.com/Yathartha19" target="_blank" aria-label="GitHub">
            <FaGithub size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
