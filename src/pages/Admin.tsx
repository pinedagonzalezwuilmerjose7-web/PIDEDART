import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import './Admin.css';

interface Artwork {
  id: string;
  title: string;
  price: number;
  dimensions: string;
  image_url: string;
  is_featured: boolean;
}

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Dashboard state
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchArtworks();
    }
  }, [session]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setErrorMsg(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchArtworks = async () => {
    setLoadingData(true);
    const { data, error } = await supabase
      .from('artworks')
      .select('id, title, price, dimensions, image_url, is_featured')
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setArtworks(data);
    }
    setLoadingData(false);
  };

  const deleteArtwork = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar esta obra?')) return;
    
    const { error } = await supabase.from('artworks').delete().eq('id', id);
    if (!error) {
      setArtworks(artworks.filter(a => a.id !== id));
    } else {
      alert('Error eliminando la obra: ' + error.message);
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('artworks')
      .update({ is_featured: !currentStatus })
      .eq('id', id);
    
    if (!error) {
      setArtworks(artworks.map(a => a.id === id ? { ...a, is_featured: !currentStatus } : a));
    }
  };

  if (!session) {
    return (
      <div className="admin-login-container">
        <div className="login-box">
          <h2 className="admin-title">PINED<span>ART</span> Admin</h2>
          <p className="admin-subtitle">Inicia sesión para gestionar tu galería</p>
          
          {errorMsg && <div className="error-message">{errorMsg}</div>}
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" disabled={loading} className="btn-login">
              {loading ? 'Entrando...' : 'Ingresar'}
            </button>
          </form>
          <div className="back-to-site">
            <a href="/">← Volver al sitio web</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-brand">PINED<span>ART</span> Panel</div>
        <div className="admin-user">
          <span>{session.user.email}</span>
          <button onClick={handleLogout} className="btn-logout">Cerrar sesión</button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-main-header">
          <h2>Inventario de Obras</h2>
          <button className="btn-add" onClick={() => alert("Función para agregar obra en desarrollo")}>
            + Agregar Obra
          </button>
        </div>

        {loadingData ? (
          <p>Cargando obras...</p>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Dimensiones</th>
                  <th>Precio (COP)</th>
                  <th>Destacado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {artworks.map(art => (
                  <tr key={art.id}>
                    <td>
                      <img src={art.image_url} alt={art.title} className="admin-art-thumb" />
                    </td>
                    <td className="art-title-cell">{art.title}</td>
                    <td>{art.dimensions}</td>
                    <td>${art.price.toLocaleString()}</td>
                    <td>
                      <button 
                        onClick={() => toggleFeatured(art.id, art.is_featured)}
                        className={`toggle-btn ${art.is_featured ? 'active' : ''}`}
                      >
                        {art.is_featured ? 'Sí' : 'No'}
                      </button>
                    </td>
                    <td>
                      <button className="action-btn edit" onClick={() => alert("Función de edición en desarrollo")}>Editar</button>
                      <button className="action-btn delete" onClick={() => deleteArtwork(art.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
                {artworks.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '2rem' }}>No hay obras registradas.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
