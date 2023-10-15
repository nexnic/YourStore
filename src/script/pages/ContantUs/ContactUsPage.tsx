import Info from "./Components/Info"
import ContactForm from "./Components/ContactForm"
import Form from "./Components/Form"
// @ts-ignore
export default function ContactUspage({pageConfig}) {
    document.title = `${pageConfig[0].CompanyName} | Contact US`;
    return (
        <div>
            <Info/>
            <ContactForm/>
            <Form></Form>
        </div>
    )
}