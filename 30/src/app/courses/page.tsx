import CourseCard, { CourseCardProps } from "@/components/elements/CourseCard";
import PageTitle, { PageTitleProps } from "@/components/elements/PageTitle";

type CoursesPageProps = {
    pageTitle: PageTitleProps & { first_content_block: string};
    courses: CourseCardProps[]
}

export async function fetchData(): Promise<CoursesPageProps> {

    const pageTitleRequest = await fetch('http://localhost:5001/courses_page');
    const pageTitle = await pageTitleRequest.json();


    const coursesRequest = await fetch('http://localhost:5001/courses');
    const courses = await coursesRequest.json();

    return {
        pageTitle,
        courses
    }
}

export default async function Courses() {
    const { pageTitle, courses } = await fetchData()
    return (
        <div>

            <PageTitle title={pageTitle.title} content={pageTitle.first_content_block}/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        {courses.map(course => (
                            <CourseCard key={course.id} {...course}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}