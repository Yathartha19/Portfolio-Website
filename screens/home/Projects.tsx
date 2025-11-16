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
      title: "Trailo",
      link: "https://ridetrailo.com/",
      desc: "Trail discovery and group hiking app — plan routes, explore terrains, and organize trips with map support and real-time coordination.",
      tags: ["Next.js", "Hiking App", "Mobile App"],
      image: "/images/trailo-v2.png",
      gradient: "from-[#092643] to-[#0ea5e9]/10", 
    },
    {
      num: "02",
      title: "MERN Docs",
      link: "https://mern-docs.vercel.app/",
      desc: "Comprehensive MERN stack documentation platform with lessons, and live code samples to help developers learn on their own.",
      tags: ["MERN", "Next.js", "Tailwind"],
      image: "/images/mern-docs.png",
      gradient: "from-[#08121F] to-[#1e3a8a]/10",
    },
    {
      num: "03",
      title: "PESU I/O Mentor",
      link: "https://pesu.io/",
      desc: "Guided students through a full-stack web development course under PESU I/O, focusing on real-world projects and practical solutions.",
      tags: ["Mentorship", "Full-Stack", "Teaching", "Course"],
      image: "/images/pesuio-v2.png",
      gradient: "from-[#1d4ed8]/25 to-[#3b82f6]/10", 
    },
    {
      num: "04",
      title: "Portfolio Website",
      link: "/",
      desc: "My personal website built with Next.js and Tailwind — designed to reflect my developer philosophy: minimal, fast, and aesthetically structured.",
      tags: ["Next.js", "Tailwind", "Design", "SEO"],
      image: "/images/portfolio-v3.png",
      gradient: "from-[#050505]/20 to-[#092643]/10", 
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
      className="relative bg-[#0c0c0c] text-white"
    >

      <div className="sticky flex flex-row justify-between px-30 top-[3vh] xl:top-[5vh] z-20 pt-8 pb-6 bg-[rgb(0,0,0,0)] backdrop-blur-md">
        <div>
          <h2 className="text-4xl xl:text-5xl font-semibold tracking-tight text-white/90 pt-[5vh]">
            What I’m Doing
          </h2>
          <div className="w-30 h-0.5 bg-white/20 mt-4"></div> 
        </div>
        <div className="flex flex-row items-center justify-end text-2xl text-white/80 z-2">
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

      <div className="sticky top-[calc(26vh)] xl:top-[calc(24vh)] h-[75vh] w-[calc(100vw)] bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[10px_10px] flex items-center overflow-hidden z-2">
        <div
          className="flex transition-transform duration-75 bg-[#0c0c0c] ease-linear ml-30"
          style={{
            width: `${totalWidth}px`,
            transform: `translateX(-${translatePx}px)`,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className={`hover:cursor-pointer py-4 group w-[40vw] h-[80vh] shrink-0 relative overflow-hidden flex flex-col ${p.image ? "justify-end" : "justify-start"} group transition-all duration-300 bg-linear-to-br ${p.gradient}`}
              onClick={() => window.open(p.link, "_blank")}
              >
              <div className="absolute top-8 right-8 text-7xl font-bold text-white/10 select-none">
                {p.num}
              </div>
                <div className="relative w-full">
                  <Image src={p.image} alt={p.title} width={800} height={400} className="group w-[calc(100%-2rem)] mx-4 h-full object-cover border border-white/5 group-hover:scale-102 transition duration-200"/>
                  <div className="absolute mx-4 inset-0 bg-black/50 rounded-lg opacity-30 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
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
