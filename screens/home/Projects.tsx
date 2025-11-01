'use client'
import { useRef, useEffect, useState } from "react";

export default function WorkInProgress() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);
  const [vw, setVw] = useState(0);

  const projects = [
    {
      num: "01",
      title: "RAPTOR RAG System",
      desc: "AI-powered fitness and nutrition recommender with structured lifting logic and real-time feedback.",
      tags: ["LLM", "RAG", "Python"],
      gradient: "from-purple-500/10 to-pink-500/5",
    },
    {
      num: "02",
      title: "InstaEngage",
      desc: "Real-time Instagram engagement analytics platform built on Kafka and Spark, streaming live metrics.",
      tags: ["Kafka", "Spark", "Streamlit"],
      gradient: "from-cyan-400/10 to-blue-500/5",
    },
    {
      num: "03",
      title: "ForDyn OCR",
      desc: "Offline OCR pipeline for invoices and structured data extraction with Doctr and OpenCV.",
      tags: ["OCR", "Computer Vision", "Doctr"],
      gradient: "from-emerald-400/10 to-teal-500/5",
    },
    {
      num: "04",
      title: "Trailo",
      desc: "A hiking and trail-planning app with offline maps, route sharing, and collaborative trip features.",
      tags: ["Next.js", "Mapbox", "Firebase"],
      gradient: "from-orange-400/10 to-yellow-500/5",
    },
    {
      num: "05",
      title: "EcoTrack",
      desc: "An environmental impact tracker that helps users monitor and reduce their carbon footprint through data visualization.",
      tags: ["D3.js", "Python", "Flask"],
      gradient: "from-green-400/10 to-lime-500/5",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setVh(window.innerHeight);
      setVw(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top, 0), rect.height - vh);
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [vh]);

  const groups = Math.ceil(projects.length / 2);
  const totalScrollable = vh * (groups - 1);

  const cardWidth = vw * 0.4; 
  const gap = vw * 0.05; 
  const totalWidth = projects.length * cardWidth + 2 * gap; 
  const maxTranslatePx = totalWidth - vw; 
  const progressRatio = totalScrollable > 0 ? scrollY / totalScrollable : 0;
  const translatePx = progressRatio * maxTranslatePx;

  return (
    <section
      ref={containerRef}
      style={{ height: `${groups * 100}vh` }}
      className="relative pl-14 pr-14 bg-[#0c0c0c] text-white"
    >
      <div className="sticky top-[10vh] z-20 bg-[rgba(0,0,0,0)] backdrop-blur-lg border-b border-[#101010]/60 pt-8 pb-6 px-16">
        <h2 className="text-5xl font-semibold tracking-tight text-white/90">
          What I’ve Worked On
        </h2>
        <div className="w-24 h-0.5 bg-white/20 mt-4"></div>
      </div>

      <div className="sticky top-[calc(10vh+8rem)] h-[65vh] flex items-center overflow-hidden">
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
              className={`w-[40vw] h-[65vh] shrink-0 border border-white/10 border-l-0 relative overflow-hidden flex flex-col justify-end group transition-all duration-300 bg-linear-to-br ${p.gradient} ${
                i === 0 ? "ml-[5vw]" : ""
              } ${i === projects.length - 1 ? "mr-[5vw]" : ""}`}
            >
              <div className="absolute top-0 right-0 w-px h-full bg-white/10"></div>

              <div className="absolute top-6 left-8 text-7xl font-bold text-white/5 select-none">
                {p.num}
              </div>

              <div className="p-10">
                <div className="flex space-x-3 mb-6">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60 font-mono tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition">
                  {p.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
              </div>

              <div className="absolute top-1/3 right-10 w-40 h-40 bg-linear-to-r from-white/10 to-transparent rounded-full blur-[100px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
