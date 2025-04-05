import "./stylesCv.css";
import {
  AboutComponent,
  EducationComponent,
  ExperienceComponent,
  SoftSkillsComponent,
  TechnicalSkillsComponente,
} from "./components";
import { data } from "../data";
import {
  About,
  Education,
  Experience,
  TechnicalSkill,
  SoftSkill,
} from "../interfaces";

interface Data {
  about: About;
  education: Education;
  experience: Experience[];
  technicalSkills: TechnicalSkill[];
  softSkills: SoftSkill[];
}

export const CvPage = () => {
  const {
    about,
    education,
    experience,
    technicalSkills,
    softSkills
  }: Data = data;
  return (
    <div className="app-container">
      <div className="cv-page">
        <AboutComponent about={about} />
        <EducationComponent education={education} />
        <ExperienceComponent experience={experience} />
        <TechnicalSkillsComponente technicalSkills={technicalSkills} />
        <SoftSkillsComponent softSkills={softSkills} />
      </div>
    </div>
  );
};
