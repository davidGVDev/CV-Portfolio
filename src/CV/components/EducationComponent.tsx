import { Education } from "../../interfaces";

interface EducationProps {
  education: Education;
}

export const EducationComponent = ({ education }: EducationProps) => {
  const { title, institution, degree, startDate, endDate } = education;
  return (
    <>
      <h2 className="education-title">{title}</h2>
      <ul className="education-list">
        <li>
          <span className="education-list-institution-title">Institución: </span>
          <span className="education-list-institution">{institution}</span>
        </li>
        <li>
          <span className="education-list-degree-title">Grado: </span>
          <span className="education-list-degree">{degree}</span>
        </li>
        <li>
          <span className="education-list-date-title">Fecha: </span>
          <span className="education-list-date">{startDate} - {endDate}</span>
        </li>
        
      </ul>
    </>
  );
};
