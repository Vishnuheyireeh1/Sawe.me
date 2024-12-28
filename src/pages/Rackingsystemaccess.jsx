import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/rackingsystem.jpg'
import home2 from '../assets/rackingsysaccess.jpeg'
import mesh1 from '../assets/mesh1.png'
import supportbar from '../assets/supportbar.png'
import mesh2 from '../assets/mesh2.png'
import columnguard from '../assets/column_guard.png'
import plastic from "../assets/plastic_crate.png"
import safety from '../assets/safety.png'

const Rackingsystemaccess = () => {

   const navigate = useNavigate();
      
          const handleHome = () => {
            navigate('/');
          };

           // faq dropdown
                const [openIndex, setOpenIndex] = useState(null);
          
                // Array of parts
                const parts = [
                  { title: "Durability", description: " Our accessories are made from high-quality materials that stand the test of time and tough industrial environments." },
                  { title: "Safety", description: "With a strong focus on safety, all our products are designed to enhance the protection of both your storage systems and the people who work around them." },
                  { title: "Efficiency", description: " Designed to optimize storage and streamline workflows, our products ensure that your warehouse operations run smoothly and effectively." },
                  { title: "Customization", description: "We offer tailored solutions to meet the unique requirements of your business, ensuring that your storage systems are optimized for your specific needs." },
                ];
              
                // Function to toggle a section
                const toggleSection = (index) => {
                  setOpenIndex(openIndex === index ? null : index); // Toggle the open state
                };
          

  return (
    <div>
      {/* first part */}
      <div className="w-full mt-20 h-[700px]">
        <div className="relative">
          {/* Content Container */}
          <div className="absolute inset-0 z-10 flex flex-col place-items-start justify-center mt-44 mx-28 sm:block hidden">
            <div className="border-l-4 border-customRed h-40 ">
              <h1 className="text-black text-6xl font-bold mt-8 mx-6">
                Racking System
                <span className="text-customRed"> Accessories</span>
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
                  className="text-black text-xl cursor-pointer"
                >
                  &#8594;
                </h2>
                <h2 className="text-black text-xl font-bold cursor-pointer">
                  Racking System Accessories
                </h2>
              </div>
            </div>
          </div>

          {/* Image with Gradient */}
          <div className="relative">
            <img
              className="w-[2400px] h-[700px] object-cover"
              src={home2}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="w-full h-auto flex flex-col sm:flex-row">
        <div className="flex-1 p-16 mt-28">
          <img className="w-full sm:w-[95%]" src={image1} alt="" />
        </div>
        <div className="flex-1 p-16">
          <h2 className="font-bold text-3xl underline">
            Racking System Accessories
          </h2>
          <p className="mt-6">
            Racking System Accessories designed to complement and enhance your
            storage systems. Our high-quality accessories ensure improved
            functionality, safety, and organization across diverse industrial
            and warehouse environments.
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg mt-6">
              <li>
                Our accessories include Wire-Mesh Decking and GI Decking Panels,
                which provide sturdy support and prevent items from falling
                through pallet racks.
              </li>
              <li>Support Bars and Guide Rails add structural stability,</li>
              <li>
                while Mesh Cladding and Mesh Fencing enhance safety by enclosing
                rack systems and preventing accidental dislodging of materials.
              </li>
              <li>
                For added protection, we supply Column Guards and Frame Guards,
                ensuring your racking systems remain secure from potential
                impacts.
              </li>
              <li>
                Dividers, Plastic Bins, and Plastic Pallets aid in organizing
                and categorizing your inventory, while Wooden Pallets provide
                reliable support for heavy loads.
              </li>
              <li>
                To maintain safety and efficiency, we offer Labels, Safety
                Signages, and Floor Signs, ensuring clear identification and
                smooth workflows in your storage areas. All our accessories are
                built to meet the highest standards of durability and
                performance.
              </li>
              <li>
                Enhance your racking systems with SAWE Solutions LLC FZ's
                premium accessories, tailored to improve safety, organization,
                and operational excellence. Let us help you optimize your
                storage solutions today!
              </li>
            </ul>
          </p>
        </div>
      </div>

 {/* third part */}
<div className="w-full">
  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20 ml-10 mr-10">
    {/* Wire-Mesh Decking and GI Decking Panels */}
    <div className="w-full sm:w-[450px] h-[480px] sm:h-[330px] bg-gray-100 relative mb-6 sm:mb-0">
      <div className="place-items-center p-12">
        <h2 className="font-bold text-xl underline">
          Wire-Mesh Decking and GI Decking Panels
        </h2>
        <p>
          Our Wire-Mesh Decking and GI Decking Panels provide sturdy, reliable
          support for your storage systems. These accessories ensure that
          materials remain securely in place, preventing items from falling
          through pallet racks. They are perfect for optimizing space and
          safeguarding your inventory.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={mesh1} alt="" className="p-3" />
      </div>
    </div>

    {/* Support Bars and Guide Rails */}
    <div className="w-full sm:w-[450px] h-[380px] sm:h-[330px] bg-gray-100 relative mb-6 sm:mb-0">
      <div className="place-items-center p-12">
        <h2 className="font-bold text-xl underline ml-[-60px] text-rack">
          Support Bars and Guide Rails
        </h2>
        <p className="mt-4">
          Structural integrity is crucial for any racking system. Our Support
          Bars and Guide Rails enhance the stability of your racks, preventing
          any structural failures and ensuring maximum load-bearing capacity.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={supportbar} alt="" className="p-3 mt-2" />
      </div>
    </div>

    {/* Mesh Cladding and Mesh Fencing */}
    <div className="w-full sm:w-[450px] h-[380px] heightbox-racksysaccess bg-gray-100 relative ">
      <div className="place-items-center p-12">
        <h2 className="font-bold text-xl underline ml-[-20px] text-rack1">
          Mesh Cladding and Mesh Fencing
        </h2>
        <p className="mt-4">
          Mesh Cladding and Mesh Fencing provide a protective barrier around
          your racks, minimizing the risk of accidental dislodging of materials.
          These solutions help to enclose and secure your storage systems,
          ensuring the safety of your inventory and employees.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-customRed border-2">
        <img src={mesh2} alt="" className="p-5" />
      </div>
    </div>
  </div>
</div>

{/* third part 2nd section */}
<div className="w-full mb-40">
  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20 ml-10 mr-10">
    {/* Column Guards and Frame Guards */}
    <div className="w-full sm:w-[450px] h-[380px] heightbox-racksysaccess bg-gray-100 relative mb-6 sm:mb-0">
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={columnguard} alt="" className="p-4" />
      </div>
      <div className="place-items-center p-12">
        <h2 className="font-bold text-xl underline ml-[-10px] text-rack1">
          Column Guards and Frame Guards
        </h2>
        <p className="mt-4">
          Protect your racking systems from potential impacts with our Column Guards and Frame Guards. These essential accessories safeguard the structural components of your racking systems from damage, ensuring longevity and reducing maintenance costs.
        </p>
      </div>
    </div>

    {/* Dividers, Plastic Bins, and Plastic Pallets */}
    <div className="w-full sm:w-[450px] h-[380px] heightbox-racksysaccess bg-gray-100 relative mb-6 sm:mb-0">
      <div className="place-items-center p-12">
        <h2 className="font-bold text-xl underline">
          Dividers, Plastic Bins, and Plastic Pallets
        </h2>
        <p>
          Keep your inventory organized with our Dividers, Plastic Bins, and Plastic Pallets. These tools help you categorize and manage goods effectively, improving accessibility and reducing clutter in your storage areas. Wooden Pallets are also available for heavy-duty support, offering a reliable base for your goods.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={plastic} alt="" className="mt-4" />
      </div>
    </div>

    {/* Labels, Safety Signages, and Floor Signs */}
    <div className="w-full sm:w-[450px] h-[380px] heightbox-racksysaccess1 bg-gray-100 relative">
      <div className="place-items-center p-12">
        <h2 className="font-bold text-xl underline">
          Labels, Safety Signages, and Floor Signs
        </h2>
        <p>
          Clear communication is key to maintaining safety and operational efficiency. Our range of Labels, Safety Signages, and Floor Signs ensures that your storage areas are clearly marked, helping to streamline workflows and keep your staff informed. These accessories are designed to meet high safety standards, promoting a safer environment for both personnel and inventory.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={safety} alt="" className="p-2 mt-2" />
      </div>
    </div>
  </div>
</div>

<div className='gap-rack'></div>

      {/* fourth part */}
      <div className="w-full mt-40 h-auto ">
        <div className="p-20">
          <h2 className="text-3xl font-bold underline mt-8 mb-5">
            Why Choose Us?
          </h2>
          <div className="mt-10 mb-40">
            <div className="w-[800px] dropdown-width">
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
    
  );
}

export default Rackingsystemaccess