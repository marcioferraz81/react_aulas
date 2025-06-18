import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
import { FaBox, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Meu Site</h1>

      {/* Botão hamburguer */}
      <div className="menu-icon" onClick={alternarMenu}>
        {menuAberto ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links de navegação */}
      <ul className={`nav-links ${menuAberto ? "ativo" : ""}`}>
        <li>
          <Link to="/" onClick={fecharMenu}>
            <FaHome /> Início
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={fecharMenu}>
            <FaInfoCircle /> Sobre
          </Link>
        </li>
        <li>
          <Link to="/produtos" onClick={fecharMenu}>
            <FaBox /> Produtos
          </Link>
        </li>
        <li>
          <Link to="/carrinho" onClick={fecharMenu}>
            <FaShoppingCart /> Carrinho
          </Link>
        </li>
        <li>
          <Link to="/cep">
            <FaInfoCircle /> CEP
          </Link>
        </li>
        <li>
          <Link to="/paises">
            <FaInfoCircle /> Países
          </Link>
        </li>
        <li>
          <Link to="/consulta">
            <FaInfoCircle /> Consulta DB
          </Link>
        </li>
      </ul>
    </nav>
  );
}
