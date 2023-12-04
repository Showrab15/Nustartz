import "./Testimonial.css";
import person1 from "../../assets/person-1.svg";
import star from "../../assets/star.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="pt-8 pb-10 bgColor">
      <h3 className="text-[#050038] text-5xl font-bold font-Poppins text-right leading-[56px] px-4 md:px-12 mb-14">
        TESTIMONIAL <br /> WALL
      </h3>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
            <div className="bg-[#FFF] rounded-[32px] px-6 py-10">
              <img
                src={person1}
                className="w-[170px] h-[170px] mx-auto"
                alt=""
              />
              <h5 className="text-center text-[#3E005B] text-2xl font-bold leading-9 my-4">
                Greg Stuart
              </h5>
              <div className="flex justify-center gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text-center mt-4">
                “Vestibulum, cum nam non amet consectetur morbi aenean
                condimentum eget. Ultricies integer nunc neque accumsan laoreet.
                Viverra nibh ultrices.”
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[#FFF] rounded-[32px] px-6 py-10">
              <img
                src={person1}
                className="w-[170px] h-[170px] mx-auto"
                alt=""
              />
              <h5 className="text-center text-[#3E005B] text-2xl font-bold leading-9 my-4">
                Greg Stuart
              </h5>
              <div className="flex justify-center gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text-center mt-4">
                “Vestibulum, cum nam non amet consectetur morbi aenean
                condimentum eget. Ultricies integer nunc neque accumsan laoreet.
                Viverra nibh ultrices.”
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[#FFF] rounded-[32px] px-6 py-10">
              <img
                src={person1}
                className="w-[170px] h-[170px] mx-auto"
                alt=""
              />
              <h5 className="text-center text-[#3E005B] text-2xl font-bold leading-9 my-4">
                Greg Stuart
              </h5>
              <div className="flex justify-center gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text-center mt-4">
                “Vestibulum, cum nam non amet consectetur morbi aenean
                condimentum eget. Ultricies integer nunc neque accumsan laoreet.
                Viverra nibh ultrices.”
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[#FFF] rounded-[32px] px-6 py-10">
              <img
                src={person1}
                className="w-[170px] h-[170px] mx-auto"
                alt=""
              />
              <h5 className="text-center text-[#3E005B] text-2xl font-bold leading-9 my-4">
                Greg Stuart
              </h5>
              <div className="flex justify-center gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text-center mt-4">
                “Vestibulum, cum nam non amet consectetur morbi aenean
                condimentum eget. Ultricies integer nunc neque accumsan laoreet.
                Viverra nibh ultrices.”
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[#FFF] rounded-[32px] px-6 py-10">
              <img
                src={person1}
                className="w-[170px] h-[170px] mx-auto"
                alt=""
              />
              <h5 className="text-center text-[#3E005B] text-2xl font-bold leading-9 my-4">
                Greg Stuart
              </h5>
              <div className="flex justify-center gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text-center mt-4">
                “Vestibulum, cum nam non amet consectetur morbi aenean
                condimentum eget. Ultricies integer nunc neque accumsan laoreet.
                Viverra nibh ultrices.”
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg-[#FFF] rounded-[32px] px-6 py-10">
              <img
                src={person1}
                className="w-[170px] h-[170px] mx-auto"
                alt=""
              />
              <h5 className="text-center text-[#3E005B] text-2xl font-bold leading-9 my-4">
                Greg Stuart
              </h5>
              <div className="flex justify-center gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="text-center mt-4">
                “Vestibulum, cum nam non amet consectetur morbi aenean
                condimentum eget. Ultricies integer nunc neque accumsan laoreet.
                Viverra nibh ultrices.”
              </p>
            </div>
        </SwiperSlide>
      </Swiper>

      {/* </div> */}
    </div>
  );
};

export default Testimonial;