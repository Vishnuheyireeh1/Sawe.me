import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faMap,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'

const Footer2 = () => {

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
    const handleAbout = () => {
      navigate('/about-us');
    };
  
    const handleHome = () => {
      navigate('/');
    };

  return (
    <footer className="w-full h-[500px] bg-slate-100 flex justify-center py-32">
      <div className="flex flex-wrap justify-center gap-4">
        {/* Part 1 */}
        <div className="h-[335px] w-[300px] text-black p-4">
          <div className="flex">
            {/* <img
              className=" w-[80px] h-[66px] p-1"
              src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
              alt="icon"
            /> */}
            <h1 className="text-2xl font-bold mb-4">
              <img src={logo} alt="" className='w-24'/>
            </h1>
            {/* <p className="text-lg font-bold mt-8 ml-[-94px]">Sub Heading</p> */}
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            quisquam ducimus natus exercitationem ipsum sed accusamus debitis
          </p>

          <div className="flex mt-6">
            <img
              className=" w-[45px] h-[45px] p-1"
              src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
              alt="icon"
            />
            <div>
              <p>Make a Call</p>
              <a href="tel:+1234567890">+123 4567 890</a>
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="h-[335px] w-[300px] text-black p-4">
          {/* Heading */}
          <h2 className="text-2xl font-bold mb-4]">Quick Links</h2>

          {/* Links */}
          <ul className="space-y-6 mt-8">
            <li>
              <a
              onClick={handleHome}
                href="/"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a
              onClick={handleAbout}
                href="/about-us"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Services
              </a>
            </li>
            <li>
              <a
                onClick={handleContact}
                href="/contact-us"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Part 3 */}
          <div className="h-[235px] w-[337px] text-black p-4">
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4">Services</h2>

            {/* Options */}
            <ul className="space-y-4 mt-6">
              <li>
                <a
                onClick={handleAviationpart}
                  href="#service1"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Aviation Parts
                </a>
              </li>
              <li>
                <a
                  onClick={handleHeavyequipment}
                  href="#service2"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Heavy Equipment Parts
                </a>
              </li>
              <li>
                <a
                onClick={handleRackingsystem}
                  href="#service3"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Racking System
                </a>
              </li>
              <li>
                <a
                onClick={handleRackingsystemaccess}
                  href="#service4"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Racking System Accessories
                </a>
              </li>
              <li>
                <a
                onClick={handleIndustrialprotection}
                  href="#service5"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Industrial Protection System
                </a>
              </li>
              <li>
                <a
                onClick={handleConsultingservice}
                  href="#service6"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Consultancy Services
                </a>
              </li>
              <li>
                <a
                onClick={handleCommercialbrokerage}
                  href="#service6"
                  className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
                >
                    <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Commercial Brokerage
                </a>
              </li>
            </ul>
          </div>

        {/* Part 4 */}
        <div className="h-[335px] w-[300px] text-black p-4">
          {/* Heading */}
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          {/* Links */}
          <ul className="space-y-6 mt-8">
            <li>
              <a
                href="#link1"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faMap} className="mr-4" />
                Commercial Street Road Fratton,Australia
              </a>
            </li>
            <li>
              <a
                href="mailto:support@logistra.com info@logistra.com"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                support@logistra.com info@logistra.com
              </a>
            </li>
            <li>
              <a
                href="tel:+123 456 789"
                className="flex items-center text-base font-medium hover:text-customRed transition-all duration-200"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-4" />
                +123 456 789
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer2