"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/wound-care.jpg";

export default function WoundCarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Image
        src={bannerImg}
        alt="Wellness Banner"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />

      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Wellness
        </h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <div className="border-b border-dashed py-4 text-xl">
          <Link
            href="/"
            className="hover:underline text-[#031869] font-semibold"
          >
            Home
          </Link>{" "}
          &raquo;{" "}
          <Link
            href="/services"
            className="hover:underline text-[#031869] font-semibold"
          >
            Services
          </Link>{" "}
          &raquo; <span className="text-gray-950">Wellness</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Empower your health through personalized wellness solutions.
        </h2>

        <p className="text-lg text-black font-[400]">
          At First Choice Wellness Clinic, our holistic wellness services are
          designed to support your overall physical, mental, and emotional
          well-being. Our dedicated healthcare professionals provide
          personalized care tailored to your lifestyle and health goals. Whether
          you're managing a chronic condition, aiming to boost energy, or
          striving for long-term health, our approach addresses the root causes,
          not just symptoms.
        </p>

        <p className="text-lg text-black font-[400]">
          Our wellness services include health assessments, lifestyle coaching,
          nutrition guidance, stress management, and preventive care strategies.
          We work closely with you to create sustainable habits that promote
          lasting well-being. At{" "}
          <span className="font-semibold text-[#1C2D5A] m-1">
            First Choice Wellness Clinic
          </span>
          , we believe true wellness is a journey, and we’re here to support you
          every step of the way.
        </p>

        {/* Contact Section */}
        <div className="mt-10">
          <h4 className="text-md sm:text-2xl font-medium text-black">
            Connect With Us
          </h4>
          <p className="text-lg text-black font-[400] mt-4">
            Ready to prioritize your wellness?
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium m-1"
            >
              Contact us
            </Link>{" "}
            today to schedule your consultation and take the first step toward a
            healthier, more vibrant life.
          </p>
        </div>
      </section>
    </main>
  );
}
