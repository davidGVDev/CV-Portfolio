import { Course } from "../../interfaces";

interface CoursesProps {
  courses: Course[];
}

export const CoursesComponent = ({ courses }: CoursesProps) => {
  return (
    <div>CoursesComponent</div>
  )
}
