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
import linkedInIcon from "../../assets/Our teams/mdi_linkedin.png";
// import leftQuote from "../../assets/Our teams/left-quote.png"
import quote from "../../assets/Our teams/teenyicons_quote-solid.png";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="team-bg-cover pb-12">
      <div className=" font-serif py-4">
        <div className="mx-auto">
          <h1 className="text-[25px] md:text-[50px] font-normal text-center  py-8">
            MEET OUR <span className="font-extrabold">LEADERS</span>
          </h1>
          <p className="font-bold   text-[20px] md:text-[40px] text-center text-[#275998] mb-28">
            Discover the Collective Expertise, Dedication,{" "}
            <br className="hidden md:block" />
            and Passion That Powers Our Vision
          </p>
        </div>
        <div className="flex flex-col mt-6 gap-20 lg:gap-28  mx-auto justify-center items-center">
          {/* first box */}
          <div className="bg-[#275998] text-white md:h-[333px] lg:w-[1200px] p-4 md:flex justify-evenly  items-center md:ml-32 mt-20 md:mt-0">
            <div>
              <img
                className="lg:w-[592px] lg:h-[664px] ml-[20px] md:-ml-[135px] lg:-ml-[200px] -mt-[220px] md:mt-[70px] lg:mt-10"
                src={Siva}
                alt=""
              />
            </div>
            <div className="flex flex-col text-center -mt-[100px] lg:mt-0 lg:-ml-80 items-center justify-center">
              <h4 className="text-3xl md:text-4xl font-bold mb-2">
                Siva Periyasamy
              </h4>
              <h4 className="text-3xl md:text-4xl font-medium mb-3 lg:mb-6">
                Founder/President
              </h4>
              <img
                className="w-[57px] h-[57px] mx-auto lg:mr-0"
                src={linkedInIcon}
                alt=""
              />
            </div>
            <div className="flex ">
              <img
                className="w-8 h-8 transform rotate-180 mt-auto"
                src={quote}
                alt=""
              />
              <p className="font-semibold text-center md:text-[13px] lg:text-[20px]">
                I believe in the power of innovation and the{" "}
                <br className="md:block hidden" /> limitless potential of
                startups. Our team is <br className="md:block hidden" />{" "}
                dedicated to nurturing and empowering the{" "}
                <br className="md:block hidden " /> next generation of
                entrepreneurs as they <br className="md:block hidden" /> chart
                their course toward success.
              </p>
              <img className="w-8 h-8" src={quote} alt="" />
            </div>
          </div>
          {/* second box */}
          <div className="bg-[#275998] text-white md:h-[333px] lg:w-[1200px] p-4 md:flex justify-evenly  items-center md:ml-32 mt-32 lg:mt-8">
            <div>
              <img
                className="lg:w-[592px] lg:h-[600px] md:-ml-[135px] lg:-ml-[260px] -mt-[220px] md:mt-[70px] lg:mt-10"
                src={Steve}
                alt=""
              />
            </div>
            <div className="flex flex-col text-center -mt-[100px] lg:mt-0 lg:-ml-80 items-center justify-center">
              <h4 className="text-3xl md:text-4xl font-bold mb-2">
                Steve Bakther
              </h4>
              <h4 className="text-3xl md:text-4xl font-medium mb-3 lg:mb-6">
                Chief Operating <br /> Officer
              </h4>
              <img
                className="w-[57px] h-[57px] mx-auto lg:mr-0"
                src={linkedInIcon}
                alt=""
              />
            </div>
            <div className="flex ">
              <img
                className="w-8 h-8 transform rotate-180 mt-auto"
                src={quote}
                alt=""
              />
              <p className="font-semibold text-center md:text-[13px] lg:text-[20px]">
                Elevating success in startup tech with{" "}
                <br className="md:block hidden" /> unwavering support—where
                collaboration <br className="md:block hidden" />
                sparks innovation, determination fuels
                <br className="md:block hidden " /> progress, and together, we
                script the <br className="md:block hidden" /> success stories of
                tomorrow.
              </p>
              <img className="w-8 h-8" src={quote} alt="" />
            </div>
          </div>
          {/* Third box */}
          <div className="bg-[#275998] text-white md:h-[333px] lg:w-[1200px] p-4 md:flex justify-evenly  items-center md:ml-32 mt-32 lg:mt-3">
            <div>
              <img
                className="lg:w-[592px] lg:h-[600px] md:-ml-[135px] lg:-ml-[260px] -mt-[210px] md:mt-[70px] lg:mt-10"
                src={Dinesh}
                alt=""
              />
            </div>
            <div className="flex flex-col text-center -mt-[100px] lg:mt-0 lg:-ml-80 items-center justify-center">
              <h4 className="text-3xl md:text-4xl font-bold mb-2">Dinesh</h4>
              <h4 className="text-3xl md:text-4xl font-medium mb-3 lg:mb-6">
                Chief Technology <br /> Officer
              </h4>
              <img
                className="w-[57px] h-[57px] mx-auto lg:mr-0"
                src={linkedInIcon}
                alt=""
              />
            </div>
            <div className="flex ">
              <img
                className="w-8 h-8 transform rotate-180 mt-auto"
                src={quote}
                alt=""
              />
              <p className="font-semibold text-center md:text-[13px] lg:text-[20px]">
                My passion lies in harnessing technology to
                <br className="md:block hidden" /> drive transformative change.
                {`I'm`} here to <br className="md:block hidden" />
                guide and empower startups, leveraging
                <br className="md:block hidden " /> cutting-edge solutions to
                turn their visions <br className="md:block hidden" /> into
                reality.
              </p>
              <img className="w-8 h-8" src={quote} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Leader Info: */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-3">
          {/* 1st Leader */}
          <div>
            <img
              src={leader1}
              className="md:w-[521px] mx-auto mb-[10px]"
              alt="Pushker circle.png"
            />
            <div className="w-full lg:[493px">
              <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
                Pushkar
              </h3>
              <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10 mb-1">
                Strategic Advisor <br /> Ex-Google, Ex-Microsoft
              </h5>
              <p className="text-[#000] text-xl font-medium font-serif text-center">
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
              <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
                Alakananda Goswami
              </h3>
              <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10">
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
            <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
              Arun Balakrishnan
            </h3>
            <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10">
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
              <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
                Mohan
              </h3>
              <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10 mb-1">
                Strategic Advisor, <br /> Ex- Microsoft
              </h5>
              <p className="text-[#000] text-xl font-medium font-serif text-center">
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
            <div className="w-full lg:[493px]">
              <h3 className="text-[#000] text-4xl font-bold font-serif text-center mb-2">
                Reena Dejgambhir
              </h3>
              <h5 className="text-[#000] text-4xl font-medium font-serif text-center leading-10">
                Business Development Manager
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;