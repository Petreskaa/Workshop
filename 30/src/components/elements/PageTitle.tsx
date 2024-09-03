import React from "react";
export type PageTitleProps = {
  title:string;
  content:string;
}
const PageTitle= ({title,content}:PageTitleProps) => {
  return (
    <section className="page-title-section overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-inline custom-breadcrumb">
              <li className="list-inline-item">
                <p className="h2 text-primary font-secondary">{title}</p>
              </li>
            </ul>
            <p className="text-lighten">{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
