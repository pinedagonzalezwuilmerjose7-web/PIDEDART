import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className={isMenuOpen ? 'menu-open' : ''}>
      <a href="#" className="nav-logo">PINED<span>ART</span></a>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galería</a></li>
        <li><a href="#categorias" onClick={() => setIsMenuOpen(false)}>Categorías</a></li>
        <li><a href="#artistas" onClick={() => setIsMenuOpen(false)}>Artistas</a></li>
        <li><a href="#proceso" onClick={() => setIsMenuOpen(false)}>Proceso</a></li>
        <li><a href="#contacto" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Adquirir</a></li>
      </ul>
    </nav>
  );
}
