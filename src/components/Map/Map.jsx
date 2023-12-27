// import map from '../../assets/map1.png'
// import wave from '../../assets/Hero Slider.png'
// import './map.css'
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// const Map = () => {

//   const [clickedLocation, setClickedLocation] = useState(null);
//   const [clickedLocations, setClickedLocations] = useState(Array(8).fill(false));

//   const handleClick = (index) => {
//     setClickedLocation(index);
//   };

//   useEffect(() => {
//     let hideIndicators;
//     if (clickedLocation !== null) {
//       const updatedClickedLocations = Array(8).fill(false);
//       updatedClickedLocations[clickedLocation] = true;
//       setClickedLocation(null);
//       setClickedLocations(updatedClickedLocations);

//       hideIndicators = setTimeout(() => {
//         setClickedLocations(Array(8).fill(false));
//       }, 20); // Hide the indicators after 200 seconds (200000 milliseconds)
//     }

//     return () => clearTimeout(hideIndicators);
//   }, [clickedLocation]);


//   return (
//     <div className="mt-20">
//       <div className="mt-16 lg:mb-20 md:mb-52  mb-[1550px]  py-14">
//         <h1 className="text-center  md:pl-8 md:text-[25px] text-[15px] lg:text-[35px] font-bold font-serif leading-[55px] text-[#050038] pb-10">GLOBAL FOOT PRINT</h1>
//         <div className="worldbg md:h-[600px] md:w-[700px] lg:h-[750px] lg:w-[1000px] h-[300px] w-[300px] mx-auto">
//           <img className="relative md:top-[110px] lg:top-[80px] top-[70px]" src={map} alt="" />


//           {/* first column locations */}
//           <div className="relative md:ml-0 md:right-28 lg:right-36 md:bottom-[450px] lg:bottom-[600px] mt-20 md:mt-0 mx-auto">

//             <div className="my-3 mx-auto grid md:ml-[80px] ml-0 md:grid-cols-2  lg:grid-cols-3 lg:gap-60 md:gap-[200px] gap-4 text-white">


// first location box

//               <div className="w-[310px] h-[190px] rounded-2xl font-serif text-[15px] md:ml-[20px] ml-0 lg:ml-0  main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>

//                 <Link to="https://www.google.com/maps/place/Numentica/@33.8258641,-118.356088,14.36z/data=!3m1!5s0x80dd4b2c2910c783:0x73d3569ca775b086!4m6!3m5!1s0x80dd4b2c288f5ac9:0xb30be82826f8dbf1!8m2!3d33.8303227!4d-118.3543569!16s%2Fg%2F11f63yfllx?entry=ttu">
//                   <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br /> Numentica LLC  3868 W Carson St, <br />Suite 300 Torrance, CA 90503, USA <br />
//                     contact@numentica.com <br /></p>

//                   <div className="flex justify-between font-serif">
//                     <p className="pl-4 font-serif"> +1310-818-3415</p>
//                     {clickedLocations[0] ? (
//                       <div className="location-container  relative 2xl:top-7 2xl:right-11 lg:right-11 lg:top-7">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(0)}
//                       >
//                         1
//                       </p>
//                     )}



//                   </div>
//                 </Link>
//               </div >

//               {/* second box location */}
//               <div className="md:relative md:-bottom[25px] lg:bottom-16 md:ml-[25px] w-[310px] h-[190px] rounded-2xl font-serif text-[15px] py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                 <Link to="https://www.google.com/maps/search/numentica+1+Poultry,+London+EC2R+BEJ,+United+Kingdom/@51.51335,-0.0931208,17z/data=!3m1!4b1?entry=ttu">
//                   <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
//                     1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
//                     contact@numentica.com</p>


//                   <div className="flex justify-between">
//                     <p className="pl-4 font-serif"> +44-20-3371-1046</p>
//                     {clickedLocations[1] ? (
//                       <div className="location-container 2xl:top-[105px] 2xl:right-[423px] lg:right-[424px] lg:top-[105px]">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(1)}
//                       >
//                         2
//                       </p>
//                     )}
//                   </div>
//                 </Link>

//               </div >

//               {/* third location box */}
//               <div className="lg:ml-[16px] md:ml-[435px]  md:-bottom-[35px] relative lg:bottom-16 w-[310px] h-[190px] rounded-2xl font-serif text-[15px]  py-4 main " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                 <Link to="https://www.google.com/maps/place/Numentica+india+Pvt+Ltd/@13.0035388,77.6585652,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae119a54f07f2d:0x23e61d6ce6b5fda2!8m2!3d13.0035336!4d77.6611401!16s%2Fg%2F11fqc9p5j3?entry=ttu">
//                   <p className="my-auto flex items-center space-y-2  px-4 ">Bangalore Office Numentica <br /> Technologies Pvt Ltd, <br />
//                     #202, 1st AA Cross, 2nd Main Road, <br />
//                     Kasturinagar, Bengaluru-560043, India</p>

//                   <div className="flex justify-between">
//                     <p className="pl-4">contact@numentica.com</p>
//                     {clickedLocations[2] ? (
//                       <div className="location-container 2xl:top-[50px] 2xl:right-[516px] lg:right-[516px] lg:top-[50px]">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(2)}
//                       >
//                         3
//                       </p>
//                     )}
//                   </div>

//                 </Link>

//               </div >

//             </div>

//           </div>



//           {/* second column locations */}

//           <div className="relative   md:ml-0  lg:right-[60px] md:right-[35px] lg:bottom-[500px] md:bottom-[830px] mx-auto">

//             <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 md:gap-[280px] gap-4 text-white">

//               <div className="w-[310px] h-[190px] rounded-2xl font-serif text-[15px] md:ml-[25px] lg:ml-0 ml-0 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                 Austin Office, Numentica LLC


//                 <Link to="https://www.google.com/maps/place/Numentica/@12.0086708,-99.8438633,3z/data=!3m1!5s0x865b32b75e2c711d:0x25eb54cefc58ed22!4m6!3m5!1s0x865b32b632b238ed:0xfbc85cd76b933540!8m2!3d30.456952!4d-97.793265!16s%2Fg%2F11rghq3s6d?entry=ttu">
//                   <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Austin Office, Numentica LLC <br /> 13706 Research Blvd,<br />Suite 305, Austin, TX 78750, USA<br />
//                     contact@numentica.com <br /></p>

//                   <div className="flex justify-between font-serif">
//                     <p className="pl-4 font-serif"> +1310-818-3415</p>
//                     {clickedLocations[3] ? (
//                       <div className="location-container 2xl:bottom-[200px] 2xl:left-[433px]  lg:bottom-[203px] lg:left-[430px]">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(3)}
//                       >
//                         4
//                       </p>
//                     )}
//                   </div>
//                 </Link>

//               </div >


//               <div className="relative lg:bottom-16 md:right-[50px] lg:right-0 lg:left-0 w-[310px] h-[190px] rounded-2xl font-serif text-[15px] py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                 <Link to="https://www.google.com/maps/place/Dubai+Media+City+Building+5+-+Al+Sufouh+-+Al+Sufouh+2+-+Dubai+-+United+Arab+Emirates/@25.0965277,55.1535914,17z/data=!4m7!3m6!1s0x3e5f6b43c7f5dd7d:0xdfd153b19df4e607!8m2!3d25.0965229!4d55.1561663!15sCj5ETUMtQkxEMDUtVkQtR09PLTIzNiBHcm91bmQgRmxvb3IsIERNQzUgRHViYWkgTWVkaWEgQ2l0eSBEdWJhaZIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F12vtkn9kb?entry=tts">
//                   <p className="my-auto flex items-center space-y-2  px-4 font-serif">Dubai Office
//                     Numentica Middle East FZ-LLC <br />
//                     DMC-BLD05-VD-GOO-236 Ground Floor,
//                     <br /> United Arab Emirates
//                     <br />
//                     contact@numentica.com</p>


//                   <div className="flex justify-between">
//                     <p className="pl-4 font-serif"> +971 50 618 3063</p>
//                     {clickedLocations[4] ? (
//                       <div className="location-container 2xl:bottom-[155px] 2xl:left-[95px] lg:bottom-[155px] lg:left-[95px]">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(4)}
//                       >
//                         5
//                       </p>
//                     )}
//                   </div>

//                 </Link>

//               </div >

//               {/* sixth locatio box */}Numentica Technologies Pvt Ltd,


//               <div className="relative md:ml-[25px] ml-0  md:bottom-[260px]  lg:right-0 lg:bottom-32 lg:ml-[35px] w-[310px] h-[190px] rounded-2xl font-serif text-[15px]  py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                 <Link to="https://www.google.com/maps/search/+Numentica+Technologies+Pvt+Ltd,++Arima+Wakefield+Building,+3rd+Floor,+281+Avinashi+Road,+PKD+Nagar,+Peelamedu,+Coimbatore-641004,+India/@11.0264519,77.0057416,17.18z?entry=ttu">
//                   <p className="my-auto flex items-center space-y-2  px-4 ">Coimbatore Office
//                     Numentica <br />Technologies Pvt Ltd,  <br />
//                     Arima Wakefield Building,
//                     3rd Floor, 281 Avinashi Road, <br />
//                     PKD Nagar, Peelamedu, Coimbatore-641004, India</p>

//                   <div className="flex justify-between">
//                     <p className="pl-4">contact@numentica.com</p>
//                     {clickedLocations[5] ? (
//                       <div className="location-container 2xl:bottom-[73px] 2xl:right-[288px] lg:bottom-[73px] lg:right-[287px]">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(5)}
//                       >
//                         6
//                       </p>
//                     )}
//                   </div>

//                 </Link>

//               </div >

//             </div>

//           </div>






//           {/* third column locations */}

//           <div className="relative md:bottom-[1100px]  lg:bottom-[500px]   md:ml-0 lg:ml-0 lg:left-[400px] ">

//             <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 gap-4 md:gap-[400px] text-white">
//               <div className="relative main lg:right-[80px] md:right-[10px] lg:top-[40px] md:top-[20px] w-[310px] h-[190px] rounded-2xl font-serif text-[15px]  cursor-pointer" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                 <Link to="https://www.google.com/maps/place/Anthology+Inc.,+(Formerly+Blackboard+Information+Technology+India+Pvt+Ltd)/@12.9732002,80.2491392,17z/data=!3m1!5s0x3a525d697e23aba5:0x8bf185a4e12221d1!4m6!3m5!1s0x3a525d6bc56a4557:0x594fff0ddd117ce!8m2!3d12.973195!4d80.2517141!16s%2Fg%2F1q64q0qpq?entry=ttu">
//                   <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif "> Chennai Office Numentica UI,
//                     <br /> Rayala Techno Park,3rd Floor, 144/7,
//                     <br />   Rajiv Gandhi Salai, OMR,
//                     Kottivakkam, Chennai-600041, India
//                     <br />
//                   </p>

//                   <div className="flex justify-between font-serif">
//                     <p className="pl-4 font-serif"> contact@numentica.com</p>
//                     {clickedLocations[6] ? (
//                       <div className="location-container 2xl:bottom-[354px] 2xl:left-[107px] lg:bottom-[354px] lg:left-[107px]">
//                         <div className="marker">
//                           <div className="pulse"></div>
//                           <div className="pin"></div>
//                         </div>
//                       </div>
//                     ) : (
//                       <p
//                         className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                         onClick={() => handleClick(6)}
//                       >
//                         7
//                       </p>
//                     )}
//                   </div>
//                 </Link>


//               </div >

//               <div className="relative main lg:bottom-16 md:-bottom-[20px] md:right-[145px] right-0 lg:right-10  w-[310px] h-[190px] rounded-2xl font-serif text-[15px]  py-4 cursor-pointer " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>

//                 <Link to="https://www.google.com/maps/place/102%2F17+Heatherdale+Rd,+Ringwood+VIC+3134,+Australia/@-37.8192116,145.2110736,17z/data=!3m2!4b1!5s0x6ad63939b69cd45d:0x1bf524201aa402e!4m6!3m5!1s0x6ad639689488c175:0xd0465f51ab3d5bf2!8m2!3d-37.8192159!4d145.2136485!16s%2Fg%2F11r28jnph4?entry=tts">
//                 <p className="my-auto flex items-center space-y-2  px-4 font-serif">Australia Office Numentica Australia Pty Ltd,
//                   <br />
//                   Suite 102 , 17 Heatherdale Road,
//                   <br />Ringwood VIC 3134, Australia
//                   <br />
//                   contact@numentica.com</p>


//                 <div className="flex justify-between">
//                   <p className="pl-4 font-serif"> +61 499 038 600</p>
//                   {clickedLocations[7] ? (
//                     <div className="location-container -mt-8">
//                       <div className="marker">
//                         <div className="pulse"></div>
//                         <div className="pin"></div>
//                       </div>
//                     </div>
//                   ) : (
//                     <p
//                       className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//                       onClick={() => handleClick(7)}
//                     >
//                       8
//                     </p>
//                   )}
//                 </div>
//                 </Link>

//               </div >

//             </div>

//           </div>

//         </div>

//       </div>
//       <img className="-mt-1" src={wave} alt="" />
//     </div>


//   );
// };

// export default Map;
import map from '../../assets/map1.png'
import wave from '../../assets/Hero Slider.png'
import './map.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Map = () => {

  const [clickedLocation, setClickedLocation] = useState(null);
  const [clickedLocations, setClickedLocations] = useState(Array(8).fill(false));

  const handleClick = (index) => {
    setClickedLocation(index);
  };

  useEffect(() => {
    let hideIndicators;
    if (clickedLocation !== null) {
      const updatedClickedLocations = Array(8).fill(false);
      updatedClickedLocations[clickedLocation] = true;
      setClickedLocation(null);
      setClickedLocations(updatedClickedLocations);

      hideIndicators = setTimeout(() => {
        setClickedLocations(Array(8).fill(false));
      }, 20); // Hide the indicators after 200 seconds (200000 milliseconds)
    }

    return () => clearTimeout(hideIndicators);
  }, [clickedLocation]);


  return (
    <div className="md:mt-20">
      <div className="md:mt-16 lg:mb-20 md:mb-52  mb-[1550px]  lg:py-14">
        <h1 className="text-center  md:pl-8 md:text-[25px] text-[15px] lg:text-[35px] font-bold font-serif leading-[55px] text-[#050038] md:pb-12">GLOBAL FOOT PRINT</h1>
        <div className="worldbg md:h-[600px] md:w-[700px] lg:h-[750px] lg:w-[1000px] h-[300px] w-[300px] mx-auto">
          <img className="relative md:top-[110px] lg:top-[80px] top-[70px]" src={map} alt="" />


          {/* first column locations */}
          <div className="relative md:ml-0 md:right-28 lg:right-36 md:bottom-[450px] lg:bottom-[600px] mt-20 md:mt-0 mx-auto">

            <div className="my-3 mx-auto grid md:ml-[80px] ml-0 md:grid-cols-2  lg:grid-cols-3 lg:gap-60 md:gap-[200px] gap-4 text-white">

              {/* // first box of location */}
              <div className="w-[310px] h-[190px] rounded-2xl font-serif text-[15px] md:ml-[20px] ml-0 lg:ml-0  main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>

                <Link to="https://www.google.com/maps/place/Numentica/@33.8258641,-118.356088,14.36z/data=!3m1!5s0x80dd4b2c2910c783:0x73d3569ca775b086!4m6!3m5!1s0x80dd4b2c288f5ac9:0xb30be82826f8dbf1!8m2!3d33.8303227!4d-118.3543569!16s%2Fg%2F11f63yfllx?entry=ttu">
                  <p className="my-auto flex items-center space-y-2  text-[15px]  px-4 py-4 ">Corporate Headquarters, <br /> Numentica LLC  3868 W Carson St, <br />Suite 300 Torrance, CA 90503, USA <br />
                    contact@numentica.com <br /></p>
                  <div className="flex justify-between ">
                    <p className="pl-4 "> +1310-818-3415</p>
                    {clickedLocations[0] ? (
                      <div className="location-container  relative 2xl:top-7 2xl:right-11 lg:right-11 lg:top-7">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(0)}
                      >
                        1
                      </p>
                    )}

                  </div>
                </Link>

              </div >

              {/* second box of location */}
              <div className="md:relative md:-bottom[25px] lg:bottom-16 md:ml-[25px] w-[310px] h-[190px] rounded-2xl font-serif text-[15px] py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/search/numentica+1+Poultry,+London+EC2R+BEJ,+United+Kingdom/@51.51335,-0.0931208,17z/data=!3m1!4b1?entry=ttu">
                  <p className="my-auto flex items-center space-y-2  px-4">London Office Numentica  (Consleague Consulting Ltd.) <br />
                    1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
                    contact@numentica.com</p>


                  <div className="flex justify-between">
                    <p className="pl-4"> +44-20-3371-1046</p>
                    {clickedLocations[1] ? (
                      <div className="location-container 2xl:top-[105px] 2xl:right-[423px] lg:right-[424px] lg:top-[105px]">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(1)}
                      >
                        2
                      </p>
                    )}
                  </div>
                </Link>

              </div >

              {/* third box of location */}
              <div className="lg:ml-[16px] md:ml-[435px]  md:-bottom-[35px] relative lg:bottom-16 w-[310px] h-[190px] rounded-2xl font-serif text-[15px]  py-4 main " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/place/Numentica+india+Pvt+Ltd/@13.0035388,77.6585652,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae119a54f07f2d:0x23e61d6ce6b5fda2!8m2!3d13.0035336!4d77.6611401!16s%2Fg%2F11fqc9p5j3?entry=ttu">
                  <p className="my-auto flex items-center space-y-2  px-4 ">Bangalore Office Numentica <br /> Technologies Pvt Ltd, <br />
                    #202, 1st AA Cross, 2nd Main Road, <br />
                    Kasturinagar, Bengaluru-560043, India</p>

                  <div className="flex justify-between">
                    <p className="pl-4">contact@numentica.com</p>
                    {clickedLocations[2] ? (
                      <div className="location-container 2xl:top-[50px] 2xl:right-[516px] lg:right-[516px] lg:top-[50px]">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className="cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(2)}
                      >
                        3
                      </p>
                    )}
                  </div>
                </Link>
              </div >

            </div>

          </div>



          {/* second column locations */}

          <div className="relative   md:ml-0  lg:right-[60px] md:right-[35px] lg:bottom-[500px] md:bottom-[830px] mx-auto">

            <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 md:gap-[280px] gap-4 text-white">
              <div className="w-[310px] h-[190px] rounded-2xl font-serif text-[15px] md:ml-[25px] lg:ml-0 ml-0 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/place/Numentica/@12.0086708,-99.8438633,3z/data=!3m1!5s0x865b32b75e2c711d:0x25eb54cefc58ed22!4m6!3m5!1s0x865b32b632b238ed:0xfbc85cd76b933540!8m2!3d30.456952!4d-97.793265!16s%2Fg%2F11rghq3s6d?entry=ttu">
                  <p className="my-auto flex items-center space-y-2  px-4 py-4  ">Austin Office, Numentica LLC <br /> 13706 Research Blvd,<br />Suite 305, Austin, TX 78750, USA<br />
                    contact@numentica.com <br /></p>

                  <div className="flex justify-between ">
                    <p className="pl-4 "> +1310-818-3415</p>
                    {clickedLocations[3] ? (
                      <div className="location-container 2xl:bottom-[200px] 2xl:left-[433px]  lg:bottom-[203px] lg:left-[430px]">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(3)}
                      >
                        4
                      </p>
                    )}
                  </div>
                </Link>
              </div >

              <div className="relative lg:bottom-16 md:right-[50px] lg:right-0 lg:left-0 w-[310px] h-[190px] rounded-2xl font-serif text-[15px] py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/place/Dubai+Media+City+Building+5+-+Al+Sufouh+-+Al+Sufouh+2+-+Dubai+-+United+Arab+Emirates/@25.0965277,55.1535914,17z/data=!4m7!3m6!1s0x3e5f6b43c7f5dd7d:0xdfd153b19df4e607!8m2!3d25.0965229!4d55.1561663!15sCj5ETUMtQkxEMDUtVkQtR09PLTIzNiBHcm91bmQgRmxvb3IsIERNQzUgRHViYWkgTWVkaWEgQ2l0eSBEdWJhaZIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F12vtkn9kb?entry=tts">
                  <p className="my-auto flex items-center space-y-2  px-4 ">Dubai Office
                    Numentica Middle East FZ-LLC
                    DMC-BLD05-VD-GOO-236 Ground Floor,
                    <br /> United Arab Emirates
                    <br />
                    contact@numentica.com</p>


                  <div className="flex justify-between">
                    <p className="pl-4 "> +971 50 618 3063</p>
                    {clickedLocations[4] ? (
                      <div className="location-container 2xl:bottom-[155px] 2xl:left-[95px] lg:bottom-[155px] lg:left-[95px]">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(4)}
                      >
                        5
                      </p>
                    )}
                  </div>
                </Link>
              </div >

              <div className="relative md:ml-[25px] ml-0  md:bottom-[260px]  lg:right-0 lg:bottom-32 lg:ml-[35px] w-[310px] h-[210px] rounded-2xl text-[15px] font-serif  py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/search/+Numentica+Technologies+Pvt+Ltd,++Arima+Wakefield+Building,+3rd+Floor,+281+Avinashi+Road,+PKD+Nagar,+Peelamedu,+Coimbatore-641004,+India/@11.0264519,77.0057416,17.18z?entry=ttu">
                  <p className="my-auto flex items-center space-y-2  px-4 ">Coimbatore Office
                    Numentica <br />Technologies Pvt Ltd,
                    Arima Wakefield Building,
                    3rd Floor, 281 Avinashi Road,
                    PKD Nagar, Peelamedu, Coimbatore-641004, India</p>

                  <div className="flex justify-between">
                    <p className="pl-4">contact@numentica.com</p>
                    {clickedLocations[5] ? (
                      <div className="location-container 2xl:bottom-[73px] 2xl:right-[288px] lg:bottom-[73px] lg:right-[287px]">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(5)}
                      >
                        6
                      </p>
                    )}
                  </div>

                </Link>
              </div >
            </div>

          </div>






          {/* third column locations */}

          <div className="relative md:bottom-[1100px]  lg:bottom-[500px]   md:ml-0 lg:ml-0 lg:left-[400px] ">

            <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 gap-4 md:gap-[400px] text-white">
              <div className="relative main lg:right-[80px] md:right-[10px] lg:top-[40px] md:top-[20px] w-[310px] h-[200px] rounded-2xl font-serif text-[15px]  cursor-pointer" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/place/Anthology+Inc.,+(Formerly+Blackboard+Information+Technology+India+Pvt+Ltd)/@12.9732002,80.2491392,17z/data=!3m1!5s0x3a525d697e23aba5:0x8bf185a4e12221d1!4m6!3m5!1s0x3a525d6bc56a4557:0x594fff0ddd117ce!8m2!3d12.973195!4d80.2517141!16s%2Fg%2F1q64q0qpq?entry=ttu">
                  <p className="my-auto flex items-center space-y-2  px-4 py-4  "> Chennai Office Numentica UI,
                    <br /> Rayala Techno Park,3rd Floor, 144/7,
                    Rajiv Gandhi Salai, OMR,
                    Kottivakkam, <br /> Chennai-600041, India
                    <br />
                  </p>

                  <div className="flex justify-between ">
                    <p className="pl-4 "> contact@numentica.com</p>
                    {clickedLocations[6] ? (
                      <div className="location-container 2xl:bottom-[354px] 2xl:left-[107px] lg:bottom-[354px] lg:left-[107px]">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(6)}
                      >
                        7
                      </p>
                    )}
                  </div>
                </Link>
              </div >

              <div className="relative main lg:bottom-16 md:-bottom-[20px] md:right-[145px] right-0 lg:right-10  w-[310px] h-[190px] rounded-2xl font-serif text-[15px]  py-4 cursor-pointer " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
                <Link to="https://www.google.com/maps/place/102%2F17+Heatherdale+Rd,+Ringwood+VIC+3134,+Australia/@-37.8192116,145.2110736,17z/data=!3m2!4b1!5s0x6ad63939b69cd45d:0x1bf524201aa402e!4m6!3m5!1s0x6ad639689488c175:0xd0465f51ab3d5bf2!8m2!3d-37.8192159!4d145.2136485!16s%2Fg%2F11r28jnph4?entry=tts">
                  <p className="my-auto flex items-center space-y-2  px-4 ">Australia Office Numentica Australia Pty Ltd,
                    <br />
                    Suite 102 , 17 Heatherdale Road,
                    <br />Ringwood VIC 3134, Australia
                    <br />
                    contact@numentica.com</p>


                  <div className="flex justify-between">
                    <p className="pl-4 "> +61 499 038 600</p>
                    {clickedLocations[7] ? (
                      <div className="location-container -mt-8">
                        <div className="marker">
                          <div className="pulse"></div>
                          <div className="pin"></div>
                        </div>
                      </div>
                    ) : (
                      <p
                        className=" cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
                        onClick={() => handleClick(7)}
                      >
                        8
                      </p>
                    )}
                  </div>
                </Link>

              </div >

            </div>

          </div>

        </div>

      </div>
      <img className="-mt-1" src={wave} alt="" />
    </div>


  );
};

export default Map;