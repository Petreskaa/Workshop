import React from "react";
export type TestimonialsProps = {
  title: string;
  content: string;
  testimonials: {
    first_name: string;
    last_name: string;
    avatar: string;
    message: string;
    id: string;
  }[]
}
const Testimonials = ({ title, content, testimonials }: TestimonialsProps) => {
  return (
    <section className="section" id="section-testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-12">
            <div className="section-heading testimonial-heading">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-12">
            <div className="row">
              {testimonials && testimonials.map(({ avatar, id, first_name, last_name, message }) => (
                <div className="col-lg-6" key={id}>
                  <div className="test-inner ">
                    <div className="test-author-thumb d-flex">
                      <img src={avatar} alt="Testimonial author" className="img-fluid" />
                      <div className="test-author-info">
                        <h4>{first_name} {last_name}</h4>
                      </div>
                    </div>
                    {message}
                    <i className="fa fa-quote-right"></i>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
