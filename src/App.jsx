import React,{useState,useEffect} from 'react'
import { Route,Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Home2 from './pages/Home2'
import Aviationparts from './pages/Aviationparts'
import Heavyequipment from './pages/Heavyequipment'
import Industrialprotection from './pages/Industrialprotection'
import Rackingsystemaccess from './pages/Rackingsystemaccess'
import Rackingsystem from './pages/Rackingsystem'
import Consultingservices from './pages/Consultingservices'
import Commercialbrokerage from './pages/Commercialbrokerage'
import Header2 from './components/Header2'
import Footer2 from './components/Footer2'
import ScrollToTop from "./components/ScrollToTop";
import Header3 from './components/Header3'



const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  // Function to check screen size
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (

    <div className='min-h-screen'>
      {/* <Header3/> */}
      {isLargeScreen ? <Header2 /> : <Header3 />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home2/>}/>
        <Route path='/aviation-parts' element={<Aviationparts/>}/>
        <Route path='/heavy-equipment' element={<Heavyequipment/>}/>
        <Route path='/industrial-protection' element={<Industrialprotection/>}/>
        <Route path='/rackingsystem-access' element={<Rackingsystemaccess/>}/>
        <Route path='/racking-system' element={<Rackingsystem/>}/>
        <Route path='/consulting-services' element={<Consultingservices/>}/>
        <Route path='/commercial-brokerage' element={<Commercialbrokerage/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/contact-us' element={<Contactus/>}/>
      </Routes>
      <Footer2/>
    </div>
  )
}

export default App