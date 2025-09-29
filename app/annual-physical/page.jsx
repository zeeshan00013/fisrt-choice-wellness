"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/annual.jpg";

export default function AnnualPhysicalPage() {
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
          Annual Physical Examination
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
          <span className="text-gray-950 "> Annual Physical Examination</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Stay on track with comprehensive annual health assessments.
        </h2>

        <p className="text-lg text-black font-[400]">
          An annual physical examination is vital to maintaining your health and
          preventing potential issues. Our comprehensive exams are designed to
          assess your overall well-being through a thorough evaluation,
          including a review of your medical history, vital signs, and necessary
          screenings. Our compassionate healthcare professionals will address
          your concerns during your visit and provide personalized
          recommendations tailored to your lifestyle. By prioritizing preventive
          care, we empower you to take charge of your health and make informed
          decisions for your future.
        </p>

        <p className="text-lg text-black font-[400]">
          Our annual physical examinations not only help detect health problems
          early but also serve as an opportunity to establish a strong
          relationship with your healthcare provider. We emphasize education and
          communication, ensuring that you leave with a clear understanding of
          your health status and any follow-up steps needed. Whether you’re
          maintaining a healthy lifestyle or managing a chronic condition, our
          team is dedicated to supporting you every step of the way. At
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic.
          </span>
          we are committed to helping you achieve and maintain optimal health
          through our thorough and compassionate annual physical exams.
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
              className="text-blue-600 hover:underline font-medium"
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
