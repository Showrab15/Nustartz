import Swiper from 'react-id-swiper';


import clientLogo1 from "../../assets/Clients Logo/chatfint.png";
import clientLogo2 from "../../assets/Clients Logo/give charity.png";
import clientLogo3 from "../../assets/Clients Logo/intenx.png";
import clientLogo4 from "../../assets/Clients Logo/mamneta.png";
import clientLogo5 from "../../assets/Clients Logo/mavio.png";
import clientLogo6 from "../../assets/Clients Logo/yotta.png";
import wave from '../../assets/Hero Slider.png'

const OurClients = () => {
  return (
    <>
     <div 
    className=" mt-8 "
     >
      <div className="bg-[#D4EAF4]" >
      <h1  className="text-[#000] py-1 text-center text-2xl md:text-5xl font-bold leading-[30px] md:leading-[56px] font-serif w-full col-span-1 items-center mb-3 lg:mb-0 md:-ml-4">
          Our Clients
        </h1>
        <img className="-mt-2 w-full lg:block hidden" src={wave} alt="" /> 

      </div>
      <div

        className="py-8 grid grid-cols-1 lg:grid-cols-1 mb-8  "
      >
        
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
          className=" col-span-1 lg:col-span-2"
        >
            <img className="mx-auto cursor-pointer" src={clientLogo1} alt="chatfint.png" />
            <img className="mx-auto  cursor-pointer" src={clientLogo2} alt="give charity.png" />
            <img className="mx-auto  cursor-pointer" src={clientLogo3} alt="intenx.png" />
            <img className="mx-auto  cursor-pointer" src={clientLogo4} alt="mamneta.png" />
            <img className="mx-auto  cursor-pointer" src={clientLogo5} alt="mavio.png" />
            <img className="mx-auto  cursor-pointer" src={clientLogo6} alt="yotta.png" />
        </Swiper>
      </div>
    </div>

    </>
   
  );
};

export default OurClients;