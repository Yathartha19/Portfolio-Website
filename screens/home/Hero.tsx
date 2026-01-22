import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const navItems = [
    { id: "about", label: "About Me", sub: "Who I am & what I do" },
    { id: "work", label: "Work and Experience", sub: "My projects, roles, and experiences" },
    { id: "gallery", label: "Gallery", sub: "Snapshots & experiments" },
    { id: "contact", label: "Contact", sub: "Let’s get in touch" },
  ];

  return (
    <main
      className="
        w-full lg:min-h-screen text-white
        flex items-center justify-center
        bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]
        bg-size-[20px_20px]
        relative overflow-hidden
      "
    >

      <article
        className="
          min-h-0
          w-full md:h-[486px]
          flex flex-col md:flex-row
          items-center md:items-stretch
          justify-center
          gap-4
          px-6 lg:px-0
          max-lg:mt-12
          relative z-10
        "
      >
        {/* LEFT */}
        <div className="flex h-full w-[280px] xl:w-[320px] items-stretch justify-center">
          <div
            className="
              relative w-full h-full
              rounded-xl
              border border-white/10
              bg-neutral-900/45 backdrop-blur
              overflow-hidden
              flex flex-col
              transition-all duration-300 ease-out
              hover:scale-[1.02]
              hover:border-sky-200/25
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.13),transparent_65%)]" />
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.7),rgba(56,189,248,0.55),transparent)]" />

            <div className="relative p-5 h-full flex flex-col">
              {/* HEADER */}
              <div className="shrink-0">
                <div className="flex items-start">
                  <div className="min-w-0">
                    <div className="flex items-center">
                      <span className="text-[0.6rem] tracking-[0.3em] text-white/45">PORTFOLIO</span>
                    </div>

                    <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white/92 leading-tight">
                      Yathartha Aarush
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[0.7rem] tracking-[0.28em] text-white/55">DEVELOPER</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 h-px bg-white/10" />
              </div>

              {/* MAIN */}
              <div className="flex-1 flex flex-col justify-between gap-4 min-h-0">
                <div className="flex-1 rounded-xl border border-white/10 bg-black/25 mt-4 overflow-hidden relative">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(96,165,250,0.16),transparent_55%)]" />
                  <div className="rounded-lg border border-white/10 overflow-hidden relative">
                    <Image
                      src="/profile.jpeg"
                      alt="Yathartha Aarush"
                      width={600}
                      height={600}
                      className="object-cover scale-[1.8] opacity-80 select-none pointer-events-none"
                      priority
                      draggable={false}
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
                    hover:bg-white/4 hover:border-sky-200/20 hover:text-sky-100
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
                    <p className="text-[0.6rem] tracking-[0.22em] text-white/50">ID NUMBER</p>
                    <p className="mt-1 text-[0.6rem] tracking-[0.22em] text-white/80">8901-2345-6789</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[0.6rem] tracking-[0.22em] text-white/50">GMT +5:30</p>
                    <p className="mt-1 text-[0.6rem] tracking-[0.22em] text-sky-100/70">{new Date().getFullYear()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: NAV + STATUS */}
        <div className="h-full w-full md:w-[380px] xl:w-[440px] flex flex-col gap-4">
          {/* NAV CARDS (extra highlight) */}
          <div
            className="
              flex-1
              grid gap-3
              rounded-xl border border-white/10
              bg-neutral-900/35 backdrop-blur
              p-3
              relative overflow-hidden
            "
            style={{ gridTemplateRows: `repeat(${navItems.length}, minmax(0, 1fr))` }}
          >
            {/* subtle panel wash */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.10),transparent_55%)]" />
            <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(96,165,250,0.55),rgba(56,189,248,0.35),transparent)] opacity-70" />

            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  group relative h-full w-full
                  flex flex-col justify-center
                  rounded-xl border border-white/10
                  bg-neutral-900/55
                  px-5 py-2
                  transition-all duration-300 ease-out
                  hover:scale-[1.01]
                  hover:border-sky-200/30
                  hover:bg-neutral-900/70
                  overflow-hidden
                "
              >
                {/* internal highlight */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_25%_20%,rgba(96,165,250,0.14),transparent_55%)]" />

                <div className="relative flex items-center gap-3">
                  {/* dot */}
                  <span
                    className="
                      mt-px w-3 h-3 rounded-full
                      border border-white/30
                      transition-all duration-300 ease-out
                      group-hover:bg-sky-200/80 group-hover:border-sky-200/80
                      group-hover:scale-125
                    "
                  />

                  <span className="text-sm font-medium tracking-wide text-white/85 leading-none group-hover:text-sky-50 transition-colors duration-300">
                    {item.label}
                  </span>

                  <span className="ml-auto text-[0.7rem] tracking-[0.22em] text-white/35 group-hover:text-sky-100/75 transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")} / {String(navItems.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-2.5 h-px bg-white/10 group-hover:bg-sky-200/20 transition-colors duration-300" />

                <p className="relative mt-2 text-[0.75rem] leading-snug tracking-wide text-white/55 group-hover:text-white/80 transition-colors duration-300">
                  {item.sub}
                </p>

                <span className="pointer-events-none absolute right-6 top-10 text-white/20 group-hover:text-sky-100/70 transition-all duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* STATUS PANEL */}
          <div
            className="
              rounded-xl border border-white/10
              bg-neutral-900/45 backdrop-blur
              transition-all duration-300 ease-out
              hover:scale-[1.01]
              hover:border-sky-200/25
              hover:bg-neutral-900/60
              overflow-hidden
              relative
            "
          >         
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.10),transparent_60%)]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.55),rgba(96,165,250,0.55),transparent)]" />

            <div className="relative h-full w-full p-5 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-[0.22em] text-sky-100/60">HIGHLIGHT</p>
                <p className="mt-1 text-sm tracking-wide text-white/80">
                  Currently working on Trialo.
                </p>
                <p className="mt-2 text-[0.72rem] tracking-wide text-white/55">Website • App • Server</p>
              </div>

              <a
                href="https://ridetrailo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  shrink-0
                  text-[0.7rem] tracking-widest
                  px-4 py-2 rounded-lg
                  border border-white/15 bg-white/3
                  text-white/70
                  transition-all duration-300
                  hover:bg-white/8 hover:border-sky-200/35 hover:text-sky-100
                "
              >
                Check It Out
                <span className="text-white/20 group-hover:text-white/45 transition-colors duration-300 pl-4">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: SLIM PANEL */}
        <div
          className="
            hidden md:flex h-full w-[70px] xl:w-[84px]
            rounded-xl border border-white/10
            bg-neutral-900/40 backdrop-blur
            transition-all duration-300 ease-out
            hover:scale-[1.02]
            hover:border-sky-200/25
            overflow-hidden
            relative
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(96,165,250,0.12),transparent_40%,rgba(255,255,255,0.02))]" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(96,165,250,0.55),rgba(56,189,248,0.35),transparent)]" />

          <div className="relative h-full w-full p-3 flex flex-col justify-between">
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
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="
                    w-10 h-10 rounded-xl
                    border border-white/10 bg-white/3
                    flex items-center justify-center
                    text-white/70
                    transition-all duration-300
                    hover:bg-white/[0.07]
                    hover:border-sky-200/35
                    hover:text-sky-100
                    hover:scale-[1.03]
                  "
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2 pb-2">
              <span className="text-[0.65rem] mb-4 tracking-[0.22em] text-sky-100/40 rotate-90">
                SCROLL
              </span>
              <span className="text-sky-100/25 text-xs">↓</span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
