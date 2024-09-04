import Link from "next/link";
import React from "react";
import { FilterType } from "./Filters";

export interface HeroSectionProps {
  departmentInfo: string,
  heroSection: {
    preTitle: string;
    title: string;
    desc: string;
  }
  categories: FilterType[]
}

const HeroSection = ({ departmentInfo, heroSection, categories }: HeroSectionProps) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>All departments</span>
              </div>
              <div className="py-3">

                {categories.map(({ name, id, slug }) =>
                  <div className="sidebar__item__size" key={id}>
                    <Link href={`/shop?category=${slug}`}>{name}</Link>
                  </div>
                )}

              </div>
        
              <p className="mt-3">{departmentInfo}</p>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__item set-bg">
              <div className="hero__text w-50">
                <span>{heroSection.preTitle}</span>
                <h2>{heroSection.title}</h2>
                <p>{heroSection.desc}</p>
                <Link className="primary-btn" href="/shop">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
