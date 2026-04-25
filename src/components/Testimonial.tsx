import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial">
      <span className="quote-mark">"</span>
      <blockquote className="quote-text">
        Adquirir en PINEDART fue transformador. No solo compré una pintura, descubrí a un artista, una historia, y un pedazo de alma que ahora vive en mi hogar.
      </blockquote>
      <div className="quote-author">— Valentina Moreno · Coleccionista · Bogotá, Colombia</div>
      <div className="quote-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}
