import Marquee from "react-fast-marquee";
import partnerLogo1 from '../../assets/Partners Logo/data bricks.png'
import partnerLogo2 from '../../assets/Partners Logo/kore.png'
import partnerLogo3 from '../../assets/Partners Logo/Logocombo_SnapLogic_RGB.png'
import partnerLogo4 from '../../assets/Partners Logo/Micro soft.png'
import partnerLogo5 from '../../assets/Partners Logo/profisee.png'
import partnerLogo6 from '../../assets/Partners Logo/talend.png'
import partnerLogo7 from '../../assets/Partners Logo/PRivitar.png'
import partnerLogo8 from '../../assets/Partners Logo/informatica.png'
import partnerLogo9 from '../../assets/Partners Logo/preciesley work.png'
import wave from '../../assets/Hero Slider.png'
const OurPartners = () => {
  return (
    <div className="py-24 bg-[#FFF]">
      <h1
        style={{
          background:
            "linear-gradient(269deg, #D4E9F3 33.99%, rgba(217, 217, 217, 0.00) 94.38%)",
        }}
        className="text-[#000] text-center text-3xl md:text-5xl font-bold leading-[56px] font-serif w-full py-[18px]"
      >
        Our Partners

       
      </h1>
      <img className="-mt-5 ml-16" src={wave} alt="" />
      <Marquee className="mt-10" speed={120}>
  <img src={partnerLogo1} alt="chatfint.png" />
        <img src={partnerLogo3} alt="ntenx" />
        <img   src={partnerLogo5} alt="profisee.png" />
        <img  src={partnerLogo4} alt="mamneta.png" />
        <img   src={partnerLogo6} alt="yotta" />
        <img  src={partnerLogo2} alt="kore" />
        <img  src={partnerLogo7} alt="privitar" />
        <img  src={partnerLogo8} alt="informatica" />
        <img  src={partnerLogo9} alt="preciesley" />

      </Marquee>
    </div>
  );
};

export default OurPartners;