import React from 'react'

export default function Contact({ openModal }) {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content reveal reveal-up">
          <h2 className="cta-title">Готовы начать?</h2>
          <p className="cta-p">
            Оставьте заявку, и я свяжусь с вами в ближайшее время, чтобы обсудить ваш проект и цели. Совместно мы создадим контент, который будет работать на вас.
          </p>
          <a 
            href="https://wa.me/77075482979"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-glow"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
