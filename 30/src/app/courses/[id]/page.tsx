import { CourseCardProps } from "@/components/elements/CourseCard";
import PageTitle from "@/components/elements/PageTitle";
import RelatedCourses, { RelatedCoursesProps } from "@/components/elements/RelatedCourses";
import CourseDetailPage from "@/components/templates/CourseDetailPage";

export async function fetchData(id: string): Promise<{
    course: CourseCardProps & {
        fee: string;
        duration: string
        content: string;
    },
    relatedCourses:CourseCardProps[]
}> {

    const coursesReq = await fetch('http://localhost:5001/courses');
    const courses = await coursesReq.json();

    const courseReq = await fetch(`http://localhost:5001/courses/${id}`);
    const course = await courseReq.json();

    //possible error
    const randomNumber = Math.floor(Math.random() * (courses.lengh - 3))
    const relatedCoursesReq = await fetch(`http://localhost:5001/courses?_start=${randomNumber}&_limit=3 `);
    const relatedCourses = await relatedCoursesReq.json();

    return {
        course,
        relatedCourses
    }

}

export async function generateStaticParams() {
    const req = await fetch('http://localhost:5001/courses');
    const courses: CourseCardProps[] = await req.json();
    return courses.map(course => ({ id: course.id }))
}

export default async function CourseDetails(
    { params }: { params: { id: string } }
) {
    const { course , relatedCourses} = await fetchData(params.id)
    return (
        <div>
            <PageTitle title={course.title} content={course.excerpt} />
            <CourseDetailPage
                {...course}
            />
            <RelatedCourses courses={relatedCourses}/>
        </div>
    )
}