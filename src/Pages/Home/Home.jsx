import Testimonial from "../../components/Testimonial/Testimonial";
import WhyUs from "../../components/WhyUs/WhyUs";
import {Analytics} from '@vercel/analytics/react'
import OurClients from "../../components/OurClients/OurClients";
import OurPartners from "../../components/OurPartners/OurPartners";
import Achievement from "../../components/Achievement/Achievement";
// import Map from '../../components/Map/Map'
function Home() {
  return (
    <div  >
      {/* <div
        style={{
          background:
            "linear-gradient(100.72deg, #F9F9F9 -12.83%, #2370C8 104.22%)",
        }}
        className="w-full  pb-10 "
      >
        <Navbar1 />
        <Header />
      </div> */}
      <WhyUs />
      <Achievement/>
      <OurPartners/>
      <OurClients/>
      {/* <Map/> */}
      <Testimonial />
      {/* <Footer/> */}
      <Analytics/>
    </div>
  );
}

export default Home;