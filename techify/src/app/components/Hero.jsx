import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="HeroSection  bg-[#F0F4FF] flex flex-col-reverse  gap-5  lg:flex-row lg:items-center px-5 md:px-14 xl:px-32  py-5 md:py-12 lg:py-16">
      <div className="lg:w-[50%] space-y-8 text-center lg:text-start">
        <h5 className="text-lg md:text-2xl text-blue-600 font-semibold">
          Best Marketing Service
        </h5>
        <div>
          <div>
            <span className="Ring1"></span>
          </div>
          <h2 className="font-bold text-4xl xl:text-7xl ">
            Make The Easiest Solution For You
          </h2>
        </div>
        <p className="text-base text-slate-400">
          Energistically harness ubiquitous imperatives without state of the art
          collaboration and idea-sharing. Monotonectally parallel task
          cross-unit experiences and front-end.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-10 ">
          <button className="uppercase  overflow-hidden relative heroBtn  group bg-[#684DF4] rounded-lg px-8 py-4  text-white font-semibold">
            <span className="relative z-20 flex items-center gap-2 ">
              About US{" "}
              <FaArrowRightLong className="group-hover:translate-x-2 duration-200" />
            </span>
          </button>
          <div className="flex items-center gap-4">
            <button className="hero-play-btn relative text-white bg-[#684DF4] p-4 rounded-full text-xl">
            <FaPlay />

            </button>
            <div>
                <h6 className="font-semibold text-base">Watch Our Story</h6>
                <p className="text-slate-400">Subscribe Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <img src="/Images/Hero/HeroRightImg.webp" alt="Hero-img" className="" />
      </div>
    </div>
  );
};

export default Hero;
