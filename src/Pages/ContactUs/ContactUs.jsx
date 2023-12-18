import { Helmet } from "react-helmet";
import Contact from '../../components/Contact/Contact';

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us || Get in Touch with NuStartz</title>
                <meta property="og:title" content="Get in Touch with NuStartz" />
                <meta property="og:description" content="Reach out to us for inquiries, collaborations, or any questions you may have. We're here and ready to connect with you" />
                {/* <meta property="og:image" content="../../../src/assets/AboutUsBanner.png" /> */}
                <meta property="og:url" content="https://www.nustartz.com/contact-us" />
            </Helmet>
            <Contact />
        </>
    );
};

export default ContactUs;