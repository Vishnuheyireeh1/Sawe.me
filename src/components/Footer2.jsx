import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMap, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Footer2 = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="w-full bg-slate-100 py-16">
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Part 1 */}
        <div className="w-full sm:w-[300px] text-black p-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-24" />
          </div>
          <p className="mt-4">
            We are obliged to provide high-quality solutions, fully adhering to the Local and International Standards.
          </p>
          <div className="mt-6">
            <p>Make a Call</p>
            <a href="tel:+971562839488" className="text-blue-500 hover:underline">+ 971 56 2839488</a>
          </div>
        </div>

        {/* Part 2 */}
        <div className="w-full sm:w-[300px] text-black p-4">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <a
                onClick={() => handleNavigation('/')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/about-us')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/contact-us')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Part 3 */}
        <div className="w-full sm:w-[337px] text-black p-4">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <ul className="space-y-4">
            <li>
              <a
                onClick={() => handleNavigation('/aviation-parts')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Aviation Parts
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/heavy-equipment')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Heavy Equipment Parts
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/racking-system')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Racking System
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/rackingsystem-access')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Racking System Accessories
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/industrial-protection')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Industrial Protection System
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/consulting-services')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Consultancy Service
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('/commercial-brokerage')}
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Commercial Brokerage
              </a>
            </li>
           
          </ul>
        </div>

        {/* Part 4 */}
        <div className="w-full sm:w-[300px] text-black p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMap} className="mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Meydan Free Zone</h3>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </li>
            <li>
              <a
                href="mailto:sales@sawesloutions.me"
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                sales@sawesloutions.me
              </a>
            </li>
            <li>
              <a
                href="tel:+971562839488"
                className="flex items-center text-base font-medium hover:text-red-500 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-4" />
                + 971 56 2839488
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;