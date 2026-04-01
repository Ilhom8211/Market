import React from 'react'

const features = [
  "Более 3 лет опыта в сфере",
  "Минимализм и премиум стиль",
  "Быстрая работа",
  "Четкое понимание задач",
  "Всегда на связи",
  "Ориентир на результат"
]

export default function WhyMe() {
  return (
    <section id="why-me" style={{ background: 'rgba(249, 250, 251, 0.5)' }}>
      <div className="container">
        <h2 className="section-title">Почему выбирают меня</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`feature-item reveal ${i % 2 === 0 ? 'reveal-3d-left' : 'reveal-3d-right'} delay-${i + 1}`}
            >
              <div className="feature-icon" style={{ color: 'var(--accent-color)' }}>—</div>
              <div style={{ fontSize: '18px', fontWeight: 500 }}>{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
