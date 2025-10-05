"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/sick.jpg";

export default function SickVisitsPage() {
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
          Sick Visits
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
          &raquo; <span className="text-gray-950 ">Sick Visits</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Receive prompt, compassionate care when you need it most.
        </h2>

        <p className="text-lg text-black font-[400]">
          We recognize that illness can strike unexpectedly, and getting prompt
          medical attention is vital to your recovery. Our sick visit services
          are designed to provide quick and effective care for various acute
          conditions, from minor infections to more severe ailments. With our
          compassionate healthcare team, you can expect a thorough evaluation
          and an individualized treatment plan tailored to your needs. We
          prioritize your comfort and well-being, ensuring you receive the
          support you need to feel better as soon as possible.
        </p>

        <p className="text-lg text-black font-[400]">
          During your sick visit, we take the time to listen to your concerns
          and answer any questions you may have about your health. We aim to
          make the process as smooth and reassuring as possible with convenient
          appointment options that fit your schedule. With a focus on efficient
          care and effective treatment, we aim to help you return to your daily
          activities quickly. At
          <span className="font-semibold text-[#1C2D5A] m-1">
            First Choice Wellness Clinic.
          </span>
          your health is our top priority, and we are dedicated to providing the
          quality care you deserve when you need it most.
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
