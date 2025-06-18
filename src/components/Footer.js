import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Redes Sociais */}
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Localização */}
        <div className="footer-section">
          <h4>Localização</h4>
          <p>
            <a
              href="https://maps.google.com?q=ETEC+Centro+Paula+Souza"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt /> Ver no Google Maps
            </a>
          </p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="newsletter-form"
          >
            <input type="email" placeholder="Seu e-mail" required />
            <button type="submit">Inscrever</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Meu Site - Todos os direitos reservados.
      </div>
    </footer>
  );
}
