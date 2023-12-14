import "./Testimonial.css";
import person1 from "../../assets/Testimonials Person/fashionable-young-woman-standing-front-blue-backdrop 1.png";
import person2 from "../../assets/Testimonials Person/medium-shot-smiley-man-posing 1.png";
import person3 from "../../assets/Testimonials Person/mynainsights_logo 1.png";
import person4 from "../../assets/Testimonials Person/low-angle-handsome-smiley-man1.png";
import person5 from "../../assets/Testimonials Person/portrait-good-looking-smiling-arabic-man-suit-attractive-young-businessman-with-beard-moustache-looking-camera-portrait-international-beauty-concept 1.png";
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
    <div className="2xl:w-[1500px] mx-auto">
   
      <div className=" lg:-mt-8 pb-10 bg-[#fff] md:px-10 mx-auto">
        <h3 className="text-[#050038] md:text-[35px] lg:text-[38px] text-[20px] text-center py-6 font-bold font-serif  leading-[30px] md:leading-[56px] px-4 md:px-12  mb-10 md:mb-10 ">
          Discover the experiences of our valued clients{" "}
          <br className="lg:block hidden" /> through their testimonials
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
              <div className="w-full lg:h-[470px] px-6 py-6">
                <img
                  src={person3}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <p className="text-center text-[15px] text-[#999] font-serif mt-16 w-full lg:w-[800px] mx-auto">
                  “NuStartz has been an exceptional partner in digital
                  marketing. Their strategies and dedication have significantly
                  boosted our digital presence. We highly recommend NuStartz for
                  anyone seeking impactful digital marketing solutions.”
                </p>
                <h5 className="text-center text-[#333] text-2xl font-bold leading-9 my-6 font-serif">
                  Myna Insights
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
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person1}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <p className="text-center text-[15px] text-[#999] font-serif mt-16 w-full lg:w-[800px] mx-auto">
                  “NuStartz has been a game-changer for my business. Their
                  digital marketing expertise is top-notch, and {`they've`}{" "}
                  significantly improved my online presence. {`I'm`} thrilled
                  with the results.”
                </p>
                <h5 className="text-center text-[#333] text-2xl font-bold leading-9 my-6 font-serif">
                  Leena George
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
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person2}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <p className="text-center text-[15px] text-[#999] font-serif mt-16 w-full lg:w-[800px] mx-auto">
                  “Working with NuStartz was a game-changer for our e-commerce
                  business. Their digital marketing strategies drove significant
                  growth in our online sales. I highly recommend NuStartz to
                  anyone in the e-commerce world.”
                </p>
                <h5 className="text-center text-[#333] text-2xl font-bold leading-9 my-6 font-serif">
                  Viktor
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
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person4}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <p className="text-center text-[15px] text-[#999] font-serif mt-16 w-full lg:w-[800px] mx-auto">
                  “NuStartz has been a game-changer for my business. Their
                  digital marketing expertise is top-notch, and {`they've`}{" "}
                  significantly improved my online presence. {`I'm`} thrilled
                  with the results.”
                </p>
                <h5 className="text-center text-[#333] text-2xl font-bold leading-9 my-6 font-serif">
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
            <SwiperSlide>
              <div className="w-full h-[470px] px-6 py-6">
                <img
                  src={person5}
                  className="w-[170px] h-[170px] mx-auto"
                  alt=""
                />
                <p className="text-center text-[15px] text-[#999] font-serif mt-16 w-full lg:w-[800px] mx-auto">
                  “NuStartz played a crucial role in enhancing our healthcare{" "}
                  {`practice's`} online presence. Their strategies helped us
                  connect with patients. {`I'm`} grateful for the impact
                  NuStartz has made.”
                </p>
                <h5 className="text-center text-[#333] text-2xl font-bold leading-9 my-6 font-serif">
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <img className="-mt-5 w-full" src={wave} alt="" /> */}
    </div>
  );
};

export default Testimonial;