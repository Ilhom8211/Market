import React from 'react'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--hover-bg)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal reveal-left">
            <h2 className="section-title" style={{ left: 0, transform: 'none' }}>Обо мне</h2>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>
              Я помогаю людям и бизнесу выделяться. Моя цель — не просто сделать красиво, а создать контент, который приносит результат.
            </p>
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>
              У меня более 3 лет опыта в создании и продвижении контента. Работаю быстро, честно и с вниманием к деталям.
            </p>
            <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--accent-color)' }}>
              Каждый проект — это индивидуальный подход и максимальная отдача.
            </p>

            <div className="about-stats delay-1">
              <div className="stat-box">
                <div className="stat-number">3+</div>
                <div style={{ fontSize: '14px', fontWeight: 500 }}>года опыта</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div style={{ fontSize: '14px', fontWeight: 500 }}>отдача</div>
              </div>
            </div>
          </div>
          <div className="exp-box reveal reveal-right delay-2">
            <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Экспертность & Качество</h3>
            <p style={{ color: '#9ca3af', fontSize: '18px' }}>Комплексный подход к созданию контента, который продает ваши услуги и повышает лояльность.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
