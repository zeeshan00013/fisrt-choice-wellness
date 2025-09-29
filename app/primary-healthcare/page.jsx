"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/primary-health.jpg";

export default function PrimaryHealthcarePage() {
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
          Primary Healthcare
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
          &raquo; <span className="text-gray-950 ">Primary Healthcare</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Experience holistic care tailored to your family’s needs.
        </h2>

        <p className="text-lg text-black font-[400]">
          We believe that primary healthcare is the cornerstone of your overall
          well-being. Our dedicated team of healthcare professionals is
          committed to providing comprehensive and personalized care for
          patients of all ages. We focus on preventive services, routine
          check-ups, and early detection of health issues, ensuring that your
          health is monitored and maintained effectively. With a compassionate
          approach, we work closely with you to develop a health plan that
          addresses your unique needs and lifestyle.
        </p>

        <p className="text-lg text-black font-[400]">
          Our primary healthcare services encompass various medical needs, from
          managing chronic conditions to providing vaccinations and wellness
          screenings. We prioritize building strong relationships with our
          patients and fostering open communication and trust to enhance your
          healthcare experience. Whether you require immediate care or long-term
          health management, our clinic is equipped to support you every step of
          the way. At
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic.
          </span>
          your health is our priority, and we are here to empower you to live a
          healthy and fulfilling life. Connect With Us
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
