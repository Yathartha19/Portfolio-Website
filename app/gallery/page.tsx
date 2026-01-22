"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Category =
  | "All"
  | "Photos"
  | "UI"
  | "Systems"
  | "Notes"
  | "Travel"
  | "Random";

type GalleryItem = {
  id: string;
  title?: string;
  note?: string;
  year?: string;
  category: Exclude<Category, "All">;
  src?: string; // /public/... -> use "/gallery/xxx.jpg"
  alt?: string;
  href?: string; // optional external/internal link
};

const NAV = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
] as const;

const FILTERS: readonly Category[] = ["All", "Photos", "UI", "Systems", "Notes", "Travel", "Random"] as const;

const ITEMS: readonly GalleryItem[] = [

  { id: "p1", category: "Photos", title: "MERN Docs", year: "2025", src: "/images/mern-docs.png", alt: "Coffee estate photo" },
  { id: "p2", category: "Photos", title: "Dashboard UI", year: "2024", src: "/images/pesuio-v2.png", alt: "Dashboard UI screenshot" },
  { id: "p3", category: "Notes", title: "Meeting Notes", year: "2023", src: "/images/portfolio-v3.png", alt: "Handwritten meeting notes" },
  { id: "p4", category: "Travel", title: "Mountain Hike", year: "2022", src: "/images/trailo-v2.png", alt: "Mountain hike photo" },
  
] as const;

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function GalleryClient() {
  const [active, setActive] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return ITEMS;
    return ITEMS.filter((x) => x.category === active);
  }, [active]);

  const openItem = useMemo(() => filtered.find((x) => x.id === openId) ?? null, [filtered, openId]);

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
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.32em] text-white/40">GALLERY</p>
            <h1 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-white/90">
              Anything worth keeping
            </h1>
            <p className="mt-4 text-[0.95rem] leading-relaxed tracking-wide text-white/55">
              UI shots, random photos, notes, ideas — not curated too hard.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {NAV.map((l) => (
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

        {/* Filter bar */}
        <div
          className="
            mt-10 rounded-xl border border-white/10
            bg-neutral-900/35 backdrop-blur
            p-3 relative overflow-hidden
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.10),transparent_55%)]" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(96,165,250,0.55),rgba(56,189,248,0.35),transparent)] opacity-70" />

          <div className="relative flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const on = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={cx(
                    "rounded-xl border px-4 py-2 text-[0.75rem] tracking-wide transition-all duration-300",
                    on
                      ? "border-sky-200/30 bg-white/6 text-sky-100"
                      : "border-white/10 bg-white/2 text-white/70 hover:bg-white/6 hover:border-white/20"
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry */}
        <section className="mt-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filtered.map((item) => (
              <article key={item.id} className="mb-4 break-inside-avoid">
                <div
                  className="
                    rounded-xl border border-white/10
                    bg-neutral-900/45 backdrop-blur
                    overflow-hidden relative
                    transition-all duration-300
                    hover:bg-neutral-900/60 hover:border-sky-200/25
                  "
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_25%_20%,rgba(96,165,250,0.12),transparent_55%)]" />

                  {/* Media */}
                  {item.src ? (
                    <button
                      type="button"
                      onClick={() => setOpenId(item.id)}
                      className="block w-full text-left"
                      aria-label={`Open ${item.title ?? "image"}`}
                    >
                      <div className="relative w-full bg-black/25">
                        <img
                          src={item.src}
                          alt={item.alt ?? item.title ?? "Gallery image"}
                          draggable={false}
                          className="w-full h-auto select-none pointer-events-none"
                          loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                      </div>
                    </button>
                  ) : (
                    <div className="p-6">
                      <div className="h-24 rounded-xl border border-white/10 bg-white/2" />
                    </div>
                  )}

                  {/* Body */}
                  <div className="relative p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[0.65rem] tracking-[0.22em] text-white/45">
                          {item.category.toUpperCase()} {item.year ? `• ${item.year}` : ""}
                        </p>
                        {item.title ? (
                          <p className="mt-2 text-base font-semibold tracking-tight text-white/90 truncate">
                            {item.title}
                          </p>
                        ) : null}
                      </div>

                      {item.href ? (
                        <Link
                          href={item.href}
                          className="
                            shrink-0 rounded-xl border border-white/10 bg-white/3
                            px-3 py-2 text-[0.65rem] tracking-widest text-white/70
                            transition-all duration-300
                            hover:bg-white/8 hover:border-sky-200/25 hover:text-sky-100
                          "
                        >
                          OPEN
                        </Link>
                      ) : null}
                    </div>

                    {item.note ? (
                      <>
                        <div className="mt-3 h-px bg-white/10" />
                        <p className="mt-3 text-[0.9rem] leading-relaxed tracking-wide text-white/60">
                          {item.note}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {openItem?.src ? (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="
              w-full max-w-5xl
              rounded-xl border border-white/10
              bg-neutral-900/60 backdrop-blur
              overflow-hidden
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(96,165,250,0.10),transparent_55%)]" />

            <div className="relative flex items-center justify-between gap-4 px-4 py-3 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-[0.22em] text-white/45">
                  {openItem.category.toUpperCase()} {openItem.year ? `• ${openItem.year}` : ""}
                </p>
                <p className="mt-1 text-sm tracking-wide text-white/80 truncate">
                  {openItem.title ?? "Preview"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="
                  rounded-xl border border-white/10 bg-white/3
                  px-3 py-2 text-[0.7rem] tracking-widest text-white/70
                  transition-all duration-300
                  hover:bg-white/8 hover:border-white/20 hover:text-white
                "
              >
                CLOSE
              </button>
            </div>

            <div className="relative bg-black/40">
              <img
                src={openItem.src}
                alt={openItem.alt ?? openItem.title ?? "Preview"}
                draggable={false}
                className="w-full h-auto max-h-[80vh] object-contain select-none"
              />
            </div>

            {openItem.note ? (
              <div className="relative px-4 py-4 border-t border-white/10">
                <p className="text-sm tracking-wide text-white/60">{openItem.note}</p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}
