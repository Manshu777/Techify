import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Topbar() {
  const data = [
    {
      icon: <FaLocationDot />,
      data: "1403 Washington Ave, United States",
      link: "https://maps.app.goo.gl/67TfhbFnoJWpYi6p8",
    },
    {
      icon: <FaPhone />,
      data: "(+150)-4899-8221",
      link: "tel:(+150)-4899-8221",
    },
    {
      icon: <IoMdMail />,
      data: "info@traga.com",
      link: "mailto:abc@gmail.com",
    },
  ];

  const socialIcons = [
    {
      href: "https://www.facebook.com",
      icon: <RiFacebookFill />,
    },
    {
      href: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.linkedin.com",
      icon: <RiLinkedinFill />,
    },
    {
      href: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.youtube.com",
      icon: <FaYoutube />,
    },
  ];

  return (
    <div className="bg-[#684df4] px-5 md:px-14 xl:px-32 py-3 md:py-5">
      <div className="flex flex-wrap justify-center lg:justify-between items-center text-white">
        <div className="hidden md:flex items-center mb-2 lg:mb-0 gap-6">
          {data.map((item, index) => (
            <Link href={item.link} target="blank">
              <div key={index} className="flex items-center gap-1 ">
                {item.icon}
                <p className="font-normal font-sans">{item.data}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <p className=" font-sans font-medium">Follow Us On :</p>
          {socialIcons.map((item, index) => (
            <Link href={item.href} target="blank">
              <div key={index}>{item.icon}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
