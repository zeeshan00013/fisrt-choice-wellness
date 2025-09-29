import Image from "next/image";
import React from "react";
import logo from "../Images/footerlogo.png";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { AiOutlineCaretRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full text-white ">
      <div className="relative mt-16 bg-[#0028a5]">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#0028a5]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <div>
                <Image src={logo} alt="first choice " width={350} />
              </div>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm ">
                  First Choice Wellness Clinic is committed to providing
                  top-notch healthcare services tailored to your unique needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Services
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/wound-care"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex  items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Wound Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sick-visits"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Sick Visits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/primary-healthcare"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Primary Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sports-physical"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Sports Physical
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400 items-center gap-2">
                  Quick Link
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-team"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <AiOutlineCaretRight /> Our Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Contact
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <FaPhoneAlt /> Phone: 682-382-3850
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <FaPhoneAlt /> Direct Line: 682-549-3312
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <IoMdMail /> infofirstchoicewellnessclinic.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="transition-colors duration-300  hover:text-teal-accent-400 flex items-center gap-2"
                    >
                      <FaLocationDot /> Location: 6632 Rufe Snow Drive North
                      Richland Hills, Texas 76148
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2020 First Choice Inc. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <Link href={""}>
                <FaFacebook size={30} />
              </Link>
              <Link href={""}>
                <FaInstagram size={30} />
              </Link>
              <Link href={""}>
                <FaTwitter size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
