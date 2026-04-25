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
        {/* Hero illustration: abstract painterly scene */}
        <svg viewBox="0 0 680 860" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%', display: 'block'}}>
          <defs>
            <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2C1810"/>
              <stop offset="100%" stopColor="#1A1008"/>
            </linearGradient>
            <linearGradient id="canvasGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5E8D0"/>
              <stop offset="100%" stopColor="#E8D4B0"/>
            </linearGradient>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B8935A"/>
              <stop offset="100%" stopColor="#D4B07A"/>
            </linearGradient>
          </defs>
          <rect width="680" height="860" fill="url(#bgGrad)"/>
          <line x1="0" y1="430" x2="680" y2="430" stroke="#3A2015" strokeWidth="0.5"/>
          <line x1="340" y1="0" x2="340" y2="860" stroke="#3A2015" strokeWidth="0.5" opacity="0.4"/>
          <rect x="110" y="100" width="460" height="580" rx="2" fill="#0D0805" opacity="0.6"/>
          <rect x="100" y="90" width="460" height="580" rx="2" fill="none" stroke="url(#goldGrad)" strokeWidth="8"/>
          <rect x="108" y="98" width="444" height="564" rx="1" fill="none" stroke="#6B4A20" strokeWidth="2"/>
          <rect x="114" y="104" width="432" height="552" fill="url(#canvasGrad)"/>
          <rect x="114" y="104" width="432" height="320" fill="#1C2845"/>
          <rect x="114" y="240" width="432" height="184" fill="#0E1A30"/>
          <ellipse cx="250" cy="180" rx="140" ry="60" fill="#2E4070" opacity="0.7"/>
          <ellipse cx="400" cy="150" rx="100" ry="45" fill="#3A4E80" opacity="0.5"/>
          <ellipse cx="330" cy="220" rx="180" ry="50" fill="#243560" opacity="0.6"/>
          <circle cx="480" cy="150" r="48" fill="#F0DBA0" opacity="0.9"/>
          <circle cx="475" cy="145" r="42" fill="#EDD580" opacity="0.4"/>
          <circle cx="480" cy="150" r="30" fill="#F5E8A0"/>
          <circle cx="160" cy="130" r="2" fill="#E8D48A" opacity="0.8"/>
          <circle cx="200" cy="160" r="1.5" fill="#E8D48A" opacity="0.6"/>
          <circle cx="350" cy="120" r="2.5" fill="#F0E0A0" opacity="0.9"/>
          <circle cx="280" cy="145" r="1" fill="#E8D48A" opacity="0.7"/>
          <circle cx="180" cy="200" r="1.5" fill="#E8D48A" opacity="0.5"/>
          <circle cx="430" cy="115" r="2" fill="#E8D48A" opacity="0.7"/>
          <circle cx="150" cy="250" r="1" fill="#E8D48A" opacity="0.4"/>
          <circle cx="320" cy="175" r="1.5" fill="#F0E0A0" opacity="0.6"/>
          <circle cx="520" cy="200" r="1.5" fill="#E8D48A" opacity="0.5"/>
          <path d="M145,420 C145,400 155,360 155,330 C155,300 150,280 155,260 C160,240 165,230 162,210 C159,190 152,185 155,165 C158,145 168,138 165,120 C165,115 163,112 162,108" fill="none" stroke="#0F1E10" strokeWidth="12" strokeLinecap="round"/>
          <ellipse cx="162" cy="180" rx="22" ry="50" fill="#1A3018" opacity="0.9"/>
          <ellipse cx="158" cy="230" rx="20" ry="45" fill="#243820" opacity="0.8"/>
          <ellipse cx="160" cy="280" rx="24" ry="48" fill="#1C3015" opacity="0.85"/>
          <ellipse cx="162" cy="340" rx="22" ry="50" fill="#1A2E12" opacity="0.9"/>
          <path d="M114,424 Q200,370 330,395 Q430,410 546,380 L546,656 L114,656 Z" fill="#2E4520"/>
          <path d="M114,480 Q200,440 320,455 Q430,465 546,440 L546,656 L114,656 Z" fill="#3A5828"/>
          <path d="M114,540 Q230,510 350,525 Q460,535 546,510 L546,656 L114,656 Z" fill="#4A6A30"/>
          <rect x="114" y="600" width="432" height="56" fill="#3E5A24"/>
          <circle cx="180" cy="590" r="3" fill="#C8A020" opacity="0.8"/>
          <circle cx="210" cy="580" r="2.5" fill="#D4102A" opacity="0.7"/>
          <circle cx="250" cy="595" r="3" fill="#C8A020" opacity="0.6"/>
          <circle cx="290" cy="575" r="2" fill="#D4102A" opacity="0.8"/>
          <circle cx="320" cy="590" r="2.5" fill="#E8C030" opacity="0.7"/>
          <circle cx="360" cy="582" r="3" fill="#F0F0F0" opacity="0.5"/>
          <circle cx="400" cy="592" r="2" fill="#C8A020" opacity="0.8"/>
          <circle cx="440" cy="576" r="2.5" fill="#D4102A" opacity="0.6"/>
          <circle cx="480" cy="588" r="3" fill="#E8C030" opacity="0.7"/>
          <circle cx="510" cy="596" r="2" fill="#C8A020" opacity="0.5"/>
          <path d="M200,300 Q240,280 280,295 Q320,310 360,290 Q400,270 440,285" fill="none" stroke="#3A5080" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
          <path d="M150,340 Q200,320 260,335 Q320,350 380,330 Q440,310 510,325" fill="none" stroke="#2E4070" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
          <rect x="360" y="430" width="8" height="6" rx="1" fill="#F0C020" opacity="0.7"/>
          <rect x="380" y="435" width="6" height="5" rx="1" fill="#F0D040" opacity="0.5"/>
          <rect x="400" y="428" width="7" height="6" rx="1" fill="#F0C020" opacity="0.6"/>
          <rect x="420" y="440" width="5" height="4" rx="1" fill="#F0D040" opacity="0.4"/>
          <line x1="114" y1="310" x2="250" y2="305" stroke="#1C3080" strokeWidth="2.5" opacity="0.3" strokeLinecap="round"/>
          <line x1="300" y1="315" x2="420" y2="308" stroke="#243590" strokeWidth="2" opacity="0.25" strokeLinecap="round"/>
          <path d="M480,198 L460,420 L500,420 Z" fill="#F5E090" opacity="0.06"/>
          <rect x="118" y="108" width="424" height="544" fill="none" stroke="#D4B07A" strokeWidth="0.5" opacity="0.3"/>
          <rect x="114" y="656" width="432" height="38" fill="#E8D4B0"/>
          <text x="330" y="680" fontFamily="Georgia, serif" fontSize="11" fill="#6B4A20" textAnchor="middle" letterSpacing="3" fontStyle="italic">Noche Estrellada · PINEDART Exclusivo</text>
          <ellipse cx="330" cy="0" rx="200" ry="80" fill="#F0C050" opacity="0.07"/>
          <rect x="70" y="670" width="540" height="20" rx="2" fill="#4A3010" opacity="0.6"/>
          <rect x="80" y="688" width="520" height="6" rx="1" fill="#3A2010" opacity="0.5"/>
          <ellipse cx="570" cy="665" rx="18" ry="6" fill="#6B4A20" opacity="0.4"/>
          <ellipse cx="570" cy="645" rx="10" ry="22" fill="#8B6530" opacity="0.35"/>
          <ellipse cx="570" cy="630" rx="14" ry="8" fill="#7A5525" opacity="0.4"/>
          <g transform="rotate(-5, 150, 750)">
            <rect x="92" y="700" width="90" height="110" fill="none" stroke="#8B6530" strokeWidth="4"/>
            <rect x="96" y="704" width="82" height="102" fill="#C8B090" opacity="0.7"/>
            <rect x="98" y="706" width="78" height="98" fill="#B8A080"/>
            <ellipse cx="137" cy="745" rx="20" ry="30" fill="#4A3060" opacity="0.8"/>
            <ellipse cx="137" cy="760" rx="30" ry="15" fill="#2E5020" opacity="0.7"/>
            <circle cx="150" cy="730" r="10" fill="#D4A020" opacity="0.6"/>
          </g>
        </svg>

        <div className="hero-badge" style={{fontStyle: 'italic', letterSpacing: '0.1em'}}>
          Arte<br/>Original<br/>·<br/>Auténtico<br/>·<br/>Único
        </div>
      </div>
    </section>
  );
}
