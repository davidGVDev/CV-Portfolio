import { Experience } from "../../interfaces";

interface ExperienceProps {
  experience: Experience[];
}

export const ExperienceComponent = ({ experience }: ExperienceProps) => {
  return (
    <>
      <h2 className="experience-title">Experiencia</h2>
      {experience.map((exp) => (
        <div key={exp.company}>
          <div className="experience-data">
            <span className="experience-company-title">Empresa:</span>
            <div className="experience-company">{exp.company}</div>
            <div className="experience-dates">
              ({exp.startDate} - {exp.endDate})
            </div>
          </div>
          <div className="experience-position-data">
            <span className="experience-position-title">Cargo:</span>
            <div className="experience-position">{exp.position}</div>
          </div>

          <ul className="experience-responsibilities">
            {exp.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
