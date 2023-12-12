import banner1 from "../../assets/Banner/Banner1.png";
import banner3 from "../../assets/Banner/Banner3.png";
import banner4 from "../../assets/Banner/Banner4.png";
import rectangle1 from "../../assets/Banner/Rectangle.png";
import rectangle3 from "../../assets/Banner/Rectangle3.png";
import rectangle4 from "../../assets/Banner/Rectangle4.png";
import rectangle31 from "../../assets/Banner/Rectangle31.png";
import rectangle41 from "../../assets/Banner/Rectangle41.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./header.css";

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
    <div className="w-full 2xl:w-[1500px] 2xl:mx-auto">
      <Carousel {...carouselSettings}>
        {/* 1st Carousel */}
        <div
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[500px] flex justify-end"
        >
          <div
           style={{
              backgroundImage: `url(${rectangle1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className=" w-[575px] h-[500px] text-white font-serif pt-[90px] pl-[37px] text-start lg:-mt-2 2xl:mt-0"
          >
            <h3 className="text-[40px] font-bold">We help you to</h3>
            <p className="text-[30px] font-medium leading-[48px] mb-6">
              Elevate your {`team's`} capabilities <br /> with our proficient
              software <br /> engineers.
            </p>
            <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
              Schedule
            </button>
          </div>
        </div>
        {/* 2nd Carousel*/}
        <div className="flex">
          <div>
            <img src={banner3} className="w-[972px] h-[522px]" alt="" />
          </div>
          <div
            style={{
              backgroundImage: `url(${rectangle31})`,
              width: "590px",
              height: "505px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="-ml-[5px] -mt-1"
          >
            <div
              style={{
                backgroundImage: `url(${rectangle3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="lg:w-[580px] lg:h-[505px] 2xl:w-[600px] 2xl:h-[507px] text-white font-serif pt-[120px] pl-[80px] text-start lg:-ml-[2px] 2xl:-ml-[20px]"
            >
              <h3 className="text-[40px] font-bold">Eliminate</h3>
              <p className="text-[30px] font-medium leading-[48px] mb-6">
                the burden of recruiting and <br /> training
              </p>
              <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
                Schedule
              </button>
            </div>
          </div>
        </div>
        {/* 3rd Carousel*/}
        <div className="flex ] mx-auto">
          <div>
            <img src={banner4} className="w-[992px] h-[517px]" alt="" />
          </div>
          <div
            style={{
              backgroundImage: `url(${rectangle41})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",


              width: "582px",
              height: "517px",
            }}
            className=""
          >
            <div
              style={{
                backgroundImage: `url(${rectangle4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="  lg:w-[580px] 2xl:w-[595px] h-[518px] text-white font-serif pt-[150px] pl-[80px] text-start -ml-[15px] 2xl:-ml-[15px] lg:-ml-[3px]"
            >
              <h3 className="text-[40px] font-bold">Retain</h3>
              <p className="text-[30px] font-medium leading-[48px] mb-6">
              absolute authority over your <br /> team whenever you desire
              </p>
              <button className="bg-[#275998] rounded-[60px] px-10 py-5 text-xl tracking-[0.081em]">
                Schedule
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;