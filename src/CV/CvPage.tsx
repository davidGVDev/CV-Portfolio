import "./styles.css";
import {
  AboutComponent,
  EducationComponent,
  ExperienceComponent,
  SoftSkillsComponent,
  TechnicalSkillsComponente,
  CoursesComponent,
} from "./components";

export const CvPage = () => {
  return (
    <>
      <div>
        <AboutComponent />
        <EducationComponent />
        <ExperienceComponent />
        <TechnicalSkillsComponente />
        <SoftSkillsComponent />
        <CoursesComponent />
      </div>
    </>
  );
};
