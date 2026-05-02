import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact" id="contacto">
      <div className="section-label">Contacto</div>
      <h2 className="section-title">Estamos para <em>ayudarte</em></h2>
      
      <div className="contact-container">
        <div className="contact-form-side">
          <p className="contact-intro">¿Tienes alguna duda sobre una obra o artista? Déjanos un mensaje y te asesoraremos personalmente.</p>
          
          <form className="contact-form">
            <div className="form-group">
              <label>Nombre completo</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="tu@correo.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea rows={5} placeholder="¿En qué podemos ayudarte?" required></textarea>
            </div>
            <button type="submit" className="btn-primary"><span>Enviar mensaje</span></button>
          </form>
        </div>

        <div className="contact-map-side">
          <div className="map-wrapper">
            {/* Mapa de Google Maps (Zona artística Bogotá) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.402447999999!2d-74.056!3d4.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a9c2a1!2zQm9nb3TDoSwgQ29sb21iaWE!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy">
            </iframe>
          </div>
          <div className="contact-info-boxes">
            <div className="info-box">
              <h4>Visítanos</h4>
              <p>Calle de las Artes 123, Bogotá, Colombia</p>
            </div>
            <div className="info-box">
              <h4>Horarios</h4>
              <p>Lun - Sáb: 10:00 AM - 7:00 PM</p>
            </div>
            <div className="info-box" style={{ gridColumn: '1 / -1' }}>
              <h4>Redes Sociales</h4>
              <p style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a href="https://instagram.com/pinedart_oficial" target="_blank" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}>Instagram</a>
                <a href="https://facebook.com/pinedart" target="_blank" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}>Facebook</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
