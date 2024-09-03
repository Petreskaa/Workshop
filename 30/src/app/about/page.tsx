import PageTitle, { PageTitleProps } from "@/components/elements/PageTitle";
import Teachers, { TeachersProps } from "@/components/elements/Teachers";
import AboutPage, { AboutPageComponentProps } from "@/components/templates/AboutPage";
type AboutPageProps = {
    pageTitle: PageTitleProps;
    aboutPageComponentProps: AboutPageComponentProps;
    teachers: any
}
const API_URL= 'http://localhost:5001'
export const fetchData = async (): Promise<AboutPageProps> => {
    const aboutPageRequest = await fetch(`${API_URL}/about_page`);
    const aboutPage = await aboutPageRequest.json();
    const teachersRequest = await fetch(`${API_URL}/teachers`);
    const teachers = await teachersRequest.json();

    return {
        pageTitle: {
            content: aboutPage.first_content_block,
            title: aboutPage.title,
        }
        ,
        aboutPageComponentProps: {
            first_image: aboutPage.first_image,
            second_image: aboutPage.second_image,
            second_content_block: aboutPage.second_content_block,
            third_content_block: aboutPage.third_content_block
        },
        teachers
    }
}

export default async function About() {
    const { pageTitle, aboutPageComponentProps,teachers } = await fetchData();

    return (
        <div>
            <PageTitle {...pageTitle} />
            <AboutPage {...aboutPageComponentProps} />
            <Teachers teachers={teachers}/>
        </div>
    )
}