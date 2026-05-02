import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Arte Original · Pinturas Únicas</div>
        <h1 className="hero-title">
          El arte que <em>transforma</em><br />tus espacios
        </h1>
        <p className="hero-desc">
          Descubre una curaduría excepcional de pinturas originales y obras de arte únicas. Cada pieza, una historia. Cada trazo, una emoción que perdura.
        </p>
        <div className="hero-actions">
          <a href="#galeria" className="btn-primary"><span>Explorar Galería</span></a>
          <a href="#artistas" className="btn-ghost">Nuestros artistas</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">340+</div>
            <div className="stat-label">Obras disponibles</div>
          </div>
          <div className="stat">
            <div className="stat-number">48</div>
            <div className="stat-label">Artistas activos</div>
          </div>
          <div className="stat">
            <div className="stat-number">12</div>
            <div className="stat-label">Años de trayectoria</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img 
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800" 
          alt="Galería de arte abstracto" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '4px' }} 
        />

        <div className="hero-badge" style={{fontStyle: 'italic', letterSpacing: '0.1em'}}>
          Arte<br/>Original<br/>·<br/>Auténtico<br/>·<br/>Único
        </div>
      </div>
    </section>
  );
}
