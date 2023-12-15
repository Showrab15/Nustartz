import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import bg1 from "../../assets/globe-earth-world-map-abstract-dotted-vector-22411303.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import Map from "../Map/Map";

const Contact = () => {
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
    return (
        <>

            <div className="lg:flex gap-3 justify-between mt-28  mb-7 font-serif border-4 rounded-2xl mx-4 lg:mx-12">
                <form ref={form} onSubmit={sendEmail} className="w-full p-4 md:p-10">
                    <h1 className="text-[15px] md:[25px] font-medium lg:text-[35px] mb-4">Send us a Message</h1>
                    <div>
                        <div className="mb-3">
                            <input
                                name="user_name"
                                type="text"
                                className="border focus:outline-[#275998] rounded-md py-2    w-full pl-[14px]"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                name="user_phone"
                                type="text"
                                className="border focus:outline-[#275998] rounded-md py-2    w-full pl-[14px]"
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                name="user_email"
                                type="text"
                                className="border py-2 focus:outline-[#275998]  rounded-md  w-full pl-[14px]"
                                placeholder="Email-ID"
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="message"
                                id=""
                                className="border py-8    w-full   rounded-md  focus:outline-[#275998]  pl-[14px]"
                                cols=""
                                rows="3"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <p className="">
                                For Further details on how your personal data will be processed
                                and how your <br /> consent can be managed. refer to the Truuforce
                                Privacy Notice{" "}
                            </p>
                        </div>
                        <div className="">
                            <input
                                type="submit"
                                value="Send"
                                className="btn text-white bg-[#3595FC] rounded-md font-bold py-4 w-full cursor-pointer"
                            />
                        </div>
                    </div>
                </form>
                <div
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    className="w-full addBanner bg-[#275998] bg-opacity-50 rounded-r-2xl rounded-tr-none lg:rounded-tr-2xl rounded-bl-2xl lg:rounded-bl-none p-4 lg:p-10"
                >
                    <h2 className="text-[15px] md:[25px] font-medium lg:text-[35px] mb-6">Contact Information</h2>
                    {/* ... (content of the container) */}
                    <div className="flex flex-col gap-8">
                        <p>
                            <FaMapMarkerAlt />

                        </p>
                        <p className="flex gap-4 items-center text-black font-medium ">
                            <FaPhoneAlt />
                            <span>            +1 732 983 1325
                            </span>

                        </p>
                        <p className="flex gap-4 items-center text-black font-medium ">
                            <FaRegEnvelope />
                            <span>contact@NuStartz.com</span>
                        </p>
                    </div>
                </div>
                <Toaster />
            </div>

            <Map />
        </>

    );
};

export default Contact;