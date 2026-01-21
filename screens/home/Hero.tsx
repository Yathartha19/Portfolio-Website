
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const navItems = [
    { id: "about", label: "ABOUT ME", sub: "Who I am & what I do" },
    { id: "work", label: "WORK AND EXPERIENCE", sub: "My projects, roles, and experiences" },
    { id: "gallery", label: "GALLERY", sub: "Snapshots & experiments" },
    { id: "contact", label: "CONTACT", sub: "Let’s get in touch" },
  ];

  return (
    <main
      className="
        w-full lg:h-screen bg-[#0c0c0c] text-white
        flex items-center justify-center
        bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)]
        bg-size-[20px_20px]
      "
    >
      <article
        className="
          min-h-0
          w-full md:h-[58vh]
          flex flex-col md:flex-row
          items-center md:items-stretch
          justify-center
          gap-4
          px-6 lg:px-0
          max-lg:mt-12
        "
      >
        {/* LEFT */}
        <div className="flex h-full w-[280px] xl:w-[320px] items-stretch justify-center">
          <div
            className="
              relative w-full h-full
              rounded-xl
              border border-white/10
              bg-neutral-900/55 backdrop-blur
              overflow-hidden
              flex flex-col
              transition-all duration-300 ease-out
              hover:scale-[1.02]
              hover:border-white/20
            "
          >

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_40%,rgba(255,255,0,0.02))]" />

            <div className="relative p-5 h-full flex flex-col">
              {/* HEADER */}
              <div className="shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[0.6rem] tracking-[0.3em] text-white/45">PORTFOLIO</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white/90 leading-tight">
                      Yathartha Aarush
                    </h3>
                    <p className="mt-3 text-[0.7rem] tracking-[0.28em] text-white/55">
                      DEVELOPER
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px bg-white/10" />
              </div>

              {/* MAIN */}
              <div className="flex-1 flex flex-col justify-between gap-4 min-h-0">
                 {/* photo module */}
                <div className="flex-1 rounded-xl border border-white/10 bg-black/25 mt-4 overflow-hidden">
                  <div className="rounded-lg border border-white/10 overflow-hidden">
                    <Image
                      src="/profile.jpeg"
                      alt="Yathartha Aarush"
                      width={600}
                      height={600}
                      className="object-cover scale-[1.8] opacity-90 grayscale"
                      priority
                    />
                  </div>
                </div>

                <button
                    className="
                      shrink-0
                      px-3 py-2 rounded-lg
                      border border-white/15 bg-white/3
                      text-[0.6rem] tracking-[0.28em] text-white/70
                      transition-all duration-300
                      hover:bg-white/8 hover:border-white/25 hover:text-white
                      hover:cursor-pointer
                    "
                  >
                    VIEW RESUME
                  </button>
              </div>

              {/* FOOTER */}
              <div className="shrink-0">
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex flex-col items-start"> 
                    <p className="text-[0.6rem] tracking-[0.22em] text-white/50">
                      ID NUMBER
                    </p>
                    <p className="mt-1 text-[0.6rem] tracking-[0.22em] text-white/80">
                      8901-2345-6789
                    </p> 
                  </div>
                  <div className="flex flex-col items-end"> 
                    <p className="text-[0.6rem] tracking-[0.22em] text-white/50">
                      GMT +5:30
                    </p>
                    <p className="mt-1 text-[0.6rem] tracking-[0.22em] text-white/80">
                      {new Date().getFullYear()}
                    </p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: NAV + STATUS */}
        <div className="h-full w-full md:w-[380px] xl:w-[440px] flex flex-col gap-4">
          {/* NAV CARDS */}
          <div
            className="grid gap-3"
            style={{ gridTemplateRows: `repeat(${navItems.length}, minmax(0, 1fr))` }}
          >
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  group relative h-full w-full
                  rounded-xl border border-white/10
                  bg-neutral-900/70 backdrop-blur
                  px-5 py-3.5
                  transition-all duration-300 ease-out
                  hover:scale-[1.015]
                  hover:border-white/20
                  hover:bg-neutral-900/90
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]
                  overflow-hidden
                "
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_55%)]" />

                <div className="relative flex items-center gap-3">
                  <span
                    className="
                      mt-px w-3 h-3 rounded-full
                      border border-white/30
                      transition-all duration-300 ease-out
                      group-hover:bg-white/70 group-hover:border-white/70
                      group-hover:scale-125
                      group-hover:shadow-[0_0_18px_rgba(255,255,255,0.18)]
                    "
                  />

                  <span className="text-sm font-medium tracking-wide text-white/85 leading-none group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>

                  <span className="ml-auto text-[0.7rem] tracking-[0.22em] text-white/35 group-hover:text-white/55 transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")} / {String(navItems.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-2.5 h-px bg-white/10 group-hover:bg-white/15 transition-colors duration-300" />

                <p className="relative mt-2 text-[0.75rem] leading-snug tracking-wide text-white/55 group-hover:text-white/75 transition-colors duration-300">
                  {item.sub}
                </p>

                <span className="pointer-events-none absolute right-6 top-12 text-white/20 group-hover:text-white/50 transition-all duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* STATUS PANEL */}
          <div
            className="
              h-[28%]
              rounded-xl border border-white/10
              bg-neutral-900/70 backdrop-blur
              transition-all duration-300 ease-out
              hover:scale-[1.01]
              hover:border-white/20
              hover:bg-neutral-900/90
              overflow-hidden
              relative
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

            <div className="relative h-full w-full p-5 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-[0.22em] text-white/50">HIGHLIGHT</p>
                <p className="mt-1 text-sm tracking-wide text-white/80">
                  I like building things that feel simple but are complex underneath.
                </p>
                <p className="mt-2 text-[0.72rem] tracking-wide text-white/55">
                  Systems • UI • Practical AI
                </p>
              </div>

              <a
                href="#contact"
                className="
                  shrink-0
                  text-[0.7rem] tracking-[0.22em]
                  px-4 py-2 rounded-xl
                  border border-white/15 bg-white/3
                  text-white/70
                  transition-all duration-300
                  hover:bg-white/8 hover:border-white/25 hover:text-white
                "
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: SLIM PANEL */}
        <div
          className="
            hidden md:flex h-full w-[70px] xl:w-[84px]
            rounded-xl border border-white/10
            bg-neutral-900/60 backdrop-blur
            transition-all duration-300 ease-out
            hover:scale-[1.02]
            hover:border-white/20
            overflow-hidden
            relative
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.02))]" />

          <div className="relative h-full w-full p-3 flex flex-col justify-between">
            {/* quick links */}
            <div className="flex flex-col gap-3 items-center pt-3">
              {[
                { href: "mailto:aarushyathartha19@gmail.com", label: "Email", Icon: FaEnvelope },
                { href: "https://www.linkedin.com/in/yathartha-aarush-4153ba2a4/", label: "LinkedIn", Icon: FaLinkedin },
                { href: "https://github.com/Yathartha19", label: "GitHub", Icon: FaGithub },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  aria-label={label}
                  className="
                    w-10 h-10 rounded-xl
                    border border-white/10 bg-white/3
                    flex items-center justify-center
                    text-white/70
                    transition-all duration-300
                    hover:bg-white/[0.07]
                    hover:border-white/20
                    hover:text-white
                    hover:scale-[1.03]
                  "
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>

            {/* hint */}
            <div className="flex flex-col items-center gap-2 pb-2">
              <span className="text-[0.65rem] mb-4 tracking-[0.22em] text-white/35 rotate-90">
                SCROLL
              </span>
              <span className="text-white/20 text-xs">↓</span>
            </div>
          </div>
        </div>

      </article>
      
    </main>
  );
}
