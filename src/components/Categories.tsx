import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categorias">
      <div className="section-label">Explorar por estilo</div>
      <h2 className="section-title">Encuentra tu <em>expresión</em></h2>

      <div className="categories-grid">
        <div className="cat-item">
          <div className="cat-bg">
            <img src="https://images.unsplash.com/photo-1578301978693-85fa9c026109?auto=format&fit=crop&q=80&w=400" alt="Óleo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Óleo</span>
            <span className="cat-count">124 obras</span>
          </div>
        </div>

        <div className="cat-item">
          <div className="cat-bg">
            <img src="https://images.unsplash.com/photo-1580136608260-4ebf15fac36b?auto=format&fit=crop&q=80&w=400" alt="Acuarela" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Acuarela</span>
            <span className="cat-count">87 obras</span>
          </div>
        </div>

        <div className="cat-item">
          <div className="cat-bg">
            <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" alt="Abstracto" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Abstracto</span>
            <span className="cat-count">96 obras</span>
          </div>
        </div>

        <div className="cat-item">
          <div className="cat-bg">
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400" alt="Paisajes" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Paisajes</span>
            <span className="cat-count">145 obras</span>
          </div>
        </div>

      </div>
    </section>
  );
}
