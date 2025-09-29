"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/sports.jpg";

export default function SportsPhysicalPage() {
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
          Sports Physical
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
          &raquo; <span className="text-gray-950 ">Sports Physical</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Ensure your readiness and safety with thorough evaluations.
        </h2>

        <p className="text-lg text-black font-[400]">
          We offer comprehensive sports physicals to ensure that athletes of all
          ages are fit and ready to participate in their chosen sports safely.
          These evaluations help identify any potential health concerns that
          could affect performance or lead to injury, providing peace of mind
          for both athletes and their families. Our experienced healthcare team
          conducts thorough assessments, including a detailed medical history
          review and physical examination, tailored to the specific demands of
          each sport. We aim to equip young athletes with the guidance and
          support they need to excel while prioritizing their health.
        </p>

        <p className="text-lg text-black font-[400]">
          Our sports physicals assess fitness and educate athletes on injury
          prevention, nutrition, and overall well-being. We encourage open
          communication, allowing athletes to discuss concerns or questions
          regarding their health and sports participation. With flexible
          scheduling options, we make getting the necessary evaluation easy
          before the season starts. At
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic.
          </span>
          we are committed to fostering a safe and healthy sports experience for
          all athletes, empowering them to pursue their passions confidently.
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
