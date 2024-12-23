import React from 'react'
import aimage1 from '../assets/contact1.jpg'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

const Contactus = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>
      {/* First Part */}
      <div className="w-full mt-20 h-[600px]">
        <div className="relative">
          <div className="absolute border-l-4  border-customRed h-40 mx-28 mt-40"></div>
          <h1 className="absolute text-white text-6xl font-bold mx-36 mt-44">
            Contact <span className="text-customRed">Us</span>
          </h1>
          <h2
            onClick={handleHome}
            className="absolute text-customRed text-xl font-bold mx-36 mt-64 cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={handleHome}
            className="absolute text-white text-xl  mx-52 mt-64 cursor-pointer"
          >
            &#8594;
          </h2>
          <h2 className="absolute text-white text-xl font-bold mx-60 mt-64 cursor-pointer">
            Contact Us
          </h2>
          <img className="w-[2400px] h-[600px]" src={aimage1} alt="" />
        </div>
      </div>
      {/* second part */}
      <div className="w-full h-auto">
        <div className="flex">
          {/* Right part */}
          <div className="flex-1 p-28 mt-10">
            <h2 className="text-xl font-bold underline">Contact Us</h2>
            <h2 className="text-5xl font-bold mt-5">
              Get in Touch And We’ll Help Your Business
            </h2>
            <p className="mt-10 text-lg">
              Our dedicated team of experts is here to guide you through every
              step of the insurance journey, ensuring you make informed choices
              tailored to your unique needs choices tailored to your unique needs.
            </p>
          </div>
          {/* Left Part */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-6">
            {/* <!-- Name Input --> */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
            />
            {/* <!-- Email Input --> */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
            />
            {/* <!-- Phone Input --> */}
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
            />
            {/* <!-- Message Input --> */}
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
            ></textarea>
            {/* <!-- Submit Button --> */}
            <button className="w-full max-w-md p-4 bg-customRed text-white font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-customRed hover:text-customRed">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* map part */}
      <div className="relative mt-40">
        <div className="absolute h-[40%] w-[90%] bg-gray-100 ml-16 flex mt-[-70px]">
          <div className="flex-1 border-r-2">
            <div className="place-items-center mt-12 group">
              <FontAwesomeIcon
                icon={faMap}
                style={{
                  height: "50px",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="group-hover:scale-x-[-1] text-customRed"
              />
              <h2 className="font-bold text-4xl">Location</h2>
              <h3 className="text-xl  justify-items-center">
                Meydan Free Zone <br />
                <p>Dubai, United Arab Emirates</p>
              </h3>
            </div>
          </div>
          <div className="flex-1 border-r-2">
            <div className="place-items-center mt-12 group">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  height: "50px",
                  transition: "transform 0.3s ease-in-out",
                }}
                 className="group-hover:scale-x-[-1] text-customRed"
              />
              <h2 className="font-bold text-4xl">Email</h2>
              <a
                href="email:sales@sawesloutions.me"
                className="text-xl ml-6 cursor-pointer hover:text-customRed"
              >
                sales@sawesloutions.me <br />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="place-items-center mt-12 group">
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  height: "50px",
                  transition: "transform 0.3s ease-in-out",
                }}
                 className="group-hover:scale-x-[-1] text-customRed"
              />
              <h2 className="font-bold text-4xl">Phone</h2>
              <a
                href="tel:+ 971 56 2839488"
                className="text-xl mt-6 cursor-pointer hover:text-customRed"
              >
                + 971 56 2839488
              </a>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7222.823730461748!2d55.294628141643834!3d25.155567298892056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67ce5bc69073edfd%3A0x4a92424a46188584!2sSAWE%20Solutions%20LLC%20FZ!5e0!3m2!1sen!2sin!4v1734604459865!5m2!1sen!2sin"
          width="100%"
          height="650"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contactus