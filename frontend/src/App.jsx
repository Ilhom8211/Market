import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyMe from './components/WhyMe'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import RequestModal from './components/RequestModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const openModal = (serviceName = '') => {
    setSelectedService(serviceName)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService('')
  }

  // Advanced Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app z-relative">
      <header className="navbar">
        <div className="container">
          <div className="logo">STUDIO.</div>
          <div className="nav-links">
            <a href="#about">Обо мне</a>
            <a href="#services">Услуги</a>
            <a href="#why-me">Преимущества</a>
            <a href="#how-it-works">Этапы</a>
          </div>
          <button className="btn btn-outline" onClick={() => openModal()}>Обсудить проект</button>
        </div>
      </header>

      <main>
        <Hero openModal={openModal} />
        <About />
        <Services openModal={openModal} />
        <WhyMe />
        <HowItWorks />
        <Contact openModal={openModal} />
      </main>

      {isModalOpen && (
        <RequestModal 
          selectedService={selectedService} 
          onClose={closeModal} 
        />
      )}
    </div>
  )
}

export default App
