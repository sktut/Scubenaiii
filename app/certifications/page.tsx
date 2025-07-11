'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState('');
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = 6;

  const showSlide = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const openModal = (cert: string) => {
    setSelectedCertification(cert);
    const modal = document.getElementById('enrollModal');
    if (modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const span = document.getElementById('selectedDomain');
    if (span) span.textContent = cert;
  };

  const closeModal = () => {
    const modal = document.getElementById('enrollModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  const sendInterestEmail = () => {
    const subject = encodeURIComponent(`Interest in ${selectedCertification} Certification`);
    const body = encodeURIComponent(`Hello ScubenAI Team,\n\nI am interested in ${selectedCertification} certification program.\n\nPlease provide me with more details.\n\nBest regards,\n[Your Name]`);
    const mailtoLink = `mailto:contact@scubenai.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setTimeout(() => closeModal(), 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      showSlide(nextSlide);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const cursorGlow = document.querySelector('.cursor-glow') as HTMLElement;
    const moveCursor = (e: MouseEvent) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const modal = document.getElementById('enrollModal');
    const listener = (event: MouseEvent) => {
      if (event.target === modal) closeModal();
    };
    document.addEventListener('click', listener);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      {/* Background Animation */}
      <div className="background-animation">
        {[...Array(6)].map((_, i) => <div key={i} className="sphere"></div>)}
        <div className="connection-line" style={{ top: '15%', left: '15%', width: '200px', transform: 'rotate(45deg)' }}></div>
        <div className="connection-line" style={{ top: '25%', left: '60%', width: '150px', transform: 'rotate(-30deg)' }}></div>
        <div className="connection-line" style={{ top: '65%', left: '30%', width: '180px', transform: 'rotate(60deg)' }}></div>
        <div className="connection-line" style={{ top: '75%', left: '50%', width: '220px', transform: 'rotate(-45deg)' }}></div>
      </div>

      {/* Header */}
      <header>
        <nav>
          <div className="logo">🚀 ScubenAI</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main>
        <section className="hero">
          <h1>Next-Gen Certifications</h1>
          <p>Advance your career with ScubenAI.</p>
        </section>
        <section className="certification-section" id="certifications">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="carousel-container">
            <div className="carousel" ref={carouselRef} id="carousel">
              {/* Repeat cert-card blocks or map over data */}
            </div>
          </div>
          <div className="carousel-nav">
            {["Cybersecurity", "App Dev", "Web Dev", "Cloud", "Data Science", "DevOps"].map((label, index) => (
              <button key={index} className={`nav-btn ${currentSlide === index ? 'active' : ''}`} onClick={() => showSlide(index)}>{label}</button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>ScubenAI</h3>
            <p>Pioneering next-generation AI solutions.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div id="enrollModal" className="modal">
        <div className="modal-content">
          {["✨", "⭐", "💫", "✨"].map((icon, i) => <div key={i} className="sparkle">{icon}</div>)}
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-header">
            <h2 className="modal-title">🚀 Ready to Transform Your Career?</h2>
            <p className="modal-subtitle">Join thousands of professionals</p>
          </div>
          <div className="modal-body">
            <div className="modal-icon">🎯</div>
            <p className="modal-message">Awesome choice! You're about to begin a great journey.</p>
            <div className="modal-instructions">
              <h4>📧 How to Get Started:</h4>
              <p className="email-info">
                Click "Send Interest Email" below for <span id="selectedDomain"></span> certification.
              </p>
            </div>
            <div className="modal-buttons">
              <button className="modal-btn send-email-btn" onClick={sendInterestEmail}>📧 Send Interest Email</button>
              <button className="modal-btn close-btn" onClick={closeModal}>Maybe Later</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
