'use client'

export default function FlipCard() {
  return (
    <div className="group perspective w-full md:w-[25vw] h-[55vh] flex items-center justify-center">
      <div className="relative w-full h-full duration-800 transform-style-preserve-3d group-hover:rotate-y-180">
        
        <div className="absolute inset-0 flex flex-col rounded-md border border-white/10 bg-[#0a0a0a] backface-hidden overflow-hidden">
          
          {/* Header bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-[#111111]/60">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
          </div>

          {/* “Code” Area */}
          <div className="flex flex-col justify-center px-6 py-8 text-[0.85rem] font-mono leading-relaxed h-full">
            <p className="text-gray-500">
              <span className="text-gray-600">const</span> developer = {"{"}
            </p>
            <p className="pl-6 text-gray-400">
              name: <span className="text-cyan-400">'Yathartha Aarush'</span>,
            </p>
            <p className="pl-6 text-gray-400">
              role: <span className="text-blue-400">'Developer'</span>,
            </p>
            <p className="pl-6 text-gray-400">
              location: <span className="text-purple-400">'Bangalore, India'</span>
            </p>
            <p className="text-gray-500">{"}"}</p>
            <div className="mt-6 text-gray-600">// welcome</div>
          </div>

          <div className="px-6 pb-4 text-[0.7rem] text-gray-600 uppercase tracking-widest">
            <span className="border-t border-white/10 pt-3 inline-block">
              portfolio.
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-md border border-white/10 bg-[#070707] rotate-y-180 backface-hidden overflow-hidden">
          
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-size-[32px_32px]" />

          <div className="absolute -inset-8 opacity-[0.07]">
            <svg width="100%" height="100%">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 w-[82%] h-[82%] border border-white/10 rounded-md flex flex-col justify-between p-6 text-gray-400">
            <div className="flex justify-between text-[0.75rem] uppercase tracking-widest text-gray-600">
              <span>build-log</span>
              <span>v1.2.4</span>
            </div>

            <div className="flex flex-col text-sm text-gray-300 font-light tracking-wide leading-relaxed">
              <p>▶ Initializing interface...</p>
              <p>▶ Loading modules...</p>
              <p>▶ Deploying...</p>
            </div>

            <div className="flex justify-between text-[0.7rem] text-gray-600 uppercase tracking-widest">
              <span>status:</span>
              <span className="text-cyan-400">online</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
