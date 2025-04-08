import { Link } from "react-router-dom";
import "../stylesPortfolio.css";
export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/portfolio/about">Acerca de mi</Link>
        <Link to="/portfolio/skills">Habilidades</Link>
        <Link to="/portfolio/experience">Experiencia</Link>
        <Link to="/portfolio/courses">Cursos</Link>
        <Link to="/portfolio/proyects">Proyectos</Link>
      </div>
    </div>
  );
};
