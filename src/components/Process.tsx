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
          <svg viewBox="0 0 500 580" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="580" fill="#221408" rx="4"/>
            <rect x="30" y="30" width="440" height="520" fill="none" stroke="#B8935A" strokeWidth="2" rx="2"/>
            <rect x="38" y="38" width="424" height="504" fill="none" stroke="#6B4A20" strokeWidth="1" rx="1"/>
            <rect x="44" y="44" width="412" height="492" fill="#F5EDD8"/>
            <rect x="44" y="44" width="412" height="280" fill="#1E4A80"/>
            <path d="M44,220 Q130,190 220,210 Q310,230 400,200 Q430,195 456,205 L456,324 L44,324 Z" fill="#2A5E98"/>
            <path d="M44,260 Q120,240 210,255 Q290,268 380,248 Q420,240 456,252 L456,324 L44,324 Z" fill="#1E5288"/>
            <path d="M44,290 Q150,272 240,285 Q330,298 456,278 L456,324 L44,324 Z" fill="#164475"/>
            <rect x="44" y="44" width="412" height="200" fill="#4090C0"/>
            <ellipse cx="250" cy="100" rx="200" ry="70" fill="#50A0D0" opacity="0.5"/>
            <ellipse cx="140" cy="80" rx="70" ry="28" fill="#F0F6FC" opacity="0.85"/>
            <ellipse cx="100" cy="88" rx="50" ry="22" fill="#F0F6FC" opacity="0.75"/>
            <ellipse cx="180" cy="85" rx="50" ry="22" fill="#F0F6FC" opacity="0.7"/>
            <ellipse cx="370" cy="70" rx="60" ry="24" fill="#F0F6FC" opacity="0.8"/>
            <ellipse cx="340" cy="77" rx="45" ry="20" fill="#F0F6FC" opacity="0.75"/>
            <circle cx="400" cy="85" r="38" fill="#F8D840" opacity="0.9"/>
            <circle cx="400" cy="85" r="26" fill="#FFEA60"/>
            <path d="M44,310 Q150,290 250,305 Q360,318 456,300 L456,370 L44,370 Z" fill="#E0C878"/>
            <path d="M44,345 Q140,325 240,340 Q350,355 456,335 L456,400 L44,400 Z" fill="#D4B860"/>
            <rect x="44" y="380" width="412" height="156" fill="#2E5A18"/>
            <path d="M44,380 Q150,355 260,372 Q370,390 456,368 L456,420 L44,420 Z" fill="#3A6A20"/>
            <line x1="120" y1="536" x2="132" y2="355" stroke="#1A0E06" strokeWidth="6" strokeLinecap="round"/>
            <ellipse cx="118" cy="362" rx="35" ry="14" fill="#2A4A0A" transform="rotate(-25 118 362)"/>
            <ellipse cx="140" cy="352" rx="34" ry="13" fill="#3A5A12" transform="rotate(20 140 352)"/>
            <ellipse cx="108" cy="345" rx="30" ry="12" fill="#2A4A0A" transform="rotate(-40 108 345)"/>
            <ellipse cx="148" cy="338" rx="28" ry="11" fill="#344E0E" transform="rotate(35 148 338)"/>
            <circle cx="128" cy="368" r="7" fill="#A06020"/>
            <circle cx="120" cy="374" r="7" fill="#8A4A10"/>
            <line x1="380" y1="536" x2="368" y2="348" stroke="#1A0E06" strokeWidth="5" strokeLinecap="round"/>
            <ellipse cx="382" cy="354" rx="30" ry="12" fill="#2A4A0A" transform="rotate(22 382 354)"/>
            <ellipse cx="362" cy="344" rx="28" ry="11" fill="#3A5A12" transform="rotate(-20 362 344)"/>
            <ellipse cx="390" cy="338" rx="26" ry="10" fill="#2A4A0A" transform="rotate(38 390 338)"/>
            <path d="M230,285 L270,285 L265,295 L235,295 Z" fill="#8B2020"/>
            <line x1="250" y1="260" x2="250" y2="285" stroke="#3A2010" strokeWidth="2"/>
            <path d="M250,262 L270,272 L250,280 Z" fill="#F0F0E0" opacity="0.9"/>
            <path d="M160,130 Q168,122 176,130" fill="none" stroke="#0A1825" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M200,115 Q206,109 212,115" fill="none" stroke="#0A1825" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M280,138 Q287,131 294,138" fill="none" stroke="#0A1825" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="180" cy="260" r="2.5" fill="#90C8E8" opacity="0.7"/>
            <circle cx="290" cy="248" r="2" fill="#90C8E8" opacity="0.6"/>
            <circle cx="370" cy="265" r="2.5" fill="#90C8E8" opacity="0.7"/>
            <circle cx="240" cy="310" r="2" fill="#A0D0F0" opacity="0.5"/>
            <rect x="44" y="492" width="412" height="44" fill="#EDE0C0"/>
            <text x="250" y="519" fontFamily="Georgia,serif" fontSize="12" fill="#6B4A20" textAnchor="middle" letterSpacing="2" fontStyle="italic">Caribe · PINEDART · Edición Original</text>
            <path d="M44,44 L140,44 L80,60 Z" fill="#F0C870" opacity="0.15"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
