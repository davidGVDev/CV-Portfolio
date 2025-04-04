import { TechnicalSkill } from "../../interfaces";

interface TechnicalSkillsProps {
  technicalSkills: TechnicalSkill[];
}

export const TechnicalSkillsComponente = ({
  technicalSkills,
}: TechnicalSkillsProps) => {
  return (
    <>
      <h2 className="technical-skills-title">Habilidades Técnicas</h2>
      <div className="technical-skills-container">
        {technicalSkills.map((skill) => (
          <div key={skill.name} className="technical-skill">
            <div className="technical-skill-icon">
              <img src={skill.path} alt={skill.name} />
            </div>
            <span className="technical-skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};
