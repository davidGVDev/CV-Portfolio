import { Education } from "../../interfaces";

interface EducationProps {
  education: Education;
}

export const EducationComponent = ({ education }: EducationProps) => {
  return (
    <div>EducationComponent</div>
  )
}
