import './Navbar.css';

export default function Navbar() {
  return (
    <nav id="navbar">
      <a href="#" className="nav-logo">PINED<span>ART</span></a>
      <ul className="nav-links">
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#categorias">Categorías</a></li>
        <li><a href="#artistas">Artistas</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#contacto" className="nav-cta">Adquirir</a></li>
      </ul>
    </nav>
  );
}
