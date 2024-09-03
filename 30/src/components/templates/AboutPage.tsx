import React from "react";
export type AboutPageComponentProps ={
  first_image:string;
  second_image:string;
  second_content_block:string;
  third_content_block:string
}

const AboutPage = ({first_image,second_image, second_content_block,third_content_block}:AboutPageComponentProps) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img className="img-fluid w-100 mb-4" src={first_image} alt="about image" />
            <p className="mb-5">{second_content_block}</p>
            <img className="img-fluid w-100 mb-4" src={second_image} alt="about image" />
            <p>{third_content_block}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
