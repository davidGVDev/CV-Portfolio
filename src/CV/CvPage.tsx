import "./styles.css";
import {
  AboutComponent,
  EducationComponent,
  ExperienceComponent,
  SoftSkillsComponent,
  TechnicalSkillsComponente,
  CoursesComponent,
} from "./components";
import { data } from "../data";
import {
  About,
  Education,
  Experience,
  TechnicalSkill,
  SoftSkill,
  Course,
} from "../interfaces";

interface Data {
  about: About;
  education: Education;
  experience: Experience[];
  technicalSkills: TechnicalSkill[];
  softSkills: SoftSkill[];
  courses: Course[];
}

export const CvPage = () => {
  const {
    about,
    education,
    experience,
    technicalSkills,
    softSkills,
    courses,
  }: Data = data;
  return (
    <>
      <AboutComponent about={about} />
      <EducationComponent education={education} />
      <ExperienceComponent experience={experience} />
      <TechnicalSkillsComponente technicalSkills={technicalSkills} />
      <SoftSkillsComponent softSkills={softSkills} />
      {/* <CoursesComponent courses={courses} /> */}
    </>
  );
};
