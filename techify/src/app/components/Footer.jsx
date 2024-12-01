import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";

function Footer() {
  const links = [
    { title: "About Us", link: "/about" },
    { title: "Team", link: "/team" },
    { title: "FAQ", link: "/faq" },
    { title: "Projects", link: "/projects" },
    { title: "Contact Us", link: "/contact" },
  ];

  const icons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaTwitter />, link: "https://x.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  ];

  const services = [
    { name: "Web Development", link: "/services/web-development" },
    { name: "Business Development", link: "/services/business-development" },
    { name: "Product Management", link: "/services/product-management" },
    { name: "UI/UX Design", link: "/services/ui-ux-design" },
    { name: "Cloud Services", link: "/services/cloud-services" },
  ];

  return (
    <div className="h-auto bg-[#080e1c] relative ">
        <div className="px-5 md:px-14 xl:px-32 py-10">
     
      <div className="absolute inset-0 bg-[url('/footer_bg.webp')] bg-cover bg-center bg-no-repeat bg-opacity-70"></div>

     
      <section className=" py-10 relative border-b border-b-gray-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
         
          <div className="flex justify-center md:justify-start mb-6 xl:mb-0">
            <img src="/logo-white.svg" alt="Logo" className="" />
          </div>

          
          <div className="md:flex items-center gap-6">
            <div className="text-center md:text-left border-l-2 border-l-[#684df4] px-4">
              <h3 className="text-2xl text-white font-bold mb-2">
                News Subscription
              </h3>
              <p className="text-sm text-white mb-4">
                Get Latest Deals from Waker’s Inbox &amp; Subscribe Now
              </p>
            </div>
            <form className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full md:w-3/4 ">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full md:w-[300px] placeholder-white px-4 py-2 rounded-md border border-gray-600 bg-[#141d38] text-white focus:outline-none focus:border-[#684df4]"
                />
                <CiMail className="absolute top-1/2 right-4 text-xl transform -translate-y-1/2 text-[#684df4]" />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-[#684df4] text-white py-3 font-semibold px-7 rounded-md click-btn btn-style transition duration-500"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className=" relative py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
         
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ABOUT COMPANY</h3>
            <p className="text-gray-400 text-base mb-4">
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered,
              cost-effective users via team-driven strategies.
            </p>
            <div className="flex items-center gap-4">
              {icons.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="border border-white p-3 hover:bg-[#684df4] rounded-full transition-colors duration-300"
                >
                  <span className="text-white text-center flex justify-center items-center">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        
          <div>
            <h3 className="text-white font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              {links.map((item, index) => (
                <li className="" key={index}>
                  <Link
                    href={item.link}
                    className=" text-base flex items-center hover:text-[#684df4] text-white"
                  >
                    <IoIosArrowForward />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-bold text-lg mb-4">IT SERVICES</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className=" ">
                  <Link
                    href={service.link}
                    className="text-white text-base hover:text-[#684df4] flex items-center transition-colors duration-300"
                  >
                    <IoIosArrowForward />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-white font-bold text-lg mb-4">RECENT POSTS</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src="/blog/blog1.webp"
                  alt="Unsatiable entreaties"
                  className="object-cover"
                />
                <div className="relative">
                  <h4 className="text-base text-white">
                    <a href="https://wordpress.themeholy.com/webteck/unsatiable-entreaties-may-collecting-power/">
                      Unsatiable entreaties may collecting Power.
                    </a>
                  </h4>
                  <p className="text-white text-sm flex items-center gap-2"><FaCalendarDays className="text-[#684df4]" />Feb 13 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/blog/blog2.webp"
                  alt="Regional Manager"
                  className="object-cover"
                />
                <div>
                  <h4 className="text-base text-white">
                    <a href="https://wordpress.themeholy.com/webteck/regional-manager-limited-time-management-2/">
                      Regional Manager limited time management.
                    </a>
                  </h4>
                  <p className="text-sm text-white flex items-center gap-2"><FaCalendarDays className="text-[#684df4]" />Feb 13 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    <section className="bg-[#684df4] text-white px-5 md:px-14 xl:px-32 py-6">
              <span>Copyright  2024 Themeholy. All Rights Reserved.</span>
    </section>
    
    </div>
  );
}

export default Footer;
