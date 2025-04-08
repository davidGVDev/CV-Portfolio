import { Route, Routes, Navigate } from "react-router-dom";
import {
  AboutComponentP,
  CoursesComponentP,
  ExperienceComponentP,
  NavBar,
  SkillsComponentP,
  ProyectsComponentP,
} from "../components";

export const PortfolioRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutComponentP />} />
        <Route path="/skills" element={<SkillsComponentP />} />
        <Route path="/experience" element={<ExperienceComponentP />} />
        <Route path="/courses" element={<CoursesComponentP />} />
        <Route path="/proyects" element={<ProyectsComponentP />} />
        <Route path="*" element={<Navigate to="/portfolio/about" />} />
      </Routes>
    </>
  );
};
