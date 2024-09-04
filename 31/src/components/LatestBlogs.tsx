import React from "react";

export interface BlogPost {
  id: string;
  title: string;
  published: string;
  excerpt: string;
  image: string;
}

export interface LatestBlogsProps {
  blogPosts: BlogPost[]
}

const LatestBlogs = ({ blogPosts }: LatestBlogsProps) => {
  return (
    <section className="from-blog spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title from-blog__title">
              <h2>From The Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">

          {blogPosts.map(({
            id, title, published, excerpt, image
          }) =>
            <div className="col-lg-4 col-md-4 col-sm-6" key={id}>
              <a href="#" className="blog__item">
                <div className="blog__item__pic">
                  <img src={image} alt="" height={300} />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> {published}
                    </li>
                  </ul>
                  <h5>{title}</h5>
                  <p>{excerpt}</p>
                </div>
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
