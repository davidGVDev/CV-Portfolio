import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { data } from "../../data";
import { CheckCircle } from "lucide-react";

export const ExperienceComponentP = () => {
  const experiences = data.experiences;
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
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-item-header">
              <CheckCircle size={32} color="green" />
              <h3>{experience.title}</h3>
            </div>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
