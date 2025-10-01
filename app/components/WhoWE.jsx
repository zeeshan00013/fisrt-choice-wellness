import Image from "next/image";
import React from "react";
import img from "../Images/whowe.webp";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section className="flex flex-col items-center px-4 py-8 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="md:text-4xl text-xl font-medium    mb-4 text-black uppercase  max-w-7xl mx-auto text-center ">
        Who we are
      </h1>
      <p className="text-center text-lg text-black font-[400]">
        The Family Clinic and primary care office.
      </p>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full mt-6">
        {/* Image */}
        <div className="w-full lg:w-1/2 ">
          <Image
            src={img} // Save the image as public/doctor.jpg
            alt="Doctor with stethoscope"
            width={600}
            height={300}
            className="rounded-lg h-[24rem]  object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-gray-900 space-y-4 ">
          <p className="text-lg text-black font-[400]">
            At First Choice Wellness Clinic, your health is our highest
            priority. We are committed to delivering high-quality,
            compassionate, and personalized care to adults of all ages. Our goal
            is to empower individuals to take charge of their wellness through
            trusted relationships, advanced medical expertise, and a warm,
            supportive environment.
          </p>
          <p className="text-lg text-black font-[400]">
            Led by a team of experienced healthcare professionals, we provide a
            wide range of services — from managing chronic conditions like
            diabetes and high blood pressure, to same-day care for urgent
            illnesses, preventive screenings, wellness exams, and more.
          </p>
          <p className="text-lg text-black font-[400]">
            Whether you're coming in for your first check-up or need ongoing
            support for a complex condition, we’re here to help you live a
            healthier, more vibrant life.
          </p>

          <Link href={"/contact"}>
            <button className="bg-[#0020a6]  text-white px-6 py-2 rounded-md cursor-pointer hover:bg-[#0a30c9] transition">
              Call Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
