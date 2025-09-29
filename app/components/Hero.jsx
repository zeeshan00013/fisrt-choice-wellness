"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import doctor from "../../public/man1.webp";
import circledr from "../../public/back.webp";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 px-6  flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src={doctor}
          alt="Doctor"
          width={400}
          height={400}
          className="object-contain z-10 mr-20"
        />

        <div className="absolute -right-6 bg-blue-800  rounded-full border p-2">
          <div className="bg-white p-2">
            <Image
              src={circledr}
              className="rounded-full"
              width={400}
              alt="back"
            />
          </div>
        </div>

        <div className="absolute bottom-28  -right-[15%] transform -translate-x-1/2 w-36 h-36 bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center z-20">
          <div className="text-blue-800">
            <FaPeopleGroup size={50} />
          </div>
          <p className="text-xs font-semibold mt-2 px-2">
            Meet Our Professionals
          </p>
          <button className="mt-2 p-1.5 rounded-full bg-[#1A237E] text-white">
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Right text section */}
      <div className="w-full lg:w-1/2">
        <p className="text-gray-700 text-xl mb-2">Welcome to</p>
        <h1 className="text-3xl sm:text-4xl font-medium  text-[#0033aa] leading-tight mb-4">
          First Choice Wellness Clinic
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed text-base">
          At <strong>First Choice Wellness Clinic</strong>, we’re committed to
          helping you achieve optimal health and well-being. Our experienced
          team of healthcare professionals is dedicated to providing
          comprehensive, personalized care tailored to your unique needs.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Experience the difference at{" "}
          <strong>First Choice Wellness Clinic</strong>. We prioritize your
          comfort and satisfaction, offering a warm and welcoming environment
          where you can receive the care you deserve.
        </p>
      </div>
    </section>
  );
}
