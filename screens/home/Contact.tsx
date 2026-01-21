'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {

  const tags = ['Internships', 'Collabs', 'Freelance', 'Connect'] as const;

  return (
    <div
      className="
        w-full flex items-center justify-center px-6
        bg-[#0c0c0c]
        bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-size-[20px_20px]
      "
    >
      <section id="contact" className="scroll-mt-24 w-full max-w-6xl pt-16 pb-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.32em] text-white/40">SECTION 02</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-white/90">
              Contact
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed tracking-wide text-white/55">
              If you’re interested, I’m open to working on projects. I can also contribute to papers when needed.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/3 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-white/65"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Single card */}
        <div className="rounded-xl border border-white/10 bg-neutral-900/55 backdrop-blur overflow-hidden">
          <div className="p-6">
            <p className="text-[0.65rem] tracking-[0.28em] text-white/45">CHANNELS</p>

            <div className="mt-5 h-px bg-white/10" />

            <p className="mt-8 text-sm tracking-wide text-white/65">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
                <Link
                  href="mailto:aarushyathartha19@gmail.com"
                  target={ "mailto:aarushyathartha19@gmail.com".startsWith('http') ? '_blank' : undefined}
                  className="
                    group rounded-xl border border-white/10 bg-white/2
                    px-4 py-3 transition-all duration-300
                    hover:bg-white/6 hover:border-white/20
                    flex items-center justify-between gap-4
                  "
                >
                  <div className="min-w-0">
                    <p className="text-[0.6rem] tracking-[0.28em] text-white/45">Email</p>
                    <p className="mt-1 truncate text-sm tracking-wide text-white/75 group-hover:text-white transition-colors duration-300">
                      aarushyathartha19@gmail.com
                    </p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/45 transition-colors duration-300">
                    ↗
                  </span>
                </Link>
                <Link
                  href="https://github.com/Yathartha19"
                  target={ "https://github.com/Yathartha19".startsWith('http') ? '_blank' : undefined}
                  className="
                    group rounded-xl border border-white/10 bg-white/2
                    px-4 py-3 transition-all duration-300
                    hover:bg-white/6 hover:border-white/20
                    flex items-center justify-between gap-4
                  "
                >
                  <div className="min-w-0">
                    <p className="ml-2 mt-1 truncate text-sm tracking-wide text-white/60 group-hover:text-white transition-colors duration-300 flex flex-row gap-3">
                      <FaGithub size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
                      Github
                    </p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/45 transition-colors duration-300">
                    ↗
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/"
                  target={ "https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/".startsWith('http') ? '_blank' : undefined}
                  className="
                    group rounded-xl border border-white/10 bg-white/2
                    px-4 py-3 transition-all duration-300
                    hover:bg-white/6 hover:border-white/20
                    flex items-center justify-between gap-4
                  "
                >
                  <div className="min-w-0">
                    <p className="ml-2 mt-1 truncate text-sm tracking-wide group-hover:text-white transition-colors duration-300 flex flex-row gap-3 text-white/60">
                      <FaLinkedin size={20} className="hover:text-gray-300 transition-all duration-200 hover:scale-110" />
                      Linked In
                    </p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/45 transition-colors duration-300">
                    ↗
                  </span>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
