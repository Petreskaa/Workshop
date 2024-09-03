import React from "react";
import CourseCard, { CourseCardProps } from "./CourseCard";
export type RelatedCoursesProps = { courses: CourseCardProps[] }

const RelatedCourses = ({ courses }:RelatedCoursesProps ) => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Related Courses</h2>
          </div>
        </div>
        <div className="row justify-content-center">

          {courses.map(course => <CourseCard key={course.title} {...course} />)}
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
