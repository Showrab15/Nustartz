import "./WhyUs.css";
import chart from "../../assets/hi.png"
import light from "../../assets/light.png"
import note from "../../assets/note.png"
import q from "../../assets/q.png"
import whyUsBottom from "../../assets/whyUsBottom.png"
 import whyusleftborder from "../../assets/whyusleftborder.png"

const WhyUs = () => {
  return (
    <>
     <div className="bgColor w-full h-[1268px] overflow-hidden relative bottom-[535px]">
      <div className="w-[767px] h-[524px] bgImage absolute right-8 -top-80">
        
      </div>
      <div className="flex relative">
        <div className="flex relative pt-40 ">
          <img src={whyusleftborder} alt="" />
          <h3 className="text-[#275998] font-bold text-[98px] leading-[100px]  font-serif">
            Why <br /> <span className="ml-16 uppercase">us</span>
          </h3>
          <h1 className="text-[#6287B1] relative bottom-[85px] right-[55px] ">
            <img src={q} alt="" />

          </h1>
          <p className="w-full md:w-[716px] relative right-[250px] h-[392px] font-semibold text-[45px] leading-[100px] text-[#000] capitalize  mt-80 font-serif">As you grow, we adapt. <br /> Our solutions scale  with <br />  your evolving needs. </p>
        </div>
        
        <div className="w-[836px] h-[836px] rounded-full border-[23px] border-[#6287B1] absolute -right-[460px] top-40">
			<div className="w-[266px] h-[266px] border rounded-full bg-[#275998] items-center flex flex-col justify-center -mt-20 ml-16">
				<img src={chart} alt="" className="w-[112px] h-[112px] mx-auto" />
				<p className="text-center text-xl font-bold text-[#FFF5F5] mt-5 leading-6 font-serif">Scalability</p>
			</div>
			<div className="w-[266px] h-[266px] border rounded-full bg-[#275998] items-center flex flex-col justify-center mt-16 -ml-32">
				<img src={light} alt="" className="w-[112px] h-[112px] mx-auto" />
				<p className="text-center text-xl font-bold text-[#FFF5F5] mt-5 leading-6 font-serif">Innovation <br /> at Core</p>
			</div>
			<div className="w-[266px] h-[266px] border rounded-full bg-[#275998] items-center flex flex-col justify-center mt-24 ml-16">
				<img src={note} alt="" className="w-[112px] h-[112px] mx-auto" />
				<p className="text-center text-xl font-bold text-[#FFF5F5] mt-5 leading-6 font-serif">Results-Driven <br /> Approach</p>
			</div>
		</div>
      </div> 
     
      
    </div>
    <img className="relative bottom-[610px]" src={whyUsBottom} alt="" />
    </>
   
  );
};

export default WhyUs;