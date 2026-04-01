import React from 'react'

const packages = [
  {
    title: 'Пакет Start',
    price: '80 000 ₸',
    desc: '10 видео. Идеально для старта и первых результатов.'
  },
  {
    title: 'Пакет Growth',
    price: '180 000 ₸',
    desc: '20 видео. Стабильный поток контента для роста и охватов.'
  },
  {
    title: 'Пакет Pro',
    price: '250 000 ₸',
    desc: '30 видео. Максимум контента для быстрого выхода в рекомендации.'
  },
  {
    title: 'Пакет PR',
    price: '450 000 ₸',
    desc: '10 видео. Фокус на имидже, узнаваемости и привлечении внимания к бренду.'
  }
]

export default function Services({ openModal }) {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Услуги</h2>
        <div className="services-grid">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`service-card reveal reveal-up delay-${i + 1}`} 
              onClick={() => openModal(pkg.title)}
            >
              <h3 className="service-title">{pkg.title}</h3>
              <div className="service-price">{pkg.price}</div>
              <p className="service-desc">{pkg.desc}</p>
              <button className="btn btn-outline" style={{width: '100%', pointerEvents: 'none'}}>Выбрать пакет</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
