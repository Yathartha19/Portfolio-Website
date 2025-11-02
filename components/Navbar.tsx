'use client'
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaGripLines, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full h-[10vh] z-50 text-white bg-transparent backdrop-blur-md">
      <div className="px-8 sm:px-0 sm:mx-30 h-full flex items-center justify-between border-b border-white/40">
        {/* Logo */}
        <div
          onClick={() => (window.location.href = "/")}
          className="text-white/85 tracking-wide text-[1.2rem] font-light hover:cursor-pointer transform transition-transform duration-200 ease-out hover:scale-[1.02]"
        >
          <span className="max-sm:hidden roboto">YATHARTHA AARUSH</span>
          <span className="sm:hidden roboto">YATHARTHA A.</span>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-11 text-white/70 tracking-wide font-light">
            <Link href="/about" className="hover:text-white transition-colors duration-300">About</Link>
            <Link href="/work" className="hover:text-white transition-colors duration-300">Work</Link>
            <Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">Get in touch</Link>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white/80 text-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <div
            className={`transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isOpen ? "rotate-180 scale-95" : "rotate-0 scale-100"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaGripLines />}
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`absolute top-[10vh] left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-2xl border-b border-white/40 rounded-b-2xl overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen
            ? "max-h-[60vh] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-white/80 text-lg tracking-wide font-light">
          <Link href="/about" className="hover:text-white transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/work" className="hover:text-white transition-colors duration-300" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="/gallery" className="hover:text-white transition-colors duration-300" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-300" onClick={() => setIsOpen(false)}>Get in touch</Link>
        </div>
      </div>
    </nav>
  );
}
