// import "./Contact.css";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import bg1 from "../../assets/globe-earth-world-map-abstract-dotted-vector-22411303.png";
// import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
// import Map from "../Map/Map";

// const Contact = () => {
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailjs
//             .sendForm(
//                 "service_vmf0hqv",
//                 "template_lh3plge",
//                 form.current,
//                 "qaWmO78TU_-bnw1Qn"
//             )
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     e.target.reset();
//                     console.log("Message sent successfully");
//                     toast.success("Message sent successfully");
//                 },
//                 (error) => {
//                     console.log(error.text);
//                 }
//             );
//     };
//     return (
//         <>

//             <div className="lg:flex gap-3 justify-between mt-28  mb-7 font-serif border-4 rounded-2xl mx-4 lg:mx-12">
//                 <form ref={form} onSubmit={sendEmail} className="w-full p-4 md:p-10">
//                     <h1 className="text-[15px] md:[25px] font-medium lg:text-[35px] mb-4">Send us a Message</h1>
//                     <div>
//                         <div className="mb-3">
//                             <input
//                                 name="user_name"
//                                 type="text"
//                                 className="border focus:outline-[#275998] rounded-md py-2    w-full pl-[14px]"
//                                 placeholder="Your Name"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <input
//                                 name="user_phone"
//                                 type="text"
//                                 className="border focus:outline-[#275998] rounded-md py-2    w-full pl-[14px]"
//                                 placeholder="Mobile Number"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <input
//                                 name="user_email"
//                                 type="text"
//                                 className="border py-2 focus:outline-[#275998]  rounded-md  w-full pl-[14px]"
//                                 placeholder="Email-ID"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <textarea
//                                 name="message"
//                                 id=""
//                                 className="border py-8    w-full   rounded-md  focus:outline-[#275998]  pl-[14px]"
//                                 cols=""
//                                 rows="3"
//                                 placeholder="How can we help you?"
//                             ></textarea>
//                         </div>
//                         <div className="mb-5">
//                             <p className="">
//                                 For Further details on how your personal data will be processed
//                                 and how your <br /> consent can be managed. refer to the Truuforce
//                                 Privacy Notice{" "}
//                             </p>
//                         </div>
//                         <div className="">
//                             <input
//                                 type="submit"
//                                 value="Send"
//                                 className="btn text-white bg-[#3595FC] rounded-md font-bold py-4 w-full cursor-pointer"
//                             />
//                         </div>
//                     </div>
//                 </form>
//                 <div
//                     style={{
//                         backgroundImage: `url(${bg1})`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundSize: "cover",
//                     }}
//                     className="w-full addBanner bg-[#275998] bg-opacity-50 rounded-r-2xl rounded-tr-none lg:rounded-tr-2xl rounded-bl-2xl lg:rounded-bl-none p-4 lg:p-10"
//                 >
//                     <h2 className="text-[15px] md:[25px] font-medium lg:text-[35px] mb-6">Contact Information</h2>
//                     {/* ... (content of the container) */}
//                     <div className="flex flex-col gap-8">
//                         <p>
//                             <FaMapMarkerAlt />

//                         </p>
//                         <p className="flex gap-4 items-center text-black font-medium ">
//                             <FaPhoneAlt />
//                             <span>            +1 732 983 1325
//                             </span>

//                         </p>
//                         <p className="flex gap-4 items-center text-black font-medium ">
//                             <FaRegEnvelope />
//                             <span>contact@NuStartz.com</span>
//                         </p>
//                     </div>
//                 </div>
//                 <Toaster />
//             </div>

//             <Map />
//         </>

//     );
// };

// export default Contact;




import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import bg1 from "../../assets/globe-earth-world-map-abstract-dotted-vector-22411303.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
// import SocialIcon from "./SocialIcon";

const Contact = () => {
  const mapRef = useRef();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vmf0hqv",
        "template_lh3plge",
        form.current,
        "qaWmO78TU_-bnw1Qn"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message sent successfully");
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const scrollToMap = () => {
    // Use scrollIntoView to scroll smoothly to the Map component
    mapRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="lg:flex gap-3 justify-between mt-28  mb-7 font-serif border-4 rounded-2xl lg:w-[980px] 2xl:[1280px] mx-auto lg:h-[475px]">
        <form ref={form} onSubmit={sendEmail} className="w-full px-4 py-2">
          <h1 className="text-[10px]  font-medium md:text-[20px] mb-2">
            Send us a Message
          </h1>
          <div>
            <div className="mb-3">
              <input
                name="user_name"
                type="text"
                className="border focus:outline-[#275998] rounded-md py-2    w-full pl-[14px]"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-2">
              <input
                name="user_phone"
                type="text"
                className="border focus:outline-[#275998] rounded-md py-2    w-full pl-[14px]"
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-2">
              <input
                name="user_email"
                type="text"
                className="border py-2 focus:outline-[#275998]  rounded-md  w-full pl-[14px]"
                placeholder="Email-ID"
              />
            </div>
            <div className="mb-2">
              <textarea
                name="message"
                id=""
                className="border py-1 px-2 w-full rounded-md  focus:outline-[#275998]"
                cols=""
                rows="3"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="mb-3">
              <p className="text-[12px] font-medium">
                For Further details on how your personal data will be processed
                and how your consent can be managed. refer to the Truuforce
                Privacy Notice{" "}
              </p>
            </div>
            <div className="">
              <input
                type="submit"
                value="Send"
                className="btn text-white bg-[#3595FC] rounded-md font-medium py-4 w-full cursor-pointer"
              />
            </div>
          </div>
        </form>
        <div className="w-full bg-[#275998]  rounded-r-2xl rounded-tr-none lg:rounded-tr-2xl rounded-bl-2xl lg:rounded-bl-none px-4 pt-2">
          <h2 className="text-[10px] md:text-[20px] font-medium  mb-6">
            Contact Information
          </h2>
          {/* ... (content of the container) */}
          <div className="flex flex-col gap-6 text-[14px] text-white">
            <p
              onClick={scrollToMap}
              className="flex gap-4 items-center text-blue-600 font-medium  cursor-pointer"
            >
              <FaMapMarkerAlt />
              <span> Our Location</span>
            </p>
            <p className="flex gap-4 items-center ">
              <FaPhoneAlt />
              <span> +1 732 983 1325</span>
            </p>
            <p className="flex gap-4 items-center  ">
              <FaRegEnvelope />
              <span>contact@NuStartz.com</span>
            </p>
            <p className="flex gap-4 items-center  ">
              <FaFacebookF />
              <Link to="https://www.facebook.com/profile.php?id=61554431259746">NuStartz</Link>
            </p>
            {/* <p className="flex gap-4 items-center  ">
              <FaInstagram />
            </p>
            <p className="flex gap-4 items-center  ">
              <FaLinkedin />
            </p> */}
            <p className="flex gap-4 items-center  ">
              <FaYoutube />
              <Link to="https://www.youtube.com/@NuStartz">NuStartz</Link>
            </p>
          </div>
          {/* <SocialIcon /> */}
          <div
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-[600px] -mt-72 opacity-50"
          ></div>
        </div>
        <Toaster />
      </div>

      <div ref={mapRef} id="ourMap">
        <Map />
      </div>
    </>
  );
};

export default Contact;