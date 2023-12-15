// import Siva from "../../assets/Our teams/Siva circle.png";
// import Dinesh from "../../assets/Our teams/Dinesh circle.png";
// import Steve from "../../assets/Our teams/steve circle.png";
// // Leader Info Image:
// import leader1 from "../../assets/Our teams/Pushker circle.png";
// import leader2 from "../../assets/Our teams/alaka circle.png";
// import leader3 from "../../assets/Our teams/Arun circle 1.png";
// import leader4 from "../../assets/Our teams/mohan  circle.png";
// import leader5 from "../../assets/Our teams/Reena Circle 1.png";
// // Social Link image:
// import leftQuote from "../../assets/Our teams/left-quote.png";
// import quote from "../../assets/Our teams/teenyicons_quote-solid.png";
// import "./OurTeam.css";

// const OurTeam = () => {
//   return (
//     <div className="team-bg-cover pb-12 ">
//       <div className=" font-serif py-4">
//         <div className="mx-auto">
//           <h1 className="text-[25px] mt-20 lg:text-[50px] font-normal text-center py-8">
//             MEET OUR <span className="font-extrabold">LEADERS</span>
//           </h1>
//           <p className="font-bold  text-[20px] md:text-[35px] lg:text-[40px] text-center text-[#275998] mb-28">
//             Discover the Collective Expertise, Dedication,{" "}
//             <br className="hidden lg:block" />
//             and Passion That Powers Our Vision
//           </p>
//         </div>
//         <div className="flex flex-col mt-6 gap-28 lg:gap-12 lg:w-[1255px] 2xl:mx-auto lg:mt-[250px]">

//           {/* first box */}
//           <div className="bg-[#275998] rounded-xl  text-white  mx-auto w-full justify-center  flex flex-col md:mt-[190px] lg:mt-0  items-center  xl:ml-0  lg:ml-12 mt-20 ">

//             <div>
//               <img className="lg:w-[402px] lg:h-[504.4px] mx-auto ml-6 -mt-[215px] md:-mt-[290px] lg:-mt-[250px]"
//                 src={Siva}
//                 alt=""
//               />
//             </div>

//             <div className="flex flex-col text-center lg:-mt-[140px] -mt-32 md:-mt-[175px] items-center justify-center">
//               <h3 className="text-[16px] lg:text-[36px] font-bold">
//                 Siva Periyasamy
//               </h3>
//               <h4 className="text-[12px] lg:text-[25px] font-medium ">
//                 Founder/President
//               </h4>

//             </div>

//             <div className="flex  ">
//               <img className="justify-start h-6 w-6 lg:w-8 lg:h-8 " src={leftQuote} alt="" />
//               <p className="font-medium text-center p-2 text-[9px] lg:text-[20px]">
//                 I believe in the power of innovation and the{" "}
//                 limitless potential of
//                 startups.  <br className="lg:block hidden" /> Our team is {" "}
//                 dedicated to nurturing and empowering the{" "}
//                 <br className="lg:block hidden " /> next generation of
//                 entrepreneurs as they <br className="lg:block hidden" /> chart
//                 their course toward success.
//               </p>
//               <img className="h-6 w-6 lg:w-8 lg:h-8  lg:ml-4  " src={quote} alt="" />
//             </div>

//           </div>

//           {/* second box */}
//           {/* <div className="bg-[#275998] text-white lg:h-[310px] p-4 lg:flex items-center mt-28 md:mt-60 lg:mt-0 relative lg:static">
//             <div className="lg:hidden -ml-6 md:ml-40">
//               <img
//                 className="-mt-[200px] md:-mt-80"
//                 src={Steve}
//                 alt=""
//               />
//             </div>
//             <div className="flex flex-col mt-24  lg:-mt-10">
//               <img className="w-8 h-8 md:ml-64 lg:ml-0" src={leftQuote} alt="" />
//               <p className="text-center md:text-[13px] lg:text-[20px]  lg:w-[569px] font-semibold lg:-ml-11 leading-normal">
//                 Elevating success in startup tech with{" "}
//                 <br className="md:block hidden" /> unwavering support—where
//                 collaboration <br className="md:block hidden" />
//                 sparks innovation, determination fuels
//                 <br className="md:block hidden " /> progress, and together, we
//                 script the <br className="md:block hidden" /> success stories of
//                 tomorrow.
//               </p>
//               <img className="w-8 h-8 ml-[320px] md:ml-[550px] lg:ml-[410px]" src={quote} alt="" />
//             </div>
//             <div className="flex flex-col text-center lg:mt-6 items-center justify-center lg:ml-16 absolute lg:static top-0 md:-top-4 bottom-16 md:bottom-0 left-0 right-0">
//               <h3 className="text-3xl md:md:text-[35px] font-bold mb-2">
//                 Steve Bakther
//               </h3>
//               <h4 className="text-3xl md:text-4xl font-medium mb-3 lg:mb-6 lg:w-[300px]">
//                 Chief Operating <br /> Officer
//               </h4>
//               <img
//                 className="w-[57px] h-[57px] mx-auto lg:mr-20"
//                 src={linkedInIcon}
//                 alt=""
//               />
//             </div>
//             <div className="hidden lg:block lg:-mr-[170px] mt-12">
//               <img className="" src={Steve} alt="" />
//             </div>
//           </div> */}

//           {/* Third box */}
//           {/* <div className="bg-[#275998] text-white lg:h-[310px] lg:w-[1255px] p-4 lg:flex items-center mt-28  md:mt-[190px] lg:mt-0 lg:ml-24">
//             <div>
//               <img
//                 className="lg:w-[592px] lg:h-[560px]  md:ml-40 lg:-ml-[170px] -mt-[215px] md:-mt-[290px] lg:mt-10"
//                 src={Dinesh}
//                 alt=""
//               />
//             </div>
//             <div className="flex flex-col text-center -mt-[85px] md:-mt-28 lg:mt-8 lg:-ml-[220px] items-center justify-center">
//               <h3 className="text-3xl md:text-4xl font-bold mb-2">Dinesh</h3>
//               <h4 className="text-3xl md:text-4xl font-medium mb-3 lg:mb-6">
//                 Chief Technology <br /> Officer
//               </h4>
//               <img
//                 className="w-[57px] h-[57px] mx-auto lg:mr-0"
//                 src={linkedInIcon}
//                 alt=""
//               />
//             </div>
//             <div className="flex flex-col lg:ml-36 -mt-3 md:mt-1 lg:-mt-10">
//               <img className="w-8 h-8 ml-[320px] md:ml-[590px] lg:ml-[450px]" src={quote} alt="" />
//               <p className="font-semibold text-center md:text-[13px] lg:text-[20px] md:mt-0  mt-8">
//                 My passion lies in harnessing technology to
//                 <br className="md:block hidden" /> drive transformative change.
//                 {`I'm`} here to <br className="md:block hidden" />
//                 guide and empower startups, leveraging
//                 <br className="md:block hidden " /> cutting-edge solutions to
//                 turn their visions <br className="md:block hidden" /> into
//                 reality.
//               </p>
//               <img className="w-8 h-8 md:ml-64 lg:ml-4" src={leftQuote} alt="" />
//             </div>
//           </div> */}

//         </div>
//       </div>










//       {/* Our Leader Info: */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:max-w-screen-2xl mx-auto">
//         <div className="flex flex-col gap-3">
//           {/* 1st Leader */}
//           <div>
//             <img
//               src={leader1}
//               className="md:w-[521px] mx-auto mb-[10px]"
//               alt="Pushker circle.png"
//             />
//             <div className="w-full lg:[493px">
//               <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
//                 Pushkar
//               </h3>
//               <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10 mb-1">
//                 Strategic Advisor <br /> Ex-Google, Ex-Microsoft
//               </h5>
//               <p className="text-[#000] text-xl font-medium font-serif text-center">
//                 (Principal Architect)
//               </p>
//             </div>
//           </div>
//           {/* 2nd Leader */}
//           <div>
//             <img
//               src={leader2}
//               className="md:w-[521px] mx-auto mb-[10px]"
//               alt="alaka circle.png"
//             />
//             <div className="w-full lg:[493px">
//               <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
//                 Alakananda Goswami
//               </h3>
//               <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10">
//                 Technical Program Manager
//               </h5>
//             </div>
//           </div>
//         </div>
//         {/* 3rd Leader */}
//         <div className="flex flex-col lg:items-center lg:justify-center">
//           <img
//             src={leader3}
//             className="md:w-[521px] mx-auto mb-[10px]"
//             alt="Arun circle 1.png"
//           />
//           <div className="w-full lg:[493px">
//             <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
//               Arun Balakrishnan
//             </h3>
//             <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10">
//               Director, Full Stack Engineer
//             </h5>
//           </div>
//         </div>
//         <div className="flex flex-col gap-3">
//           {/* 4th Leader */}
//           <div>
//             <img
//               src={leader4}
//               className="md:w-[521px] mx-auto mb-[10px]"
//               alt="mohan  circle.png"
//             />
//             <div className="w-full lg:[493px">
//               <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
//                 Mohan
//               </h3>
//               <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10 mb-1">
//                 Strategic Advisor, <br /> Ex- Microsoft
//               </h5>
//               <p className="text-[#000] text-xl font-medium font-serif text-center">
//                 (Principal Cloud Solution Architect)
//               </p>
//             </div>
//           </div>
//           {/* 5th Leader */}
//           <div>
//             <img
//               src={leader5}
//               className="md:w-[521px] mx-auto mb-[10px]"
//               alt="Reena Circle 1.png"
//             />
//             <div className="w-full lg:[493px">
//               <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
//                 Reena Dejgambhir
//               </h3>
//               <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10">
//                 Business Development Manager
//               </h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;















import Siva from "../../assets/Our teams/Siva circle.png";
import Dinesh from "../../assets/Our teams/Dinesh circle.png";
import Steve from "../../assets/Our teams/steve circle.png";
// Leader Info Image:
import leader1 from "../../assets/Our teams/Pushker circle.png";
import leader2 from "../../assets/Our teams/alaka circle.png";
import leader3 from "../../assets/Our teams/Arun circle 1.png";
import leader4 from "../../assets/Our teams/mohan  circle.png";
import leader5 from "../../assets/Our teams/Reena Circle 1.png";
// Social Link image:
import banner from "../../assets/AboutUsBanner.png";
import leftQuote from "../../assets/Our teams/left-quote.png";
import quote from "../../assets/Our teams/teenyicons_quote-solid.png";
import "./OurTeam.css";
import wave from '../../assets/Hero Slider.png'

const OurTeam = () => {
  return (
    <div className="font-serif pt-12">
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full 2xl:h-[700px] lg:h-[534px]  h-[400px] md:h-[350px] mx-auto flex justify-center items-center"
      >
        <h3 className="text-[#275998] text-lg lg:text-[35px] md:leading-[28px] lg:leading-normal font-bold text-center px-2 md:px-0">
          Empowering startups with innovation and expertise{" "}
          <br className="hidden md:block xl:block" /> Our dedicated support propels your
          journey from concept to triumph
        </h3>
      </div>
      <img className="-mt-2 w-full md:block hidden" src={wave} alt="" />

      <div className="  mx-auto team-bg-cover py-4 -mt-6 2xl:-mt-12">

        <div className="max-w-6xl mx-auto">

          <div className="mx-auto">
            <h1 className="text-[20px]  lg:text-[40px] font-normal text-center py-8">
              MEET OUR <span className="text-[#3595FC]">LEADERS</span>
            </h1>
            <p className="font-bold  text-[15px] lg:text-[35px] md:text-[25px]  text-center text-[#275998] mb-28">
              <span className="text-[#3595FC]">Discover</span> the Collective Expertise, Dedication,{" "}
              <br className="hidden md:block" />
              and Passion That Powers Our  <span className="text-[#3595FC]">Vision</span>
            </p>
          </div>

          <div className=" flex flex-col mt-6 gap-28 lg:gap-12 ] mx-auto lg:mt-[250px]">
            {/* first box */}
            <div className="bg-[#275998] rounded-xl text-white  mx-auto w-full justify-center  flex flex-col md:mt-[190px] lg:mt-0  items-center  mt-20 ">
              <div>
                <img
                  className="lg:w-[402px] lg:h-[504.4px] mx-auto ml-6 -mt-[215px] md:-mt-[290px] lg:-mt-[250px]"
                  src={Siva}
                  alt=""
                />
              </div>

              <div className="flex flex-col text-center lg:-mt-[140px] -mt-[88px] md:-mt-[175px] items-center justify-center">
                <h3 className=" md:text-[25px] text-[18px] font-bold mt-3">
                  Siva Periyasamy
                </h3>
                <h4 className="text-[12px] md:text-[20px] font-medium ">
                  Founder/President
                </h4>
              </div>

              <div className="flex  ">
                <img
                  className="justify-start h-6 w-6 lg:w-8 lg:h-8 "
                  src={leftQuote}
                  alt=""
                />
                <p className="font-medium text-center p-2 text-[9px] md:text-[15px] pb-8">
                  I believe in the power of innovation and the limitless potential
                  of startups. <br className="lg:block hidden" /> Our team is{" "}
                  dedicated to nurturing and empowering the{" "}
                  <br className="lg:block hidden " /> next generation of
                  entrepreneurs as they <br className="lg:block hidden" /> chart
                  their course toward success.
                </p>
                <img className="h-6 w-6 lg:w-8 lg:h-8" src={quote} alt="" />
              </div>
            </div>

            {/* second box */}
            <div className="bg-[#275998] rounded-xl text-white  mx-auto w-full justify-center   flex flex-col items-center  xl:ml-0   mt-32 md:mt-[210px]">
              <div>
                <img
                  className="-ml-3 lg:ml-0 lg:w-[402px] lg:h-[504.4px] mx-auto -mt-[215px] md:-mt-[290px] lg:-mt-[250px]"
                  src={Steve}
                  alt=""
                />
              </div>

              <div className="flex flex-col text-center lg:-mt-[140px] -mt-32 md:-mt-[175px] items-center justify-center">
                <h3 className="md:text-[25px] text-[18px] font-bold mt-3">
                  Steve Bakther
                </h3>
                <h4 className="text-[12px] md:text-[20px] font-medium ">
                  Chief Operating Officer
                </h4>
              </div>

              <div className="flex">
                <img
                  className="justify-start h-6 w-6 lg:w-8 lg:h-8 "
                  src={leftQuote}
                  alt=""
                />
                <p className="font-medium text-center p-2 text-[9px] md:text-[15px] pb-8">
                  Elevating success in startup tech with unwavering support—where{" "}
                  <br className="lg:block hidden" /> collaboration sparks
                  innovation, determination fuels
                  <br className="lg:block hidden " /> progress, and together, we
                  script the <br className="lg:block hidden" /> success stories of
                  tomorrow.
                </p>
                <img className="h-6 w-6 lg:w-8 lg:h-8" src={quote} alt="" />
              </div>
            </div>

            {/* 3rd box */}
            <div className="bg-[#275998] rounded-xl text-white  mx-auto w-full justify-center  flex flex-col items-center  xl:ml-0  lg:ml-12 mt-32 md:mt-[210px]">
              <div>
                <img
                  className="lg:w-[402px] lg:h-[504.4px] mx-auto -mt-[215px] md:-mt-[290px] lg:-mt-[250px]"
                  src={Dinesh}
                  alt=""
                />
              </div>

              <div className="flex flex-col text-center lg:-mt-[140px] -mt-32 md:-mt-[175px] items-center justify-center">
                <h3 className="md:text-[25px] text-[18px] font-bold mt-6">
                  Dinesh
                </h3>
                <h4 className="text-[12px] md:text-[20px] font-medium ">
                  Chief Technology Officer
                </h4>
              </div>

              <div className="flex">
                <img
                  className="justify-start h-6 w-6 lg:w-8 lg:h-8 "
                  src={leftQuote}
                  alt=""
                />
                <p className="font-medium text-center p-2 text-[9px] md:text-[15px] pb-8">
                  My passion lies in harnessing technology to
                  <br className="lg:block hidden" /> drive transformative change.
                  {`I'm`} here to
                  <br className="lg:block hidden " /> guide and empower startups,
                  leveraging <br className="lg:block hidden" /> cutting-edge
                  solutions to turn their visions into reality.
                </p>
                <img className="h-6 w-6 lg:w-8 lg:h-8" src={quote} alt="" />
              </div>
            </div>
          </div>


          {/* Our Leader Info: */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mx-auto">
            <div className="flex flex-col gap-3">
              {/* 1st Leader */}
              <div>
                <img
                  src={leader1}
                  className="md:w-[521px] mx-auto mb-[10px]"
                  alt="Pushker circle.png"
                />
                <div className="w-full lg:[493px">
                  <h3 className="text-[#000] md:text-[25px] text-[18px] font-bold font-serif text-center mb-2">
                    Pushkar
                  </h3>
                  <h5 className="text-[#000] md:text-[20px] text-[13px] font-medium font-serif text-center  mb-1">
                    Strategic Advisor <br /> Ex-Google, Ex-Microsoft
                  </h5>
                  <p className="text-[#000] md:text-xl text-sm font-medium font-serif text-center">
                    (Principal Architect)
                  </p>
                </div>
              </div>
              {/* 2nd Leader */}
              <div>
                <img
                  src={leader2}
                  className="md:w-[521px] mx-auto mb-[10px]"
                  alt="alaka circle.png"
                />
                <div className="w-full lg:[493px">
                  <h3 className="text-[#000] md:text-[25px] text-[18px] font-bold font-serif text-center mb-2">
                    Alakananda Goswami
                  </h3>
                  <h5 className="text-[#000] md:text-[20px] text-[13px] font-medium font-serif text-center leading-10">
                    Technical Program Manager
                  </h5>
                </div>
              </div>
            </div>
            {/* 3rd Leader */}
            <div className="flex flex-col lg:items-center lg:justify-center">
              <img
                src={leader3}
                className="md:w-[521px] mx-auto mb-[10px]"
                alt="Arun circle 1.png"
              />
              <div className="w-full lg:[493px">
                <h3 className="text-[#000] md:text-[25px] text-[18px] font-bold font-serif text-center mb-2">
                  Arun Balakrishnan
                </h3>
                <h5 className="text-[#000] md:text-[20px] text-[13px] font-medium font-serif text-center leading-10">
                  Director, Full Stack Engineer
                </h5>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* 4th Leader */}
              <div>
                <img
                  src={leader4}
                  className="md:w-[521px] mx-auto mb-[10px]"
                  alt="mohan  circle.png"
                />
                <div className="w-full lg:[493px">
                  <h3 className="text-[#000] md:text-[25px] text-[18px] font-bold font-serif text-center mb-2">
                    Mohan
                  </h3>
                  <h5 className="text-[#000] md:text-[20px] text-[13px] font-medium font-serif text-center  mb-1">
                    Strategic Advisor, <br /> Ex- Microsoft
                  </h5>
                  <p className="text-[#000] md:text-xl text-sm font-medium font-serif text-center">
                    (Principal Cloud Solution Architect)
                  </p>
                </div>
              </div>
              {/* 5th Leader */}
              <div>
                <img
                  src={leader5}
                  className="md:w-[521px] mx-auto mb-[10px]"
                  alt="Reena Circle 1.png"
                />
                <div className="w-full lg:[493px">
                  <h3 className="text-[#000] md:text-[25px] text-[18px] font-bold font-serif text-center mb-2">
                    Reena Dejgambhir
                  </h3>
                  <h5 className="text-[#000] md:text-[20px] text-[13px] font-medium font-serif text-center leading-10">
                    Business Development Manager
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
};

export default OurTeam;