import Marquee from "react-fast-marquee";
import clientLogo1 from '../../assets/Clients Logo/chatfint.png'
import clientLogo2 from '../../assets/Clients Logo/give charity.png'
import clientLogo3 from '../../assets/Clients Logo/intenx.png'
import clientLogo4 from '../../assets/Clients Logo/mamneta.png'
import clientLogo5 from '../../assets/Clients Logo/mavio.png'
import clientLogo6 from '../../assets/Clients Logo/yotta.png'
import wave from '../../assets/Hero Slider.png'

const OurClients = () => {
  return (
    <div className="py-16 bg-[#FFF]">
     <h1
        style={{
          background:
            "linear-gradient(269deg, #D4E9F3 33.99%, rgba(217, 217, 217, 0.00) 94.38%)",
        }}
        className="text-[#000] text-center text-3xl md:text-5xl font-bold leading-[56px] font-serif w-full py-[18px]"
      >
        Our Clients

       
      </h1>
      <img className="-mt-5 ml-16" src={wave} alt="" />
      <Marquee className="mt-10" speed={120}>
  <img src={clientLogo1} alt="chatfint.png" />
        <img src={clientLogo3} alt="ntenx.png" />
        <img src={clientLogo5} alt="mavio.png" />
        <img src={clientLogo4} alt="mamneta.png" />
        <img src={clientLogo6} alt="yotta.png" />
        <img src={clientLogo2} alt="give charity.png" />

      </Marquee>
    </div>
  );
};

export default OurClients;