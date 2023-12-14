import banner1 from "../../assets/Banner/Banner.jpg";
import banner2 from "../../assets/Banner/Banner2.png";
import banner3 from "../../assets/Banner/Banner3.png";
import banner4 from "../../assets/Banner/Banner4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const carouselSettings = {
    showArrows: false,
    showStatus: false,
    infiniteLoop: true,
    // autoPlay: true,
    interval: 3000,
    // showThumbs: true,
  };

  return (
    <div className="w-full h-full ">
      <Carousel {...carouselSettings}>
        {/* 1st Carousel */}
        <div
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           
          }}
          className="w-full  h-[450px] md:h-[600px]  2xl:h-[550px]  flex justify-end">
         <div className="font-serif flex flex-col items-center mx-auto my-auto text-white">
         <h3 className="text-[20px] md:text-[40px] font-bold md:mt-[200px] mt-[100px]">We help you to</h3>
 <p className="text-[15px] md:text-[30px] font-medium  leading-[18px] md:leading-[48px] mb-6">
              Elevate your {`team's`} capabilities <br className="md:bl"/> with our proficient
              software engineers.
            </p>
            <Link to="https://calendly.com/nustartz/30min">  <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
              Schedule
            </button></Link>
         </div>
            {/* 
            */}
          </div>
        
        {/* 2nd Carousel*/}
        <div
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           
          }}
          className="w-full  h-[450px] md:h-[600px]  2xl:h-[550px]  flex justify-end">
         <div className="font-serif flex flex-col items-center mx-auto my-auto text-white ">
         <h3 className="text-[20px] md:text-[40px] font-bold md:mt-[200px] mt-[100px]">Eliminate</h3>
 <p className="text-[15px] md:text-[30px] font-medium  leading-[18px] md:leading-[48px] mb-6">
 the burden of recruiting and <br /> training
            </p>

          
<Link to="https://calendly.com/nustartz/30min">  <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
              Schedule
            </button></Link>

          
         </div>
            {/* 
            */}
          </div>
        {/* 3rd Carousel*/}
        <div
          style={{
            backgroundImage: `url(${banner3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           
          }}
          className="w-full  h-[450px] md:h-[600px]  2xl:h-[550px]  ">
         <div className="font-serif flex flex-col items-center mx-auto my-auto text-white">
         <h3 className="text-[20px] md:text-[40px] font-bold  md:mt-[250px]  mt-[200px]">Prepare</h3>
 <p className="text-[15px] md:text-[30px] font-medium  leading-[14px] md:leading-[38px] mb-6">
              Elevate your {`team's`} capabilities <br className="md:block hiiden"/>          for a transformative 
experience

            </p>
            <Link to="https://calendly.com/nustartz/30min">  <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
              Schedule
            </button></Link>
         </div>
            {/* 
            */}
          </div>
          <div
          style={{
            backgroundImage: `url(${banner4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           
          }}
          className="w-full  h-[450px] md:h-[600px]  2xl:h-[550px]  ">
         <div className="font-serif flex flex-col items-center mx-auto my-auto text-white">
         <h3 className="text-[20px] md:text-[40px] font-bold  md:mt-[250px] mt-[200px]">Retain</h3>
 <p className="text-[15px] md:text-[30px] font-medium  leading-[14px] md:leading-[38px] mb-6">
              Elevate your {`team's`} capabilities <br/>              Absolute authority over your <br /> team whenever you desire

            </p>
            <Link to="https://calendly.com/nustartz/30min">  <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
              Schedule
            </button></Link>
         </div>
            {/* 
            */}
          </div>
      </Carousel>
    </div>
  );
};

export default Header;