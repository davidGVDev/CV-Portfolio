import "./stylesCv.css";
import {
  AboutComponent,
  EducationComponent,
  ExperienceComponent,
  SoftSkillsComponent,
  TechnicalSkillsComponente,
} from "./components";
import { data } from "../data";
import {
  About,
  Education,
  Experience,
  TechnicalSkill,
  SoftSkill,
} from "../interfaces";
import { FilePdf, ArrowBendUpLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Data {
  about: About;
  education: Education;
  experience: Experience[];
  technicalSkills: TechnicalSkill[];
  softSkills: SoftSkill[];
}

export const CvPage = () => {
  const { about, education, experience, technicalSkills, softSkills }: Data =
    data;

  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (cvRef.current) {
      console.log("descargando pdf");
      const canvas = await html2canvas(cvRef.current, { scale: 1.5 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [210, 400] // Ancho x Alto en mm
        // format: "letter"
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Ajusta la imagen al tamaño de la página
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save("CV-David-Ventura.pdf");
    }
  };

  return (
    <>
      <div className="app-container">
        <div ref={cvRef} className="cv-page">
          <AboutComponent about={about} />
          <EducationComponent education={education} />
          <ExperienceComponent experience={experience} />
          <TechnicalSkillsComponente technicalSkills={technicalSkills} />
          <SoftSkillsComponent softSkills={softSkills} />
        </div>
      </div>
      <Link to="/" className="cv-button-back animate__animated animate__fadeIn">
        <ArrowBendUpLeft size={32} />
      </Link>
      <button onClick={handleDownloadPdf} className="cv-button-pdf animate__animated animate__fadeIn">
        <FilePdf size={32} />
      </button>
    </>
  );
};
