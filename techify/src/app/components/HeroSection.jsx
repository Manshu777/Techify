"use client";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className=" bg-[#f0f4ff] ">
      {/* Hero Content */}
      <div className="container lg:flex items-center justify-center lg:justify-between gap-10 mx-auto px-5 md:px-10 lg:px-32 py-10 relative z-10">
        <div className="pb-10 block lg:hidden">
          <Image
            src="/heroimg.webp"
            alt="Shape 3"
            width={500}
            height={500}
            className=" w-full h-full"
          />
        </div>
        <div className="w-full lg:w-[70%] space-y-5 md:space-y-6 lg:space-y-7">
          <span className="text-lg lg:text-xl font-medium text-[#684df4]">
            BEST MARKETING SERVICE
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Make The Easiest <br className="hidden lg:block" /> Solution For You
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Energistically harness ubiquitous imperatives without state of the
            art collaboration and idea-sharing. Monotonectally parallel task
            cross-unit experiences and front-end.
          </p>

          {/* Buttons */}
          <div className="flex  items-center gap-8 lg:justify-start">
            <Link
              href="/about-us"
              className="bg-[#684df4] hover:bg-black click-btn btn-style text-white font-medium px-6 py-6 rounded-md"
            >
              ABOUT US
              <i className="fas fa-long-arrow-right ml-2"></i>
            </Link>
            <div className="flex items-center gap-3">
              <div class="wrapper">
                <div class="video-main">
                  <div class="promo-video">
                    <div class="waves-block">
                      <div class="waves wave-1"></div>
                      <div class="waves wave-2"></div>
                      <div class="waves wave-3"></div>
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="w-12 h-12 flex items-center justify-center bg-[#684df4]  rounded-full text-white text-lg transition duration-300"
                  >
                    <FaPlay />
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="block text-base font-medium text-black hover:underline"
                >
                  Watch Our Story
                </a>
                <span className="block text-base text-gray-500 font-normal">
                  Subscribe Now
                </span>
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
            className="hidden lg:block w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
