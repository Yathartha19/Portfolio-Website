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
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-[10vh] z-50 text-white bg-transparent backdrop-blur-md">
        <div className="mx-8 sm:mx-30 h-full flex items-center justify-between border-b border-white/40">
          {/* Logo */}
          <div
            onClick={() => (window.location.href = "/")}
            className="no-select text-white/85 tracking-wide text-[1.2rem] font-light hover:cursor-pointer transform transition-transform duration-200 ease-out hover:scale-[1.02]"
          >
            <span className="max-sm:hidden roboto">YATHARTHA AARUSH</span>
            <div className="sm:hidden roboto">YATHARTHA A.</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-11 text-white/70 tracking-wide font-light">
            <Link href="/about" className="hover:text-white transition-colors duration-300">About</Link>
            <Link href="/work" className="hover:text-white transition-colors duration-300">Work</Link>
            <Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">Get in touch</Link>
          </div>

          {/* Mobile Icon */}
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
      </nav>

      {/* BACKDROP (full screen) */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-500 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* SLIDING MENU */}
      <div
        ref={menuRef}
        className={`fixed top-[10vh] w-[calc(100vw-4rem)] ml-8 border-l border-r border-b border-white/40
        bg-transparent backdrop-blur-lg
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 
        z-50 ${isOpen ? "opacity-100" : "opacity-0"} rounded-none`}
      >
        <div className="h-full flex flex-col items-start gap-2 pt-4 text-white/90 text-lg tracking-wide font-light mx-8 pb-4">
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300 border-b w-full px-4 py-3 border-white/40">About</Link>
          <Link href="/work" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300 border-b w-full px-4 py-3 border-white/40">Work</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300 border-b w-full px-4 py-3 border-white/40">Gallery</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-300 w-full px-4 py-3 border-white/40">Get in touch</Link>
        </div>
      </div>
    </>
  );
}
