import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection, { HeroSectionProps } from "@/components/HeroSection";
import LatestBlogs, { BlogPost } from "@/components/LatestBlogs";
import { ProductProps } from "@/components/Product";

interface HomePageProps {
  heroSection: HeroSectionProps;
  featuredProducts: ProductProps[];
  latestBlogs: BlogPost[]
}

export async function fetchData (): Promise<HomePageProps> {
  const heroSectionReq= await fetch ('http://localhost:5001/homepage');
  const heroSection = await heroSectionReq.json();

  const productCategoriesReq = await fetch('http://localhost:5001/productCategories');
  const productCategories = await productCategoriesReq.json()

  const featuredProductsReq = await fetch('http://localhost:5001/products?_start=1&_limit=4');
  const featuredProducts=  await featuredProductsReq.json();  

  const latestBlogsReq = await fetch('http://localhost:5001/blogs');
  const  latestBlogs = await latestBlogsReq.json();

  return{
    heroSection:{
      ...heroSection,
      categories:productCategories
    },
    featuredProducts,
    latestBlogs

  }
}


export default async function Home() {
const { heroSection, featuredProducts, latestBlogs} = await fetchData()

  return (
    <>
      <HeroSection {...heroSection}/>
      <FeaturedProducts products={featuredProducts}/>
      <LatestBlogs blogPosts={latestBlogs}/> 
    </>
  );
}
