import React from 'react'
import aimage1 from '../assets/c.jpg'
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/consultancyService.jpg'
import image2 from '../assets/consultancyService2.webp'
import image3 from '../assets/consultancyService3.jpg'
import image4 from '../assets/consultancyService4.png'
import image5 from '../assets/consultancyService5.jpg'


const Consultingservices = () => {
     const navigate = useNavigate();
  
      const handleHome = () => {
        navigate('/');
      };

  return (
    <div>
    {/* first part */}
<div className="w-full mt-20 h-[600px] ">
  <div className="relative">
    {/* Content Container */}
    <div className="absolute inset-0 z-10 flex flex-col place-items-start justify-center mx-28 sm:mx-6 ">
    <div className="border-l-4 border-customRed h-40 ml-20 hide">
              <h1 className="text-white text-6xl font-bold mt-8 mx-6">
                Consultancy
                <span className="text-customRed"> Services</span>
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
                 Consultancy Services
                </h2>
              </div>
            </div>
    </div>

    {/* Image with Gradient */}
    <div className="relative">
      <img className="w-[2400px] h-[600px] object-cover" src={aimage1} alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
    </div>
  </div>
</div>

{/* Hide content in small screen sizes */}
<div className="sm:hidden">
  <div className="w-full h-[600px]">
    {/* Hide content or adjust accordingly */}
  </div>
</div>

<div className='gap-cons'></div>

     {/* second part */}
<div className="w-full h-auto flex p-16 mt-6 flex-col lg:flex-row">
  <div className="flex-1 mb-6 lg:mb-0">
    <img src={image1} alt="" className="w-full h-auto object-cover" />
  </div>
  <div className="flex-1 lg:ml-20">
    <h2 className="font-bold text-3xl underline">
      Logistics Solutions Consulting
    </h2>
    <p className="mt-6">
      We offer expert{" "}
      <span className="font-semibold">
        Logistics Solutions Consulting
      </span>{" "}
      services designed to streamline your operations and optimize
      efficiency. Our team specializes in delivering{" "}
      <span className="font-semibold">
        Tailored Engineering Solutions
      </span>{" "}
      that align with your unique business needs, ensuring seamless
      integration of the most suitable{" "}
      <span className="font-semibold">Material Handling Equipment</span>{" "}
      into your processes. Our consulting services begin with a thorough
      analysis of your logistics and supply chain requirements. From
      warehouse design to workflow optimization, we craft customized
      strategies that improve productivity and reduce operational costs.
      By leveraging cutting-edge technology and industry best practices,
      we help you overcome logistical challenges and achieve sustainable
      growth.
    </p>
    <br />
    <p>
      Whether it’s selecting the right{" "}
      <span className="font-semibold">Material Handling Equipment</span>{" "}
      or enhancing storage and distribution systems, our team is committed
      to delivering innovative, cost-effective solutions that drive
      results. Partner with{" "}
      <span className="font-semibold">SAWE Solutions LLC FZ </span>for
      expert guidance and superior logistics solutions tailored to your
      success.
    </p>
  </div>
</div>

  {/* Warehouse Optimization Strategies */}
<div className="w-full h-auto flex flex-col lg:flex-row p-8 lg:p-16 thirdpart-cons">
  {/* Image Section */}
  <div className="w-full lg:flex-1 lg:ml-5 order-1 lg:order-2">
    <img
      src={image2}
      alt=""
      className="h-auto w-full lg:h-[430px] object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:flex-1 lg:mr-6 mt-6 lg:mt-0 order-2 lg:order-1">
    <h2 className="font-bold text-2xl lg:text-3xl underline">
      Warehouse Optimization Strategies
    </h2>
    <p className="mt-4 lg:mt-6 text-sm lg:text-base">
      Our{" "}
      <span className="font-semibold">
        Warehouse Optimization Strategies
      </span>{" "}
      help businesses maximize efficiency, enhance space utilization, and
      streamline operations. Our consultancy services are tailored to meet
      the unique needs of your facility, ensuring seamless integration of
      advanced systems and processes. We conduct in-depth evaluations of
      your warehouse layout, inventory flow, and operational challenges to
      identify opportunities for improvement. From optimizing storage
      configurations to implementing cutting-edge technologies like
      automated systems and real-time tracking, our strategies are designed
      to enhance productivity and reduce costs.
    </p>
    <br />
    <p className="text-sm lg:text-base">
      Our expertise includes space planning, workflow optimization, and
      integrating the right material handling equipment to ensure smooth and
      efficient operations. Whether you're looking to scale your operations
      or improve existing systems, our customized solutions deliver
      measurable results. Partner with{" "}
      <span className="font-semibold">SAWE Solutions LLC FZ</span> to unlock
      the full potential of your warehouse and achieve a smarter, more
      efficient logistics system.
    </p>
  </div>
</div>



{/* Fourth Part */}
<div className="w-full h-auto flex flex-col lg:flex-row p-16">
  {/* Image Section */}
  <div className="flex-1 order-1 lg:order-none">
    <img src={image3} alt="Warehouse ERP" className="w-full h-[430px] object-cover mb-6 lg:mb-0" />
  </div>

  {/* Content Section */}
  <div className="flex-1 lg:ml-10 order-2">
    <h2 className="font-bold text-3xl underline">
      Warehouse ERP System Implementation
    </h2>
    <p className="mt-6">
      <span className="font-semibold">
        Warehouse ERP System Implementation
      </span>, providing businesses with robust, integrated solutions to optimize
      their warehouse operations. Our team guides you through every step of the ERP
      implementation process, from initial planning to full system integration, ensuring a
      smooth transition and maximum efficiency. We understand that each warehouse has unique
      needs, so our approach is tailored to align the ERP system with your specific operational
      requirements. By implementing an ERP system, we help streamline inventory management,
      order processing, and real-time data tracking, allowing you to make informed decisions and
      improve overall productivity.
    </p>
    <br />
    <p>
      Our consultancy services include system selection, configuration, training, and
      post-implementation support, ensuring your team is fully equipped to maximize the
      capabilities of the new system. With <span className="font-semibold">SAWE Solutions LLC FZ</span>,
      you’ll benefit from a seamless, customized <span className="font-semibold">Warehouse ERP System</span>
      that enhances efficiency, accuracy, and scalability for long-term success.
    </p>
  </div>
</div>

{/* Fifth Part */}
<div className="w-full h-auto flex flex-col-reverse lg:flex-row p-16">
  {/* Text Section */}
  <div className="flex-1 lg:mr-6">
    <h2 className="font-bold text-3xl underline">
      Rack Structural Analysis and Strengthening Solutions
    </h2>
    <p className="mt-6">
      At <span className="font-semibold">SAWE Solutions LLC FZ</span>, we
      provide{" "}
      <span className="font-semibold">
        Rack Structural Analysis and Strengthening Solutions
      </span>{" "}
      expert to ensure the safety, stability, and durability of your racking
      systems. Our consultancy services include detailed structural
      assessments to identify potential weaknesses or areas that may require
      reinforcement, helping to extend the lifespan of your racks and prevent
      costly failures. Our team conducts comprehensive evaluations of
      load-bearing capacities, material strength, and design integrity,
      providing tailored solutions to address specific challenges. Whether
      your racking system is experiencing wear and tear or needs to meet
      updated safety standards, we offer the expertise to reinforce and
      optimize its performance.
    </p>
    <br />
    <p>
      From structural analysis to recommending effective strengthening
      techniques, we ensure your racking systems operate at peak efficiency
      and safety. With{" "}
      <span className="font-semibold">SAWE Solutions LLC FZ</span>, you gain
      reliable, customized solutions to improve warehouse safety and
      operational effectiveness. Trust us to enhance the structural integrity
      of your racking systems for long-term reliability.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 mb-6 lg:mb-0">
    <img
      src={image4}
      alt=""
      className="h-[430px] w-full object-cover"
    />
  </div>
</div>


   {/* Sixth Part */}
<div className="w-full h-auto flex flex-col lg:flex-row p-16">
  {/* Image Section */}
  <div className="flex-1 order-1 lg:order-none">
    <img src={image5} alt="Rack Inspection" className="w-full h-auto object-cover mb-6 lg:mb-0" />
  </div>

  {/* Content Section */}
  <div className="flex-1 lg:ml-10 p-2 order-2">
    <h2 className="font-bold text-3xl underline">
      Rack Inspections and Certification Services
    </h2>
    <p className="mt-6">
      <span className="font-semibold">Rack Inspections and Certification Services</span> to
      ensure your racking systems meet the highest safety and regulatory
      standards. Our expert consultants conduct thorough inspections to assess
      the condition and integrity of your racks, identifying potential risks and
      areas that may require attention or reinforcement.
    </p>
    <p className="mt-4">
      We follow industry best practices and compliance guidelines to ensure that
      all racks are properly aligned with safety regulations. After completing
      the inspection, we provide detailed reports with actionable insights, along
      with the necessary certifications to confirm that your racking systems are
      safe and operational.
    </p>
    <p className="mt-4">
      Whether you're looking to verify the safety of your existing racks or
      prepare for compliance audits, our services offer peace of mind.
    </p>
    <p className="mt-4">
      Partner with us for reliable, professional{" "}
      <span className="font-semibold">Rack Inspections and Certification Services</span> that
      help maintain the safety, reliability, and efficiency of your warehouse
      operations.
    </p>
  </div>
</div>


    </div>
  );
}

export default Consultingservices