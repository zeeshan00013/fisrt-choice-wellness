"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/comman-vaccine.jpg";

export default function CommonVaccinesPage() {
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
          Common Vaccine for Health Needs
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
          <span className="text-gray-950 ">
            Common Vaccine for Health Needs
          </span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Protect your health with essential vaccinations.
        </h2>

        <p className="text-lg text-black font-[400]">
          Vaccination is a crucial aspect of preventive healthcare, safeguarding
          individual and community health. Our clinic offers a range of common
          vaccines, including those for influenza, pneumonia, hepatitis, and
          tetanus, tailored to meet the diverse needs of our patients. Our
          experienced healthcare providers take the time to discuss the
          importance of each vaccine, ensuring you understand its benefits and
          potential side effects. We prioritize your comfort and safety during
          the vaccination process, making it a seamless experience for you and
          your family.
        </p>

        <p className="text-lg text-black font-[400]">
          In addition to administering vaccines, we provide valuable education
          on the recommended immunization schedules and address any concerns you
          may have about vaccinations. Our compassionate team is dedicated to
          helping you make informed decisions that contribute to your overall
          health and well-being. By staying up-to-date with vaccinations, you
          protect yourself and help prevent the spread of infectious diseases
          within our community. At
          <span className="font-semibold text-[#1C2D5A] m-1">
            First Choice Wellness Clinic.
          </span>
          we are committed to providing accessible and comprehensive vaccine
          services to keep you and your loved ones healthy.
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
