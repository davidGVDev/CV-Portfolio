import { data } from "../../data";
import { ArrowFatLinesRight, ArrowFatLinesLeft } from "@phosphor-icons/react";
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
        <div className="skills-grid">
          <div className="skill-box technical-skills">Technical Skills
          <ArrowFatLinesRight size={60} />
          </div>
          
          <div className="technical-skills-grid">
            {technicalSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <img src={skill.path} alt={skill.alt} />
                <div className="skill-item-name">{skill.name}</div>
              </div>
            ))}
          </div>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.name} className="skill-item soft-skills-name">
                {skill.name}
              </div>
            ))}
          </div>
          <div className="skill-box soft-skills">
            <ArrowFatLinesLeft size={60} />
            Soft Skills
          </div>
        </div>
      </div>
    </>
  );
};
