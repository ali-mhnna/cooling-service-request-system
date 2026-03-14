import Baner from "../components/Contact/Banner ";
import ContactInfo from "../components/Contact/Contact Info";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/Home/NavBar";

export default function Contact(){
    return(
        <div>
            <NavBar/>
            <Baner/>
            <ContactInfo/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}