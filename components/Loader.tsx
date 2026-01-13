'use client'
import { useEffect, useState } from 'react'

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [text, setText] = useState("INITIALIZING")

  useEffect(() => {
    let iteration = 0

    const decryptInterval = setInterval(() => {
      setText(prev =>
        prev
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return "INITIALIZING"[idx]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      iteration += 1 / 2
      if (iteration >= "INITIALIZING".length) {
        clearInterval(decryptInterval)
        setText("INITIALIZING")
      }
    }, 40)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 1000)

    return () => {
      clearInterval(decryptInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div
      className={`
        fixed inset-0 z-9999 flex items-center justify-center
        bg-[#111111] text-white
        transition-opacity duration-700 ease-out
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-dotPulse delay-0" />
          <span className="w-2 h-2 rounded-full bg-white animate-dotPulse delay-150" />
          <span className="w-2 h-2 rounded-full bg-white animate-dotPulse delay-300" />
        </div>

        <p className="text-sm tracking-widest text-white/60 uppercase font-mono">
          {text}
        </p>
      </div>
    </div>
  )
}
