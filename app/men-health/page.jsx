"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/men-health.jpg";
export default function MenHealthServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Image
        src={bannerImg}
        alt="Services Banner"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />

      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Men Health Services
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
          &raquo; <span className="text-gray-950 ">Men Health Services</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Dedicated support for men’s health at every life stage.
        </h2>

        <p className="text-lg text-black font-[400]">
          We offer comprehensive men’s health services tailored to address the
          unique health needs of men at every stage of life. Our compassionate
          team is dedicated to providing a safe and supportive environment where
          men can discuss their health concerns openly, whether they involve
          physical, mental, or emotional well-being. We focus on preventive
          care, routine screenings, and personalized treatment plans that
          promote optimal health and longevity. By addressing issues such as
          hormonal changes, sexual health, and chronic conditions, we empower
          men to take control of their health and make informed decisions.
        </p>

        <p className="text-lg text-black font-[400]">
          Our men’s health services include thorough evaluations and
          consultations that cover a range of topics, from cardiovascular health
          to mental wellness. We believe that education is key to proactive
          health management, and we provide resources and guidance to help men
          maintain a healthy lifestyle. We aim to create a partnership with our
          patients, ensuring they receive the support and care they need to
          thrive. At
          <span className="font-semibold text-[#1C2D5A] m-1">
            First Choice Wellness Clinic.
          </span>
          we are committed to helping men achieve their health goals and improve
          their quality of life through dedicated and compassionate care.
        </p>

        {/* Contact Section */}
        <div className="mt-10">
          <h4 className="text-md sm:text-2xl font-medium text-black">
            Connect With Us
          </h4>
          <p className="text-lg text-black font-[400] mt-4">
            Take charge of your health today!
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium m-1"
            >
              Contact us
            </Link>{" "}
            to schedule your appointment and receive compassionate,
            comprehensive care tailored just for you—don’t wait. Your wellness
            journey starts now!
          </p>
        </div>
      </section>
    </main>
  );
}
