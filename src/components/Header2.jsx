import React,{useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';




const Header2 = () => {


  const navigate = useNavigate();

  const handleAviationpart = () => {
    navigate('/aviation-parts');
  };

  const handleHeavyequipment = () => {
    navigate('/heavy-equipment');
  };

  const handleIndustrialprotection = () => {
    navigate('/industrial-protection');
  };

  const handleRackingsystemaccess = () => {
    navigate('/rackingsystem-access');
  };

  const handleRackingsystem = () => {
    navigate('/racking-system');
  };
 
  const handleConsultingservice = () => {
    navigate('/consulting-services');
  };

  const handleCommercialbrokerage = () => {
    navigate('/commercial-brokerage');
  };

  const handleContact = () => {
    navigate('/contact-us');
  };

  const handleHome3 = () => {
    navigate('/home3');
  };

  const handleAbout = () => {
    navigate('/about-us');
  };

  const handleHome = () => {
    navigate('/');
  };
  const [isMainDropdownVisible, setIsMainDropdownVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  
  const handleMouseEnter = () => {
    if (leaveTimeout) clearTimeout(leaveTimeout); // Cancel delayed hiding
    setIsMainDropdownVisible(true);
  };
  
  const handleMouseLeave = () => {
    setLeaveTimeout(
      setTimeout(() => {
        setIsMainDropdownVisible(false);
        setActiveDropdown(null); // Close sub-dropdowns
      }, 200) // Adjust delay as needed
    );
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <header className="bg-white flex justify-center">
        <div>
          {/* <div className="relative flex h-[47px] w-[1391px] p-[0px] ml-2 bg-gray-700"> */}
          {/* <div className="w-[70%] bg-gray-700 text-white">
                <div className='flex text-center mt-2'>
                <FontAwesomeIcon icon={faPhone} className='text-red-500 ml-10 mt-1 ' />
                <a href="tel:+123 456 789" className='ml-2  hover:text-orange-500'>[+123 456 789]</a>
                <FontAwesomeIcon icon={faEnvelope} className='text-red-500 ml-11 mt-1'  />
                <a href="mailto:support@logistra.com" className='ml-2  hover:text-orange-500'>[support@logistra.com]</a>
                </div>
              </div> */}
          {/* <div className="w-[30%] bg-orange-500 nav-orc"></div> */}
          {/* </div> */}
          <div className="relative flex h-[82px] w-[1391px] p-[0px] ml-2 bg-white">
            <div className="w-[15%] nav2-orc p-3">
              <img
                src={logo}
                className="w-[70%] ml-5"
                alt=""
              />
            </div>

            <div className="w-[70%] bg-white">
              <nav className="flex space-x-10 p-7 ml-5">
                <div className="group relative">
                  <a
                    // href="/"
                    onClick={handleHome}
                    className="text-black font-bold hover:text-customRed cursor-pointer"
                  >
                    Home
                  </a>
                  {/* <div className="absolute left-0 w-40 bg-white text-black shadow-lg group-hover:max-h-[400px] max-h-0 overflow-hidden transition-all duration-[1000ms] ease-in-out mt-8">
                    <a
                      // href="/home2"
                      onClick={handleHome2}
                      className="block px-4 py-2 hover:bg-violet-900 border border-gray-300 hover:text-white rounded"
                    >
                      Home 2
                    </a>
                    <a
                      // href="/home3"
                      onClick={handleHome3}
                      className="block px-4 py-2 hover:bg-violet-900 border border-gray-300 hover:text-white rounded"
                    >
                      Home3
                    </a>
                  </div> */}
                </div>
                <a
                  // href="/about-us"
                  onClick={handleAbout}
                  className="text-black font-bold hover:text-customRed cursor-pointer"
                >
                  About Us
                </a>

                {/* Services Link with Dropdown */}
                <div
  className="relative group"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  {/* Services Button */}
  <a href="#" className="text-black font-bold hover:text-customRed">
    Services
  </a>

  {/* Main Dropdown */}
  <div
    className={`absolute left-0 w-60 bg-white text-black shadow-lg border border-gray-300 mt-[30px] transform transition-all duration-500 ease-in-out rounded shadow-black ${
      isMainDropdownVisible
        ? "max-h-[400px] opacity-100 translate-y-0 pointer-events-auto"
        : "max-h-0 opacity-0 -translate-y-5 pointer-events-none"
    }`}
  >
    {/* Spare Parts */}
    <div
      className="px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer flex justify-between items-center"
      onMouseEnter={() => setActiveDropdown("spare_parts")}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <span>Spare Parts</span>
      <span className="ml-2">▼</span>
    </div>

    {/* Storage Solutions */}
    <div
      className="px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer flex justify-between items-center"
      onMouseEnter={() => setActiveDropdown("storage_solutions")}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <span>Storage Solutions</span>
      <span className="ml-2">▼</span>
    </div>

    {/* Consulting Services */}
    <a
      onClick={handleConsultingservice}
      className="block px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer"
    >
      Consultancy  Services
    </a>
    <a
          onClick={handleCommercialbrokerage}
          className="block px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer"
        >
          Commercial Brokerage
        </a>
  </div>

  {/* Dynamic Dropdown for Spare Parts */}
  <div
    className={`absolute top-2 left-[240px] w-48 bg-white text-black shadow-lg border border-gray-300 transform transition-all duration-500 ease-in-out mt-16 rounded ml-[-10px] shadow-black ${
      activeDropdown === "spare_parts"
        ? "max-h-[300px] opacity-100 translate-y-0 pointer-events-auto"
        : "max-h-0 opacity-0 -translate-y-5 pointer-events-none"
    }`}
    onMouseEnter={() => setActiveDropdown("spare_parts")}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    {activeDropdown === "spare_parts" && (
      <>
        <a
          onClick={handleAviationpart}
          className="block px-4 py-2 hover:bg-customRed hover:text-white cursor-pointer"
        >
          Aviation Parts
        </a>
        <a
          onClick={handleHeavyequipment}
          className="block px-4 py-2 hover:bg-customRed hover:text-white cursor-pointer"
        >
          Heavy Equipment Parts
        </a>
      </>
    )}
  </div>

  {/* Dynamic Dropdown for Storage Solutions */}
  <div
    className={`absolute top-2 left-[240px] w-48 bg-white text-black shadow-lg border border-gray-300 transform transition-all duration-500 ease-in-out mt-24 rounded ml-[-10px] shadow-black ${
      activeDropdown === "storage_solutions"
        ? "max-h-[300px] opacity-100 translate-y-0 pointer-events-auto"
        : "max-h-0 opacity-0 -translate-y-5 pointer-events-none"
    }`}
    onMouseEnter={() => setActiveDropdown("storage_solutions")}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    {activeDropdown === "storage_solutions" && (
      <>
        <a
          onClick={handleRackingsystem}
          className="block px-4 py-2 hover:bg-customRed hover:text-white cursor-pointer"
        >
          Racking System
        </a>
        <a
          onClick={handleRackingsystemaccess}
          className="block px-4 py-2 hover:bg-customRed hover:text-white cursor-pointer"
        >
          Racking System Accessories
        </a>
        <a
          onClick={handleIndustrialprotection}
          className="block px-4 py-2 hover:bg-customRed hover:text-white cursor-pointer"
        >
          Industrial Protection System
        </a>
      </>
    )}
  </div>
</div>

              </nav>
            </div>
            <div
              onClick={handleContact}
              className="w-[10%] bg-customRed border transition-colors duration-300 ease-in-out hover:bg-gray-200 flex items-center justify-center h-[90%] mt-1 group rounded-md shadow-black"
            >
              <a
                href=""
                className="text-white font-bold transition-colors duration-300 ease-in-out group-hover:text-black"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header2