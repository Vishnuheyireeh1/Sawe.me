import React  from "react";
import '../components/Home2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane,faArrowRight , faArrowUp } from "@fortawesome/free-solid-svg-icons/faPlane";
import mainimg from '../assets/aboutus2.jpg'
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
import Header2 from "../components/Header2";
import Footer2 from "../components/Footer2";


const imagesSet1 = [
  {src : service1,heading:"Aviation Parts",text:"This is some content inside the overlay."},
  {src : service2,heading:"Racking System Accessories",text:"This is some content inside the overlay."},
  {src : service3,heading:"Material Handling Equipments",text:"This is some content inside the overlay."},
];

const imagesSet2 = [
  {src :service4,heading:"Industrial Protections",text:"This is some content inside the overlay."},
  {src :service5,heading:"Spare Parts",text:"This is some content inside the overlay."},
  {src :service6,heading:"Aerial Work Platform",text:"This is some content inside the overlay."},
];


const Home2 = () => {


    // scroll to top effect
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    
  
    // // function for slidding at service section
    // const [currentSet, setCurrentSet] = useState(0);
    // const [isHovered, setIsHovered] = useState(false); // State to track hover
  
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (!isHovered) {
    //       setCurrentSet((prevSet) => (prevSet === 0 ? 1 : 0));
    //     }
    //   }, 3000); // Switch between sets every 3 seconds
  
    //   return () => clearInterval(interval); // Clean up interval on unmount
    // }, [isHovered]); // Re-run interval when hover state changes
  
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

    <div>
      <>
        {/* first page */}
        <div
          className="relative w-full h-[700px]"
          // style={{
            
          //   background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1)), url(${mainimg})`, // Use the imported image here
          //   backgroundSize: "100%", // Make sure the image covers the entire div
          //   backgroundPosition: "center", // Center the background image
          //   backgroundRepeat: "no-repeat", // Ensure the image doesn't repeat
          // }}
        >
     <div className="relative w-full h-[700px] overflow-hidden">
  {/* Video Background */}
  <video
    src={landing}
    autoPlay
    loop
    muted
    className="absolute top-[83px] left-0 w-full h-[calc(100vh-5rem)] object-cover"
  ></video>



  {/* Content Section */}
  {/* <div className="absolute top- left-0 w-full h-full flex items-center justify-center z-10"> */}
    {/* Content and Line Wrapper */}
    {/* <div className="w-full flex items-start justify-center mt-[100px]"> */}
      {/* Left Division */}
      {/* <div className="w-1/2 flex justify-end pr-10 ml-6">
        <div className="text-black font-bold">
          <h1 className="text-6xl ml-[50px] mb-4">
            Modern Logistic{" "}
            <span className="text-customRed">Transport</span>
          </h1>
          <p className="text-lg ml-[50px] mt-4">
            Specialist In Modern Transportation
          </p>
        </div>
      </div> */}

      {/* Vertical Line */}
      {/* <div className="h-[250px] w-[2px] bg-black mx-10"></div> */}

      {/* Right Division */}
      {/* <div className="w-1/2 flex justify-start pl-10">
        <div className="text-black text-xl font-bold">
          <p>
            Logistic service provider company plays a pivotal role in the global
            supply chain ecosystem managing.
          </p> */}
          {/* Div for satisfied customers */}
          {/* <div className="relative flex space-x-2 mt-6"> */}
            {/* Customer 1 */}
            {/* <div className="relative z-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s"
                alt="Customer 1"
                className="w-[50px] h-[50px] rounded-full border-2 border-customRed"
              />
            </div> */}

            {/* Customer 2 */}
            {/* <div className="absolute left-6 z-10">
              <img
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="Customer 2"
                className="w-[50px] h-[50px] rounded-full border-2 border-customRed"
              />
            </div> */}

            {/* Customer 3 */}
            {/* <div className="absolute left-12 z-20">
              <img
                src="https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg"
                alt="Customer 3"
                className="w-[50px] h-[50px] rounded-full border-2 border-customRed"
              />
            </div> */}

            {/* About Us Button */}
            {/* <div className="absolute flex justify-center items-center mt-24 ml-0 border rounded">
              <button className="h-[51px] w-[161px] p-[1px 35px 0 35px] bg-customRed text-white font-bold rounded transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

        </div>
        {/* Animated Image in Bottom Right Corner */}
        <div className="absolute right-1 mt-[-90px]">
          <img
            src={image1}
            alt="Jumping Object"
            className="w-217 h-131 animate-smooth-bounce"
          />
        </div>

        <div className="mt-[200px]"></div>

        {/* our company part */}
        <div className="w-full h-[787px]  bg-white flex">
          {/* Left Side Content */}
          <div className="w-1/2 h-full">
            <div className="flex mt-28 ml-20">
              {/* Horizontal Line */}
              <div className="w-5 h-[2px] bg-customRed mr-2 mt-[13px]"></div>
              {/* Heading */}
              <p className="text-lg font-semibold">OUR COMPANY</p>
              <FontAwesomeIcon
                icon={faPlane}
                style={{ color: "#D91919" }}
                className="mt-[6px] ml-3 small-right-to-left"
              />
            </div>
            <div className="second-heading">
              <p className="main-text">
                Our Expertise Stands in{" "}
                <p className="block text-[65px] text-customRed underline -mt-6">
                  Logistics Solutions
                </p>
              </p>
            </div>
            <div className="mt-8 items-center ">
              <p className="ml-[66px]">
                Logistic service provider company plays a pivotal role in the
                global supply chain ecosystem by efficiently managing the
                movement of goods from origin to final destination. These
                companies offer a diverse.
              </p>
            </div>
            <div className="mt-6 ml-16 ">
              <div className="grid grid-cols-2 gap-6">
                <div className="h-[139px] w-[317px] border-l-2 border-violet-900 bg-gray-200 group">
                  {/* Left Section */}
                  <div className="flex">
                    <div className="w-[40px] h-[36px]">
                      <img
                        className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                        src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
                        alt="icon"
                      />
                    </div>

                    {/* Vertical Divider */}
                    <div className="border-l  border-violet-900 h-8 mx-7 mt-4"></div>
                    <h3 className="font-bold text-lg mt-4">
                      WorldWide Services
                    </h3>
                  </div>
                  <div className="ml-2 mt-5">
                    <p>
                      Logistic service provider company plays a pivotal role in
                      the global
                    </p>
                  </div>
                </div>

                <div className="h-[139px] w-[317px] border-x-2 border-violet-900 bg-gray-200 group">
                  <div className="flex">
                    <div className="w-[40px] h-[36px]">
                      <img
                        className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                        src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
                        alt="icon"
                      />
                    </div>

                    {/* Vertical Divider */}
                    <div className="border-l  border-violet-900 h-8 mx-7 mt-4"></div>
                    <h3 className="font-bold text-lg mt-4">
                      24/7 Online Support
                    </h3>
                  </div>
                  <div className="ml-2 mt-5">
                    <p>
                      Logistic service provider company plays a pivotal role in
                      the global
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-16">
                <a
                  href="#"
                  className=" ml-16 h-[51px] w-[200px] bg-customRed text-white rounded transition-colors duration-300 hover:bg-gray-200 hover:text-violet-900 text-center justify-center items-center relative inline-block z-10"
                >
                  <p className="mt-3">More about us</p>
                </a>
              </div>
              <div className="mt-16 ml-16">
                <p className="text-customRed text-lg">Make a Phone Call</p>
                <a href="tel:+1234567890" className="hover:text-violet-900">
                  +123 4567 890
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="w-1/2 h-full flex justify-center items-center mt-[-0px] bg-white">
            <div className="relative w-[360px] h-[400px]">
              <img
                src={image2}
                alt=""
                className="absolute mt-32 ml-[360px] animate-smooth-bounce"
              />
              <img
                src={image3}
                alt=""
                className="absolute animate-smooth-bounce mt-[480px] ml-24"
              />
              <img
                src={image4}
                alt=""
                className="absolute animate-smooth-bounce ml-[360px] mt-[-20px]"
              />
              {/* First Image */}
              <img
                src={ourcmpnyimg1}
                alt="First Image"
                className="h-[400px] w-[360px] inline"
              />

              {/* Second Image (Positioned absolutely) */}
              <img
                src={ourcmpnyimg2}
                alt="Second Image"
                className="border border-t-8 border-l-8 border-white absolute top-[215px] left-[165px] z-10 h-[330px] w-[260px]"
              />
            </div>
          </div>
        </div>

        {/* our about us */}
        <div className="w-full h-[860px] bg-slate-100">
          <div className="flex justify-center pt-32">
            {/* Horizontal Line */}
            <span className="w-5 h-[2px] bg-customRed mt-[13px] mr-2"></span>
            {/* Heading */}
            <p className="text-lg font-semibold">ABOUT US</p>
            <FontAwesomeIcon
              icon={faPlane}
              style={{ color: "#D91919" }}
              className="mt-[6px] ml-3 small-right-to-left"
            />
          </div>
          <div className="mt-4 ml-[450px]">
            <h3 className="text-5xl font-bold">Provide Efficient Logistics</h3>
            <h3 className="text-5xl font-bold ml-20">
              Solutions{" "}
              <span className="text-customRed underline">Business</span>
            </h3>
          </div>
          <div className="ml-12 mt-16">
            <div className="grid grid-cols-3 gap-3">
              {/* first image */}
              <div className="relative h-[460px] w-[405px] group">
                <div className=" w-[395px] h-[400px] overflow-hidden ">
                  <div
                    className="w-full h-full ourserviceimgs scale-110 transform transition-transform duration-500 ease-in-out hover:scale-100 hover:brightness-75"
                    style={{
                      backgroundImage: `url(${aboutus1})`,
                    }}
                  ></div>
                  {/* The div above the image */}
                  <div className="absolute rounded shadow-lg border-r-4   bottom-0 ml-[28px] z-10 w-[367px] h-[236px] bg-white p-[33px_40px_32px_40px] border-customRed">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Heading</h3>
                      <p className="text-sm mt-10 ">
                        This is a small paragraph that goes inside the div above
                        the image.
                      </p>
                      <br />
                      <a href="#" className="hover:text-violet-900">
                        Read More
                      </a>
                    </div>
                    <div className=" bg-customRed w-[80px] h-[80px] mt-[-33px] ml-[270px] blackbox2 relative">
                      <div className="w-[60px] h-[66px] p-1">
                        <img
                          className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                          src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* second image */}
              <div className="relative h-[460px] w-[405px] group">
                <div className=" w-[395px] h-[400px] overflow-hidden">
                  <div
                    className="w-full h-full ourserviceimgs scale-110 transform transition-transform duration-500 ease-in-out hover:scale-100 hover:brightness-75"
                    style={{
                      backgroundImage: `url(${aboutus2})`,
                    }}
                  ></div>
                  {/* The div above the image */}
                  <div className="absolute rounded shadow-lg border-r-4   bottom-0 ml-[28px] z-10 w-[367px] h-[236px] bg-white p-[33px_40px_32px_40px] border-customRed">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Heading</h3>
                      <p className="text-sm mt-10 ">
                        This is a small paragraph that goes inside the div above
                        the image.
                      </p>
                      <br />
                      <a href="#" className="hover:text-violet-900">
                        Read More
                      </a>
                    </div>
                    <div className=" bg-customRed w-[80px] h-[80px] mt-[-33px] ml-[270px] blackbox2 relative">
                      <div className="w-[60px] h-[66px] p-1">
                        <img
                          className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                          src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* third image */}
              <div className="relative h-[460px] w-[405px] group">
                <div className=" w-[395px] h-[400px] overflow-hidden">
                  <div
                    className="w-full h-full ourserviceimgs scale-110 transform transition-transform duration-500 ease-in-out hover:scale-100 hover:brightness-75"
                    style={{
                      backgroundImage: `url(${aboutus3})`,
                    }}
                  ></div>
                  {/* The div above the image */}
                  <div className="absolute rounded shadow-lg border-r-4   bottom-0 ml-[28px] z-10 w-[367px] h-[236px] bg-white p-[33px_40px_32px_40px] border-customRed">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Heading</h3>
                      <p className="text-sm mt-10 ">
                        This is a small paragraph that goes inside the div above
                        the image.
                      </p>
                      <br />
                      <a href="#" className="hover:text-violet-900">
                        Read More
                      </a>
                    </div>
                    <div className="bg-customRed w-[80px] h-[80px] mt-[-33px] ml-[270px] blackbox2 relative">
                      <div className="w-[60px] h-[66px] p-1">
                        <img
                          className="ml-3 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-x-[-1]"
                          src="https://media.istockphoto.com/id/1363270862/vector/24-7-service-24-7-open-concept-with-arrow-icon-support-service-24-hours-a-day-and-7-days-a.jpg?s=612x612&w=0&k=20&c=yzSS66i7iXU1zdVUhsO6bdYKDXcUmGn6c05w-ok-Row="
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

        {/* Our Service part */}
        <div className="w-full h-[1000px]">
          <div className="w-full h-[1000px]  bg-white pt-24">
            <div className="flex h-96 gap-6 p-8">
              {/* Left Part */}
              <div className="w-2/5 bg-white rounded-lg border border-gray-300 p-4 shadow-md">
                {/* Content for the left side */}
                <div className="flex mt-6 ml-8">
                  {/* Horizontal Line */}
                  <div className="w-5 h-[2px] bg-customRed mr-2 mt-[13px]"></div>
                  {/* Heading */}
                  <p className="text-lg font-semibold">OUR SERVICES</p>
                  <FontAwesomeIcon
                    icon={faPlane}
                    style={{ color: "#D91919" }}
                    className="mt-[6px] ml-3 small-right-to-left"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-5xl font-bold ml-8">The Achievement</h3>
                  <h3 className="text-5xl font-bold ml-8 ">
                    Of Our{" "}
                    <span className="text-customRed underline">PROJECT</span>
                  </h3>
                </div>
                <div className="mt-8 ml-[-28px]">
                  <a
                    href="#"
                    className=" ml-16 h-[51px] w-[200px] bg-customRed text-white rounded transition-colors duration-300 hover:bg-gray-200 hover:text-violet-900 text-center  relative inline-block z-10"
                  >
                    <p className="mt-3">See More</p>
                  </a>
                </div>
              </div>

              {/* Right Part */}
              <div className="w-3/5 relative group overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-105 group-hover:brightness-75"
                  style={{
                    backgroundImage: `url(${serviceimg1})`,
                  }}
                ></div>

                {/* Overlay Div */}
                <div
                  className="absolute flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white border-l-4 border-customRed rounded-r-full"
                  style={{
                    width: "666.906px",
                    height: "86px",
                    top: "208.516px",
                    bottom: "30px",
                    right: "60px",
                    left: "30px",
                    padding: "9px 0px 12px 20px",
                  }}
                >
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      OUR SERVICES
                    </h2>
                    <p className="text-sm text-gray-600">
                      This is some content inside the overlay.
                    </p>
                  </div>
                </div>
                <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out h-[40px] w-[40px] bg-customRed rounded-r-full mt-[232px] ml-[680px] text-white text-2xl pl-2">
                  &rarr;
                </div>
              </div>
            </div>
            {/* {sliding} */}
            <div
              className="relative overflow-hidden"
              style={{ width: "100%" }} // To ensure the width is controlled
            >
              <div
                className="flex transition-all duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentSet * 50}%)`, // Slide the sets based on current set
                  width: "200%", // Ensure both sets fit horizontally
                }}
              >
                {/* Set 1 */}
                <div className="flex gap-6 pl-[42px]">
                  {imagesSet1.map((image, index) => (
                    <div
                      key={index}
                      className="w-[430px] h-[350px] rounded-lg overflow-hidden relative group"
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                        style={{ backgroundImage: `url('${image.src}')` }}
                      ></div>
                      {/* Overlay Div */}
                      <div
                        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white border-l-4 border-customRed rounded-r-full"
                        style={{
                          width: "329.656px",
                          height: "86px",
                          top: "208.516px",
                          bottom: "30px",
                          right: "60px",
                          left: "30px",
                          padding: "9px 0px 12px 20px",
                        }}
                      >
                        <div>
                          <h2 className="text-lg font-bold text-gray-800">
                            {image.heading}
                          </h2>
                          <p className="text-sm text-gray-600">{image.text}</p>
                        </div>
                        <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out h-[40px] w-[40px] bg-customRed rounded-r-full ml-[285px] mt-[-35px] pt-0 pl-2 text-white text-2xl">
                          &rarr;
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gap between Set 1 and Set 2 */}
                <div style={{ marginRight: "35px" }}></div>

                {/* Set 2 */}
                <div className="flex gap-6 pl-[50px]">
                  {imagesSet2.map((image, index) => (
                    <div
                      key={index}
                      className="w-[430px] h-[350px] rounded-lg overflow-hidden relative group"
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                        style={{ backgroundImage: `url('${image.src}')` }}
                      ></div>
                      {/* Overlay Div */}
                      <div
                        className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white border-l-4 border-customRed rounded-r-full"
                        style={{
                          width: "329.656px",
                          height: "86px",
                          top: "208.516px",
                          bottom: "30px",
                          right: "60px",
                          left: "30px",
                          padding: "9px 0px 12px 20px",
                        }}
                      >
                        <div>
                          <h2 className="text-lg font-bold text-gray-800">
                            {image.heading}
                          </h2>
                          <p className="text-sm text-gray-600">{image.text}</p>
                        </div>
                        <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out h-[40px] w-[40px] bg-customRed rounded-r-full ml-[285px] mt-[-35px] pt-0 pl-2 text-white text-2xl">
                          &rarr;
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Navigation Buttons outside the sliding div */}
              
            </div>
            <div className="flex justify-center mt-4 gap-4">
                {/* Left Button */}
                <button
                  onClick={() => setCurrentSet((prev) => Math.max(prev - 1, 0))}
                  className="bg-customRed text-white w-12 h-12 rounded-full flex justify-center items-center shadow-lg hover:bg-violet-900 transition-all"
                >
                  &larr;
                </button>
                {/* Right Button */}
                <button
                  onClick={() => setCurrentSet((prev) => Math.min(prev + 1, 1))}
                  className="bg-customRed text-white w-12 h-12 rounded-full flex justify-center items-center shadow-lg hover:bg-violet-900 transition-all"
                >
                  &rarr;
                </button>
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
      </>
    </div>
  );
}

export default Home2