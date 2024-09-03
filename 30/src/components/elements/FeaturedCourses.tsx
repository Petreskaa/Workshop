import React from "react";
import CourseCard, { CourseCardProps } from "./CourseCard";

export type FeaturedCoursesProps = {
  featuredCourses: CourseCardProps[];
}

const FeaturedCourses = ({featuredCourses}: FeaturedCoursesProps) => {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center section-title justify-content-between">
              <h2 className="mb-0 text-nowrap mr-3">Featured Courses</h2>
              <div className="border-top w-100 border-primary d-none d-sm-block"></div>
              <div>
                <a
                  href="/courses"
                  className="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block"
                >
                  see all
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
       {featuredCourses.map(course=>(
         <CourseCard {...course} key={course.title}/>
       ))}
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <a href="/courses" className="btn btn-sm btn-primary-outline d-sm-none d-inline-block">
              see all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
