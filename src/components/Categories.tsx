import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categorias">
      <div className="section-label">Explorar por estilo</div>
      <h2 className="section-title">Encuentra tu <em>expresión</em></h2>

      <div className="categories-grid">
        <div className="cat-item">
          <div className="cat-bg">
            <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
              <rect width="240" height="320" fill="#2A1808"/>
              <ellipse cx="120" cy="120" rx="80" ry="70" fill="#8B4513" opacity="0.7"/>
              <ellipse cx="120" cy="100" rx="55" ry="45" fill="#A0520C" opacity="0.5"/>
              <ellipse cx="120" cy="200" rx="100" ry="50" fill="#3A2010" opacity="0.8"/>
              <path d="M60,140 Q120,100 180,140 Q200,200 180,260 Q120,280 60,260 Q40,200 60,140" fill="#5A3018" opacity="0.6"/>
              <circle cx="160" cy="80" r="30" fill="#D4A020" opacity="0.4"/>
              <path d="M30,280 L80,200 L120,240 L160,190 L210,280" fill="#2E1508" opacity="0.9"/>
            </svg>
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Óleo</span>
            <span className="cat-count">124 obras</span>
          </div>
        </div>

        <div className="cat-item">
          <div className="cat-bg">
            <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
              <rect width="240" height="320" fill="#E0EEF5"/>
              <ellipse cx="120" cy="100" rx="80" ry="60" fill="#90C0E0" opacity="0.4"/>
              <ellipse cx="80" cy="160" rx="60" ry="50" fill="#A0C8E8" opacity="0.35"/>
              <ellipse cx="170" cy="200" rx="70" ry="55" fill="#80B0D8" opacity="0.3"/>
              <path d="M20,280 Q80,200 140,240 Q180,260 220,200 L240,280" fill="#60A0C0" opacity="0.4"/>
              <circle cx="160" cy="70" r="35" fill="#F0D890" opacity="0.6"/>
              <circle cx="160" cy="70" r="20" fill="#F8E8A0" opacity="0.7"/>
              <path d="M0,240 Q60,200 120,220 Q180,240 240,210 L240,320 L0,320 Z" fill="#4A80A0" opacity="0.3"/>
            </svg>
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Acuarela</span>
            <span className="cat-count">87 obras</span>
          </div>
        </div>

        <div className="cat-item">
          <div className="cat-bg">
            <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
              <rect width="240" height="320" fill="#F0E8E0"/>
              <circle cx="120" cy="160" r="80" fill="#C8604A" opacity="0.3"/>
              <rect x="60" y="80" width="120" height="160" rx="4" fill="#E87050" opacity="0.25" transform="rotate(15 120 160)"/>
              <rect x="60" y="80" width="120" height="160" rx="4" fill="#4050C0" opacity="0.2" transform="rotate(-10 120 160)"/>
              <rect x="80" y="100" width="80" height="120" rx="4" fill="#20A060" opacity="0.3" transform="rotate(5 120 160)"/>
              <circle cx="90" cy="100" r="20" fill="#E83020" opacity="0.5"/>
              <circle cx="165" cy="220" r="25" fill="#2040E0" opacity="0.4"/>
              <circle cx="55" cy="230" r="18" fill="#F0C020" opacity="0.6"/>
              <circle cx="195" cy="90" r="15" fill="#20C060" opacity="0.5"/>
            </svg>
          </div>
          <div className="cat-overlay"></div>
          <div className="cat-label">
            <span className="cat-name">Abstracto</span>
            <span className="cat-count">96 obras</span>
          </div>
        </div>

        <div className="cat-item">
          <div className="cat-bg">
            <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
              <rect width="240" height="320" fill="#E0EAD8"/>
              <rect width="240" height="180" fill="#4A80B0"/>
              <ellipse cx="120" cy="90" rx="160" ry="60" fill="#60A0C8" opacity="0.6"/>
              <ellipse cx="60" cy="60" rx="80" ry="30" fill="#F0F4F8" opacity="0.7"/>
              <ellipse cx="190" cy="75" rx="70" ry="28" fill="#F0F4F8" opacity="0.6"/>
              <rect y="180" width="240" height="140" fill="#3A6020"/>
              <path d="M0,180 Q60,150 120,170 Q180,190 240,160 L240,220 Q180,250 120,235 Q60,220 0,250 Z" fill="#4A7028"/>
              <path d="M0,240 Q80,210 160,230 Q200,240 240,220 L240,320 L0,320 Z" fill="#3A5818"/>
              <circle cx="180" cy="50" r="28" fill="#F8E860" opacity="0.9"/>
              <circle cx="180" cy="50" r="18" fill="#FFEE80"/>
              <line x1="100" y1="280" x2="115" y2="178" stroke="#1E3008" strokeWidth="3"/>
              <ellipse cx="105" cy="185" rx="25" ry="35" fill="#2E4810" transform="rotate(-15 105 185)"/>
              <line x1="155" y1="290" x2="148" y2="180" stroke="#1E3008" strokeWidth="3"/>
              <ellipse cx="152" cy="185" rx="22" ry="32" fill="#3A5A18" transform="rotate(10 152 185)"/>
            </svg>
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
