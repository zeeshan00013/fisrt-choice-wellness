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
      <p className="text-center text-gray-700 mt-3 mb-8">
        The Internal Medical and primary care office.
      </p>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full">
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
        <div className="w-full lg:w-1/2 text-gray-800 space-y-4 text-sm md:text-base">
          <p>
            At Desired Primary Healthcare, we are dedicated to creating a
            healthier, empowered community by providing accessible,
            compassionate, and comprehensive care for adults of all ages. Led by
            Caroline A. Weke, a board-certified Adult-Gerontology Acute Care
            Nurse Practitioner with over a decade of experience, we focus on
            building lasting relationships and delivering personalized,
            evidence-based care.
          </p>
          <p>
            From urgent illness management and chronic condition support (such
            as hypertension and diabetes) to preventive screenings and wellness
            visits, our services are designed to support lifelong health and
            well-being.
          </p>
          <p>
            We proudly serve adults 18 and older including seniors and medically
            complex patients with integrity, respect, and a deep commitment to
            your health journey.
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
