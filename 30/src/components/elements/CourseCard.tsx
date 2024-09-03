import React from "react";
export type CourseCardProps = {
  image:string;
  start_time: string;
  category: string;
  is_full:boolean;
  title:string;
  excerpt:string;
  id:string;
}
const CourseCard = ({image,start_time,category,is_full,title,excerpt,id}:CourseCardProps) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-5">
      <div className="card p-0 border-primary rounded-0 hover-shadow">
        <img className="card-img-top rounded-0" src={image} alt="course thumb" />
        <div className="card-body">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <i className="ti-calendar mr-1 text-color"></i>
              {start_time}
            </li>
            <li className="list-inline-item">
              <p className="text-color">{category}</p>
            </li>
            <li className="list-inline-item">
             {is_full &&  <p className="text-color text-danger">Filled out</p>}
            </li>
          </ul>
          <a href="course-single.html">
            <h4 className="card-title">{title}</h4>
          </a>
          <p className="card-text mb-4">{excerpt}</p>

          <a href={`/courses/${id}`} className="btn btn-primary btn-sm">
            See details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
