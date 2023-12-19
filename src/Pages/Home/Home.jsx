import Testimonial from "../../components/Testimonial/Testimonial";
import WhyUs from "../../components/WhyUs/WhyUs";
import { Analytics } from '@vercel/analytics/react'
import OurClients from "../../components/OurClients/OurClients";
import OurPartners from "../../components/OurPartners/OurPartners";
import Achievement from "../../components/Achievement/Achievement";
import { Helmet } from "react-helmet";
function Home() {


  if (window.pageYOffset > 0) {
    window.scrollTo(0, 0);
  }
  return (
    < >
      <Helmet>
        <title>Home || Welcome to NuStartz - Where Innovation Begins</title>
        <meta property="og:title" content="Welcome to NuStartz - Where Innovation Begins" />
        <meta property="og:description" content="Experience a world of innovation and possibilities with NuStartz. Explore our diverse offerings, discover our story, and embark on a journey towards transformative solutions" />
        <meta property="og:image" content="../../../public/logo.svg" />
        <meta property="og:url" content="https://www.nustartz.com/home" />
      </Helmet>
      <div className="max-w-6xl mx-auto">

        <WhyUs />

      </div>
      <OurPartners />
      <OurClients />
      <div className="max-w-6xl mx-auto">

        <Achievement />

        <Testimonial />
      </div>

      <Analytics />
    </>
  );
}

export default Home;