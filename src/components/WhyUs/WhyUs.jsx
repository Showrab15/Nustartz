// import "./WhyUs.css";
// import chart from "../../assets/hi.png"
// import light from "../../assets/light.png"
// import note from "../../assets/note.png"
// import q from "../../assets/q.png"
// import whyUsBottom from "../../assets/whyUsBottom.png"
//  import whyusleftborder from "../../assets/whyusleftborder.png"

// const WhyUs = () => {
//   return (
//     <>
//      <div className="bgColor w-full h-[1268px] overflow-hidden relative bottom-[535px]">
//       <div className="w-[767px] h-[524px] bgImage absolute right-8 -top-80">

//       </div>
//       <div className="flex relative">
//         <div className="flex relative pt-40 ">
//           <img src={whyusleftborder} alt="" />
//           <h3 className="text-[#275998] font-bold text-[98px] leading-[100px]  font-serif">
//             Why <br /> <span className="ml-16 uppercase">us</span>
//           </h3>
//           <h1 className="text-[#6287B1] relative bottom-[85px] right-[55px] ">
//             <img src={q} alt="" />

//           </h1>
//           <p className="w-full md:w-[716px] relative right-[250px] h-[392px] font-semibold text-[45px] leading-[100px] text-[#000] capitalize  mt-80 font-serif">As you grow, we adapt. <br /> Our solutions scale  with <br />  your evolving needs. </p>
//         </div>

//         <div className="w-[836px] h-[836px] rounded-full border-[23px] border-[#6287B1] absolute -right-[460px] top-40">
// 			<div className="w-[266px] h-[266px] border rounded-full bg-[#275998] items-center flex flex-col justify-center -mt-20 ml-16">
// 				<img src={chart} alt="" className="w-[112px] h-[112px] mx-auto" />
// 				<p className="text-center text-xl font-bold text-[#FFF5F5] mt-5 leading-6 font-serif">Scalability</p>
// 			</div>
// 			<div className="w-[266px] h-[266px] border rounded-full bg-[#275998] items-center flex flex-col justify-center mt-16 -ml-32">
// 				<img src={light} alt="" className="w-[112px] h-[112px] mx-auto" />
// 				<p className="text-center text-xl font-bold text-[#FFF5F5] mt-5 leading-6 font-serif">Innovation <br /> at Core</p>
// 			</div>
// 			<div className="w-[266px] h-[266px] border rounded-full bg-[#275998] items-center flex flex-col justify-center mt-24 ml-16">
// 				<img src={note} alt="" className="w-[112px] h-[112px] mx-auto" />
// 				<p className="text-center text-xl font-bold text-[#FFF5F5] mt-5 leading-6 font-serif">Results-Driven <br /> Approach</p>
// 			</div>
// 		</div>
//       </div>

//     </div>
//     <img className="relative bottom-[610px]" src={whyUsBottom} alt="" />
//     </>

//   );
// };

// export default WhyUs;

import "./WhyUs.css";
import chart from "../../assets/hi.png";
import light from "../../assets/light.png";
import note from "../../assets/note.png";
import q from "../../assets/q.png";

const WhyUs = () => {
  return (
    <div className="flex-col flex text-white  bgColor  ">
      <div className="flex mx-auto justify-center pt-28 px-4 relative">
        <h3 className="text-[#275998] font-bold font-serif text-[98px] leading-[100px] -ml-28 md:ml-0">
          Why <br /> <span className="ml-16 ">Us</span>
        </h3>
        <img
          src={q}
          className="absolute left-24 md:left-[180px] top-16 md:top-8"
          alt=""
        />
      </div>
      <div className=" mx-auto mt-8 md:mt-4">
        <div className="mx-auto grid md:grid-cols-3 md:gap-32 gap-10 text-center  items-center">
          <div>
            <div className="bg-[#3595FC] w-[290px] p-5 rounded-[35px] cursor-pointer hover:animate-pulse">
              <img
                className="w-[80px] h-[74px] flex mx-auto"
                src={chart}
                alt=""
              />
              <p className="py-9 text-[16px] font-semibold font-serif">
                As you grow, <br />
                we adapt. Our solutions <br />
                scale with your evolving needs.
              </p>
            </div>
            <h4 className="mx-auto text-[32px] font-serif font-semibold text-[#275998]">
              Scalability
            </h4>
          </div>
          <div>
            <div className=" p-5 bg-[#03254D] mt-8 w-[290px] rounded-[35px] cursor-pointer hover:animate-pulse">
              <img
                className="w-[99px] h-[102px] flex mx-auto"
                src={light}
                alt=""
              />
              <p className="mt-5 text-[16px] font-semibold font-serif">
                We thrive on innovation,
                <br /> delivering cutting-edge <br /> solutions that keep your
                product <br /> ahead of the curve.
              </p>
            </div>
            <h4 className="mx-auto text-[32px] font-serif font-semibold text-[#275998]">
              Innovation <br />
              at Core
            </h4>
          </div>

          <div>
            <div className=" p-5 w-[290px] mt-6 rounded-[35px] cursor-pointer bg-[#6287B1] hover:animate-pulse">
              <img
                className="w-[94px] h-[94px] flex mx-auto"
                src={note}
                alt=""
              />
              <p className="py-7 text-[16px] font-semibold font-serif">
                Your success is our priority, <br /> and we measure it by your
                achievements.
              </p>
            </div>
            <h4 className="mx-auto text-[32px] font-serif font-semibold text-[#275998]">
              Results-Driven <br /> Approach
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
