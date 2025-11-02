'use client'
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function WorkInProgress() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);
  const [vw, setVw] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(false);

  const projects = [
    {
      num: "01",
      title: "MERN Docs",
      link: "https://mern-docs.vercel.app/",
      desc: "Comprehensive MERN stack documentation platform with lessons, and live code samples to help developers learn on their own.",
      tags: ["MERN", "Next.js", "Tailwind"],
      image: "/images/mern-docs.png",
      gradient: "from-[#3b82f6]/20 to-[#1e3a8a]/10", // blue gradient
    },
    {
      num: "02",
      title: "Trailo",
      link: "https://ridetrailo.com/",
      desc: "Trail discovery and group hiking app — plan routes, explore terrains, and organize trips with map support and real-time coordination.",
      tags: ["Next.js", "Startup", "Mobile App"],
      image: "/images/trailo.png",
      gradient: "from-[#06b6d4]/20 to-[#0ea5e9]/10", // cyan to sky-blue gradient
    },
    {
      num: "03",
      title: "PESU I/O Mentor",
      link: "https://pesu.io/",
      desc: "Guided students through a full-stack web development course under PESU I/O, focusing on real-world projects and practical solutions.",
      tags: ["Mentorship", "Full-Stack", "Teaching", "Course"],
      image: "/images/pesuio.png",
      gradient: "from-[#3b82f6]/25 to-[#1d4ed8]/10", // violet gradient
    },
    {
      num: "04",
      title: "Portfolio Website",
      link: "/",
      desc: "My personal website built with Next.js and Tailwind — designed to reflect my developer philosophy: minimal, fast, and aesthetically structured.",
      tags: ["Next.js", "Tailwind", "Design", "SEO"],
      image: "/images/portfolio.png",
      gradient: "from-[#050505]/20 to-[#1c1c1c]/10", // indigo
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setVh(window.innerHeight);
        setVw(window.innerWidth);
        setIsMobile(window.innerWidth < 1024);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isMobile) return; 

    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, 0), rect.height - vh);
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [vh, isMobile]);

  const cardWidth = vw * 0.4;
  const gap = vw * 0.05;
  const totalWidth = projects.length * (cardWidth + gap);
  const maxTranslatePx = totalWidth - vw;
  const totalScrollable = maxTranslatePx; 
  const progressRatio = Math.min(scrollY / totalScrollable, 1);
  const translatePx = progressRatio * maxTranslatePx;

  useEffect(() => {
    const thresholdStart = 0.02;
    const thresholdEnd = 0.98;
    setIsHorizontal(progressRatio > thresholdStart && progressRatio < thresholdEnd);
  }, [progressRatio]);

  if (isMobile) {
    return (
      <section ref={containerRef} className="bg-[#0c0c0c] text-white px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold tracking-tight text-white/90">
            What I’m Doing
          </h2>
          <div className="w-20 h-0.5 bg-white/20 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`border border-white/10 rounded-md p-6 relative overflow-hidden bg-linear-to-br ${p.gradient}`}
            >
              <div className="absolute top-3 right-3 text-6xl font-bold text-white/5 select-none">
                {p.num}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60 font-mono tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {p.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      style={{ height: `${(maxTranslatePx / vh) * 100 + 100}vh` }}
      className="relative bg-[#0c0c0c] text-white pt-[10vh]"
    >
      <div className="sticky flex flex-row justify-between px-29 top-[10vh] z-20 pt-8 pb-6 bg-[rgb(0,0,0,0)] backdrop-blur-md">
        <div>
          <h2 className="text-5xl font-semibold tracking-tight text-white/90">
            What I’m Doing
          </h2>
          <div className="w-30 h-0.5 bg-white/20 mt-4"></div> 
        </div>
        <div className="flex flex-row items-center justify-end pr-24 text-2xl text-white/80">
          <FaAngleRight
            className={`transition-transform duration-500 ${
              isHorizontal ? "rotate-0" : "rotate-90"
            }`}
          />
          <FaAngleRight
            className={`transition-transform duration-500 ${
              isHorizontal ? "rotate-0" : "rotate-90"
            }`}
          />
          <FaAngleRight
            className={`transition-transform duration-500 ${
              isHorizontal ? "rotate-0" : "rotate-90"
            }`}
          />
        </div>
      </div>

      <div className="sticky top-[calc(10vh+8rem)] h-[75vh] flex items-center overflow-hidden">
        <div
          className="flex transition-transform duration-75 ease-linear"
          style={{
            width: `${totalWidth}px`,
            transform: `translateX(-${translatePx}px)`,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className={`hover:cursor-pointer py-4  group w-[40vw] h-[80vh] shrink-0 relative overflow-hidden flex flex-col justify-end group transition-all duration-300 bg-linear-to-br ${p.gradient} ${i === 0 ? "ml-28" : ""}`}
              onClick={() => window.open(p.link, "_blank")}
              >
              <div className="absolute top-6 right-8 text-7xl font-bold text-white/10 select-none">
                {p.num}
              </div>
              <div className="relative w-full">
                <Image src={p.image} alt={p.title} width={800} height={400} className="group w-[calc(100%-2rem)] ml-4 h-full object-cover border border-white/5 group-hover:scale-102 transition duration-200"/>
                <div className="absolute inset-0 bg-black/50 rounded-lg opacity-30 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
              </div>
              <div className="p-10">
                <div className="flex space-x-3 mb-6">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60 font-mono tracking-wide group group-hover:scale-103 transition duration-200 "
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-white group group-hover:scale-102 transition duration-200">
                  {p.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed group group-hover:scale-102 transition duration-200">{p.desc}</p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
