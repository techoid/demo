import Header from '../components/header';
import FooterTop from '../components/footertop';
import Footer from '../components/footer';
import DetailsComponent from '../components/detailscomponent2';
import OurPartnersComponents from '../components/ourpartnerscomponents';
import OurPartnersFormComponents from '../components/ourpartnersformcomponents';
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
                    <OurPartnersComponents />
                    <OurPartnersFormComponents />
                </div>
            </div>
            <IconComponents />
            <NoificationComponents />
        </section>
        <Footer />
    </>
};

export default contactuspages;