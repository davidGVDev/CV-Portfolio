import { SoftSkill } from "../../interfaces";

interface SoftSkillsProps {
  softSkills: SoftSkill[];
}

export const SoftSkillsComponent = ({ softSkills }: SoftSkillsProps) => {
  return <>
    <h2 className="soft-skills-title">Habilidades Blandas</h2>
    <div className="soft-skills-container">
      {softSkills.map((skill) => (
        <div key={skill.name} className="soft-skill">
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </>;
};
