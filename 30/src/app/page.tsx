import AboutBlock, { AboutBlockProps } from "@/components/elements/AboutBlock";
import { CourseCardProps } from "@/components/elements/CourseCard";
import FeaturedCourses, { FeaturedCoursesProps } from "@/components/elements/FeaturedCourses";
import HeroSection, { HeroSectionProps } from "@/components/elements/HeroSection";
import Testimonials, { TestimonialsProps } from "@/components/elements/Testimonials";

type HomePageData = {
  heroSection: HeroSectionProps;
  aboutBlock: AboutBlockProps;
  featuredCourses: CourseCardProps[];
  testimonials: TestimonialsProps;
}

export const fetchData = async (): Promise<HomePageData> => {
  const heroSectionRequest = await fetch('http://localhost:5001/homepage');
  const heroSection = await heroSectionRequest.json()

  const aboutBlockRequest = await fetch('http://localhost:5001/about_page');
  const aboutBlock = await aboutBlockRequest.json()

  const featuredCoursesRequest = await fetch('http://localhost:5001/courses?_start=1&_limit=3');
  const featuredCourses = await featuredCoursesRequest.json()

  const testimonialsRequest = await fetch('http://localhost:5001/testimonials');
  const testimonials = await testimonialsRequest.json();

  return {
    heroSection,
    aboutBlock,
    featuredCourses,
    testimonials: {
      testimonials: testimonials,
      title: heroSection.testimonials_title,
      content: heroSection.testimonials_content
    }
  }
}

export default async function Home() {
  const { heroSection, aboutBlock, featuredCourses, testimonials } = await fetchData();

  return (
    <div>
      <HeroSection {...heroSection} />
      <AboutBlock {...aboutBlock} />
      <FeaturedCourses featuredCourses={featuredCourses} />
      <Testimonials {...testimonials} />
    </div>
  );
}
