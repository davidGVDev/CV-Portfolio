import { About } from "../../interfaces";

interface AboutProps {
  about: About;
}

export const AboutComponent = ({ about }: AboutProps) => {
  return (
    <div>AboutComponent</div>
  )
}
