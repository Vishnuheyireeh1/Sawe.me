import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpeg";

const Navbar = () => {

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

  
  const [openNav, setOpenNav] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const servicesDropdownRef = useRef(null); // Ref for services dropdown

  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenAvatarDropdown(false);
    setOpenServicesDropdown(false);
  };

  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  const toggleServicesDropdown = (service) => {
    if (activeService === service) {
      setActiveService(null);
    } else {
      setActiveService(service);
    }
    setOpenServicesDropdown(true);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setOpenServicesDropdown(false);
        setActiveService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navList = () => {
    return (
      <>
        <div
          onClick={handleHome}
          style={{cursor:"pointer"}}
          className={ ({ isActive, isPending }) =>
            `${
              isPending ? "pending" : isActive ? "text-customRed" : ""
            } `
          }
        >
          Home
        </div>

        <div
          onClick={handleAbout}
          style={{cursor:"pointer"}}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-customRed" : ""
          }
        >
          About Us
        </div>
        <div className="relative" ref={servicesDropdownRef}>
          <button
            onClick={() => toggleServicesDropdown("services")}
            className={`flex items-center ${
              openServicesDropdown ? "text-customRed" : ""
            }`}
          >
            Services
          </button>
          {openServicesDropdown && (
            <div className="absolute bg-white rounded shadow-md mt-2 space-y-2 h-auto z-30">
              <button
                onClick={() => toggleServicesDropdown("service1")}
                className="block p-2 flex justify-between w-full"
              >
                Spare Parts
              </button>
              {activeService === "service1" && (
                <div className="ml-4 space-y-1">
                  <div
                    onClick={handleAviationpart}
                    className="block p-2 cursor-pointer"
                  >
                    Aviation Parts
                  </div>
                  <div
                    onClick={handleHeavyequipment}
                    className="block p-2 cursor-pointer"
                  >
                    Heavy Equipment Parts
                  </div>
                </div>
              )}
              <button
                onClick={() => toggleServicesDropdown("service2")}
                className="block p-2 flex justify-between w-full"
              >
                Storage Solution
              </button>
              {activeService === "service2" && (
                <div className="ml-4 space-y-1">
                  <div
                    onClick={handleRackingsystem}
                    className="block p-2 cursor-pointer"
                  >
                    Racking System
                  </div>
                  <div
                    onClick={handleRackingsystemaccess}
                    className="block p-2 cursor-pointer"
                  >
                    Racking System Accessories
                  </div>
                  <div
                    onClick={handleIndustrialprotection}
                    className="block p-2 cursor-pointer"
                  >
                    Industrial Protection System
                  </div>
                </div>
              )}
              <button
                onClick={handleConsultingservice}
                className="block p-2 flex justify-between w-full"
              >
                Consultancy Services
              </button>
              <button
                onClick={handleCommercialbrokerage}
                className="block p-2 flex justify-between w-full"
              >
                Commercial Brokerage
              </button>
            </div>
          )}
        </div>
        <div
          onClick={handleContact}
          style={{cursor:"pointer"}}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-customRed" : ""
          }
        >
          Contact Us
        </div>
      </>
    );
  };

  return (
    <header className="bg-white border-b-2 border-white font-DM">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        {/* Logo Section */}
        

        {/* Navigation Links */}
        <div className="flex items-center justify-between">
        <div onClick={toggleAvatarDropdown}>
          <div className="w-40 nav2-orc p-3">
            <img onClick={handleHome} src={logo} className="w-[70%] ml-5 cursor-pointer" alt="" />
          </div>
        </div>
          <a href="#" className="text-2xl font-semibold text-slate-50">
            <img className='w-20' src="WellnessFusion.png" alt="" />
          </a>
          
          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleNav}
            className="block border border-slate-50 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
          >
            {/* Hamburger Icon */}
            <svg
              className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            {/* Close Icon */}
            <svg
              className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {openNav && (
          <div className={`${openNav ? '' : 'hidden'} mt-4 bg-slate-50 flex flex-col gap-4 p-6 rounded`}>
            {navList()}
          </div>
        )}
      </div>

      {/* Desktop Dropdown Navigation */}
      <nav className="hidden md:flex space-x-4">
        {navList()}
      </nav>
    </header>
  );
};

export default Navbar;
