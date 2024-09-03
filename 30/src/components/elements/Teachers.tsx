import React from "react";
export type Teacher = {
    avatar: string;
    first_name: string;
    last_name: string;
    position: string;
    id: string
}

export type TeachersProps = {
  teachers: Teacher[]
}

const Teachers = ({ teachers }: TeachersProps) => {
  
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Our Teachers</h2>
          </div>
          {teachers?.map(({ avatar, first_name, last_name, position, id }) => <div className="col-lg-4 col-sm-6 mb-5" key={id}>
            <div className="card border-0 rounded-0 hover-shadow">
              <img className="card-img-top rounded-0" src={avatar} alt="teacher" />
              <div className="card-body">
                <a href="teacher-single.html">
                  <h4 className="card-title">{first_name} {last_name}</h4>
                </a>
                <div className="d-flex justify-content-between">
                  <span>{position}</span>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        <i className="ti-google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
