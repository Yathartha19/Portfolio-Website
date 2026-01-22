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
        period: "2025 → 2026",
        location: "Bangalore / Remote",
        stack: ["Next.js", "Map / Routing", "Firebase", "UI Systems"],
        highlights: [
          "Built product-style UI and navigation flows.",
          "Worked on infra + deployment + iterations based on real usage.",
        ],
        links: [
          { label: "Website", href: "https://ridetrailo.com/" },
        ],
      },
      {
        type: "Project",
        title: "Legal Workflow Generator",
        org: "Personal / Prototype",
        period: "2026",
        stack: ["Vector DB", "RAG", "LLM Orchestration"],
        highlights: [
          "Turns dense policies/laws into step-by-step workflows.",
          "Focus on traceability + linking back to sources.",
        ],
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        type: "Project",
        title: "InstaEngage: Instagram Engagement Analysis Platform",
        org: "Personal",
        period: "2025",
        stack: ["Kafka", "Spark", "SQLite", "Streamlit"],
        highlights: [
          "Real-time + batch processing pipeline for engagement metrics.",
          "Dashboard for metrics + error analysis.",
        ],
      },
      {
        type: "Project",
        title: "B2B Product Listing Automation (G2)",
        org: "Personal",
        period: "2025",
        stack: ["Selenium", "BeautifulSoup", "Kafka", "MongoDB", "Docker/K8s"],
        highlights: [
          "Scrapes product signals and checks listing availability.",
          "Streams updates, stores structured results, supports automation.",
        ],
      },
      {
        type: "Project",
        title: "RAG Gym Trainer + Nutrition Recommender",
        org: "Capstone / Research-style build",
        period: "2024 → 2025",
        stack: ["RAG", "Embeddings", "Vector DB", "Prompting"],
        highlights: [
          "Workout selection + explanations rooted in structured knowledge.",
          "Diet recommender tailored for Indian foods + macros.",
        ],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        type: "Project",
        title: "Pose Correction + Rep/Tempo Monitoring",
        org: "Computer Vision",
        period: "2024",
        stack: ["MediaPipe", "OpenCV", "SVC", "Realtime Pipeline"],
        highlights: [
          "Rep counting + tempo + mistake detection during exercises.",
          "Designed feedback signals to be trainer-like (not generic).",
        ],
      },
      {
        type: "Project",
        title: "Rooftop Solar Suitability (Bangalore)",
        org: "Research / CV",
        period: "2024",
        stack: ["YOLO", "Segmentation", "Satellite Imagery"],
        highlights: [
          "Explored scalable rooftop detection for city-scale assessment.",
          "Focus on practical constraints of dense urban imagery.",
        ],
      },
    ],
  },
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
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.10),transparent_55%)]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(96,165,250,0.55),rgba(56,189,248,0.35),transparent)] opacity-70" />

              <p className="relative text-[0.65rem] tracking-[0.28em] text-white/45">
                YEARS
              </p>

              <div className="relative mt-4 flex flex-col gap-2">
                {SECTIONS.map((s) => (
                  <a
                    key={s.year}
                    href={`#y-${s.year}`}
                    className="
                      rounded-xl border border-white/10 bg-white/2
                      px-3 py-2 text-sm tracking-wide text-white/70
                      transition-all duration-300
                      hover:bg-white/6 hover:border-sky-200/25 hover:text-sky-100
                    "
                  >
                    {s.year}
                  </a>
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
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(96,165,250,0.10),transparent_60%)]" />
                  <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.65),rgba(56,189,248,0.45),transparent)]" />
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
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.10),transparent_55%)]" />
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
