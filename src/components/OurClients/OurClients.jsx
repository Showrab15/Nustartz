

import clientLogo1 from "../../assets/Clients Logo/chatfint.png";
import clientLogo2 from "../../assets/Clients Logo/give charity.png";
import clientLogo3 from "../../assets/Clients Logo/intenx.png";
import clientLogo4 from "../../assets/Clients Logo/mamneta.png";
import clientLogo5 from "../../assets/Clients Logo/mavio.png";
import clientLogo6 from "../../assets/Clients Logo/yotta.png";
import clientLogo7 from "../../assets/Clients Logo/mynainsights_logo 1.png";
import wave from '../../assets/Hero Slider.png'
import Marquee from "react-fast-marquee";

const OurClients = () => {
  return (
    <>
     <div 
    className=" mt-8 "
     >
      <div className="bg-[#D4EAF4]" >
      <h1  className="text-[#000] py-1 text-center text-2xl md:text-[35px] font-bold leading-[30px] md:leading-[56px] font-serif w-full col-span-1 items-center mb-3 lg:mb-0 md:-ml-4">
          Our <span className="text-[#3595FC]">Clients</span>
        </h1>
        <img className="-mt-2 w-full lg:block hidden" src={wave} alt="" /> 

      </div>
      <div

        className="py-2 grid grid-cols-1 lg:grid-cols-1  "
      >
        
        
        <Marquee speed={40}
                autoFill= {false}

        >
                      <img  style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo7} alt="myna" />

        <img  style={{ marginRight: '20px' }} className="mx-auto cursor-pointer" src={clientLogo1} alt="chatfint" />
            <img  style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo2} alt="give charity" />
            <img  style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo3} alt="intenx" />
            <img  style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo4} alt="mamneta" />
            <img  style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo5} alt="mavio" />
            <img  style={{ marginRight: '20px' }} className="mx-auto  cursor-pointer" src={clientLogo6} alt="yotta" />
  </Marquee>
      </div>
    </div>

    </>
   
  );
};

export default OurClients;