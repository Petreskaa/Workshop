import Link from "next/link";
import React from "react";

export interface ProductProps {
    id:string;
    title:string;
    type:string;
    description:string;
    filename:string;
    size:string;
    price:string;
    information:string;
}

const Product = ({title,filename,price, id}:ProductProps) => {
  return (
    <Link className="col-lg-3 col-md-4 col-sm-6" href={`/shop/${id}`}>
      <div className="product__item">
        <div className="product__item__pic">
          <img src={`/img/products/${filename}`} alt="" />

          <ul className="product__item__pic__hover">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <a className="product__item__text d-block">
          <h6>{title}</h6>
          <h5>${price}</h5>
        </a>
      </div>
    </Link>
  );
};

export default Product;
