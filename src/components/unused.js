// import map from '../../assets/map1.png'
// import wave from '../../assets/Hero Slider.png'
// import './map.css'
// import { useState } from 'react';

// const Map = () => {

//     const [clickedLocations, setClickedLocations] = useState(Array(8).fill(false));

//   const handleClick = (index) => {
//     const updatedClickedLocations = [...clickedLocations];
//     updatedClickedLocations[index] = true;
//     setClickedLocations(updatedClickedLocations);

//     setTimeout(() => {
//       updatedClickedLocations[index] = false;
//       setClickedLocations(updatedClickedLocations);
//     }, 20000); // Hide the text after 20 seconds (20000 milliseconds)
//   };

   

//     return (
//         <div className="mt-20">
  

//             <div className="mt-16 lg:mb-20 md:mb-52  mb-[1550px]  py-14">
//                 <h1 className="text-center  md:pl-8  text-[30px] md:text-[48px] font-bold font-serif leading-[55px] text-[#050038] pb-10">GLOBAL FOOT PRINT</h1>
//                 <div className="worldbg md:h-[600px] md:w-[700px] lg:h-[750px] lg:w-[1000px] h-[300px] w-[300px] mx-auto">
//                     <img className="relative md:top-[110px] lg:top-[80px] top-[70px]" src={map} alt="" />


//                     {/* first column locations */}
//                     <div className="relative md:ml-0 md:right-28 md:bottom-[450px] lg:bottom-[600px] mt-20 md:mt-0 mx-auto">

//                         <div className="my-3 mx-auto grid md:ml-[80px] ml-0 md:grid-cols-2  lg:grid-cols-3 lg:gap-60 md:gap-[200px] gap-4 text-white">

//                             <div className="w-[310px] h-[190px] rounded-2xl text-base md:ml-[20px] ml-0 lg:ml-0  main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>

//                                 <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br /> Numentica LLC  3868 W Carson St, <br />   Suite 300 Torrance, CA 90503, USA <br />
//                                     contact@numentica.com <br /></p>

//                                 <div className="flex justify-between font-serif">
//                                     <p className="pl-4 font-serif"> +1310-818-3415</p>
//                                     <p className="pl-4 font-serif"> +1310-818-3415</p>
//                                     {clickedLocations ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           1
//         </p>
//       )}
//                                 </div>
//                             </div >

//                             <div className="md:relative md:-bottom[25px] lg:bottom-16 md:ml-[25px] w-[310px] h-[190px] rounded-2xl text-base py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
//                                     1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
//                                     contact@numentica.com</p>


//                                 <div className="flex justify-between">
//                                     <p className="pl-4 font-serif"> +44-20-3371-1046</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           2
//         </p>
//       )}
//                                 </div>
//                             </div >
//                             {/* hi */}
//                             <div className="lg:ml-[16px] md:ml-[435px]  md:-bottom-[35px] relative lg:bottom-16 w-[310px] h-[190px] rounded-2xl text-base  py-4 main " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 ">Bangalore OfficeNumentica <br /> Technologies Pvt Ltd, <br />
//                                     #202, 1st AA Cross, 2nd Main Road, <br />
//                                     Kasturinagar, Bengaluru-560043, India</p>

//                                 <div className="flex justify-between">
//                                     <p className="pl-4">contact@numentica.com</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           3
//         </p>
//       )}
//                                 </div>
//                             </div >
//                         </div>

//                     </div>



//                     {/* second column locations */}

//                     <div className="relative   md:ml-0  md:right-[35px] lg:bottom-[500px] md:bottom-[830px] mx-auto">

//                         <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 md:gap-[280px] gap-4 text-white">
//                             <div className="w-[310px] h-[190px] rounded-2xl text-base md:ml-[25px] lg:ml-0 ml-0 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br /> Numentica LLC  3868 W Carson St, <br />   Suite 300 Torrance, CA 90503, USA <br />
//                                     contact@numentica.com <br /></p>

//                                 <div className="flex justify-between font-serif">
//                                     <p className="pl-4 font-serif"> +1310-818-3415</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           4
//         </p>
//       )}
//                                 </div>
//                             </div >

//                             <div className="relative lg:bottom-16 md:right-[50px] lg:right-0 lg:left-0 w-[310px] h-[190px] rounded-2xl text-base py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
//                                     1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
//                                     contact@numentica.com</p>


//                                 <div className="flex justify-between">
//                                     <p className="pl-4 font-serif"> +44-20-3371-1046</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           5
//         </p>
//       )}
//                                 </div>
//                             </div >

//                             <div className="relative md:ml-[20px] ml-0 lg:ml-0 md:bottom-[260px]  lg:right-0 lg:bottom-32 lg:ml-[35px] w-[310px] h-[190px] rounded-2xl text-base  py-4 main" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 ">Bangalore OfficeNumentica <br /> Technologies Pvt Ltd, <br />
//                                     #202, 1st AA Cross, 2nd Main Road, <br />
//                                     Kasturinagar, Bengaluru-560043, India</p>

//                                 <div className="flex justify-between">
//                                     <p className="pl-4">contact@numentica.com</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           6
//         </p>
//       )}
//                                 </div>
//                             </div >
//                         </div>

//                     </div>






//                     {/* third column locations */}

//                     <div className="relative md:bottom-[1100px]  lg:bottom-[500px]   md:ml-0 lg:ml-0 lg:left-[400px] ">

//                         <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 gap-4 md:gap-[400px] text-white">
//                             <div className="relative main lg:right-[120px] md:right-[10px] lg:top-[40px] md:top-[20px] w-[310px] h-[190px] rounded-2xl text-base  cursor-pointer" style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br /> Numentica LLC  3868 W Carson St, <br />   Suite 300 Torrance, CA 90503, USA <br />
//                                     contact@numentica.com <br /></p>

//                                 <div className="flex justify-between font-serif">
//                                     <p className="pl-4 font-serif"> +1310-818-3415</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           7
//         </p>
//       )}
//                                 </div>
//                             </div >

//                             <div className="relative main lg:bottom-16 md:-bottom-[20px] md:right-[145px] right-0 lg:right-0  w-[310px] h-[190px] rounded-2xl text-base  py-4 cursor-pointer " style={{ backgroundColor: 'rgba(39, 89, 152, 1)' }}>
//                                 <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
//                                     1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
//                                     contact@numentica.com</p>


//                                 <div className="flex justify-between">
//                                     <p className="pl-4 font-serif"> +44-20-3371-1046</p>
//                                     {clicked ? (
//                                         <div className="location-container -mt-8">
//       <div className="marker">
//         <div className="pulse"></div>
//         <div className="pin"></div>
//       </div>
//     </div>
//       ) : (
//         <p
//           className="font-serif cursor-pointer mr-4 px-4 py-2 bg-white border-black border-2 text-black font-bold rounded-full"
//           onClick={handleClick}
//         >
//           1
//         </p>
//       )}
//                                 </div>
//                             </div >

//                         </div>

//                     </div>

//                 </div>

//             </div>
//             <img className="-mt-1" src={wave} alt="" />
//         </div>


//     );
// };

// export default Map;































