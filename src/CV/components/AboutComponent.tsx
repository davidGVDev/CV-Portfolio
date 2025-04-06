import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { About } from "../../interfaces";

interface AboutProps {
  about: About;
}

export const AboutComponent = ({ about }: AboutProps) => {
  const { email, phone, github, linkedin, country, languages, description } = about;
  return (
    <>
      <p className="about-name">{about.name}</p>
      <hr />
      <ul className="about-contact mt-4">
        <li>
          Correo: <span className="about-contact-email">{email}</span>
        </li>
        <li>
          Teléfono: <span className="about-contact-phone">{phone}</span>
        </li>
        <li>
          País: <span className="about-contact-country">{country}</span>
        </li>
        <li>
          Idiomas: <span className="about-contact-languages">{languages}</span>
        </li>
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
      </ul>
      <h2 className="about-description-title">Acerca de mí</h2>
      <p className="about-description">{description}</p>
    </>
  );
};
