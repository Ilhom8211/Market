import React, { useState } from 'react'

const WHATSAPP_NUMBER = '77075482979'; // Замените на свой номер (без '+')

export default function RequestModal({ selectedService, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    objective: '',
    service_type: selectedService || 'Пакет Start'
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // 1. Формируем текст сообщения
      const message = `🚀 Новая заявка с сайта!\n\n` +
        `👤 Имя: ${formData.name}\n` +
        `🏢 Бизнес: ${formData.business_name}\n` +
        `🎯 Цель: ${formData.objective}\n` +
        `📦 Услуга: ${formData.service_type}`;

      // 2. Отправляем в Telegram (используем ENV переменные)
      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (botToken && chatId) {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
          })
        });
      }

      // 3. Формируем ссылку для WhatsApp
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      // Открываем WhatsApp в новой вкладке
      window.open(waUrl, '_blank');

      onClose(); // Закрываем модальное окно
    } catch (error) {
      alert("Не удалось отправить заявку. Пожалуйста, попробуйте еще раз.");
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 style={{ fontSize: '28px', marginBottom: '24px' }}>Оставить заявку</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ваше Имя</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
            />
          </div>

          <div className="form-group">
            <label>Название бизнеса / Ниша</label>
            <input
              type="text"
              name="business_name"
              className="form-control"
              required
              value={formData.business_name}
              onChange={handleChange}
              placeholder="Например: Салон красоты"
            />
          </div>

          <div className="form-group">
            <label>Основная цель</label>
            <input
              type="text"
              name="objective"
              className="form-control"
              required
              value={formData.objective}
              onChange={handleChange}
              placeholder="Больше заявок, узнаваемость..."
            />
          </div>

          <div className="form-group">
            <label>Выбранная услуга</label>
            <select
              name="service_type"
              className="form-control"
              value={formData.service_type}
              onChange={handleChange}
            >
              <option value="Пакет Start">Пакет Start</option>
              <option value="Пакет Growth">Пакет Growth</option>
              <option value="Пакет Pro">Пакет Pro</option>
              <option value="Пакет PR">Пакет PR</option>
              <option value="Индивидуальный проект">Индивидуальный проект</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '16px', opacity: isLoading ? 0.7 : 1 }}
            disabled={isLoading}
          >
            {isLoading ? 'Отправка...' : 'Отправить запрос'}
          </button>
        </form>
      </div>
    </div>
  )
}
