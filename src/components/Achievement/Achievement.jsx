import CountUp, { useCountUp } from "react-countup";
import wave from '../../assets/Hero Slider.png'

const Achievement = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="mx-auto">
     <div className="px-4 md:px-8 lg:px-12 mt-14 py-4 mx-auto">
      <h1 className="text-[#050038] text-center font-bold text-3xl md:text-[35px] leading-10 tracking-wider font-sans mb-[45px]">
      <span className="text-[#3595FC]">Achievement</span> of NuStartz
      </h1>
      <p className="text-[#050038] text-center text-[15px] font-sans leading-6 mb-10 underline">
        Contact Sales to request a demo
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto lg:ml-[20px] 2xl:ml-[60px] 2xl:mt-4">
        <div className="w-full md:w-[360px] text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="47"
            viewBox="0 0 113 47"
            fill="none"
            className="mx-auto mb-9"
          >
            <path
              d="M0.27594 45.9714H10.8978V1.18052H0.27594V45.9714ZM39.6139 46.6112C51.8354 46.6112 59.3219 40.4685 59.3219 31.1264C59.3219 23.448 54.4589 19.0329 45.3087 17.8811L36.9904 16.7933C34.7509 16.4734 31.9995 15.7056 31.9995 12.8901C31.9995 10.2667 34.303 8.60301 37.6303 8.60301C41.3415 8.60301 43.6451 10.2667 44.4129 13.594L55.7386 13.53C55.0987 5.53163 48.2521 0.540649 38.0142 0.540649C27.5844 0.540649 21.3136 5.78758 21.3136 14.0419C21.3136 20.8885 25.5368 24.8557 33.9191 25.9435L43.0692 27.0952C45.5647 27.4792 48.1882 28.375 48.1882 31.7663C48.1882 35.5415 44.9888 37.781 39.8059 37.781C33.4072 37.781 29.5679 34.3897 29.184 28.311H17.1545C17.6024 38.8048 25.7927 46.6112 39.6139 46.6112ZM87.917 46.6112C101.866 46.6112 112.296 36.7573 112.296 23.5759C112.296 10.4586 101.866 0.540649 87.917 0.540649C73.9679 0.540649 63.538 10.4586 63.538 23.5759C63.538 36.7573 73.9679 46.6112 87.917 46.6112ZM87.917 37.0772C80.1746 37.0772 74.7357 31.5103 74.7357 23.5759C74.7357 15.7056 80.1746 10.1387 87.917 10.1387C95.6595 10.1387 101.098 15.7056 101.098 23.5759C101.098 31.5103 95.6595 37.0772 87.917 37.0772Z"
              fill="#050038"
            />
          </svg>
          <p className="text-[#050038] text-center text-[14px] font-sans leading-6">
            ISO-27001 enterprise-grade security compliant
          </p>
        </div>
        <div className="w-full md:w-[360px] text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="45"
            viewBox="0 0 75 45"
            fill="none"
            className="mx-auto mb-9"
          >
            <path
              d="M47.4475 18.2888V10.1625H37.2736L37.4016 0.180542H28.9553L28.7633 10.1625H19.1013L19.2293 0.180542H10.719L10.5911 10.1625H0.0332031V18.2888H10.4631L10.3351 26.9271H0.0332031V35.0534H10.2071L10.0792 44.9714H18.5894L18.7174 35.0534H28.4434L28.3154 44.9714H36.7617L36.8897 35.0534H47.4475V26.9271H37.0177L37.1456 18.2888H47.4475ZM28.5714 26.9271H18.8454L18.9733 18.2888H28.6994L28.5714 26.9271ZM64.0561 44.9714H74.23V0.180542H64.3121L64.1841 1.78022C63.9282 5.49146 62.2005 7.21911 58.4253 7.41107L53.1144 7.66702V15.8573H64.0561V44.9714Z"
              fill="#050038"
            />
          </svg>
          <p className="text-[#050038] text-center text-[15px] font-sans leading-6">
            Visual Collaboration Platform on G2
          </p>
        </div>
        <div className="w-full md:w-[360px] text-center">
          <CountUp start={0} end={99} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex font-bold text-[26px] text-[#050038] text-center font-inter mb-9 justify-center">
                <h1
                  ref={countUpRef}
                >
                  99
                </h1>
                <span>%</span>
              </div>
            )}
          </CountUp>
          <p className="text-[#050038] text-center text-[15px] font-sans leading-6">
            of the Fortune 100 are customers
          </p>
        </div>
        <div className="w-full md:w-[360px] text-center">
          <CountUp start={0} end={1000} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex font-bold text-[26px] text-[#050038] text-center font-inter mb-9 justify-center">
                <h1
                  ref={countUpRef}
                >
                  1,000
                </h1>
                <span>+</span>
              </div>
            )}
          </CountUp>
          <p className="text-[#050038] text-center text-lg font-sans leading-6">
            community- and expert-built templates
          </p>
        </div>
        <div className="w-full md:w-[360px] text-center">
          <CountUp start={0} end={45} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex font-bold text-[26px] text-[#050038] text-center font-inter mb-9 justify-center">
                <h1
                  ref={countUpRef}
                >
                  45
                </h1>
                <span>M+</span>
              </div>
            )}
          </CountUp>
          <p className="text-[#050038] text-center text-lg font-sans leading-6">
            users around the world
          </p>
        </div>
        <div className="w-full md:w-[360px] text-center">
          <CountUp start={0} end={100} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div className="flex font-bold text-[26px] text-[#050038] text-center font-inter mb-9 justify-center">
                <h1
                  ref={countUpRef}
                >
                  100
                </h1>
                <span>+</span>
              </div>
            )}
          </CountUp>
          <p className="text-[#050038] text-center text-lg font-sans leading-6">
            integrations with technology partners
          </p>
        </div>
      </div>
    </div>
    <img className="mt-4 w-full" src={wave} alt="" />

    </div>
   
  );
};

export default Achievement;