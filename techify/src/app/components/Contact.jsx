import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";

function Contact() {
  return (
    <section className="py-12 relative px-5 md:px-14 xl:px-32">
      {/* Floating Icon */}
      <div className="absolute right-44 bottom-24 hidden lg:block text-indigo-600 opacity-20 text-8xl">
        <TbPhoneCall />
      </div>
      <div className="absolute font-bold right-80 hidden lg:block top-20 text-indigo-600 text-6xl">
  <span
    className="relative opacity-10 bg-clip-text text-transparent bg-gradient-to-b from-indigo-600 to-indigo-600/0"
  >
    CONSULTATION
  </span>
</div>


      <div className="container mx-auto flex flex-col md:flex-row items-center bg-gray-200 rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="w-full flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/customer_support.webp"
            alt="Customer Support"
            className="rounded-lg shadow-lg w-full h-[300px] lg:h-auto max-w-md lg:max-w-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full text-center md:text-left py-7 px-5 xl:pr-20">
          <div>
            {/* Subtitle */}
            <p className="text-sm font-semibold text-[#684df4] flex items-center justify-center md:justify-start">
              <img
                src="/blog/shape.svg"
                alt="Icon"
                className="w-6 h-6 mr-2"
              />
              LET’S CONSULTATION
            </p>

            {/* Title */}
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mt-4">
              Let’s Talk About Business Solutions{" "}
              <span className="text-indigo-600">With Us</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm lg:text-base mt-6">
              Discuss innovative solutions and achieve your business goals with
              expert guidance tailored to your needs.
            </p>

            {/* Button */}
            <div className="mt-6 ">
              <a
                href="https://wordpress.themeholy.com/webteck/contact-us/"
                className="bg-[#684df4] inline-flex items-center text-white px-6 py-3 transition duration-500 rounded-md shadow-md "
              >
                Contact Us
                <FaArrowRightLong className="ml-2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
