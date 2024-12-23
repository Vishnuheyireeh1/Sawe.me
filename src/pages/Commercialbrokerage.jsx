import React from 'react'
import aimage1 from '../assets/cb.jpg'
import { useNavigate } from 'react-router-dom';
import client from '../assets/Client Representation.jpg'
import marketinganalysis from '../assets/marketing analysis.jpg'
import market from '../assets/market_research_firms.jpg'
import clienticon from '../assets/client-icon.png'
import listingicon from '../assets/listing.png'
import analysis from '../assets/analytics.png'

const Commercialbrokerage = () => {

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
                     Commercial<span className="text-customRed"> Brokerage</span>
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
                       Commercial Brokerage
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
              {/* Second part */}
              <div className="w-full h-full bg-white">
        <h1 className="text-black font-bold underline text-3xl mt-14 ml-10">
        Commercial Brokerage
        </h1>
        <p className=" text-lg mt-5 ml-10 mr-10">
        Commercial brokerage is the cornerstone of successful real estate transactions, offering expert guidance and comprehensive services to buyers, sellers, landlords, and tenants. Our brokerage services are tailored to meet your unique needs, ensuring a smooth process whether you’re looking to invest, lease, or sell.
        </p>
        <div className="w-full h-[1700px] mt-10">
          <div className="flex gap-6 justify-center mr-10 ml-10">
            {/* Image with Content Section */}
            {[
              {
                imgSrc: marketinganalysis,
                img :listingicon,
                title: "Property Listing and Marketing",
                description: `We specialize in showcasing commercial properties to maximize visibility and attract the right audience. Our property listing and marketing services include:`,
                keyProducts: [
                  "Professional Property Listings : Each property listed on our platform features high-quality images, detailed descriptions, and accurate specifications to provide potential buyers and tenants with all the information they need.",
                  "Targeted Marketing Campaigns : We craft tailored marketing strategies that leverage both digital and traditional platforms. From social media ads to email newsletters, we ensure your property reaches its ideal audience.",
                  "Search Engine Optimization (SEO):Our website is optimized for search engines, ensuring your property ranks high on relevant search results, increasing online visibility.",
                  "Virtual Tours and Videos:We utilize cutting-edge technology to create immersive virtual tours and promotional videos, allowing prospects to explore properties remotely and conveniently.",
                  "Print and Digital Brochures:Customized brochures highlight your property's unique features, distributed via multiple channels to capture attention and interest.",
                ],
              },
              {
                imgSrc: market,
                img :analysis,
                title: "Market Analysis and Research",
                description: `Understanding the real estate market is critical for successful transactions. Our market analysis and research services provide valuable insights into current trends, competitive landscapes, and investment opportunities. Here’s what we offer:`,
                keyProducts: [
                  "Comprehensive Market Insights:Our team delivers in-depth analyses of market trends, including property demand, pricing fluctuations, and future growth potential. These insights help you stay ahead in the dynamic real estate industry.",
                  "Location-Specific Research:We analyze local markets to identify the best opportunities tailored to your needs. This includes evaluating neighborhood demographics, traffic patterns, and accessibility for commercial success.",
                  "Competitive Analysis:By comparing similar properties in the market, we help you understand your position and develop effective strategies for pricing, selling, or leasing your property.",
                  "Investment Opportunity Evaluation:Whether you’re looking to buy, sell, or lease, our research identifies high-performing sectors, helping you make profitable investments with minimal risk.",
                  "Economic Impact Assessments:We examine economic factors such as employment trends, market growth rates, and industry developments to provide a holistic view of how these elements affect your property’s value.",
                ],
              },
              {
                imgSrc: client,
                img :clienticon,
                title: "Client Representation",
                description: `Navigating the complexities of commercial real estate transactions requires expertise and personalized support. Our client representation services are designed to ensure your interests are prioritized and your objectives are met.`,
                keyProducts: [
                  "Comprehensive Consultation:We begin by understanding your unique goals, whether you're buying, selling, or leasing. Our team takes the time to identify your specific requirements and craft a strategy tailored to your needs.",
                  "Expert Negotiation:As your representatives, we leverage our industry expertise to negotiate favorable terms and secure the best possible deal. From price points to lease conditions, we ensure your interests are safeguarded at every stage.",
                  "Market Insight and Guidance:Our extensive market knowledge allows us to guide you in making informed decisions. Whether it's identifying lucrative opportunities or evaluating market trends, we provide the clarity you need to achieve success.",
                  "Transaction Management:We handle the end-to-end transaction process, coordinating with all involved parties, including legal advisors, lenders, and inspectors, to ensure a smooth and efficient experience.",
                  "Customized Property Search:For buyers and tenants, we conduct a thorough search to identify properties that align with your preferences, budget, and business goals, ensuring you find the perfect match.",
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
                <div className="bg-slate-50 p-4 mt-[-40px] absolute w-[380px] h-[1300px]">
                  <div className="bg-customRed w-20 h-20 mt-[-40px] ml-[260px]"><img src={item.img} alt="" className='p-2 transform transition-transform duration-300 group-hover:scale-x-[-1]'/></div>
                  <h2 className="text-black font-bold text-xl underline">
                    {item.title}
                  </h2>
                  <p className="text-lg mt-2">{item.description}</p><br />
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
    </div>
  )
}

export default Commercialbrokerage