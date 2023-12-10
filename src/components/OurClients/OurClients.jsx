import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import clientLogo1 from "../../assets/Clients Logo/chatfint.png";
import clientLogo2 from "../../assets/Clients Logo/give charity.png";
import clientLogo3 from "../../assets/Clients Logo/intenx.png";
import clientLogo4 from "../../assets/Clients Logo/mamneta.png";
import clientLogo5 from "../../assets/Clients Logo/mavio.png";
import clientLogo6 from "../../assets/Clients Logo/yotta.png";

const OurClients = () => {
  return (
    <div className="mb-8 ">
      <div

        className="py-8 grid grid-cols-1 lg:grid-cols-3 mb-4 bg-white"
      >
        <h1 className="text-[#000] text-center text-3xl md:text-5xl font-bold leading-[56px] font-serif w-full col-span-1 items-center mb-3 lg:mb-0 md:-ml-4">
          Our Clients
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
          className="mySwiper col-span-1 lg:col-span-2"
        >
          <SwiperSlide>
            <img className="mx-auto" src={clientLogo1} alt="chatfint.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={clientLogo2} alt="give charity.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={clientLogo3} alt="intenx.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={clientLogo4} alt="mamneta.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={clientLogo5} alt="mavio.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={clientLogo6} alt="yotta.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurClients;