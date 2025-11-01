import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] mx-30 border-t border-white/40 text-white/60 py-8">
      <div className="px-30 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-center md:text-left gap-4">
        
        <p className="text-sm tracking-wide">
          © <span className="text-gray-300">Yathartha Aarush</span> {new Date().getFullYear()}
        </p>

        <div className="flex gap-5">
          <Link href="mailto:aarushyathartha19@gmail.com" target="_blank">
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
      </div>
    </footer>
  );
}
