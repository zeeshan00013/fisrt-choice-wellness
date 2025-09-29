"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/weight-loss.jpg";

export default function WeightLossPage() {
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
          Weight Loss/Weight Management
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
          <span className="text-gray-950 ">Weight Loss/Weight Management</span>
        </div>
      </div>
      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Transform your health with personalized weight management solutions.
        </h2>

        <p className="text-lg text-black font-[400]">
          We provide comprehensive weight loss and management programs to help
          you achieve your health goals effectively and sustainably. Our
          compassionate team works closely with you to develop personalized
          strategies incorporating nutrition, physical activity, and behavioral
          modifications tailored to your lifestyle. We understand that each
          individual’s journey is unique, and we are committed to supporting you
          every step of the way.
        </p>

        <p className="text-lg text-black font-[400]">
          Our approach emphasizes education and empowerment, equipping you with
          the tools and knowledge necessary to maintain a healthy weight
          long-term. Through regular check-ins and progress assessments, we
          ensure you stay motivated and on track. At
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic.
          </span>
          we believe that successful weight management is about creating lasting
          changes that improve your overall health and well-being.
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
