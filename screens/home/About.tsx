
export default function About() {
  return (
    <section className="min-h-screen w-full bg-[#0c0c0c] text-gray-100 flex items-center justify-center px-30 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16">
        
        <div className="flex-1 text-center md:text-left space-y-8">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-gray-100">
            Hello,
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            I’m Yathartha — a developer based in Bangalore, India.
          </p>

          <div className="space-y-5 max-w-2xl text-gray-400 leading-relaxed">
            <p>
              I enjoy crafting products that bring together structure, design, and logic.  
              My focus lies in building intelligent systems and scalable web experiences that feel natural to use and effortless to maintain.
            </p>

            <p>
              My background spans <span className="text-gray-300">AI development</span>,  
              <span className="text-gray-300"> backend systems</span>, and  
              <span className="text-gray-300"> modern full-stack engineering</span>.  
              I like thinking deeply about performance, architecture, and the human side of software.
            </p>

            <p>
              Outside of work, I spend time reading about distributed systems and design philosophy —  
              exploring how technology can stay simple, quiet, and meaningful.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-sm italic text-gray-700">
              “Build things that solve problems.”
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a]">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
