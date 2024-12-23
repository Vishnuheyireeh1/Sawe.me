import React,{useState} from 'react'
import aimage1 from '../assets/aviationparts1.webp'
import { useNavigate } from 'react-router-dom';
import './heavyequipment.css'
import forklift from '../assets/forklift.jpg'
import equipmentspare from '../assets/equipmentspare.jpg'
import automotive from '../assets/automotive.jpg'
import home2 from '../assets/heavyequipment.jpg'
import forklift2 from '../assets/forklift2.svg'
import equipmentspare2 from '../assets/equipmentspare.png'
import automotive2 from '../assets/automotive.png'

const Heavyequipment = () => {

  // faq dropdown
  const [openIndex, setOpenIndex] = useState(null);

 // Array of parts
 const parts = [
  { title: "Why Choose Our Forklift Parts?", description: "Our forklift parts are compatible with leading brands like Toyota, Hyster, Crown, and Mitsubishi, ensuring precise fits and lasting performance." },
  { title: "Why Choose Our Equipment Spare Parts?", description: "Our spare parts meet or exceed OEM standards, ensuring compatibility and durability under extreme working conditions." },
  { title: "Why Choose Our Automotive Parts?", description: "We partner with trusted manufacturers to offer high-quality automotive components that ensure safety and longevity." },
];

// Function to toggle a section
const toggleSection = (index) => {
  setOpenIndex(openIndex === index ? null : index); // Toggle the open state
};

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>
      {/* first part */}
      <div className="w-full mt-20 h-[600px]">
            <div className="relative">
       {/* Content Container */}
       <div className="absolute inset-0 z-10 flex flex-col place-items-start justify-center mx-28">
         <div className="border-l-4 border-customRed h-40 ">
         <h1 className="text-white text-6xl font-bold mt-8 mx-6">
           Heavy Equipment<span className="text-customRed"> Parts</span>
         </h1>
         <div className="flex items-center space-x-2 mt-4 mx-6">
           <h2
             onClick={handleHome}
             className="text-customRed text-xl font-bold cursor-pointer"
           >
             Home
           </h2>
           <h2
             onClick={handleHome}
             className="text-white text-xl cursor-pointer"
           >
             &#8594;
           </h2>
           <h2 className="text-white text-xl font-bold cursor-pointer">
             Heavy Equipment Parts
           </h2>
         </div>
         </div>
       </div>
     
       {/* Image with Gradient */}
       <div className="relative">
         <img className="w-[2400px] h-[600px] object-cover" src={home2} alt="" />
         <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
       </div>
     </div>
     
           </div>
     

      {/* second part */}
      <div className="w-full h-full bg-white">
        <h1 className="text-black font-bold underline text-3xl mt-14 ml-10">
          Heavy Equipment Parts
        </h1>
        <p className=" text-lg mt-5 ml-10 mr-10">
          At SAWE Solutions LLC FZ, we offer a wide range of high-quality Heavy
          Equipment Parts to support the smooth operation of your machinery. Our
          product line includes Forklift Parts, Equipment Spare Parts, and
          Automotive Parts, all designed to ensure optimal performance and
          reliability. We understand the importance of high-quality spare parts
          in maintaining the performance and longevity of your machinery and
          equipment. That’s why we provide only the best products, ensuring that
          each part adheres to industry standards for safety and functionality.
          Whether you need replacement parts for forklifts, heavy equipment, or
          automotive systems, our extensive inventory has you covered.{""}{" "}
          <br />
          <br />
          Our focus is on providing durable, cost-effective solutions that
          minimize downtime and extend the lifespan of your equipment. With
          quick delivery times and a dedicated customer support team, SAWE
          Solutions LLC FZ is your trusted partner for all your heavy equipment
          part requirements. Explore our full range of parts and let us help you
          keep your equipment running at its best.
        </p>
        <div className="w-full h-[1200px] mt-10">
          <div className="flex gap-6 justify-center mr-10 ml-10">
            {/* Image with Content Section */}
            {[
              {
                imgSrc: forklift,
                title: "Forklift Parts",
                img: forklift2,
                description: `Forklifts are essential in material handling operations, and ensuring their smooth functionality is critical for your operations. We supply reliable and durable forklift parts that maximize performance and reduce downtime.`,
                keyProducts: [
                  "Forklift Tires: Solid, pneumatic, and cushion tires for optimal traction and performance.",
                  "Hydraulic Systems: Pumps, cylinders, and valves to keep your forklift running smoothly.",
                  "Mast Assemblies: Replacement masts, rollers, and chains for load handling efficiency.",
                  "Electrical Components: Batteries, alternators, and ignition systems for reliable operation.",
                  "Forks and Attachments: Standard and custom forks, side shifters, clamps, and extensions.",
                ],
              },
              {
                imgSrc: equipmentspare,
                title: "Equipment Spare Parts",
                img: equipmentspare2,
                description: `Heavy equipment used in construction, mining, and agriculture demands robust and reliable spare parts to maintain peak efficiency. We offer an extensive inventory of spare parts that cater to a wide range of equipment types.`,
                keyProducts: [
                  "Undercarriage Parts: Tracks, rollers, idlers, and sprockets for excavators, bulldozers, and loaders.",
                  "Hydraulic Components: Pumps, seals, hoses, and fittings for heavy-duty applications.",
                  "Engine Parts: Filters, pistons, gaskets, and turbochargers for diesel and gasoline engines.",
                  "Wear Parts: Bucket teeth, cutting edges, and blades for earthmoving machinery.",
                  "Cabin Components: Seats, joysticks, and control panels for operator comfort and control.",
                ],
              },
              {
                imgSrc: automotive,
                title: "Automotive Parts",
                img: automotive2,
                description: `We provide premium automotive parts for commercial vehicles, construction equipment, and industrial machines. Our range of automotive components is designed to support heavy-duty vehicles and enhance their performance.`,
                keyProducts: [
                  "Brake Systems: Discs, pads, drums, and calipers for reliable stopping power.",
                  "Transmission Parts: Clutches, gearboxes, and torque converters for smooth performance.",
                  "Cooling Systems: Radiators, fans, and coolant hoses for effective heat management.",
                  "Suspension Components: Springs, shock absorbers, and control arms for a smooth ride.",
                  "Electrical Parts: Alternators, starters, and lighting systems for dependable operations.",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="w-[400px] relative group">
                {/* Image */}
                <div className="w-[400px] h-[300px] overflow-hidden mb-4">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="bg-slate-50 p-4 mt-[-40px] absolute w-[380px]">
                  <div className="bg-customRed w-20 h-20 mt-[-40px] ml-[260px]">
                    <img
                      src={item.img}
                      alt=""
                      className="p-4 transform transition-transform duration-300 group-hover:scale-x-[-1]"
                      // Added group-hover to flip the image on hover
                    />
                  </div>
                  <h2 className="text-black font-bold text-xl underline">
                    {item.title}
                  </h2>
                  <p className="text-lg mt-2">{item.description}</p>
                  <h3 className="text-lg font-semibold mt-4">Key Products:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                    {item.keyProducts.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* third part */}
      <div className="w-full h-auto">
        <div className="ml-72 mb-40">
          <div className="w-[800px]">
            <h2 className="font-semibold"></h2>
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
  );
}

export default Heavyequipment