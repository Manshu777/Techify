'use client';
import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className=" bg-[#f0f4ff] ">
    

      {/* Hero Content */}
      <div className="container flex items-center justify-between gap-10 mx-auto px-5 md:px-10 lg:px-32 py-10 relative z-10">
       
          <div className="w-[70%] space-y-7">
            <span className="text-lg md:text-xl font-medium text-[#684df4]">BEST MARKETING SERVICE</span>
            <h1 className="text-3xl md:text-7xl font-bold text-gray-800 leading-tight">
              Make The Easiest <br /> Solution For You
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Energistically harness ubiquitous imperatives without state of the art collaboration and idea-sharing.
              Monotonectally parallel task cross-unit experiences and front-end.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <Link
                href="/about-us"
                className="bg-[#684df4] hover:bg-black click-btn btn-style text-white font-medium px-6 py-6 rounded-md"
              >
                ABOUT US
                <i className="fas fa-long-arrow-right ml-2"></i>
              </Link>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="w-12 h-12 flex items-center justify-center bg-[#684df4]  rounded-full text-white text-lg transition duration-300"
                >
                  <FaPlay />
                </a>
                <div>
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="block text-base font-medium text-black hover:underline"
                  >
                    Watch Our Story
                  </a>
                  <span className="block text-base text-gray-500 font-normal">Subscribe Now</span>
                </div>
              </div>
            </div>
          </div>
  
      

     
   
      <div className="">
        <Image
          src="/heroimg.webp"
          alt="Shape 3"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
