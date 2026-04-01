import React from 'react'

export default function Hero({ openModal }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text-content reveal reveal-left">
            <h1 className="delay-1">Создаю решения, <br />которые работают.</h1>
            <p className="delay-2">
              Современный подход к контенту и результату.<br />
              Просто. Стильно. Эффективно.
            </p>
            <div className="delay-3">
              <a href="https://wa.me/77075482979" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-right delay-2">
            <div className="hero-visual-wrapper">
              
              {/* 3D Massive Orbits */}
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
              <div className="orbit orbit-3"></div>

              {/* Pulsing Core */}
              <div className="hero-core animate-pulse-slow"></div>

              {/* Infinite Text Ring */}
              <div className="hero-text-ring">
                <svg viewBox="0 0 200 200" width="100%" height="100%">
                  <defs>
                    <path id="heroCirclePath" d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                  </defs>
                  <text fontSize="14" fontWeight="800" fill="var(--text-primary)" letterSpacing="4">
                    <textPath href="#heroCirclePath">
                      МАРКЕТИНГ • ДИЗАЙН • ПРОЦЕССЫ • ПРОДАЖИ •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Floating Cards */}
              <div className="floating-card card-target animate-float">
                <span>🎯</span> Target
              </div>
              <div className="floating-card card-traffic animate-float delay-1">
                <span>🚀</span> Traffic
              </div>
              <div className="floating-card card-roi animate-float delay-2">
                <span>📈</span> 240% ROI
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
