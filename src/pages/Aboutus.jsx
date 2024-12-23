import React from 'react'
import aimage1 from '../assets/aboutus4.jpg'
import { useNavigate } from 'react-router-dom';
import aboutus from '../assets/aboutus.jpg'

const Aboutus = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>
      {/* First Part */}
      <div className="w-full mt-20 h-[650px]">
        <div className="relative">
          <div className="absolute border-l-4  border-customRed h-40 mx-28 mt-40"></div>
          <h1 className="absolute text-white text-6xl font-bold mx-36 mt-44">
            About <span className="text-customRed">Us</span>
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
            About Us
          </h2>
          <img className="w-[2400px] h-[650px]" src={aimage1} alt="" />
        </div>
      </div>

      {/* second part */}
      <div className="w-full h-auto">
        <div class="flex">
          {/* <!-- Left Part --> */}
          <div class="flex-1 p-10 mt-6 ml-12">
            {/* <!-- First div with custom border --> */}
            <div className="w-[400px] h-[750px] border-[40px] border-customRed bg-white relative">
              {/* <!-- Image positioned absolutely --> */}
              <div className="absolute right-[-250px] top-1/2 transform -translate-y-1/2">
                <img
                  src={aboutus}
                  alt="Image"
                  className="h-[600px] w-[500px] rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* <!-- Right Part --> */}
          <div class="flex-1  p-3">
            <h2 className="text-6xl font-bold underline mt-40 p-10">
              About Us
            </h2>
            <h3 className='pl-10 text-xl'>
              Established in 2022,<span className='font-semibold'> SAWE Solutions LLC FZ</span> is a trusted provider
              of comprehensive solutions catering to various industries in the
              region. With a strong commitment to excellence, we take pride in
              offering a diverse portfolio of services designed to meet the
              unique needs of our clients. <br /> <br />Our comprehensive portfolio includes
              Aviation Parts, Intra-Logistics Solutions, Automation Systems,
              Material Handling Equipment, and Spare Parts, among many others.
              Whether it’s streamlining operations or supplying high-quality
              components, we ensure every product and service meets the highest
              standards of quality and reliability.
            </h3>
          </div>
        </div>
      </div>

      {/* third part */}
      <div className='w-full h-auto'>
        <div className='flex'>
            <div className='flex-1 p-20 ml-10 mt-6'>
                <div className='border-2 rounded-bl-2xl rounded-tr-2xl w-[500px] h-[300px] bg-white border-customRed '>
                <h2 className="font-bold text-5xl underline p-4">Our Vision</h2>
                <p className='p-3'>We aspire to be the aviation brand of choice for our valued customers. Our vision is grounded in providing exceptional services that reflect professionalism, fairness, honesty, and an unwavering ethical approach. We are committed to earning your trust through consistent excellence and a customer-first mindset. By setting the standard for quality and integrity, we aim to elevate your aviation experience and build enduring relationships.</p>
                </div>
            </div>
            {/* right part */}
            <div className='flex-1'>
            <div className='flex-1 p-20 ml-10 mt-6'>
                <div className='border-2 rounded-bl-2xl rounded-tr-2xl w-[500px] h-[300px] bg-white border-customRed '>
                <h2 className="font-bold text-5xl underline p-4">Our Mission</h2>
                <p className='p-3'>To provide innovative and reliable intra-logistics solutions, high-quality aviation parts, and durable heavy equipment ensuring seamless operations, exceptional service, and safety for our clients across diverse industries. We are committed to driving progress, optimizing performance, and building lasting partnerships that enhance operational excellence.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus