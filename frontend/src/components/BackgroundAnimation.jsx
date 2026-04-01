import React from 'react'

export default function BackgroundAnimation() {
  return (
    <div className="global-bg-animation">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      
      <div className="bg-ring bg-ring-1"></div>
      <div className="bg-ring bg-ring-2"></div>
      <div className="bg-ring bg-ring-3"></div>
      
      <div className="bg-text-spinner">
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <defs>
            <path id="giantCircle" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
          </defs>
          <text fontSize="9" fontWeight="800" fill="rgba(17, 24, 39, 0.05)" letterSpacing="5">
            <textPath href="#giantCircle">
              МАРКЕТИНГ • ДИЗАЙН • ПРОЦЕССЫ • ПРОДАЖИ • СОЗДАНИЕ ВАЛЮТЫ • РЕЗУЛЬТАТ • 
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
