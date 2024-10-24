import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="absolute w-full mt-[102px] ">
       <div
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center px-4"
        style={{
          backgroundImage: "url('assets/images/Agriculture.jpg')", // Replace with the correct path to your image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex flex-col items-center w-full">
          {/* Heading Section */}
          <div className="text-center mb-5">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-gray-600 mt-2">
              We are here to assist you. Reach out to us!
            </p>
          </div>

          {/* Main Content Section */}
          <div className="flex  flex-col md:flex-row justify-between w-full max-w-6xl">
            {/* Left Section: Contact Info */}
            <div className="flex md:pl-[150px] md:pt-10 flex-col w-full md:w-1/2 p-4">
              <div className="flex items-center gap-2 md:mb-10 mb-4">
                <FaMapMarkerAlt className="text-3xl text-[#ea470a]  mr-2" />
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p>1234 Main St, Anytown, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:mb-10 mb-4">
                <FaPhone className="text-3xl text-[#ea470a] mr-2" />
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="flex gap-2 items-center mb-4">
                <FaEnvelope className="text-3xl text-[#ea470a] mr-2" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>

            {/* Right Section: Message Form */}
            <div className="flex  justify-center w-full md:w-1/2 p-4">
              <div className="border bg-[#f7f6f6] p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Send Message
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      className="border rounded w-full p-2"
                      type="text"
                      id="fullName"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="border rounded w-full p-2"
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2" htmlFor="message">
                      Type Message
                    </label>
                    <textarea
                      className="border rounded w-full p-2"
                      id="message"
                      placeholder="Your Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div><Footer />
    </div>
  );
};

export default ContactUs;
