
import Navbar1 from '../src/components/Navbar/Navbar1'
import Achievement from './components/Achievement/Achievement'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import WhyUs from './components/WhyUs/WhyUs'
import Testimonial from './components/Testimonial/Testimonial'
import bubble from '../src/assets/bannerandNavbarrightBubble.png'
function App() {

  return (
    <>
    <div style={{background: 'linear-gradient(100.72deg, #F9F9F9 -12.83%, #2370C8 104.22%)'
}} className="bannerAndHeaderBg w-full h-[700px] bg-[linear-gradient(100.72deg, #F9F9F9 -12.83%, #2370C8 104.22%)]
">
  <div className="flex justify-end">
    <img src={bubble} alt="" />
  </div>
   <div className="absolute -top-[15px]"> 
   <Navbar1/>
    <Header></Header>
   </div>
    </div>
    <WhyUs/>
    <Achievement></Achievement>
    <Map/>
    <Testimonial/>
    </>

  )
}

export default App