import { Route, Routes, Navigate } from "react-router-dom";
import {
  AboutComponentP,
  CoursesComponentP,
  EducationComponentP,
  ExperienceComponentP,
  TechnicalSkillsComponentP,
  SoftSkillsComponentP,
  NavBar,
} from "../components";

export const PortfolioRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutComponentP />} />
        <Route path="/courses" element={<CoursesComponentP />} />
        <Route path="/education" element={<EducationComponentP />} />
        <Route path="/experience" element={<ExperienceComponentP />} />
        <Route
          path="/technical-skills"
          element={<TechnicalSkillsComponentP />}
        />
        <Route path="/soft-skills" element={<SoftSkillsComponentP />} />
        <Route path="*" element={<Navigate to="/portfolio/about" />} />
      </Routes>
    </>
  );
};
