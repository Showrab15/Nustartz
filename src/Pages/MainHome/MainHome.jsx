import Testimonial from "../../components/Testimonial/Testimonial";
import WhyUs from "../../components/WhyUs/WhyUs";
import { Analytics } from '@vercel/analytics/react'
import OurClients from "../../components/OurClients/OurClients";
import OurPartners from "../../components/OurPartners/OurPartners";
import Achievement from "../../components/Achievement/Achievement";
import { Helmet } from "react-helmet";
function MainHome() {


  if (window.pageYOffset > 0) {
    window.scrollTo(0, 0);
  }
  return (
    < >
        <Helmet>
        <title>NuStartz - Crafting The Future Of Startups</title>
        <meta property="og:title" content="Crafting the Future of Startups" />
        <meta property="og:description" content="Explore boundless innovation and transformative solutions at NuStartz. Discover our vision, services, and commitment to shaping the future of startups and entrepreneurs" />
        <meta property="og:image" content="https://i.ibb.co/HxPZxdH/Nustartz.png"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image" content="url_image"/>
  <meta property="og:url" content="https://www.nustartz.com/" />
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

export default MainHome;