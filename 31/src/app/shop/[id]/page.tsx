import { ProductProps } from "@/components/Product";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FeaturedProducts from "../../../components/FeaturedProducts";

interface ProductPageProps {
  product: ProductProps;
  featuredProducts: ProductProps[]
}

export async function fetchData(id: string) {
  console.log('test id', id)
  if (id) {

    const productReq = await fetch(`http://localhost:5001/products/${id}`)
    const product = await productReq.json();

    const featuredProductsReq = await fetch('http://localhost:5001/products?_start=1&_limit=4');
    const featuredProducts = await featuredProductsReq.json();
    return {
      product,
      featuredProducts,
    }
  }

  return {

  }
}

export async function generateStaticParams() {
  const productsReq = await fetch(`http://localhost:5001/products`)
  const products: ProductProps[] = await productsReq.json();

  return products.map(el => ({ id: el.id }))
}

export default async function ShopDetail({
  params,
}: any ) {
  console.log('params', params)
  const { product
    : {
    filename, title, price, description, type, size, information
  }
  , featuredProducts } = await fetchData(params.id)
  return (
    <>
      <Breadcrumbs title={title} />

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={`/img/products/${filename}`}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{title}</h3>
                <div className="product__details__price">${price}</div>
                <p>{description}</p>
                <ul>
                  <li>
                    <b>Type</b> <span>{type}</span>
                  </li>
                  <li>
                    <b>Size</b> <span>{size}</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{information}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} />
    </>
  );
}
