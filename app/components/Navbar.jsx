"use client";
import Image from "next/image";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from "../../public/main-logo.png";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center  text-black max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row w-full">
        {/* Logo */}
        <div className="flex items-center justify-between md:justify-center max-w-2xl px-8 py-4">
          <Image src={logo} width={220} alt="logo" className="object-contain" />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiX size={30} className="text-white" />
              ) : (
                <HiMenu size={30} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex flex-col items-end gap-4 w-full p-4 px-8">
          {/* Top Buttons */}
          <div className="text-white space-x-3">
            <button className="bg-[#0020a6] py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-[#1733a5]">
              Paitent Check In
            </button>
            <button className="bg-[#0020a6] cursor-pointer hover:bg-[#1733a5] py-2 px-4 rounded-2xl text-sm">
              Book Appointment
            </button>
            <button className="bg-[#0020a6] cursor-pointer hover:bg-[#1733a5] py-2 px-4 rounded-2xl text-sm">
              Call Us
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center space-x-3 text-sm">
            <p className="border-r-2 pr-2">
              Feel free to call us! 682-382-3850
            </p>
            <p>Email us at: info@firstchoicewellnessclinic.com</p>
          </div>

          {/* Navigation */}
          <div className="w-full border-t py-4 border-t-blue-800">
            <nav>
              <ul className="flex items-center justify-between px-5 text-lg">
                {" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  {" "}
                  <Link href={"/"}>Home</Link>{" "}
                </li>{" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  {" "}
                  <Link href={"/about"}>About</Link>{" "}
                </li>{" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  {" "}
                  <Link href={"/services"}>Services</Link>{" "}
                </li>{" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  {" "}
                  <Link href={"/provider"}>Provider</Link>{" "}
                </li>{" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  {" "}
                  Our Team{" "}
                </li>{" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  {" "}
                  Careers{" "}
                </li>{" "}
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900s">
                  {" "}
                  <Link href={"/contact"}>Contact Us</Link>{" "}
                </li>{" "}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 bg-[#001144] px-6 py-4 text-sm">
            <div className="text-white">
              <p>Feel free to call us! 682-382-3850</p>
              <p>Email us at: info@firstchoicewellnessclinic.com</p>
            </div>

            <nav className="mt-4 border-t pt-4 border-blue-800">
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-400">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-blue-400">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-blue-400">
                  <Link href="/services">Services</Link>
                </li>
                <li className="hover:text-blue-400">
                  <Link href="/provider">Provider</Link>
                </li>
                <li className="hover:text-blue-400">Our Team</li>
                <li className="hover:text-blue-400">Careers</li>
                <li className="hover:text-blue-400">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
