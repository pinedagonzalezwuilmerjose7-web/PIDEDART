import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Aquí podrías guardar el email en Supabase en el futuro
    console.log('Suscrito:', email);
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="newsletter">
      <div className="section-label">Únete a nuestra comunidad</div>
      <h2 className="section-title">
        {status === 'success' ? '¡Gracias por unirte!' : 'Recibe arte en tu bandeja'}
      </h2>
      <p className="newsletter-desc">
        {status === 'success' 
          ? 'Te hemos enviado un correo de bienvenida. Prepárate para descubrir piezas únicas.' 
          : 'Nuevas obras cada semana, artistas emergentes y eventos exclusivos.'}
      </p>
      
      {status === 'idle' && (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="tu@correo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Suscribirse</button>
        </form>
      )}
    </section>
  );
}
