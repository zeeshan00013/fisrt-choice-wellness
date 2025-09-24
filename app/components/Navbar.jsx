"use client";
import Image from "next/image";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from "../../public/main-logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex  justify-center  ">
      <div className="flex flex-row   w-full  ">
        <div className="  flex items-center justify-center max-w-2xl px-8 ">
          <div className="">
            <Image src={logo} width={350} alt="logo" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-4  w-full p-4 px-8">
          <div className="text-white space-x-3">
            <button className="bg-[#0020a6] py-3 px-4 rounded-2xl text-xl cursor-pointer hover:bg-[#1733a5]">
              Paitent Check In
            </button>
            <button className="bg-[#0020a6] cursor-pointer hover:bg-[#1733a5] py-3 px-4 rounded-2xl text-xl">
              Book Appointment
            </button>
            <button className="bg-[#0020a6] cursor-pointer hover:bg-[#1733a5] py-3 px-4 rounded-2xl text-xl">
              Call Us
            </button>
          </div>
          <div className="flex items-center space-x-5">
            <p className="border-r-2 px-2">
              Feel free to call us! 682-382-3850
            </p>
            <p className="border-r-2 px-2">
              Email us at: info@firstchoicewellnessclinic.com
            </p>
          </div>
          <div className="w-full  border-t py-4 border-t-blue-800 ">
            <nav className="">
              <ul className="flex items-center justify-between px-5 text-lg">
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  <Link href={"/"}>About</Link>
                </li>
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  <Link href={"/services"}>Services</Link>
                </li>
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  <Link href={"/provider"}>Provider</Link>
                </li>
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  Our Team
                </li>
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900">
                  Careers
                </li>
                <li className="cursor-pointer transition-all duration-500 border-b-2 border-transparent hover:border-[#151577] hover:text-blue-900s">
                  <Link href={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
