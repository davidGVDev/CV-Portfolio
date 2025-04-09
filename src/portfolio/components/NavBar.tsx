import { Link } from "react-router-dom";
import { useState } from "react";
import "../stylesPortfolio.css";

import { TextAlignJustify } from "@phosphor-icons/react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/portfolio/about">Acerca de mi</Link>
        <Link to="/portfolio/skills">Habilidades</Link>
        <Link to="/portfolio/experience">Experiencia</Link>
        <Link to="/portfolio/courses">Cursos</Link>
        <Link to="/portfolio/proyects">Proyectos</Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <TextAlignJustify size={32} />
      </button>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/portfolio/about" onClick={toggleMenu}>
          Acerca de mi
        </Link>
        <Link to="/portfolio/skills" onClick={toggleMenu}>
          Habilidades
        </Link>
        <Link to="/portfolio/experience" onClick={toggleMenu}>
          Experiencia
        </Link>
        <Link to="/portfolio/courses" onClick={toggleMenu}>
          Cursos
        </Link>
        <Link to="/portfolio/proyects" onClick={toggleMenu}>
          Proyectos
        </Link>
      </div>
    </div>
  );
};
