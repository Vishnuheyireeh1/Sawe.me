import React  from "react";
import '../components/Home2.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import image4 from '../assets/image4.svg'
import { useEffect, useState } from 'react'
import ourcmpnyimg1 from "../assets/ourcompanyimg1.png"
import ourcmpnyimg2 from '../assets/ourcmpnyimg2.webp'
import aboutus1 from '../assets/aboutus1.jpg'
import aboutus2 from '../assets/aboutus2.jpg'
import aboutus3 from '../assets/aboutus3.png'
import serviceimg1 from '../assets/serviceimg1.avif'
import service1 from '../assets/serviceimg2.jpg'
import service2 from '../assets/rackingsystem.jpg'
import service3 from '../assets/materialhandling.jpg'
import service4 from '../assets/serviceimg5.png'
import service5 from '../assets/serviceimg6.webp'
import service6 from '../assets/serviceimg7.jpg'
import landing from '../assets/landing.mp4'
import rackingsystem from '../assets/rackingsystem.jpg'
import rackingsystem4 from '../assets/rackingsystem4.jpg'
import ips from '../assets/ips.jpg'
import { useNavigate } from 'react-router-dom';
import cimage1 from '../assets/consultancyService.jpg'
import cimage2 from '../assets/consultancyService2.webp'
import cimage3 from '../assets/consultancyService3.jpg'
import cimage4 from '../assets/consultancyService4.png'
import cimage5 from '../assets/consultancyService5.jpg'
import automotive2 from '../assets/automotive.png'
import forklift2 from '../assets/forklift2.svg'




const Home2 = () => {

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


    // scroll to top effect
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    
    const [currentSet, setCurrentSet] = useState(0); // 0 for Set 1, 1 for Set 2

    const handleNext = () => {
      if (currentSet < 1) {
        setCurrentSet(currentSet + 1); // Slide to the second set
      }
    };
  
    const handlePrev = () => {
      if (currentSet > 0) {
        setCurrentSet(currentSet - 1); // Slide back to the first set
      }
    };
  
  
  return (
    // copied items from home

    <>
      <div className="relative">
        <>
          {/* first page */}
          <div
            className="first-div relative w-full h-[700px]"
          >
            <div className="second-div relative w-full h-[700px] overflow-hidden">
              {/* Video Background */}
              <div className="second-div relative w-full h-[900px] overflow-hidden">
    {/* Video Background */}
    <video
      src={landing}
      autoPlay
      loop
      muted
      className="landing1 absolute top-[80px] left-0 w-[30%] h-[70%] "
    ></video>
  </div>
  
            </div>
          </div>
         
  
     {/* Our Service Part */}
  <div className="service-container w-full h-[1000px]">
    <div className="service-wrapper w-full h-[1000px] bg-white pt-24">
      <div className="service-content flex flex-col md:flex-row gap-6 p-8">
        {/* Left Part */}
        <div className="service-left w-full md:w-2/5 bg-white rounded-lg border border-gray-300 p-4 shadow-md mb-6 md:mb-0">
          {/* Content for the left side */}
          <div className="service-left-header flex mt-20 ml-8">
            {/* Heading */}
            {/* <p className="service-heading text-lg font-semibold">OUR SERVICES</p> */}
          </div>
          <div className="service-left-title mt-4">
            <h3 className="service-main-title text-5xl font-bold ml-8">
              Storage{" "}
              <span className="text-customRed underline">Solutions</span>
            </h3>
          </div>
          <div className="service-left-description mt-8 ml-[-28px]"></div>
        </div>
  
        {/* Right Part */}
        <div className="service-right w-full md:w-3/5 relative group overflow-hidden rounded-lg">
          <div
            className="service-right-image absolute inset-0 bg-cover bg-center rounded-lg transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-105 group-hover:brightness-75 bg-gray-200 bg-no-repeat"
            style={{
              backgroundImage: `url(${serviceimg1})`,
              backgroundSize: "480px",
            }}
          ></div>
  
          {/* Overlay Div */}
          {/* <div
            className="service-overlay absolute flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white border-l-4 border-customRed rounded-r-full"
            style={{
              width: "666.906px",
              height: "86px",
              top: "150.516px",
              bottom: "30px",
              right: "60px",
              left: "30px",
              padding: "9px 0px 12px 20px",
            }}
          >
            <div>
              <h2 className="service-overlay-title text-lg font-bold text-gray-800 p-5">
                OUR SERVICES
              </h2>
              <p className="service-overlay-text text-sm text-gray-600"></p>
            </div>
          </div> */}
          <div className="service-arrow relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out h-[40px] w-[40px] rounded-r-full mt-[232px] ml-[680px] text-white text-2xl pl-2">
            
          </div>
        </div>
      </div>
  
   {/* Service Items */}
<div className="service-items-container place-items-center mt-4">
  <div className="service-cards flex flex-wrap gap-5 px-5 justify-center">
    {/* First Service Card */}
    <div className="service-card flex-1 sm:w-48 lg:w-64 h-[198px] flex flex-col bg-white border mb-6 sm:mb-0">
      {/* Top Section */}
      <div className="service-card-header flex flex-1">
        <div className="service-card-left flex-1 bg-gray-200 border-r flex items-center justify-center">
          <h3 className="service-card-title text-2xl">Racking System</h3>
        </div>
        <div className="service-card-right flex-1">
          <img
            src={rackingsystem}
            alt=""
            className="service-card-image w-full h-[196.203px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="service-card-footer border-b p-3 bg-white flex justify-between items-center">
        <p className="service-card-description text-sm pr-16">
          We provide a comprehensive range of Storage Solutions designed to optimize space and improve the efficiency of your operations. <br />
          Our product offerings include a variety of innovative racking systems tailored to meet your specific needs.
        </p>
        <button
          onClick={handleRackingsystem}
          className="service-card-button text-white text-sm font-medium hover:underline border bg-customRed rounded seemore hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>

    {/* Second Service Card */}
    <div className="service-card flex-1 sm:w-48 lg:w-64 h-[198px] flex flex-col bg-white border mb-6 sm:mb-0 ">
      {/* Top Section */}
      <div className="service-card-header flex flex-1">
        <div className="service-card-left flex-1 bg-gray-200 border-r flex items-center justify-center">
          <h3 className="service-card-title text-2xl p-3">Racking System Accessories</h3>
        </div>
        <div className="service-card-right flex-1">
          <img
            src={rackingsystem4}
            alt=""
            className="service-card-image w-full h-[196.203px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="service-card-footer border-b p-3 bg-white flex justify-between items-center">
        <p className="service-card-description text-sm pr-16">
          We provide high-quality Racking System Accessories designed to enhance functionality and safety. <br />
          Our offerings include innovative solutions tailored to complement your storage systems and meet your specific requirements.
        </p>
        <button
          onClick={handleRackingsystemaccess}
          className="service-card-button text-white text-sm font-medium hover:underline border seemore  bg-customRed rounded hover:bg-gray-50 hover:text-customRed"
        >
          See <br /> More
        </button>
      </div>
    </div>

    {/* Third Service Card */}
    <div className="service-card flex-1 sm:w-48 lg:w-64 h-[198px] flex flex-col bg-white border mb-6 sm:mb-0">
      {/* Top Section */}
      <div className="service-card-header flex flex-1">
        <div className="service-card-left flex-1 bg-gray-200 border-r flex items-center justify-center">
          <h3 className="service-card-title text-2xl p-3">Industrial Protection System</h3>
        </div>
        <div className="service-card-right flex-1">
          <img
            src={ips}
            alt=""
            className="service-card-image w-full h-[196.203px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="service-card-footer border-b p-3 bg-white flex justify-between items-center">
        <p className="service-card-description text-sm pr-16">
          We offer Industrial Protection Systems designed to safeguard personnel, equipment, and infrastructure. <br />
          Our innovative solutions ensure enhanced safety and reliability in high-risk industrial environments tailored to your specific needs.
        </p>
        <button
          onClick={handleIndustrialprotection}
          className="service-card-button text-white text-sm font-medium hover:underline border seemore bg-customRed rounded w-40 hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>
  </div>
</div>


  
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top-button fixed bottom-24 right-20 bg-violet-800 rounded-full p-4 shadow-lg hover:bg-customRed text-3xl w-[50px] h-[50px] flex justify-center items-center"
      >
        &uarr;{" "}
      </button>
    </div>
  </div>
  
  <div className="service-spare"></div>
  
  {/* Spare Parts Section */}
  <div className="w-full h-[1000px] bg-white flex flex-col lg:flex-row sm:flex-col spare-parts">
    {/* Left Side Content */}
    <div className="w-full lg:w-1/2 h-full lg:order-1 order-2 px-4 lg:px-0 sm:px-0 content-3">
      <div className="flex ml-20 ">
        {/* <p className="text-lg font-semibold mb-[-20px]">Our Services</p> */}
      </div>
      <div className="second-heading">
        <p className="main-text">
          Spare <span className="text-[65px] text-customRed underline">Parts</span>
        </p>
      </div>
      <div className="mt-8 items-center">
        <p className="ml-[66px]">
          Logistic service provider company plays a pivotal role in the
          global supply chain ecosystem by efficiently managing the
          movement of goods from origin to final destination. These
          companies offer a diverse range of services.
        </p>
      </div>
  
      <div className="mt-6 ml-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:grid-cols-1">
          {/* First Image - Aviation Parts */}
          <div className="relative h-[460px] w-[300px] group">
            <div className="w-[300px] h-[200px] overflow-hidden">
              <div
                className="w-full h-full ourserviceimgs scale-110 transform transition-transform duration-500 ease-in-out hover:scale-100 hover:brightness-75"
                style={{
                  backgroundImage: `url(${service1})`,
                }}
              ></div>
              {/* Div above the image */}
              <div className="absolute rounded shadow-lg border-r-4 mt-[-20px] z-10 w-[300px] h-[250px] bg-white border-customRed">
                <div className="p-2">
                  <h3 className="text-2xl font-bold">Aviation Parts</h3>
                  <p className="text-sm">
                    We provide high-quality aviation parts designed to ensure the highest level of safety, reliability, and performance for aircraft. Our extensive range of components is ideal for commercial, private, and military aviation, offering everything from engine components to expendables.
                  </p>
                  <br />
                  <a onClick={handleAviationpart} className="hover:text-violet-900 cursor-pointer">
                    Read More
                  </a>
                </div>
                <div className="bg-customRed w-[80px] h-[80px] mt-[-33px] ml-[245px] blackbox2 relative">
                  <div className="w-[60px] h-[66px] p-1">
                    <img
                      className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                      src={automotive2}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Second Image - Heavy Equipment Parts */}
          <div className="relative h-[460px] w-[300px] group mt-8 lg:mt-0">
            <div className="w-[300px] h-[200px] overflow-hidden">
              <div
                className="w-full h-full ourserviceimgs scale-110 transform transition-transform duration-500 ease-in-out hover:scale-100 hover:brightness-75"
                style={{
                  backgroundImage: `url(${aboutus2})`,
                }}
              ></div>
              {/* Div above the image */}
              <div className="absolute rounded shadow-lg border-r-4 mt-[-20px] z-10 w-[300px] h-[250px] bg-white border-customRed">
                <div className="p-3">
                  <h3 className="text-2xl font-bold">Heavy Equipment Parts</h3>
                  <p className="text-sm">
                    We offer a wide range of high-quality Heavy Equipment Parts to support the smooth operation of your machinery. Our product line includes Forklift Parts, Equipment Spare Parts, and Automotive Parts, all designed to ensure optimal performance and reliability.
                  </p>
                  <br />
                  <a onClick={handleHeavyequipment} className="hover:text-violet-900 cursor-pointer">
                    Read More
                  </a>
                </div>
                <div className="bg-customRed w-[80px] h-[80px] mt-[-33px] ml-[245px] blackbox2 relative">
                  <div className="w-[60px] h-[66px] p-1">
                    <img
                      className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                      src={forklift2}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  
    {/* Right Side Images */}
    <div className="w-full lg:w-1/2 h-full flex justify-center items-center mt-[-0px] lg:order-2 order-1 bg-white div-6">
      <div className="relative w-[360px] h-[400px] image-spare">
        <img
          src={image2}
          alt="First-Image"
          className="absolute mt-32 ml-[360px] animate-smooth-bounce hide"
        />
        <img
          src={image3}
          alt="Second-Image"
          className="absolute animate-smooth-bounce mt-[480px] ml-24 hide"
        />
        <img
          src={image4}
          alt="Third-Image"
          className="absolute animate-smooth-bounce ml-[360px] mt-[-20px] hide"
        />
        <img
          src={ourcmpnyimg1}
          alt="First Image"
          className="h-[400px] w-[360px] inline companyimg1"
        />
        <img
          src={ourcmpnyimg2}
          alt="Second Image"
          className="border border-t-8 border-l-8 border-white absolute top-[215px] left-[165px] z-10 h-[330px] w-[260px] sm:w-[230px] companyimg2"
        />
      </div>
    </div>
  </div>
  
  <div className="spare-consultancy"></div>
  
  
         {/* Consultancy part */}
  <div className="w-full h-auto">
    <div className="w-full h-[1000px] bg-white pt-24">
      <div className="flex flex-col sm:flex-row h-auto gap-6 p-8">
        {/* Left Part */}
        <div className="w-full sm:w-2/5 bg-white rounded-lg p-4">
          {/* Content for the left side */}
          <div className="flex mt-20 ml-8">
            {/* Heading */}
            {/* <p className="text-lg font-semibold">OUR SERVICES</p> */}
          </div>
          <div className="mt-4 consult-head">
            <h3 className="text-5xl font-bold ml-8">
              Consultancy{" "}
              <span className="text-customRed underline">Services</span>
            </h3>
          </div>
          <div className="mt-8 ml-[-28px]"></div>
        </div>
  
        {/* Right Part */}
        <div className="w-full sm:w-4/5 relative group">
  <div className="flex flex-col sm:flex-row place-items-center w-full gap-5">
    {/* First Card */}
    <div className="flex-1 border w-full sm:w-[48%] flex flex-col bg-white">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row flex-1">
        <div className="flex-1 bg-gray-200 border-r flex items-center justify-center p-2">
          <h3 className="text-lg sm:text-2xl text-center">
            Logistics Solutions Consulting
          </h3>
        </div>
        <div className="flex-1">
          <img
            src={cimage1}
            alt="Logistics Solutions"
            className="w-full h-[150px] sm:h-[198px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t p-3 bg-white flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <p className="text-sm sm:pr-12 text-center sm:text-left">
          We provide customized logistics solutions, ensuring optimal material
          handling equipment is selected to meet your specific operational
          needs.
        </p>
        <button
          onClick={handleRackingsystem}
          className="text-white text-sm font-medium hover:underline border bg-customRed rounded seemore sm:w-40 hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>

    {/* Second Card */}
    <div className="flex-1 border w-full sm:w-[48%] flex flex-col bg-white">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row flex-1">
        <div className="flex-1 bg-gray-200 border-r flex items-center justify-center p-2">
          <h3 className="text-lg sm:text-2xl text-center">
            Warehouse Optimization Strategies
          </h3>
        </div>
        <div className="flex-1">
          <img
            src={cimage2}
            alt="Warehouse Optimization"
            className="w-full h-[150px] sm:h-[198px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t p-3 bg-white flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <p className="text-sm sm:pr-16 text-center sm:text-left py-2 pb-3">
          Maximize warehouse efficiency with our tailored optimization
          strategies. From layout design to inventory flow.
        </p>
        <button
          onClick={handleRackingsystemaccess}
          className="text-white text-sm font-medium hover:underline border bg-customRed rounded seemore sm:w-40  hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>
  </div>
</div>

      </div>
  
      {/* Second Row */}
      <div className="place-items-center mt-20">
  <div className="flex flex-col sm:flex-row place-items-center w-full gap-5 px-5">
    {/* First div */}
    <div className="flex-1 border w-full sm:w-[30%] h-[198px] flex flex-col bg-white mb-4 sm:mb-0">
      {/* Top Section */}
      <div className="flex flex-1">
        <div className="flex-1 bg-gray-200 border-r flex items-center justify-center">
          <h3 className="text-lg sm:text-2xl text-center p-3">
            Warehouse ERP System Implementation
          </h3>
        </div>
        <div className="flex-1">
          <img
            src={cimage3}
            alt=""
            className="w-full h-[196.203px] object-cover"
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-b p-3 bg-white flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm sm:pr-6 text-center sm:text-left">
          Seamlessly integrate a robust ERP system into your warehouse
          operations. <br /> Our solutions streamline processes, improve
          accuracy, and enable real-time inventory tracking.
        </p>
        <button
          onClick={handleRackingsystem}
          className="text-white text-sm font-medium hover:underline border bg-customRed rounded seemore sm:w-40 mt-2 sm:mt-0 hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>

    {/* Second div */}
    <div className="flex-1 border w-full sm:w-[30%] h-[198px] flex flex-col bg-white mb-4 sm:mb-0">
      {/* Top Section */}
      <div className="flex flex-1">
        <div className="flex-1 bg-gray-200 border-r flex items-center justify-center">
          <h3 className="text-lg sm:text-2xl text-center p-3">
            Rack Structural Analysis and Strengthening Solutions
          </h3>
        </div>
        <div className="flex-1">
          <img
            src={cimage4}
            alt=""
            className="w-full h-[196.203px] object-cover"
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-b p-3 bg-white flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm sm:pr-6 text-center sm:text-left">
          Ensure the safety and durability of your storage systems with our
          expert rack analysis. <br /> We provide strengthening solutions to
          extend rack life and enhance load capacity.
        </p>
        <button
          onClick={handleRackingsystemaccess}
          className="text-white text-sm font-medium hover:underline border bg-customRed rounded seemore sm:w-40 mt-2 sm:mt-0 hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>

    {/* Third div */}
    <div className="flex-1 border w-full sm:w-[30%] h-[198px] flex flex-col bg-white mb-4 sm:mb-0">
      {/* Top Section */}
      <div className="flex flex-1">
        <div className="flex-1 bg-gray-200 border-r flex items-center justify-center">
          <h3 className="text-lg sm:text-2xl text-center p-3">
            Rack Inspections and Certification Services
          </h3>
        </div>
        <div className="flex-1">
          <img
            src={cimage5}
            alt=""
            className="w-full h-[196.203px] object-cover"
          />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-b p-3 bg-white flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm sm:pr-6 text-center sm:text-left">
          Maintain compliance and safety with our detailed rack inspection and
          certification services. <br /> We identify potential issues and
          ensure your racks meet industry standards.
        </p>
        <button
          onClick={handleIndustrialprotection}
          className="text-white text-sm font-medium hover:underline border bg-customRed rounded seemore sm:w-40 mt-2 sm:mt-0 hover:bg-gray-50 hover:text-customRed"
        >
          See More
        </button>
      </div>
    </div>
  </div>
</div>

  
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-20 bg-violet-800 rounded-full p-4  shadow-lg hover:bg-customRed text-3xl w-[50px] h-[50px] flex justify-center items-center"
      >
        &uarr;{" "}
      </button>
    </div>
  </div>
  
  <div className="consultancy-footer"></div>
         
        </>
      </div>
    </>
  );
}

export default Home2