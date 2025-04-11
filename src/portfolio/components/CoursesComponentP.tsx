import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { data } from "../../data";
import { Course } from "@/interfaces";
import { useState } from "react";
import { DialogComponent } from "./DialogComponent";

export const CoursesComponentP = () => {
  const { udemy, oracle } = data.courses;
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

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
      <div className="courses-container">
        <div className="courses-container-udemy animate__animated animate__fadeInUp animate__fast">
          <h3>Udemy</h3>
          <div className="courses-list">
            {udemy.map((course, index) => (
              <div
                key={index}
                className="course-item"
                onClick={() => handleCourseClick(course)}
              >
                <img src={course.path} alt={course.alt} />
                <span>{course.alt}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="courses-container-oracle animate__animated animate__fadeInUp animate__fast">
          <h3>Oracle one / Alura LATAM</h3>
          <div className="courses-list">
            {oracle.map((course, index) => (
              <div
                key={index}
                className="course-item"
                onClick={() => handleCourseClick(course)}
              >
                <img src={course.path} alt={course.alt} />
                <span>{course.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedCourse && (
        <DialogComponent
          course={selectedCourse}
          open={open}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
