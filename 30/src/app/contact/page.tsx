import PageTitle, { PageTitleProps } from "@/components/elements/PageTitle";
import ContactPage, { ContactPageComponentProps } from "@/components/templates/ContactPage";

type ContantPageProps ={
    contactPage: ContactPageComponentProps & PageTitleProps;
}
export const fetchData = async (): Promise<ContantPageProps>=>{
const contactPageRequest = await fetch('http://localhost:5001/contact_page');
const contactPage = await contactPageRequest.json()
    
    return{
        contactPage
    }
}


export default async function Contact (){
    const {contactPage} = await fetchData();
    return (
        <div>
            <PageTitle title={contactPage.title} content={contactPage.first_content_block}/>
            <ContactPage {...contactPage}/>
        </div>
    )
}