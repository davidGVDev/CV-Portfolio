import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { data } from "../../data";
import { ArrowFatLinesRight, ArrowFatLinesLeft } from "@phosphor-icons/react";

export const SkillsComponentP = () => {
  const technicalSkills = data.technicalSkills;
  const softSkills = data.softSkills;
  return (
    <>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "dot-pattern"
        )}
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
