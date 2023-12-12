// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import person from "../../assets/bannerPic1.png";
// // import "./header.css";
// // const Header = () => {
// //   const carouselSettings = {
// //     showArrows: false,
// //     showStatus: false,
// //     infiniteLoop: true,
// //     autoPlay: true,
// //     interval: 3000,
// //     showThumbs: false,
// //   };

// //   return (
// //     <div className="relative bottom-[400px] 2xl:bottom-[0px]">
// //       <Carousel {...carouselSettings}>
// //         <div className="flex flex-col lg:flex-row items-center">
// //           <div className="order-2 lg:order-1 px-1 lg:px-0">
// //             <h2 className="text-[#000000] lg:ml-[80px] lg:w-[580px] text-3xl md:text-[40px] font-bold text-left font-serif mt-8 mb-4">
// //               We help you to
// //             </h2>
// //             <p className="text-[#000] lg:ml-[80px] lg:w-[580px] text-xl md:text-[30px] font-medium leading-9 lg:leading-[48px] font-serif text-left">
// //               Elevate your teams capabilities <br /> with our proficient
// //               software <br /> engineers.
// //             </p>

// //             <button className="bg-[#275998] relative  py-5 px-10 lg:mr-[360px] rounded-[60px] text-white font-semibold mt-12 ">
// //               Schedule
// //             </button>
// //           </div>
// //           <div className="order-1 lg:order-2 lg:ml-[150px] ml-0">
// //             <img className="w-full lg:h-full xl:overflow-x-hidden xl-mr-4" src={person} alt="" />
// //           </div>
// //         </div>
// //       </Carousel>

// //     </div>
// //   );
// // };

// // export default Header;







// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import banner1 from "../../assets/bannerPic1.png";
// import banner3 from "../../assets/banner3.png";
// import banner4 from "../../assets/banner4.png";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const carouselSettings = {
//     showArrows: false,
//     showStatus: false,
//     infiniteLoop: true,
//     // autoPlay: true,
//     interval: 3000,
//     showThumbs: false,
//   };

 

//   return (
//     <div>
//       <Carousel {...carouselSettings}>
//         {/* 1st Carousel */}
//         <div className="flex flex-col lg:flex-row items-center justify-center">
//           <div className="order-2 lg:order-1 px-1 lg:px-0 lg:ml-[60px]">
//             <h2 className="text-[#000000] text-3xl md:text-[40px] font-bold text-left font-serif lg:w-[489px] mt-8 mb-4">
//               We help you to
//             </h2>
//             <p className="text-[#000]  lg:w-[498px] text-xl md:text-[30px] font-medium leading-9 lg:leading-[48px] font-serif text-left">
//               Elevate your teams capabilities <br  /> with our proficient
//               software <br /> engineers.
//             </p>
//            <Link to="https://calendly.com/nustartz/30min">
//            <button className="bg-[#275998] py-5 px-10 rounded-[60px] text-white font-semibold mt-4 flex justify-start">
//               Schedule
//             </button>
//            </Link>
//           </div>
//           <div className="order-1 lg:order-2 lg:ml-[150px] ml-0 ">
//             <img
//               className="w-full lg:h-full xl:overflow-x-hidden"
//               src={banner1}
//               alt="banner1"
//             />
//           </div>
//         </div>
//         {/* 2nd Carousel */}
//         <div className="flex flex-col lg:flex-row items-center justify-center">
//           <div className="order-2 lg:order-1 px-1 lg:px-0 mr-[45px] md:mr-0 lg:ml-[60px]">
//             <h2 className="text-[#000000] text-3xl md:text-[40px] font-bold text-left font-serif lg:w-[489px] mt-8 mb-4">
//               Eliminate
//             </h2>
//             <p className="text-[#000]  lg:w-[498px] text-xl md:text-[30px] font-medium leading-9 lg:leading-[48px] font-serif text-left">
//               the burden of recruiting and <br /> training
//             </p>
//             <Link to="https://calendly.com/nustartz/30min">
//            <button className="bg-[#275998] py-5 px-10 rounded-[60px] text-white font-semibold mt-4 md:mt-8 flex justify-start">
//               Schedule
//             </button>
//            </Link>
//           </div>
//           <div className="order-1 lg:order-2 lg:ml-[150px] ml-0">
//             <img
//               className="w-full lg:h-full xl:overflow-x-hidden"
//               src={banner3}
//               alt="banner3"
//             />
//           </div>
//         </div>
//         {/* 3rd Carousel */}
//         <div className="flex flex-col lg:flex-row items-center justify-center">
//           <div className="order-2  mr-[45px] md:mr-0  lg:order-1 px-1 lg:px-0 lg:ml-[60px]">
//             <h2 className="text-[#000000] text-3xl md:text-[40px] font-bold text-left font-serif lg:w-[489px] mt-8 mb-4">
//               Retain
//             </h2>
//             <p className="text-[#000]  lg:w-[498px] text-xl md:text-[30px] font-medium leading-9 lg:leading-[48px] font-serif text-left">
//               Absolute authority over your <br /> team whenever you desire
//             </p>
//             <Link to="https://calendly.com/nustartz/30min">
//            <button className="bg-[#275998] py-5 px-10 rounded-[60px] text-white font-semibold mt-4 md:mt-8 flex justify-start">
//               Schedule
//             </button>
//            </Link>
//           </div>
//           <div className="order-1 lg:order-2 lg:ml-[150px] ml-0">
//             <img
//               className="w-full lg:h-full xl:overflow-x-hidden"
//               src={banner4}
//               alt="banner4"
//             />
//           </div>
//         </div>
//       </Carousel>
     
//     </div>
//   );
// };

// export default Header;