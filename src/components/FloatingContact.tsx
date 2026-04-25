import './FloatingContact.css';

export default function FloatingContact() {
  const WHATSAPP_NUMBER = "573000000000"; // Cambia por tu número real
  const message = "Hola PINEDART, me gustaría recibir más información sobre las obras disponibles.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="floating-contact">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" title="Escríbenos por WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.39l-.715 2.614 2.673-.701c.828.47 1.787.744 2.812.744 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.332 7.957c-.145.411-.734.755-1.012.798-.278.044-.616.079-1.015-.049-.24-.078-.544-.194-.919-.349-1.597-.661-2.637-2.288-2.717-2.394-.08-.106-.649-.863-.649-1.647 0-.783.411-1.169.556-1.339.145-.17.314-.212.42-.212s.212.001.303.006c.099.004.23-.037.36.276.145.349.494 1.203.537 1.288.043.085.071.184.014.298-.057.113-.085.184-.17.283-.085.099-.177.22-.255.297-.092.092-.187.192-.08.375.106.184.471.776.811 1.078.438.39.81.51.983.596.173.085.273.071.375-.043.102-.113.438-.51.555-.684.118-.174.237-.145.396-.085.159.059 1.008.475 1.182.56.174.085.29.127.332.2.043.071.043.411-.102.822z"/>
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.105c-5.021 0-9.105-4.084-9.105-9.105s4.084-9.105 9.105-9.105 9.105 4.084 9.105 9.105-4.084 9.105-9.105 9.105z"/>
        </svg>
      </a>
    </div>
  );
}
