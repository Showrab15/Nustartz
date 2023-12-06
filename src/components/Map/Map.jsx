import map from '../../assets/map1.png'
import './map.css' 
const Map = () => {
    return (
        <div className="mt-20 md:mb-0 mb-[1300px]">
<h1 className="text-center lg:text-left md:pl-8  text-[30px] md:text-[48px] font-semibold font-serif leading-[55px] text-[#050038] py-8">GLOBAL FOOT PRINT</h1>
<div className="worldbg md:h-[600px] md:w-[700px] lg:h-[750px] lg:w-[1000px] h-[400px] w-[400px] mx-auto">
<img className="relative md:top-[110px] lg:top-[80px]" src={map} alt="" />


{/* first column locations */}
<div className="relative md:ml-0 ml-[45px] md:right-28 md:bottom-[450px] lg:bottom-[600px] bottom-[300px] mx-auto">

 <div className="my-3 mx-auto grid md:ml-[80px] ml-0 md:grid-cols-2  lg:grid-cols-3 lg:gap-60 md:gap-[200px] gap-4 text-white">
            <div className="w-[310px] h-[180px] rounded-2xl text-base  " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br/> Numentica LLC  3868 W Carson St, <br/>   Suite 300 Torrance, CA 90503, USA <br />
                    contact@numentica.com <br /></p>
                
                <div className="flex justify-between font-serif">
                    <p className="pl-4 font-serif"> +1310-818-3415</p>
                    <p className="font-serif mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">1</p>
                </div>
            </div >

            <div className="md:relative md:-bottom[25px] lg:bottom-16 md:ml-10 w-[310px] h-[180px] rounded-2xl text-base py-4 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
                    1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
                    contact@numentica.com</p>
             
                
                <div className="flex justify-between">
                    <p  className="pl-4 font-serif"> +44-20-3371-1046</p>
                    <p className="font-serif mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">2</p>
                </div>
            </div >
{/* hi */}
            <div className="lg:ml-[16] md:ml-[450px] md:-bottom-5px] relative lg:bottom-16 w-[310px] h-[180px] rounded-2xl text-base  py-4 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 ">Bangalore OfficeNumentica <br /> Technologies Pvt Ltd, <br />
                    #202, 1st AA Cross, 2nd Main Road, <br />
                    Kasturinagar, Bengaluru-560043, India</p>
                
                <div className="flex justify-between">
                    <p  className="pl-4">contact@numentica.com</p>
                    <p className="mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">3</p>
                </div>
            </div >
        </div>

 </div>



{/* second column locations */}

 <div className="relative bottom-72  md:ml-0 ml-[45px] md:right-[35px] lg:bottom-[500px] md:bottom-[830px] mx-auto">

 <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 md:gap-[280px] gap-8 text-white">
            <div className="w-[310px] h-[180px] rounded-2xl text-base  " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br/> Numentica LLC  3868 W Carson St, <br/>   Suite 300 Torrance, CA 90503, USA <br />
                    contact@numentica.com <br /></p>
                
                <div className="flex justify-between font-serif">
                    <p className="pl-4 font-serif"> +1310-818-3415</p>
                    <p className="font-serif mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">1</p>
                </div>
            </div >

            <div className="relative lg:bottom-16 md:right-[50px] lg:right-0 lg:left-0 w-[310px] h-[180px] rounded-2xl text-base py-4 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
                    1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
                    contact@numentica.com</p>
             
                
                <div className="flex justify-between">
                    <p  className="pl-4 font-serif"> +44-20-3371-1046</p>
                    <p className="font-serif mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">2</p>
                </div>
            </div >

            <div className="relative md:bottom-72  lg:right-0 lg:bottom-32 lg:ml-32 w-[310px] h-[180px] rounded-2xl text-base  py-4 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 ">Bangalore OfficeNumentica <br /> Technologies Pvt Ltd, <br />
                    #202, 1st AA Cross, 2nd Main Road, <br />
                    Kasturinagar, Bengaluru-560043, India</p>
                
                <div className="flex justify-between">
                    <p  className="pl-4">contact@numentica.com</p>
                    <p className="mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">3</p>
                </div>
            </div >
        </div>

 </div>






{/* third column locations */}

<div className="relative md:bottom-[500px]  lg:bottom-[500px] bottom-64 ml-[45px] md:ml-0 lg:ml-0 lg:left-[400px] ">

 <div className="my-3 mx-auto grid  md:grid-cols-2  lg:grid-cols-3 lg:gap-32 gap-8 md:gap-[400px] text-white">
            <div className="relative lg:right-[120px] lg:top-[40px] w-[310px] h-[180px] rounded-2xl text-base  " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 py-4 font-serif ">Corporate Headquarters, <br/> Numentica LLC  3868 W Carson St, <br/>   Suite 300 Torrance, CA 90503, USA <br />
                    contact@numentica.com <br /></p>
                
                <div className="flex justify-between font-serif">
                    <p className="pl-4 font-serif"> +1310-818-3415</p>
                    <p className="font-serif mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">1</p>
                </div>
            </div >

            <div className="relative lg:bottom-16  w-[310px] h-[180px] rounded-2xl text-base py-4 " style={{ backgroundColor: 'rgba(39, 89, 152, 1)'}}>
                <p className="my-auto flex items-center space-y-2  px-4 font-serif">London Office Numentica  (Consleague Consulting Ltd.) <br />
                    1 Poultry, London EC2R BEJ, <br /> United Kingdom <br />
                    contact@numentica.com</p>
             
                
                <div className="flex justify-between">
                    <p  className="pl-4 font-serif"> +44-20-3371-1046</p>
                    <p className="font-serif mr-4 bg-white border-black border-2 text-black font-bold p-1 rounded-full">2</p>
                </div>
            </div >

          
        </div>

 </div>
 
</div>

        </div>
    );
};

export default Map;






//         <div className="">
// <div  className="grid  md:grid-cols-2  lg:grid-cols-3 gap-10">

// <div className="bg-[#275998] rounded-2xl p-4 flex justify-evenly">
//     <h5 className="font-serif font-bold text-base">Coimbatore OfficeNumentica
// Technologies Pvt Ltd,
// Arima Wakefield Building,3rd Floor,
// 281 Avinashi Road,PKD Nagar, Peelamedu, Coimbatore-641004, India
// contact@numentica.com</h5>
// </div>
// </div>
// </div>