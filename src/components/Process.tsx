import './Process.css';

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="section-label">Cómo funciona</div>
      <h2 className="section-title">Tu obra, en <em>cuatro pasos</em></h2>

      <div className="process-grid">
        <div className="process-steps">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-content">
              <h3>Explora y descubre</h3>
              <p>Navega nuestra galería curada de pinturas originales. Filtra por estilo, técnica, precio o artista para encontrar la pieza que resuene contigo.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-content">
              <h3>Visualiza en tu espacio</h3>
              <p>Usa nuestra herramienta AR para ver cómo lucirá la obra en tus paredes antes de comprar. Sin compromiso, solo inspiración.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-content">
              <h3>Adquiere con confianza</h3>
              <p>Pago seguro, certificado de autenticidad digital y garantía de devolución de 30 días. Cada obra llega con su historia y proveniencia documentada.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-content">
              <h3>Recibe y atesora</h3>
              <p>Embalaje de conservación museística, entrega asegurada a cualquier punto del país. Tu nuevo tesoro llega en perfectas condiciones.</p>
            </div>
          </div>
        </div>

        <div className="process-visual">
          <img 
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600" 
            alt="Proceso artístico" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 
          />
        </div>
      </div>
    </section>
  );
}
