import './Footer.css';

export default function Footer() {
  const WHATSAPP_NUMBER = "573000000000";
  const INSTAGRAM_USER = "pinedart_oficial";
  const EMAIL = "contacto@pinedart.com";

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo">PINED<span>ART</span></a>
          <p className="footer-tagline">Conectando artistas originales con amantes del arte. Cada obra, una historia única que merece un hogar especial.</p>
          <div className="footer-social">
            <a href={`https://instagram.com/${INSTAGRAM_USER}`} target="_blank" className="social-link" title="Instagram">ig</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="social-link" title="WhatsApp">wa</a>
            <a href={`mailto:${EMAIL}`} className="social-link" title="Correo">em</a>
            <a href="#" className="social-link" title="Pinterest">pt</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Galería</h4>
          <ul>
            <li><a href="#galeria">Obras destacadas</a></li>
            <li><a href="#galeria">Nuevas llegadas</a></li>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="#galeria">Ediciones limitadas</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Artistas</h4>
          <ul>
            <li><a href="#artistas">Conoce los artistas</a></li>
            <li><a href="#artistas">Aplica como artista</a></li>
            <li><a href="#proceso">Programa residencia</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto Directo</h4>
          <ul>
            <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`}>WhatsApp Business</a></li>
            <li><a href={`mailto:${EMAIL}`}>Enviar Correo</a></li>
            <li><a href="#">Llamada directa</a></li>
            <li><a href="#">Bogotá, Colombia</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 PINEDART. Todos los derechos reservados.</span>
        <span>Política de privacidad · Términos de uso</span>
      </div>
    </footer>
  );
}
