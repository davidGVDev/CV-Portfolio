import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { data } from "../../data";

export const AboutComponentP = () => {
  const { name, description, github, linkedin } = data.about;

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
      <div className="about-container-p">
        <div className="about-content-p animate__animated animate__fadeInLeft">
          <p className="about-title-p">
            <span className="about-title-p-span">Hola!!</span> <br /> Soy {name}
          </p>
          <p>
            <AuroraText className="aurora-text" speed={1}>
              Desarrollador Web
            </AuroraText>
            <TypingAnimation className="italic underline" duration={100}>
              Front-end developer
            </TypingAnimation>
          </p>
        </div>
        <div className="about-description-p animate__animated animate__fadeInRight">
          <p className="about-me-description-p">Acerca de mí</p>
          <p className="about-description-title-p">{description[0].p1}</p>
          <br />
          <p className="about-description-title-p">{description[0].p2}</p>
          <br />
          <p className="about-description-title-p">{description[0].p3}</p>
          <div className="about-contact-p">
            <a
              className="about-github-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="about-github-link-text">Github</span>{" "}
              <GithubLogo size={32} weight="fill" color="white" />
            </a>
            <a
              className="about-linkedin-link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="about-linkedin-link-text">Linkedin</span>{" "}
              <LinkedinLogo size={32} weight="regular" color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
