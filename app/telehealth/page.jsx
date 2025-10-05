"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/telehealth.png";

export default function Telehealth() {
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
          Telehealth
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
          &raquo; <span className="text-gray-950 ">Telehealth</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Access quality care from home with our telehealth services.
        </h2>

        <p className="text-lg text-black font-[400]">
          We offer a convenient and secure way to access healthcare from the
          comfort of your own home. Through virtual visits, our team can assess
          symptoms, provide consultations, manage medications, and offer
          follow-up care without needing an in-person visit. This service is
          ideal for those with busy schedules, mobility challenges, or anyone
          seeking flexible healthcare options. Our goal is to make high-quality,
          compassionate care accessible wherever you are.
        </p>

        <p className="text-lg text-black font-[400]">
          In addition to convenience, telehealth enables us to deliver timely
          care and address health concerns efficiently, helping you stay on top
          of your wellness. Our providers are committed to creating a seamless
          virtual experience, ensuring you feel heard and supported. From
          managing chronic conditions to routine check-ups, telehealth allows us
          to extend our comprehensive care to you, no matter the distance. Reach
          out to schedule a telehealth appointment and experience quality care
          made easy.
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
