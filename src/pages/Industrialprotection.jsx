import React from 'react'
import aimage1 from '../assets/indusrtial.jpeg'
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/image2.jpg'
import upright from '../assets/upright_protector.png'
import door from '../assets/door_protecter.png'
import dock from '../assets/dock_bumber.png'
import bollards from '../assets/Bollards and Delimiters.png'
import barriers from '../assets/Standard Barriers.png'

const Industrialprotection = () => {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>
      {/* First Part */}
      <div className="w-full mt-20 h-[700px]">
        <div className="relative">
          {/* Content Container */}
          <div className="absolute inset-0 z-10 flex flex-col place-items-start justify-center mx-28 hidden sm:flex">
            <div className="border-l-4 border-customRed h-40">
              <h1 className="text-black text-6xl font-bold mt-8 mx-6">
                Industrial Protection
                <span className="text-customRed">System</span>
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
                  Industrial Protection System
                </h2>
              </div>
            </div>
          </div>

          {/* Image with Gradient */}
          <div className="relative">
            <img
              className="w-[2400px] h-[700px] object-cover img-commers"
              src={aimage1}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
          </div>
        </div>
      </div>

      <div className='gap-indus'></div>

      {/* Second Part */}
      <div className="w-full h-auto flex flex-col sm:flex-row">
        <div className="flex-1 p-16 mt-36">
          <img src={image1} alt="" className="w-full h-auto" />
        </div>
        <div className="flex-1 p-16">
          <h2 className="font-bold text-3xl underline">
            Industrial Protection System
          </h2>
          <p className="mt-6">
            At SAWE Solutions LLC FZ, we are proud to be the exclusive
            distributors of the ENNAT Industrial Protection System – USA, a
            global leader in providing innovative and reliable industrial safety
            solutions. Our Industrial Protection Systems are designed to
            safeguard personnel, equipment, and infrastructure in high-traffic
            and high-risk industrial environments. <br /> <br />
            Our extensive product range includes Standard Barriers, Upright
            Protectors, Double Barriers, Bollards, Door Protectors, Dock
            Bumpers, and Delimiters, all engineered to provide exceptional
            protection and durability. These solutions help minimize the risk of
            damage caused by collisions, ensuring the safety of your facility
            while reducing maintenance costs.
            <ul className="list-disc pl-6 space-y-1 text-lg mt-6">
              <li>
                Standard Barriers and Double Barriers provide robust protection
                for walkways and equipment zones,
              </li>
              <li>
                while Upright Protectors shield racking systems from forklift
                impacts.
              </li>
              <li>
                Bollards and Delimiters define and protect access points, and
                Dock Bumpers offer essential cushioning for loading docks.
              </li>
              <li>
                Door Protectors enhance the safety and longevity of industrial
                doors in busy environments.
              </li>
            </ul>
          </p>
          <p className="mt-6">
            With a focus on quality, innovation, and compliance, our ENNAT
            Industrial Protection Systems are the ideal solution for creating a
            safer and more efficient workplace. Choose SAWE Solutions LLC FZ for
            trusted industrial protection solutions that prioritize safety
            without compromising performance.
          </p>
        </div>
      </div>

      {/* Third Part */}
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20 px-4 sm:px-10">
          {/* First Card */}
          <div className="w-full sm:w-[450px] h-[330px] bg-gray-100 relative box-indust">
            <div className="place-items-center p-8 mt-6 ">
              <h2 className="font-bold text-xl underline">
                Standard Barriers and Double Barriers
              </h2>
              <p className='mt-3'>
                Ensure robust protection for walkways and equipment zones with
                our Standard Barriers and Double Barriers. These durable
                solutions create clear separations between pedestrian and
                operational areas, reducing the risk of accidents and ensuring a
                safe working environment.
              </p>
            </div>
            <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-customRed border-2">
              <img src={barriers} alt="" className="p-3" />
            </div>
          </div>

          <div className='gap-box'></div>

          {/* Second Card */}
          <div className="w-full sm:w-[450px] h-[330px] bg-gray-100 relative">
            <div className="place-items-center p-12  gap-protect">
              <h2 className="font-bold text-xl underline">
                Upright Protectors
              </h2>
              <p className="mt-4">
                Protect your racking systems from accidental forklift impacts
                with our Upright Protectors. These essential accessories
                safeguard the structural integrity of your racks, minimizing
                repair costs and ensuring long-term durability.
              </p>
            </div>
            <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-customRed border-2">
              <img src={upright} alt="" className="mt-4 ml-[-5px]" />
            </div>
          </div>

          <div className='gap-box'></div>

          {/* Third Card */}
          <div className="w-full sm:w-[450px] h-[330px] bg-gray-100 relative">
            <div className="place-items-center p-8 sm:p-12 gap-protect">
              <h2 className="font-bold text-xl underline">
                Bollards and Delimiters
              </h2>
              <p className="mt-4">
                Define and protect access points effectively with our Bollards
                and Delimiters. These solutions create clear boundaries, guiding
                vehicle traffic while preventing damage to infrastructure and
                ensuring organized movement within your facility.
              </p>
            </div>
            <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-customRed border-2">
              <img src={bollards} alt="" className="p-3" />
            </div>
            
          </div>
        </div>
      </div>
      <div className='gap-box2'></div>



      <div className="w-full mb-40">
  <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-6 mt-8 sm:mt-20 mx-4 sm:mx-10">
    {/* First Card */}
    <div className="w-full sm:w-[450px] h-[330px] bg-gray-100 relative">
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={dock} alt="" className="p-2" />
      </div>
      <div className="place-items-center p-4 sm:p-12 gap-protect">
        <h2 className="font-bold text-xl underline">Dock Bumpers</h2>
        <p className="mt-4">
          Dock Bumpers are vital for cushioning and protecting loading docks
          from frequent impacts during loading and unloading operations. By
          absorbing shocks, these bumpers reduce wear and tear, prolonging the
          lifespan of your docks and enhancing operational efficiency.
        </p>
      </div>
    </div>

    <div className='gap-box'></div>

    {/* Second Card */}
    <div className="w-full sm:w-[450px] h-[330px] bg-gray-100 relative">
      <div className="place-items-center p-4 sm:p-12 gap-protect">
        <h2 className="font-bold text-xl underline">Door Protectors</h2>
        <p className="mt-4">
          Busy industrial environments demand durable solutions for high-traffic
          areas. Our Door Protectors shield industrial doors from accidental
          collisions and impacts, ensuring their longevity and reducing
          maintenance costs.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-customRed rounded-full absolute top-[-45px] left-5 border-2">
        <img src={door} alt="" className="p-2 mt-2" />
      </div>
    </div>

    {/* Third Card (Commented Out) */}
    {/* 
    <div className="w-full sm:w-[450px] h-[330px] bg-gray-100 relative">
      <div className="place-items-center p-4 sm:p-12">
        <h2 className="font-bold text-xl underline">Labels, Safety Signages, and Floor Signs</h2>
        <p>
          Clear communication is key to maintaining safety and operational
          efficiency. Our range of Labels, Safety Signages, and Floor Signs
          ensures that your storage areas are clearly marked, helping to streamline
          workflows and keep your staff informed. These accessories are designed
          to meet high safety standards, promoting a safer environment for both
          personnel and inventory.
        </p>
      </div>
      <div className="w-[90px] h-[90px] bg-gray-300 rounded-full absolute top-[-45px] left-5 border-customRed border-2"></div>
    </div>
    */}
  </div>
</div>

    </div>
  );
}

export default Industrialprotection