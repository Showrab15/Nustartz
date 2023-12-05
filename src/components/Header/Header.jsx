import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import person from "../../assets/bannerPic1.png";
import "./header.css";
const Header = () => {
  const carouselSettings = {
    showArrows: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000,
    showThumbs: false,
  };

  return (
    <div className="relative bottom-[400px] 2xl:bottom-[0px]">
      <Carousel {...carouselSettings}>
        <div className="flex flex-col md:flex-row  items-center">
          <div className="order-2 md:order-1 px-1 md:px-0">
            <h2 className="text-[#000000] lg:ml-[80px] lg:w-[580px] text-3xl md:text-[40px] font-bold text-left font-serif mt-8 mb-4">
              We help you to
            </h2>
            <p className="text-[#000] lg:ml-[80px] lg:w-[580px]  text-xl md:text-[30px] font-medium leading-9 md:leading-[48px] font-serif text-left">
              Elevate your teams capabilities <br /> with our proficient
              software <br /> engineers.
            </p>

            <button className="bg-[#275998] relative  py-5 px-10 lg:mr-[360px] rounded-[60px] text-white font-semibold mt-12 ">
              Schedule
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img className="xl:overflow-x-hidden xl-mr-4 " src={person} alt="" />
          </div>
        </div>
      </Carousel>

      {/* <Carousel {...carouselSettings}>
               <div>


               <div className="flex justify-between gap-10">

<div >

<h1 className="mt-10 ml-[90px] text-left w-[500px] text-[#266AAB] text-4xl font-bold font-serif">WE Help You To</h1>
<h5> Elevate Your Teams Capabilities <br/> with our Proficient Software Developer</h5>
<button className="bg-[#275998] mt-40 mr-[240px] rounded-xl text-white font-semibold  p-4">Get Quote Now</button>

</div>

<img className="w-[798px] h-[510px]" src={person} alt="" />


</div>




  

// {/* <img className="relative bottom-[20px]" src={bannerBottom} alt="" /> */}

      {/* </div> */}

      {/* // </Carousel>  */}
    </div>
  );
};

export default Header;
