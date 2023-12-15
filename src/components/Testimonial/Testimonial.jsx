import "./Testimonial.css";
import person1 from "../../assets/Testimonials Person/Carrer Journey res.png";
import person2 from "../../assets/Testimonials Person/mynainsights_logo 1.png";
import person3 from "../../assets/Testimonials Person/yotta.png";
import person4 from "../../assets/Testimonials Person/intenx.png";
import star from "../../assets/star.svg";
// import wave from '../../assets/Hero Slider.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {

 

  return (
    <div className="mt-6 mx-auto">
   
      <div className="   bg-[#fff] mx-auto">
        <h3 className="text-[#050038] md:text-[25px] lg:text-[30px] text-[15px] text-center pt-8 font-bold font-serif  leading-[30px] md:leading-[56px]    ">
          <span className="text-[#3595FC] ">Discover</span> the experiences of our valued clients{" "}
          <br className="lg:block hidden" /> through their  <span className="text-[#3595FC] ">testimonials</span>
        </h3>
        <div className="mx-auto flex justify-center">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper testimonialSwiper"
          >
           
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person1}
                  className="w-[470px] h-[170px] mx-auto"
                  alt=""
                />
                 <h5 className="text-center text-[#333] text-sm leading-5 lg:text-xl font-semibold lg:leading-9  font-serif">
                 CareerJourney 
                </h5>
                <p className="text-center  text-[10px] md:text-[15px]     text-[#999] font-serif mt-8 w-full lg:w-[800px] mx-auto">
                  “NuStartz has been a game-changer for my business.<br/> Their 
                  digital marketing expertise is top-notch, and {`they've`}{" "}
                  significantly <br/> improved  my online presence. {`I'm`} thrilled
                  with the results honestly.”
                </p>
                <h5  className="text-center text-[#333] text-sm leading-5 lg:text-xl font-bold lg:leading-9 my-6 font-serif">
                Rajesh Duthie
                </h5>
                <div className="flex justify-center gap-2">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide>

          {/* second slider */}
          <SwiperSlide>
              <div className="w-full lg:h-[470px] px-6 py-6">
                <img
                  src={person2}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <h5 className="text-center text-[#333] text-sm leading-5 lg:text-xl font-semibold lg:leading-9  font-serif">
                Myna Insights
                </h5>
                <p className="text-center  text-[10px] md:text-[15px]     text-[#999] font-serif mt-8 w-full lg:w-[800px] mx-auto">
                  “NuStartz has been an exceptional partner   in digital
                  marketing.  <br  />Their strategies   and dedication have significantly
                  boosted our    digital presence. <br  />We highly recommend NuStartz for
                  anyone seeking impactful digital marketing solutions.”
                </p>
                <h5 className="text-center text-[#333] text-sm leading-5 lg:text-xl font-bold lg:leading-9 my-6 font-serif">
                 Melvin
                </h5>
                <div className="flex justify-center gap-2">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide>

            {/* third */}
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person3}
                  className=" mx-auto mt-12"
                  alt=""
                />
                 <h5 className="text-center mt-8 text-[#333] text-sm leading-5 lg:text-xl font-semibold lg:leading-9  font-serif">
                 Yottaasys 
                </h5>
                <p className="text-center  text-[10px] md:text-[15px]     text-[#999] font-serif mt-8 w-full lg:w-[800px] mx-auto">
                  “Working with NuStartz was a game-changer for our e-commerce
                  business.<br/> Their digital marketing strategies drove significant
                  growth in our online sales.<br/>  I highly recommend NuStartz to
                  anyone in the e-commerce world.”
                </p>
                <h5  className="text-center text-[#333] text-sm leading-5 lg:text-xl font-bold lg:leading-9 my-8 font-serif">
                  Viktor
                </h5>
                <div className="flex justify-center gap-2 -mb-8">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide>

            {/* // fourth */}
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person4}
                  className="mt-12 mx-auto"
                  alt=""
                />
                 <h5 className="text-center mt-8 text-[#333] text-sm leading-5 lg:text-xl font-semibold lg:leading-9  font-serif">
                 IntentX
                </h5>
                <p className="text-center  text-[10px] md:text-[15px]     text-[#999] font-serif mt-8 w-full lg:w-[800px] mx-auto">
                  “NuStartz has been a game-changer for my business.<br/> Their 
                  digital marketing expertise is top-notch, and {`they've`}{" "}
                  significantly <br/> improved  my online presence. {`I'm`} thrilled
                  with the results honestly.”
                </p>
                <h5  className="text-center text-[#333] text-sm leading-5 lg:text-xl font-bold lg:leading-9 my-8 font-serif">
                  Yusuf
                </h5>
                <div className="flex justify-center gap-2">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide>

            {/* // fifth */}
            {/* <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person5}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <h5 className="text-center text-[#333] text-lg leading-5 lg:text-2xl font-bold lg:leading-9  font-serif">
                Myna Insights
                </h5>
                <p className="text-center  text-[10px] md:text-[15px]     text-[#999] font-serif mt-8 w-full lg:w-[800px] mx-auto">
                  “NuStartz played a crucial role in enhancing our healthcare{" "}
                  {`practice's`} online presence. Their strategies helped us
                  connect with patients. {`I'm`} grateful for the impact
                  NuStartz has made.”
                </p>
                <h5 className="text-center text-[#333] text-lg leading-5  lg:leading-9 lg:text-2xl font-bold my-6 font-serif">
                  Greg Stuart
                </h5>
                <div className="flex justify-center gap-2">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </SwiperSlide> */}

          </Swiper>
        </div>
      </div>
      {/* <img className="-mt-5 w-full" src={wave} alt="" /> */}
    </div>
  );
};

export default Testimonial;