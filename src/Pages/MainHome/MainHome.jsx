import Testimonial from "../../components/Testimonial/Testimonial";
import WhyUs from "../../components/WhyUs/WhyUs";
import {Analytics} from '@vercel/analytics/react'
import OurClients from "../../components/OurClients/OurClients";
import OurPartners from "../../components/OurPartners/OurPartners";
import Achievement from "../../components/Achievement/Achievement";
import { Helmet } from "react-helmet";
function MainHome() {
  return (
    <div className="max-w-6xl mx-auto" >
      <Helmet>
        <title>NuStartz</title>
        <meta property="og:title" content="Crafting the Future of Startups" />
        <meta property="og:description" content="Explore boundless innovation and transformative solutions at NuStartz. Discover our vision, services, and commitment to shaping the future of startups and entrepreneurs" />
          <meta property="og:image" content="../public/logo.svg" />
          <meta property="og:url" content="https://www.nustartz.com/" />
      </Helmet>
      <WhyUs />
      <OurPartners/>
      <OurClients/>
      <Achievement/>
      
      <Testimonial />
      <Analytics/>
    </div>
  );
}

export default MainHome;