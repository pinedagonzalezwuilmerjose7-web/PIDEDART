import './Artists.css';

export default function Artists() {
  return (
    <section className="artists" id="artistas">
      <div className="artists-header">
        <div>
          <div className="section-label">Creadores</div>
          <h2 className="section-title">Los <em>artistas</em> detrás del arte</h2>
        </div>
        <a href="#" className="btn-ghost">Ver todos los artistas</a>
      </div>

      <div className="artists-grid">
        <div className="artist-card">
          <div className="artist-avatar">
            <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
              <rect width="90" height="90" fill="#E8D0B8"/>
              <ellipse cx="45" cy="40" rx="22" ry="26" fill="#C8906A"/>
              <ellipse cx="45" cy="28" rx="23" ry="14" fill="#3A2010"/>
              <path d="M20,90 Q30,60 45,62 Q60,60 70,90" fill="#2A4080"/>
              <ellipse cx="45" cy="57" rx="12" ry="8" fill="#C8906A"/>
            </svg>
          </div>
          <div className="artist-name">Carlos M. Pineda</div>
          <div className="artist-specialty">Óleo · Paisajismo</div>
          <p className="artist-bio">Maestro del óleo con más de 20 años capturando la luz y el alma de los paisajes latinoamericanos. Sus obras evocan memorias que aún no hemos vivido.</p>
          <div className="artist-works">28 obras disponibles</div>
        </div>

        <div className="artist-card">
          <div className="artist-avatar">
            <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
              <rect width="90" height="90" fill="#D8E8D0"/>
              <ellipse cx="45" cy="40" rx="22" ry="26" fill="#B87865"/>
              <ellipse cx="45" cy="25" rx="24" ry="16" fill="#1A1010"/>
              <path d="M22,90 Q32,58 45,60 Q58,58 68,90" fill="#8040A0"/>
              <ellipse cx="45" cy="57" rx="12" ry="8" fill="#B87865"/>
            </svg>
          </div>
          <div className="artist-name">Lucía Vera Castro</div>
          <div className="artist-specialty">Acuarela · Botanía</div>
          <p className="artist-bio">Sus acuarelas botánicas son poemas visuales. Estudió en Florencia y regresó a Colombia para celebrar la flora tropical con su pincel inconfundible.</p>
          <div className="artist-works">34 obras disponibles</div>
        </div>

        <div className="artist-card">
          <div className="artist-avatar">
            <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
              <rect width="90" height="90" fill="#D8D0E8"/>
              <ellipse cx="45" cy="40" rx="22" ry="26" fill="#A07858"/>
              <ellipse cx="45" cy="27" rx="22" ry="15" fill="#2A2010"/>
              <path d="M22,90 Q32,60 45,62 Q58,60 68,90" fill="#204880"/>
              <ellipse cx="45" cy="57" rx="12" ry="8" fill="#A07858"/>
            </svg>
          </div>
          <div className="artist-name">Andrés Ríos</div>
          <div className="artist-specialty">Acrílico · Urbanismo</div>
          <p className="artist-bio">El caos y la belleza de la ciudad coexisten en sus lienzos. Bogotá, Medellín, Ciudad de México — sus noches urbanas capturan la energía que no descansa.</p>
          <div className="artist-works">19 obras disponibles</div>
        </div>
      </div>
    </section>
  );
}
