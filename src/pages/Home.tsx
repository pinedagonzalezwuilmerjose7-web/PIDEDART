import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedGallery from '../components/FeaturedGallery';
import Categories from '../components/Categories';
import Process from '../components/Process';
import Artists from '../components/Artists';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import ContactSection from '../components/ContactSection';

export default function Home() {
  useEffect(() => {
    // Parallax and Nav scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroLeft = document.querySelector('.hero-left') as HTMLElement;
      if (heroLeft) {
        heroLeft.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      
      const nav = document.querySelector('nav') as HTMLElement;
      if (nav) {
        if (scrollY > 40) {
          nav.style.boxShadow = '0 4px 40px rgba(26,22,16,0.12)';
        } else {
          nav.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const fadeElements = document.querySelectorAll('.art-card, .cat-item, .artist-card, .step');
    fadeElements.forEach(el => {
      el.classList.add('fade-up-element');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* MARQUEE */}
      <div className="marquee-bar">
        <div className="marquee-inner">
          Pintura al Óleo <span className="marquee-sep">✦</span>
          Acuarela <span className="marquee-sep">✦</span>
          Arte Abstracto <span className="marquee-sep">✦</span>
          Retratos <span className="marquee-sep">✦</span>
          Paisajes <span className="marquee-sep">✦</span>
          Arte Contemporáneo <span className="marquee-sep">✦</span>
          Ediciones Limitadas <span className="marquee-sep">✦</span>
          Enmarcado Premium <span className="marquee-sep">✦</span>
          Envíos Seguros <span className="marquee-sep">✦</span>
          Arte Original Certificado <span className="marquee-sep">✦</span>
          Pintura al Óleo <span className="marquee-sep">✦</span>
          Acuarela <span className="marquee-sep">✦</span>
          Arte Abstracto <span className="marquee-sep">✦</span>
          Retratos <span className="marquee-sep">✦</span>
          Paisajes <span className="marquee-sep">✦</span>
          Arte Contemporáneo <span className="marquee-sep">✦</span>
          Ediciones Limitadas <span className="marquee-sep">✦</span>
          Enmarcado Premium <span className="marquee-sep">✦</span>
        </div>
      </div>

      <FeaturedGallery />
      <Categories />
      <Process />
      <Artists />
      <Testimonial />
      <ContactSection />
      <Newsletter />

      <Footer />
      <FloatingContact />
    </>
  );
}
