'use client';

type Pill = { text: string };
type Highlight = { k: string; title: string; desc: string; info: string };
type Quick = { label: string; value: string };

const pills: Pill[] = [
  { text: 'Web Development' },
  { text: 'AIML' },
  { text: 'LLMs / RAG' },
  { text: 'Full-Stack Development' },
  { text: 'Cloud' },
  { text: 'SDE' },

];

const quick: Quick[] = [

  { label: 'LOCATION', value: 'Bangalore, India' },
  { label: 'TIMEZONE', value: 'GMT +5:30' },
  { label: 'ROLE', value: 'Developer' },
  { label: 'AVAILABILITY', value: 'Available' },
];

const highlights: Highlight[] = [
  {
    k: '01',
    title: 'Subject Matter Expert at PESU I/O',
    desc: 'Taught a full-stack web development course at PESU I/O, focusing on real-world projects and practical solutions to a class of 60 students.',
    info: 'ROLE',
  },
  {
    k: '02',
    title: 'Research at RAPID',
    desc: 'Researched about Rule-Based, Machine Learning Approaches for Rooftop Solar Suitability Mapping, in Bangalore, India.',
    info: 'RESEARCH PAPER',
  },
  {
    k: '03',
    title: 'Trailo - Road Trip App',
    desc: 'Trail discovery and group hiking app - plan routes, explore terrains, and organize trips with map support and real-time coordination.',
    info: 'PROJECT',
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function Sections() {
  return (
    <main
      className="
        w-full bg-[#0c0c0c] text-white
        bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-size-[20px_20px]
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-0">
        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-[0.7rem] tracking-[0.32em] text-white/45">SECTION 01</p>
                <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-white/90">
                  Hello, I’m Yathartha Aarush.
                </h2>

                {[
                  `I'm a Computer Science student at PES University, specialising in Artificial Intelligence and Machine Learning. Though I've spent most of my time working on web applications, I'm also very interested in other domains like Linux, Cloud Computing, and AI/ML.`,
                  `I enjoy hands-on projects and learning by doing. I have worked on various web applications, and have projects in other fields as well. I've worked on research papers related to Machine Learning, and have experience as a Teaching Assistant and Course SME during my time at PES University.`,
                  `Outside of work, I love hiking, climbing, sports, and video games. I'm always eager to connect with like-minded individuals, so feel free to reach out!`,
                ].map((para) => (
                  <p key={para.slice(0, 16)} className="mt-6 text-[0.98rem] leading-relaxed tracking-wide text-white/60">
                    {para}
                  </p>
                ))}

                <div className="mt-7 flex flex-wrap gap-2">
                  {pills.map((p) => (
                    <span
                      key={p.text}
                      className="inline-flex items-center rounded-xl border border-white/10 bg-white/3 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-white/70"
                    >
                      {p.text}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="w-full lg:w-[360px] rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-5 mt-4">
                              
                <p className="text-[0.65rem] tracking-[0.28em] text-white/45">WORK WITH ME</p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {quick.map((q) => (
                    <div key={q.label} className="rounded-xl border border-white/10 bg-white/2 p-3">
                      <p className="text-[0.55rem] tracking-[0.28em] text-white/45">{q.label}</p>
                      <p className="mt-1 text-sm tracking-wide text-white/75">{q.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 h-px bg-white/10" />

                <p className="mt-4 text-[0.85rem] leading-relaxed tracking-wide text-white/60">
                  I'm open to collaborating on projects and research papers, as well as internship and freelance opportunities.
                </p>

                <a
                  href="#contact"
                  className="
                    mt-5 inline-flex w-full items-center justify-center
                    rounded-xl border border-white/15 bg-white/3
                    px-4 py-3 text-[0.75rem] tracking-[0.28em] text-white/70
                    transition-all duration-300
                    hover:bg-white/8 hover:border-white/25 hover:text-white
                  "
                >
                  GET IN TOUCH
                </a>
              </aside>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.k}
                  className="rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur p-5 transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/80"
                >

                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[0.6rem] tracking-[0.28em] text-white/40">{h.k}</p>
                    <span className="text-[0.6rem] tracking-[0.28em] text-white/35">{h.info}</span>
                  </div>
                  <h4 className="mt-2 text-sm font-medium tracking-wide text-white/85">{h.title}</h4>
                  <div className="mt-3 h-px bg-white/10" />
                  <p className="mt-3 text-[0.9rem] leading-relaxed tracking-wide text-white/60">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
