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
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" alt="Carlos M. Pineda" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div className="artist-name">Carlos M. Pineda</div>
          <div className="artist-specialty">Óleo · Paisajismo</div>
          <p className="artist-bio">Maestro del óleo con más de 20 años capturando la luz y el alma de los paisajes latinoamericanos. Sus obras evocan memorias que aún no hemos vivido.</p>
          <div className="artist-works">28 obras disponibles</div>
        </div>

        <div className="artist-card">
          <div className="artist-avatar">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="Lucía Vera Castro" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div className="artist-name">Lucía Vera Castro</div>
          <div className="artist-specialty">Acuarela · Botanía</div>
          <p className="artist-bio">Sus acuarelas botánicas son poemas visuales. Estudió en Florencia y regresó a Colombia para celebrar la flora tropical con su pincel inconfundible.</p>
          <div className="artist-works">34 obras disponibles</div>
        </div>

        <div className="artist-card">
          <div className="artist-avatar">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Andrés Ríos" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
