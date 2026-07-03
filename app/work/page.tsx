'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

type WorkItem = {
  type: "Project" | "Experience";
  title: string;
  org?: string;
  period: string;
  location?: string;
  stack: readonly string[];
  highlights: readonly string[];
  links?: readonly { label: string; href: string }[];
};

const SECTIONS: readonly { year: string; items: readonly WorkItem[] }[] = [
  {
    year: "2026",
    items: [
      {
        type: "Project",
        title: "Trailo",
        org: "Personal",
        period: "2025 → Present",
        location: "Bangalore",
        stack: ["Next.js", "Google Maps SDK", "Flutter", "Node.js", "PostgreSQL", "Express", "Debian Linux", "Self-Hosting"],
        highlights: [
          "A collaborative platform designed to simplify group ride coordination and communication for motorcyclists on their road trips, with features such as real-time location sharing, route planning, voice calls, safety alerts, image journaling and other trip organisation tools",
          "Implemented the Flutter Mobile App and Website ( including SEO, and optimisation ). Also developed the backend server ( a Nodejs and Expressjs backend server self-hosted on a Debian Linux machine )."
        ],
        links: [
          { label: "Website  ↗", href: "https://ridetrailo.com/" },
        ],
      },
      {
        type: "Experience",
        title: "Head of Web Development",
        org: "Nexus PES",
        period: "Aug 2024 → Present",
        location: "Bangalore",
        stack: ["Web Development", "Typescript", "Next.js"],
        highlights: [
          "Heading the Web Development Domain at Nexus PES.",
          "Worked on several club projects, including the Nexus PES website and the NexGen Hackathon platform. Also organized andled a web development teaching session attended by over 20 participants.",
          "Served as a Technical Mentor for NexGen Hackathon, guiding 40+ participants on technical strategy and implementation."
        ],
        links: [
          { label: "Nexus PES ↗", href: "https://nexus-pes.vercel.app/" },
        ],
      },
      {
        type: "Experience",
        title: "Teaching Assistant - Design and Analysis of Algorithms",
        org: "PES University",
        period: "Jan 2026 → Present",
        location: "Bangalore",
        stack: ["Data Structures", "Algorithms"],
        highlights: [
          "Served as a Teaching Assistant for the Design and Analysis of Algorithms Course at PES University, this course covered the concepts used in algorithm design and analysis, including topics such as sorting, searching, graph algorithms and dynamic programming.",
        ],
      }
    ],
  },
  {
    year: "2025",
    items: [
      {
        type: "Experience",
        title: "Subject Matter Expert - Web Development",
        org: "PESU I/O",
        period: "Aug 2025 → Dec 2025",
        location: "Bangalore",
        stack: ["MERN Stack", "Full-Stack Development", "Web Development", "HTML", "CSS", "React.js", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        highlights: [
          "Curated and taught the Full Stack Developer Bootcamp Course at PESU I/O.",
          "Mentored over 60 students through the MERN stack curriculum, helping them debug issues and understand core web concepts during hands-on sessions.",
          "Topics covering frontend fundamentals (HTML, CSS, JavaScript) to advanced React concepts (Hooks, Context API), Tailwind CSS, and complete backend development with Node.js and MongoDB - providing full MERN stack training through a hands-on, project-based approach"
        ],
        links: [
          { label: "PESU I/O ↗", href: "https://pesu.io/" },
        ],
      },
      {
        type: "Experience",
        title: "Research Intern at RAPID",
        org: "RAPID PES",
        period: "2025",
        stack: ["Image Segmentation", "Deep Learning", "Python", "Remote Sensing"],
        highlights: [
          "Researched about Rule-Based, Machine Learning Approaches for Rooftop Solar Suitability Mapping, in selected wards of Bangalore, India, and wrote a research paper about the topic",
        ],
      },
      {
        type: "Experience",
        title: "Teaching Assistant - Web Technologies",
        org: "PES University",
        period: "Aug 2025 → Dec 2025",
        location: "Bangalore",
        stack: ["MERN Stack", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
        highlights: [
          "Served as a Teaching Assistant for the Web Technologies Course at PES University, this course covered the basics of web development and the MERN stack.",
          "Created an extensive Documentation Website for the MERN stack called MERN Docs for developers to learn and refer from.",
        ],
        links: [
          { label: "MERN Docs ↗", href: "https://mern-docs.vercel.app/" },
        ],
      },
    ],
  }
];

const PAGE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
] as const;

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function WorkPage() {

  const router = useRouter();

  const goToContact = () => {
    router.push("/");

    // wait for home to mount, then scroll
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1200);
  };

  return (
    <main
      className="
        w-full min-h-screen text-white
        bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]
        bg-size-[20px_20px]
        relative overflow-hidden
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:py-20">
        {/* Top header */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.32em] text-white/40">
              WORK
            </p>
            <h1 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-white/90">
              Projects & Experience
            </h1>
            <p className="mt-4 text-[0.95rem] leading-relaxed tracking-wide text-white/55">
              A timeline of what I’ve built — focused on systems, UI, and practical applied AI.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {PAGE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="
                  rounded-xl border border-white/10 bg-white/3
                  px-4 py-2 text-[0.7rem] tracking-widest text-white/70
                  transition-all duration-300
                  hover:bg-white/8 hover:border-sky-200/25 hover:text-sky-100
                "
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Timeline wrapper */}
        <section className="mt-10 lg:mt-14 grid gap-6 lg:grid-cols-[220px_1fr]">
          {/* Left rail (sticky) */}
          <aside className="hidden lg:block">
            <div
              className="
                sticky top-8
                rounded-xl border border-white/10
                bg-neutral-900/35 backdrop-blur
                p-4
                overflow-hidden
              "
            >
              <p className="relative text-[0.65rem] tracking-[0.28em] text-white/45">
                YEARS
              </p>

              <div className="relative mt-4 flex flex-col gap-2">
                {SECTIONS.map((s) => (
                  <button
                    key={s.year}
                    onClick={() => {
                      const el = document.getElementById(`y-${s.year}`);
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="
                      rounded-xl border border-white/10 bg-white/2
                      px-3 py-2 text-sm tracking-wide text-white/70
                      transition-all duration-300
                      hover:bg-white/6 hover:border-sky-200/25 hover:text-sky-100
                      text-left hover:cursor-pointer
                    "
                  >
                    {s.year}
                  </button>

                ))}
              </div>

              <div className="relative mt-4 h-px bg-white/10" />
              <p className="relative mt-4 text-[0.78rem] leading-relaxed tracking-wide text-white/45">
                Tap a year to jump. Cards expand naturally based on content.
              </p>
            </div>
          </aside>

          {/* Timeline content */}
          <div className="min-w-0">
            {SECTIONS.map((section) => (
              <div key={section.year} id={`y-${section.year}`} className="scroll-mt-24">
                {/* Year header */}
                <div
                  className="
                    rounded-xl border border-white/10
                    bg-neutral-900/35 backdrop-blur
                    p-4
                    relative overflow-hidden
                  "
                >
                  <div className="relative flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-white/90">
                      {section.year}
                    </h2>
                    <span className="text-[0.7rem] tracking-[0.22em] text-white/45">
                      {section.items.length} ITEM{section.items.length === 1 ? "" : "S"}
                    </span>
                  </div>
                </div>

                {/* Connector line */}
                <div className="relative pl-3 sm:pl-6">
                  <div className="absolute left-1.5 sm:left-3 top-0 bottom-0 w-px bg-white/10" />

                  <div className="mt-4 space-y-4">
                    {section.items.map((item, i) => (
                      <article
                        key={`${section.year}-${i}-${item.title}`}
                        className="
                          relative
                          rounded-xl border border-white/10
                          bg-neutral-900/45 backdrop-blur
                          overflow-hidden
                          transition-all duration-300
                          hover:border-sky-200/25 hover:bg-neutral-900/60
                        "
                      >
                        {/* timeline dot */}
                        <div
                          className="
                            absolute -left-2.5 sm:-left-4 top-6
                            h-3 w-3 rounded-full
                            border border-white/20
                            bg-neutral-900
                          "
                        />
                        <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_25%_20%,rgba(96,165,250,0.12),transparent_55%)]" />

                        <div className="relative p-5">
                          {/* top row */}
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span
                                  className={classNames(
                                    "rounded-lg border px-2.5 py-1 text-[0.65rem] tracking-[0.22em]",
                                    item.type === "Project"
                                      ? "border-sky-200/20 bg-sky-200/5 text-sky-100/70"
                                      : "border-white/15 bg-white/3 text-white/65"
                                  )}
                                >
                                  {item.type.toUpperCase()}
                                </span>

                                <span className="text-[0.7rem] tracking-[0.22em] text-white/45">
                                  {item.period}
                                </span>

                                {item.location ? (
                                  <span className="text-[0.7rem] tracking-[0.22em] text-white/35">
                                    • {item.location}
                                  </span>
                                ) : null}
                              </div>

                              <h3 className="mt-3 text-lg font-semibold tracking-tight text-white/90">
                                {item.title}
                              </h3>

                              {item.org ? (
                                <p className="mt-1 text-sm tracking-wide text-white/55">
                                  {item.org}
                                </p>
                              ) : null}
                            </div>

                            {item.links?.length ? (
                              <div className="shrink-0 flex flex-wrap gap-2">
                                {item.links.map((l) => (
                                  <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      rounded-xl border border-white/10 bg-white/3
                                      px-3 py-2 text-[0.7rem] tracking-widest text-white/70
                                      transition-all duration-300
                                      hover:bg-white/8 hover:border-sky-200/25 hover:text-sky-100
                                    "
                                  >
                                    {l.label}
                                  </a>
                                ))}
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-4 h-px bg-white/10" />

                          {/* body */}
                          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_280px]">
                            <ul className="space-y-2 text-[0.92rem] leading-relaxed tracking-wide text-white/60">
                              {item.highlights.map((h) => (
                                <li key={h} className="flex gap-3">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-200/40" />
                                  <span className="min-w-0">{h}</span>
                                </li>
                              ))}
                            </ul>

                            <div
                              className="
                                rounded-xl border border-white/10 bg-white/2
                                p-4
                              "
                            >
                              <p className="text-[0.65rem] tracking-[0.28em] text-white/45">
                                STACK
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {item.stack.map((s) => (
                                  <span
                                    key={s}
                                    className="
                                      inline-flex items-center
                                      rounded-lg border border-white/10 bg-white/3
                                      px-2.5 py-1
                                      text-[0.7rem] tracking-wide text-white/70
                                    "
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-6" />
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <footer className="mt-10 lg:mt-14">
          <div
            className="
              rounded-xl border border-white/10
              bg-neutral-900/35 backdrop-blur
              p-5
              relative overflow-hidden
            "
          >
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm tracking-wide text-white/60">
                Want to talk about a project or collaboration?
              </p>
              <button
                onClick={goToContact}
                className="
                  rounded-xl border border-white/10 bg-white/3
                  px-4 py-2 text-[0.7rem] tracking-widest text-white/70
                  transition-all duration-300
                  hover:bg-white/8 hover:border-sky-200/25 hover:text-sky-100
                  w-fit hover:cursor-pointer
                "
              >
                CONTACT
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
