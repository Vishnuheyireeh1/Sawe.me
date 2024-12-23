import React, { useState } from 'react'
import aimage1 from '../assets/aviationparts1.webp'
import home1 from '../assets/aviationparts2.jpg'
import { useNavigate } from 'react-router-dom';
import avionics from '../assets/avionics2.jpg'
import engine from '../assets/engine.jpg'
import landinggear from '../assets/landing-gear.jpeg'
import consumables from '../assets/consu.jpg'
import cables from '../assets/cables-connectors.jpg'
import wheels from '../assets/wheels.jpg'
import hoses from '../assets/hoses.jpg'
import avionics2 from '../assets/avionics3.jpg'
import engine2 from '../assets/engine2.jpg'
import landing2 from '../assets/landing2.jpg'
import consumables2 from '../assets/consumables2.jpeg'
import expandables from '../assets/expandables.jpg'
import cables2 from '../assets/cables1.jpg'
import wheels2 from '../assets/wheels4.jpg'
import brake from '../assets/brake2.jpeg'
import tires from '../assets/tires.jpg'
import connectors from '../assets/connectors.jpeg'
import hoses2 from '../assets/hoses.png'

const Aviationparts = () => {

    const navigate = useNavigate();

    const handleHome = () => {
      navigate('/');
    };

    const headings = [
        "Engine Components",
        "Landing Gear Parts",
        "Avionics",
        "Consumables & Expendables",
        "Cables & Connectors",
        "Wheels, Brakes, and Tires",
        "Hoses",
      ];
    
      const images = [
        engine,
        landinggear,
        avionics,
        consumables,
        cables,
        wheels,
        hoses,
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Function to navigate slider
      const handleImageChange = (index) => {
        setCurrentIndex(index);
      };
    
      // Functions for left and right buttons
      const slideLeft = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      };
    
      const slideRight = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      };

      // faq dropdown
      const [openIndex, setOpenIndex] = useState(null);

      // Array of parts
      const parts = [
        { title: "Engine Components", description: "Precision-engineered parts ensuring optimal engine performance." },
        { title: "Landing Gear Parts", description: "Durable components for reliable landing systems." },
        { title: "Avionics", description: "Advanced systems and devices for aircraft communication and navigation." },
        { title: "Consumables & Expendables", description: "Essential items for maintenance and operation." },
        { title: "Cables & Connectors", description: "High-grade connectivity solutions for secure systems." },
        { title: "Wheels, Brakes, and Tires", description: "Robust parts for dependable ground handling." },
        { title: "Hoses", description: "High-quality hoses for fluid transfer applications." },
      ];
    
      // Function to toggle a section
      const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the open state
      };

        // for third part
        const divData = [
          {
            id: 1,
            imageSrc: engine2,
            heading: "Engine Components",
            content: "Our engine components are built to meet the rigorous standards of the aviation industry. We supply high-performance parts that ensure engines operate efficiently, delivering reliable performance. These components are engineered to withstand extreme conditions and high stress, providing safety and durability for both turbine and piston engines.",
            subHeading: "Key Products:",
            points: ["Turbine blades ", "Compressor blades ", "Fuel injectors ", "Bearings and seals ","Valves and springs "],
          },
          {
            id: 2,
            imageSrc: landing2,
            heading: "Landing Gear Parts",
            content: "Our landing gear parts are designed for maximum strength and durability, ensuring smooth take-offs and landings. Whether you’re looking for full landing gear systems or individual components, we offer precision-engineered solutions for all aircraft types.",
            subHeading: "Key Products:",
            points: ["Struts", "Shock absorbers ", "Wheels and tires ", "Brake assemblies","Control linkages "],
          },
          {
            id: 3,
            imageSrc: avionics2,
            heading: "Avionics",
            content: "We provide top-of-the-line avionics systems and components to ensure effective communication, navigation, and monitoring of aircraft systems. Our avionics solutions are designed to meet the highest standards of performance, reliability, and regulatory compliance.",
            subHeading: "Key Products:",
            points: ["Flight management systems (FMS) ", "Autopilots ", "Radar systems ", "Communication radios ","GPS and navigation systems "],
          },
          {
            id: 4,
            imageSrc: consumables2,
            heading: "Consumables",
            content: "Our range of consumables ensures that your aircraft is always equipped with the necessary parts for smooth and efficient operations. From lubricants to hydraulic fluids, these products are essential for routine maintenance and optimal performance.",
            subHeading: "Key Products:",
            points: ["Engine oils and lubricants ", "Hydraulic fluids ", "Anti-icing fluids ", "Cleaning agents and solvents","Greases and pastes "],
          },
          {
            id: 5,
            imageSrc: expandables,
            heading: "Expendables",
            content: "Expendable parts are crucial for daily operations, and we offer a wide variety of expendables designed for one-time use or short-term applications. These parts ensure your aircraft maintains safety and efficiency throughout its lifecycle.",
            subHeading: "Key Products:",
            points: ["Gaskets and seals ", "O-rings ", "Filters", "Adhesives and tapes ","Safety pins and seals "],
          },
          {
            id: 6,
            imageSrc: cables2,
            heading: "Cables",
            content: "Our aviation-grade cables are designed for reliable, long-lasting performance in harsh conditions. These cables meet international safety standards and are used for electrical, data, and communication systems in aircraft.",
            subHeading: "Key Products:",
            points: ["Power cables ", "Signal cables ", "Coaxial cables ", "Fiber optic cables ","Wiring harnesses "],
          },
          {
            id: 7,
            imageSrc: wheels2,
            heading: "Wheels",
            content: "High-quality wheels are vital for safe and reliable landings and take-offs. We provide a range of aircraft wheels, designed to offer strength, durability, and performance under the most demanding conditions",
            subHeading: "Key Products:",
            points: ["Main wheels ", "Nose wheels ", "Brake disks and assemblies ", "Tire pressure monitoring systems "],
          },
          {
            id: 8,
            imageSrc: brake,
            heading: "Brakes",
            content: "Aircraft brake systems are designed for precision and reliability. Our high-performance brake parts ensure smooth, safe, and effective deceleration. Whether you’re replacing brake pads or installing a new brake system, we offer high-quality solutions for all aircraft types.",
            subHeading: "Key Products:",
            points: ["Brake pads and discs ", "Brake assemblies ", "Anti-skid systems ", "Hydraulic brake systems "],
          },
          {
            id: 9,
            imageSrc: tires,
            heading: "Tires",
            content: "Our aircraft tires are built to endure the challenges of high-speed landings, extreme weather conditions, and heavy loads. We offer a variety of tire options for different types of aircraft, including commercial, private, and military.",
            subHeading: "Key Products:",
            points: ["Main tires ", "Nose tires ", "Retread tires ", "Tire maintenance kits "],
          },
          {
            id: 10,
            imageSrc: connectors,
            heading: "Connectors",
            content: "We supply high-quality connectors essential for ensuring proper electrical and communication systems in aircraft. Our connectors are durable and reliable, designed for use in both demanding and safety-critical applications.",
            subHeading: "Key Products:",
            points: ["Power connectors ", "Data connectors ", "Circular connectors ", "Quick-connect fittings ","Terminal blocks and plugs "],
          },
          {
            id: 11,
            imageSrc: hoses2,
            heading: "Hoses",
            content: "Our aviation-grade hoses are designed to meet the stringent requirements of aerospace applications. We offer a wide variety of hoses for fuel, hydraulic systems, and pneumatic systems, ensuring that your aircraft remains operational and safe.",
            subHeading: "Key Products:",
            points: ["Fuel hoses ", "Hydraulic hoses ", "Pneumatic hoses ", "Anti-static hoses ","Fire-resistant hoses "],
          },
          
        ];
  return (
    <div>
      {/* First Part */}
      <div className="w-full mt-20 h-[550px]">
        <div className="relative">
          <div className="absolute border-l-4  border-customRed h-40 mx-28 mt-40"></div>
          <h1 className="absolute text-black text-6xl font-bold mx-36 mt-44">
            Aviation <span className="text-customRed"> Parts</span>
          </h1>
          <h2
            onClick={handleHome}
            className="absolute text-customRed text-xl font-bold mx-36 mt-64 cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={handleHome}
            className="absolute text-black text-xl  mx-52 mt-64 cursor-pointer"
          >
            &#8594;
          </h2>
          <h2 className="absolute text-black text-xl font-bold mx-60 mt-64 cursor-pointer">
            Aviation Parts
          </h2>
          <img className="w-[1800px] h-[550px]" src={home1} alt="" />
        </div>
      </div>
      {/* Second Part */}
      <div className="w-full h-full flex gap-10">
        {/* Left Part */}
        <div className="w-4/12 bg-white h-full">
          <div className="bg-gray-100 w-[360px] h-[700px] mt-28 ml-16">
            <div className="pt-4">
              <h1 className="absolute text-black text-2xl font-bold mx-8 mt-[-10px]">
                Aviation Parts
              </h1>
              {headings.map((heading, index) => (
                <div
                  key={index}
                  className={`w-72 h-[60px] mx-8 mt-8 cursor-pointer flex items-center px-4 ${
                    currentIndex === index ? "bg-gray-900" : "bg-customRed"
                  } hover:bg-gray-900`}
                  onClick={() => handleImageChange(index)}
                >
                  <h2 className="text-xl text-white">{heading}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Part - Image Slider */}
        <div className="w-8/12 bg-white h-full relative overflow-hidden mr-14">
          {/* Images Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out mt-28 h-[500px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0 object-cover"
                draggable={false}
              />
            ))}
          </div>

          {/* Slider Buttons */}
          <div className="absolute left-0 right-0 flex justify-center gap-4 mt-5">
            <button
              onClick={slideLeft}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
            >
              &#8592;
            </button>
            <button
              onClick={slideRight}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
            >
              &#8594;
            </button>
          </div>

          <div className="mt-40">
            {/* <h2 className="text-3xl font-bold underline mb-8">Spare Parts</h2>
            <h3>
              At SAWE Solutions LLC FZ, we specialize in providing an extensive
              range of high-quality spare parts tailored to meet the rigorous
              demands of the aviation industry. Our inventory is designed to
              support seamless operations by offering reliable components that
              enhance safety, performance, and efficiency.
            </h3> */}

            <h2 className="text-3xl font-bold underline mt-8 mb-5">Aviation Parts</h2>
            <h3>
            At SAWE Solutions LLC FZ, we provide high-quality aviation parts designed to ensure the highest level of safety, reliability, and performance for aircraft. Our extensive range of components is ideal for commercial, private, and military aviation, offering everything from engine components to expendables. Explore our categories below to find the right parts for your needs.
            </h3>

            <h2 className="text-3xl font-bold underline mt-8 mb-5">Why Choose Us?</h2>
            <h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>
              Quality Assurance: All of our parts are rigorously tested to meet the highest industry standards. 
              </li>
              <li>Expertise: With years of experience in the aviation industry, our team understands the critical nature of these parts and is committed to delivering reliable solutions.  
              </li>
              <li>Fast Delivery: We understand the urgency in the aviation industry and offer quick delivery services worldwide to minimize aircraft downtime. 
              </li>
              <li>Competitive Pricing: We offer competitive pricing on all of our products, ensuring that you get the best value for your investment. 
              </li>
            </ul>
            
            </h3>

            <div className="mt-10 mb-40">
              <div className="w-[800px]">
              <h2 className='font-semibold'>Our aviation parts portfolio includes:
              </h2>
                {parts.map((part, index) => (
                  <div key={index} className="mb-2">
                    {/* Main Section */}
                    <div
                      className="bg-gray-200 w-full h-10 flex justify-between items-center cursor-pointer mt-6"
                      onClick={() => toggleSection(index)}
                    >
                      <h2 className="font-semibold text-gray-900 p-2">
                        {part.title}
                      </h2>

                      {/* Down Arrow */}
                      <div
                        className={`text-gray-900 mr-4 transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        &#9660; {/* Unicode for down arrow */}
                      </div>
                    </div>

                    {/* Collapsible Content */}
                    <div
                      className={`bg-gray-900 rounded-br rounded-bl overflow-hidden transition-all duration-500 ${
                        openIndex === index
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-200 p-3">{part.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third part */}
      <div className="w-full h-full flex flex-wrap justify-center gap-10 mt-20 mb-40">
      {divData.map((div, index) => (
        <div
          key={div.id}
          className="relative p-4 border rounded-lg flex flex-col mt-40"
          style={{
            width: "400px",
            height: "550px",
          }}
        >
          {/* Unique Circle Image */}
          <div
            className="absolute overflow-hidden hover:brightness-hover"
            style={{
              width: "350px",
              height: "350px",
              top: "-175px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "50%",
              borderBottomLeftRadius: "0",
              backgroundColor: "#f0f0f0",
            }}
          >
            <img
              src={div.imageSrc}
              alt={`Image for ${div.heading}`}
              className="w-full h-full object-cover hover:brightness-50 transition-all duration-500 hover:scale-110"
            />
          </div>

          {/* Div Content */}
          <div className="mt-52 ">
            <h2 className="text-lg font-bold">{div.heading}</h2>
            <p className="text-sm text-gray-600 ">{div.content}</p>
            <h3 className="text-md font-semibold">{div.subHeading}</h3>
            <ul className="list-disc list-inside">
              {div.points.map((point, idx) => (
                <li key={idx} className="text-sm text-gray-500">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Aviationparts