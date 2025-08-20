import React from 'react'
import Tools from './Tools'

export default function LoopTools() {
  return (
    <div className="relative overflow-hidden w-full md:w-[500px]">
      {/* Flou gauche */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-3 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0))',
          filter: 'blur(4px)',
        }}
      />
      {/* Flou droite */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-3 z-10"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0))',
          filter: 'blur(4px)',
        }}
      />

      {/* Track (contenu défilant) */}
      <div className="flex items-center whitespace-nowrap animate-loop" style={{ gap: 16 }}>
        {/* On duplique 2x pour créer l’effet fluide */}
        {[...Array(2)].map((_, i) => (
          <div className="flex items-center" style={{ gap: 16 }} key={i}>
            <Tools name='Nexts'/>
            <Tools name='Gsap'/>
            <Tools name='UI/UX'/>
            <Tools name='Tailwindcss'/>
            <Tools name='3D'/>
            <Tools name='Wegbl'/>
						<Tools name='Figma'/>
						<Tools name='SEO'/>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-loop {
          display: flex;
          width: max-content;
          animation: loop-left 15s linear infinite;
        }
        @keyframes loop-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
