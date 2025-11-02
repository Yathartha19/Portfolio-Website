'use client'

export default function CodeCard() {
  return (
    <div className="w-full md:w-[25vw] h-[45vh] flex items-center justify-center rounded-md bg-linear-to-br from-violet-900 via-[#0c0c0c] to-blue-900 p-1">
      <div className="relative w-full h-full duration-800">
        
        <div className="absolute inset-0 flex flex-col rounded-md border border-white/10 bg-[#0a0a0a] overflow-hidden">
          
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-[#111111]/60">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
          </div>

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
      </div>
    </div>
  );
}
