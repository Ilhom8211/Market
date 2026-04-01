import React from 'react'

const steps = [
  "Вы оставляете заявку",
  "Я связываюсь с вами",
  "Обсуждаем задачу",
  "Начинаю работу",
  "Вы получаете результат"
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container">
        <h2 className="section-title">Как проходит работа</h2>
        <div className="steps-container">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`step-card reveal reveal-scale delay-${i + 1}`}
            >
              <div className="step-number">0{i + 1}</div>
              <div style={{ fontSize: '20px', fontWeight: 500 }}>{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
