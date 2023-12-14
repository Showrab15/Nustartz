import partnerLogo1 from '../../assets/Partners Logo/data bricks.png'
import partnerLogo2 from '../../assets/Partners Logo/kore.png'
import partnerLogo3 from '../../assets/Partners Logo/Logocombo_SnapLogic_RGB.png'
import partnerLogo4 from '../../assets/Partners Logo/Micro soft.png'
import partnerLogo5 from '../../assets/Partners Logo/profisee.png'
import partnerLogo6 from '../../assets/Partners Logo/talend.png'
import partnerLogo7 from '../../assets/Partners Logo/PRivitar.png'
import partnerLogo8 from '../../assets/Partners Logo/informatica.png'
import partnerLogo9 from '../../assets/Partners Logo/preciesley work.png'
import Marquee from "react-fast-marquee";

import wave from '../../assets/Hero Slider.png'

const OurPartners = () => {
  return (
    <>
    <div 
   className=" mt-8 "
    >
     <div className="bg-[#D4EAF4]" >
     <h1  className="text-[#000] py-1 text-center text-2xl md:text-5xl font-bold leading-[30px] md:leading-[56px] font-serif w-full col-span-1 items-center mb-3 lg:mb-0 md:-ml-4">
         Our Partners
       </h1>
       <img className="-mt-2 w-full lg:block hidden" src={wave} alt="" /> 

     </div>
     <div

       className="py-8 grid grid-cols-1 lg:grid-cols-1 mb-8  "
     >
      
        {/* <Swiper
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
          className=" col-span-1 lg:col-span-2 mx-auto"
        >
            <img className="mx-auto cursor-pointer" src={partnerLogo1} alt="chatfint.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo2} alt="give charity.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo3} alt="intenx.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo4} alt="mamneta.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo5} alt="mavio.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo6} alt="yotta.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo7} alt="yotta.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo8} alt="yotta.png" />
            <img className="mx-auto cursor-pointer" src={partnerLogo9} alt="yotta.png" />
        </Swiper> */}

        <Marquee speed={40}
        autoFill= {false}
        >
        <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo1} alt="chatfint.png"  />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo2} alt="give charity.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo3} alt="intenx.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo4} alt="mamneta.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo5} alt="mavio.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo6} alt="yotta.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo7} alt="yotta.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo8} alt="yotta.png" />
            <img  style={{ marginRight: '20px' }}  className="mx-auto cursor-pointer" src={partnerLogo9} alt="yotta.png" />
  </Marquee>
        </div>
    </div>

    </>
  );
};

export default OurPartners;