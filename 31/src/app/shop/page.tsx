import Breadcrumbs from "../../components/Breadcrumbs";
import Filters, { FilterType } from "../../components/Filters";
import Product, { ProductProps } from "../../components/Product";

interface ShopProps {
  products: ProductProps[];
  productSizes: FilterType[];
  productCategories: FilterType[];
}
interface ShopPage {
  searchParams: {
    size?: string
    category?: string
  }
}

export async function fetchData(searchParams: ShopPage['searchParams']): Promise<ShopProps> {
  const { category, size } = searchParams;
  const productsReq =
    category && !size ?
      await fetch(`http://localhost:5001/products?type=${category}`) :
      size && !category ?await fetch(`http://localhost:5001/products?size=${size}`) :
        size && category ?await fetch(`http://localhost:5001/products?type=${category}&size=${size}`)
         : await fetch(`http://localhost:5001/products`)
 
  const products = await productsReq.json();

  const productCategoriesReq = await fetch('http://localhost:5001/productCategories');
  const productCategories = await productCategoriesReq.json();
  const productSizesReq = await fetch('http://localhost:5001/productSizes');
  const productSizes = await productSizesReq.json();

  return {
    products,
    productCategories,
    productSizes
  }
}

export default async function Shop({ searchParams }: ShopPage) {

  const { products, productCategories, productSizes } = await fetchData(
    searchParams
  )
  return (
    <div>
      <Breadcrumbs title="Shop" />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <Filters productCategories={productCategories} productSizes={productSizes} />
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="row">
                {products && products.length > 0 ? products.map(product =>
                  <Product key={product.id} {...product} />
                )
                  :
                  <p>There are no products based on your filter.</p>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
