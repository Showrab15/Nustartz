import partnerLogo1 from '../../assets/Partners Logo/data bricks.png'
import partnerLogo2 from '../../assets/Partners Logo/kore.png'
import partnerLogo3 from '../../assets/Partners Logo/Logocombo_SnapLogic_RGB.png'
import partnerLogo4 from '../../assets/Partners Logo/Micro soft.png'
import partnerLogo5 from '../../assets/Partners Logo/profisee.png'
import partnerLogo6 from '../../assets/Partners Logo/talend.png'
import partnerLogo7 from '../../assets/Partners Logo/PRivitar.png'
import partnerLogo8 from '../../assets/Partners Logo/informatica.png'
import partnerLogo9 from '../../assets/Partners Logo/preciesley work.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const OurPartners = () => {
  return (


    <div className="">
      <div

        className="py-12 grid grid-cols-1 lg:grid-cols-3  bg-white"
      >
        <h1 className="text-[#000] text-center text-3xl md:text-5xl font-bold leading-[56px] font-serif w-full col-span-1 items-center mb-3 lg:mb-0">
          Our Partners
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={500}
          loop={true}
          showsPagination={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper col-span-1 lg:col-span-2 mx-auto"
        >
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo1} alt="chatfint.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo2} alt="give charity.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo3} alt="intenx.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo4} alt="mamneta.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo5} alt="mavio.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo6} alt="yotta.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo7} alt="yotta.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo8} alt="yotta.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={partnerLogo9} alt="yotta.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartners;