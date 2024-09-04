import Link from "next/link";
import React from "react";

export interface BreadcrumbsProps {
  title:string;
}

const Breadcrumbs= ({title}:BreadcrumbsProps) => {
  return (
    <section className="breadcrumb-section set-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>Ogani Shop</h2>
              <div className="breadcrumb__option">
                <Link href="/">Home</Link>

                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
