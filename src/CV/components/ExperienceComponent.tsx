import { Experience } from "../../interfaces";

interface ExperienceProps {
  experience: Experience[];
}

export const ExperienceComponent = ({ experience }: ExperienceProps) => {
  return (
    <div>ExperienceComponent</div>
  )
}
