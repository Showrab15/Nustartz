import './ourteams.css'
import Siva from '../../../src/assets/Our teams/Siva circle.png'
import linkedInIcon from '../../../src/assets/Our teams/mdi_linkedin.png'
import quote from '../../../src/assets/Our teams/teenyicons_quote-solid.png'
const OurTeams = () => {
    return (
        <div className="bg font-serif py-4 ">
            <div className="mx-auto">
            <h1 className="text-[25px] md:text-[50px] font-normal text-center  py-8">MEET OUR <span className="font-extrabold">LEADERS</span></h1>
<p className="font-bold   text-[20px] md:text-[40px] text-center text-[#275998]">Discover the Collective Expertise, Dedication, <br className="hidden md:block"/>
and Passion That Powers Our Vision.
</p>
            </div>
            <div  className="flex flex-col gap-8 px-4">
{/* first box */}
                <div className="bg-[#275998] text-white h-[263px] p-4 flex justify-evenly items-center ml-20 ">

<div >
<img className="-ml-[145px] mt-10" src={Siva} alt="" />
</div>

<div>
    <div className="flex flex-col">
        <h4 className="font-bold text-[30px]">Siva Periyasamy
</h4>
        <h4 className="font-semibold text-[30px]">Founder/ President
</h4>
<img className="ml-auto" src={linkedInIcon} alt="" />
    </div>
</div>

<div className="flex ">
    <img className="w-8 h-8 transform rotate-180" src={quote} alt="" />
    <p className="font-semibold text-[20px]">I believe in the power of innovation and the <br/> limitless potential of startups. Our team is <br/>  dedicated to nurturing and empowering the <br/> next generation of entrepreneurs as they  <br/> chart their course toward success.</p>
    <img  className="w-8 h-8"  src={quote} alt="" />

</div>
                </div>
            </div>

        </div>
    );
};

export default OurTeams;