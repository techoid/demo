import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent1';
import ContactUsComponent from '../components/contactuscomponent';
import ContactUsFormComponent from '../components/contactusformcomponent';
import IconComponents from '../components/iconcomponents';
import NoificationComponents from '../components/noificationcomponents';


function contactuspages() {
    return <>
        <Header />
        <FooterTop />
        <section>
            <DetailsComponent />
            <div class="container-fluid home-default-padding">
                <div class="row contact-us-btn-components-display-flex">
                    <ContactUsComponent />
                    <ContactUsFormComponent />
                </div>
            </div>
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default contactuspages;