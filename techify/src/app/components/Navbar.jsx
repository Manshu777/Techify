import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="bg-[#e1eaff] px-5 md:px-14 xl:px-32 py-5 md:py-6">
      <div className="flex items-center justify-between">
        <Image src="/logo.svg" height={200} width={200} alt="logo" />
        <div className="flex items-center ">
          <ul className="font-semibold font-sans text-[#141d38] flex items-center gap-10 text-[15px]">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li className="relative group flex items-center gap-1">
              <Link href="/services">SERVICES</Link>
              <IoIosArrowDown className="text-lg" />

              {/* Invisible Bridge */}
              <div className="absolute left-0 top-full h-56 w-full invisible group-hover:visible"></div>

              {/* Dropdown Menu */}
              <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-5 transition-all duration-700 ease-in-out bg-white w-[1000px] -left-[400px] shadow-md rounded mt-56 p-2 z-10">
                <li>
                  <Link
                    href="/services/service1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/service2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/service3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Service 3
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group flex items-center gap-1">
              <Link href="/blog">BLOG</Link>

              <IoIosArrowDown className="text-lg" />

              <div className="absolute left-0 top-full h-56 w-full invisible group-hover:visible"></div>
              {/* Dropdown Menu */}
              <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-5 transition-all duration-700 ease-in-out bg-white shadow-md w-40 rounded mt-56 p-2 z-10">
                <li>
                  <Link
                    href="/blog/blog1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/blog2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/blog3"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog 3
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
        <Link href="tel:(+150)-4899-8221">
          <button className="bg-[#684df4] hover:bg-black flex items-center gap-1 click-btn btn-style text-sm text-white px-4 py-3">
            MAKE APPOINTMENT
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
