"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/medical-refill.jpg";

export default function MedicationRefillPage() {
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
          Medication Refill
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
          &raquo; <span className="text-gray-950 ">Medication Refill</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Simplify your healthcare with easy medication refill services.
        </h2>

        <p className="text-lg text-black font-[400]">
          Managing your medications is a crucial aspect of your overall health
          and wellness. Our medication refill service is designed to make the
          process seamless and convenient, ensuring that you never run out of
          your essential prescriptions. We prioritize your needs by offering
          timely refills and easy access to your medication history, allowing
          for a smooth transition when adjustments are necessary. Our dedicated
          team assists you with questions or concerns, providing compassionate
          support throughout your treatment journey.
        </p>

        <p className="text-lg text-black font-[400]">
          We emphasize the importance of communication and follow-up to ensure
          your medications effectively manage your health conditions. If you
          require a refill or have questions about your current regimen, we
          encourage you to contact our team for assistance. Our goal is to make
          the medication refill process as hassle-free as possible, enabling you
          to focus on what matters most—your health and well-being. At
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic.
          </span>
          your care is our priority, and we are committed to supporting you
          every step of the way.
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
