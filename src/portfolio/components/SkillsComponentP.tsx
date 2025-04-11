import { data } from "../../data";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export const SkillsComponentP = () => {
  const technicalSkills = data.technicalSkills;
  const softSkills = data.softSkills;
  return (
    <>
      <FlickeringGrid
        className="flickering-grid"
        squareSize={4}
        gridGap={9}
        color="#eee"
        maxOpacity={0.8}
        flickerChance={0.2}
      />
      <div className="skills-container-p">
        <div className="skills-container-technical animate__animated animate__bounceInDown animate__fast">
          <h3>Habilidades Técnicas</h3>
          <div className="technical-skills-grid">
            {technicalSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <img src={skill.path} alt={skill.alt} />
                <div className="skill-item-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-container-soft animate__animated animate__bounceInDown animate__fast">
          <h3>Habilidades Blandas</h3>
          <div className="skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.name} className="soft-skills-name">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
