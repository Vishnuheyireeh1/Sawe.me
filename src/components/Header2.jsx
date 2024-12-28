import React,{useState} from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'

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
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md header">
  <header className="bg-white flex justify-center">
    <div className="w-full max-w-screen-xl px-4 sm:px-8">
      <div className="relative flex h-[82px] w-full p-[0px] ml-2 bg-white">
        <div className="w-[15%] nav2-orc p-3">
          <img
            onClick={handleHome}
            src={logo}
            className="w-[80%]  cursor-pointer logo"
            alt=""
          />
        </div>

        <div className="w-[70%] bg-white">
          <nav className="flex space-x-10 p-7 ml-5">
            <div className="group relative">
              <a
                onClick={handleHome}
                className="text-black font-bold hover:text-customRed cursor-pointer hide"
              >
                Home
              </a>
            </div>
            <a
              onClick={handleAbout}
              className="text-black font-bold hover:text-customRed cursor-pointer main-part"
            >
              About Us
            </a>

            {/* Services Link with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="text-black font-bold hover:text-customRed main-part"
              >
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
                <div
                  className="px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer flex justify-between items-center"
                  onMouseEnter={() => setActiveDropdown("spare_parts")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Spare Parts</span>
                  <span className="ml-2">▼</span>
                </div>

                <div
                  className="px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer flex justify-between items-center"
                  onMouseEnter={() =>
                    setActiveDropdown("storage_solutions")
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>Storage Solutions</span>
                  <span className="ml-2">▼</span>
                </div>

                <a
                  onClick={handleConsultingservice}
                  className="block px-4 py-2 hover:bg-customRed hover:text-white border-b border-gray-300 cursor-pointer"
                >
                  Consultancy Services
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
                className={`absolute top-2 left-[310px] w-48 bg-white text-black shadow-lg border border-gray-300 transform transition-all duration-500 ease-in-out mt-16 rounded ml-[-80px] shadow-black ${
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

        {/* Contact Us Button */}
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