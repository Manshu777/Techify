'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#e1eaff] px-5 md:px-14 xl:px-32 py-4 md:py-5 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-1/2 lg:w-auto">
          <Image
            src="/logo.svg"
            height={200}
            width={200}
            alt="logo"
            className="h-auto w-auto max-h-12 md:max-h-16"
          />
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-6 md:gap-10">
          <ul className="font-semibold font-sans text-[#141d38] flex items-center gap-4 md:gap-8 text-sm md:text-[15px]">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li className="relative group flex items-center gap-1">
              <Link href="/services">SERVICES</Link>
              <IoIosArrowDown className="text-lg" />
              <div className="absolute left-0 top-full h-56 w-full invisible group-hover:visible"></div>
              {/* Dropdown Menu */}
              <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-5 transition-all duration-700 ease-in-out bg-white w-40 shadow-md rounded mt-56 p-2 z-10">
                <li>
                  <Link href="/services/service1" className="block px-4 py-2 hover:bg-gray-100">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link href="/services/service2" className="block px-4 py-2 hover:bg-gray-100">
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link href="/services/service3" className="block px-4 py-2 hover:bg-gray-100">
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
                  <Link href="/blog/blog1" className="block px-4 py-2 hover:bg-gray-100">
                    Blog 1
                  </Link>
                </li>
                <li>
                  <Link href="/blog/blog2" className="block px-4 py-2 hover:bg-gray-100">
                    Blog 2
                  </Link>
                </li>
                <li>
                  <Link href="/blog/blog3" className="block px-4 py-2 hover:bg-gray-100">
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

        {/* Make Appointment Button */}
        <div className="hidden lg:block">
          <Link href="tel:(+150)-4899-8221">
            <button className="bg-[#684df4] click-btn btn-style hover:bg-black flex items-center gap-1 text-sm text-white px-4 py-3">
              MAKE APPOINTMENT
              <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Three-Line Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#141d38] text-2xl">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Black Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white border-r-[3px] border-[#684df4] shadow-lg transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="flex items-center justify-between bg-[#e1eaff] py-5 px-5">
          <Image
            src="/logo.svg"
            height={200}
            width={200}
            alt="logo"
            className="h-auto w-auto max-h-12 md:max-h-16"
          />
        </div>

        {/* Close Button (Outside the Menu) */}
        {menuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="fixed top-5 left-[270px] text-xl bg-[#684df4] rounded-full p-2 text-white z-30"
          >
            <RxCross2 />
          </button>
        )}

        <ul className="mt-20 space-y-4 px-5 font-semibold text-[#141d38]">
          <li className="flex items-center border-b border-pink-200 pb-3">
            <MdKeyboardArrowRight className="text-xl" />
            <Link href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li className="flex items-center border-b border-pink-200 pb-3">
            <MdKeyboardArrowRight className="text-xl" />
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              ABOUT US
            </Link>
          </li>
          <li className="flex items-center justify-between border-b border-pink-200 pb-3">
            <div className="flex items-center">
              <MdKeyboardArrowRight className="text-xl" />
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                SERVICES
              </Link>
            </div>
            <BsPlus className="text-xl bg-gray-100 rounded-full " />
          </li>
          <li className="flex items-center justify-between border-b border-pink-200 pb-3">
            <div className="flex items-center">
              <MdKeyboardArrowRight className="text-xl" />
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                BLOG
              </Link>
            </div>
            <BsPlus className="text-xl bg-gray-100 rounded-full " />
          </li>
          <li className="flex items-center">
            <MdKeyboardArrowRight className="text-xl" />
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
