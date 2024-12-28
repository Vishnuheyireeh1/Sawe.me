import React,{useState,useRef} from 'react'
import aimage1 from '../assets/contact1.jpg'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contactus = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // For phone input, allow only digits
    if (name === "phone") {
      // Regex to allow only numbers
      const numericValue = value.replace(/[^0-9]/g, ""); 
      setFormData({ ...formData, [name]: numericValue });
      return;
    }
  
    // For other inputs, update normally
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

   
    // Using EmailJS to send email
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_APP_TEMPLATE_ID, // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_APP_PUBLIC_ID // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };


  const handleHome = () => {
    navigate('/');
  };

  return (
    <div>   
      {/* First Part */}
      <div className="w-full mt-20 h-[600px]">
      <ToastContainer />
        <div className="relative">
          <div className="absolute border-l-4  border-customRed h-40 mx-28 mt-40 hide"></div>
          <h1 className="absolute text-white text-6xl font-bold mx-36 mt-44 hide">
            Contact <span className="text-customRed">Us</span>
          </h1>
          <h2
            onClick={handleHome}
            className="absolute text-customRed text-xl font-bold mx-36 mt-64 cursor-pointer hide"
          >
            Home
          </h2>
          <h2
            onClick={handleHome}
            className="absolute text-white text-xl  mx-52 mt-64 cursor-pointer hide"
          >
            &#8594;
          </h2>
          <h2 className="absolute text-white text-xl font-bold mx-60 mt-64 cursor-pointer hide">
            Contact Us
          </h2>
          <img className="w-[2400px] h-[600px] img-commers" src={aimage1} alt="" />
        </div>
      </div>

      <div className='gap-contact'></div>
      
   {/* second part */}
<div className="w-full h-auto">
  <div className="flex flex-col sm:flex-row">
    {/* Right part */}
    <div className="flex-1 p-28 mt-10 sm:mt-0 sm:w-1/2">
      <h2 className="text-xl font-bold underline">Contact Us</h2>
      <h2 className="text-5xl font-bold mt-5">
        We Help Your Buisness Grow.
      </h2>
      <p className="mt-10 text-lg">
        Our dedicated team of experts is here to guide you through every
        step of the insurance journey, ensuring you make informed choices
        tailored to your unique needs.
      </p>
    </div>

    {/* Left Part */}
    <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone"
                className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full max-w-md p-4 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customRed"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full max-w-md p-4 bg-customRed text-white font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-customRed hover:text-customRed"
              >
                Submit
              </button>
            </form>
          </div>


  </div>
</div>


      {/* map part */}
<div className="relative mt-40">
  {/* Container for the three sections */}
  <div className="absolute h-[40%] w-[90%] bg-gray-100 ml-16 flex flex-wrap sm:flex-nowrap mt-[-70px] hide">
    {/* Location Section */}
    <div className="flex-1 border-b-2 sm:border-r-2 p-4 sm:p-6">
      <div className="place-items-center mt-12 group">
        <FontAwesomeIcon
          icon={faMap}
          style={{
            height: "50px",
            transition: "transform 0.3s ease-in-out",
          }}
          className="group-hover:scale-x-[-1] text-customRed"
        />
        <h2 className="font-bold text-2xl sm:text-4xl">Location</h2>
        <h3 className="text-lg sm:text-xl text-center">
          Meydan Free Zone <br />
          <p>Dubai, United Arab Emirates</p>
        </h3>
      </div>
    </div>
    {/* Email Section */}
    <div className="flex-1 border-b-2 sm:border-r-2 p-4 sm:p-6">
      <div className="place-items-center mt-12 group">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            height: "50px",
            transition: "transform 0.3s ease-in-out",
          }}
          className="group-hover:scale-x-[-1] text-customRed"
        />
        <h2 className="font-bold text-2xl sm:text-4xl">Email</h2>
        <a
          href="mailto:sales@sawesloutions.me"
          className="text-lg sm:text-xl ml-6 cursor-pointer hover:text-customRed"
        >
          sales@sawesloutions.me <br />
        </a>
      </div>
    </div>
    {/* Phone Section */}
    <div className="flex-1 p-4 sm:p-6">
      <div className="place-items-center mt-12 group">
        <FontAwesomeIcon
          icon={faPhone}
          style={{
            height: "50px",
            transition: "transform 0.3s ease-in-out",
          }}
          className="group-hover:scale-x-[-1] text-customRed"
        />
        <h2 className="font-bold text-2xl sm:text-4xl">Phone</h2>
        <a
          href="tel:+971562839488"
          className="text-lg sm:text-xl mt-6 cursor-pointer hover:text-customRed"
        >
          +971 56 2839488
        </a>
      </div>
    </div>
  </div>
  
  {/* Google Map iframe */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7222.823730461748!2d55.294628141643834!3d25.155567298892056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67ce5bc69073edfd%3A0x4a92424a46188584!2sSAWE%20Solutions%20LLC%20FZ!5e0!3m2!1sen!2sin!4v1734604459865!5m2!1sen!2sin"
    width="100%"
    height="650"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
  );
}

export default Contactus