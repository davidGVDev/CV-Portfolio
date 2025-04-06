import { Link } from "react-router-dom";
import "../stylesPortfolio.css";
export const NavBar = () => {
  return (
    <div className="navbar p-10">
      <div className="navbar-links">
        <Link to="/portfolio/about">Acerca de mi</Link>
        <Link to="/portfolio/courses">Cursos</Link>
        <Link to="/portfolio/education">Educación</Link>
        <Link to="/portfolio/experience">Experiencia</Link>
        <Link to="/portfolio/technical-skills">Habilidades técnicas</Link>
        <Link to="/portfolio/soft-skills">Habilidades blandas</Link>
      </div>
    </div>
  );
};
