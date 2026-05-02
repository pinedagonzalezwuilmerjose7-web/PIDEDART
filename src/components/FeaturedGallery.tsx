import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import './FeaturedGallery.css';

interface Artwork {
  id: string;
  title: string;
  price: number;
  dimensions: string;
  image_url: string;
  artists: { name: string };
  categories: { name: string };
}

export default function FeaturedGallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  // CONFIGURA TU NÚMERO DE WHATSAPP AQUÍ (sin el +)
  const WHATSAPP_NUMBER = "573234971067"; 

  useEffect(() => {
    async function fetchArtworks() {
      const { data, error } = await supabase
        .from('artworks')
        .select(`
          id,
          title,
          price,
          dimensions,
          image_url,
          artists ( name ),
          categories ( name )
        `)
        .eq('is_featured', true);

      if (error) {
        console.error('Error cargando obras:', error);
      } else {
        setArtworks((data as any) || []);
      }
      setLoading(false);
    }

    fetchArtworks();
  }, []);

  const handleAcquire = (art: Artwork) => {
    const message = `Hola PINEDART, me interesa adquirir la obra "${art.title}" de ${art.artists?.name}. Precio: COP $${art.price.toLocaleString()}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) return <section className="featured"><p>Cargando galería premium...</p></section>;

  return (
    <section className="featured" id="galeria">
      <div className="featured-header">
        <div>
          <div className="section-label">Obras Destacadas</div>
          <h2 className="section-title">Piezas que <em>inspiran</em></h2>
        </div>
        <a href="#galeria" className="btn-ghost">Ver toda la galería</a>
      </div>

      <div className="featured-grid">
        {artworks.map((art, index) => (
          <div key={art.id} className={`art-card ${index === 0 ? 'card-large' : ''}`}>
            <div className="art-img">
              {art.image_url ? (
                <img src={art.image_url} alt={art.title} />
              ) : (
                <div className="placeholder-art" style={{ background: 'var(--cream-dark)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>IMAGEN NO DISPONIBLE</span>
                </div>
              )}
            </div>
            <div className="art-overlay">
              <div className="art-overlay-cat">{art.categories?.name}</div>
              <div className="art-overlay-title">{art.title}</div>
              <div className="art-overlay-artist">{art.artists?.name}</div>
              <div className="art-overlay-price">COP ${art.price.toLocaleString()}</div>
              <button onClick={() => handleAcquire(art)} className="btn-art" style={{ background: 'transparent', cursor: 'crosshair' }}>
                Adquirir obra
              </button>
            </div>
            <div className="card-info">
              <div className="card-cat">{art.categories?.name} · {art.dimensions}</div>
              <div className="card-title">{art.title}</div>
              <div className="card-artist">{art.artists?.name}</div>
              <div className="card-price">COP ${art.price.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
