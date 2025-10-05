"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/hypertension.jpg";

export default function HypertensionManagement() {
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
          Hypertension Management
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
          &raquo;{" "}
          <span className="text-gray-950 ">Hypertension Management</span>
        </div>
      </div>
      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Achieve healthy blood pressure with our expert care.
        </h2>

        <p className="text-lg text-black font-[400]">
          We specialize in the effective management of hypertension, or high
          blood pressure, a condition that affects millions of individuals and
          can lead to serious health issues if left uncontrolled. Our
          experienced healthcare team is dedicated to providing personalized
          treatment plans that include lifestyle modifications, medication
          management, and regular monitoring to help you achieve optimal blood
          pressure levels. We prioritize understanding your unique health
          circumstances, ensuring our approach is tailored to your needs.
          Through education and support, we empower you to take an active role
          in managing your condition.
        </p>

        <p className="text-lg text-black font-[400]">
          Our goal is to create a proactive partnership with you to minimize the
          risks associated with hypertension, such as heart disease and stroke.
          We offer comprehensive assessments and ongoing evaluations to track
          your progress and make necessary adjustments to your care plan. By
          focusing on sustainable lifestyle changes—such as a balanced diet,
          physical activity, and stress management—we help you build a
          foundation for long-term health. At
          <span className="font-semibold text-[#1C2D5A] m-1">
            First Choice Wellness Clinic.
          </span>
          your well-being is our top priority, and we are here to support you
          every step in your journey toward healthier blood pressure management.
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
