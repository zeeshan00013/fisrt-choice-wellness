"use client";

import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/preoperative.jpg";

export default function PreoperativeEvaluationPage() {
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
          Preoperative Evaluation
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
          &raquo; <span className="text-gray-950 ">Preoperative Evalution</span>
        </div>
      </div>
      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Prepare for surgery with expert preoperative assessments.
        </h2>

        <p className="text-lg text-black font-[400]">
          Our preoperative evaluation service is designed to ensure your safety
          and readiness for any surgical procedure. This thorough assessment
          includes a comprehensive review of your medical history, current
          medications, and any existing health conditions that may impact your
          surgery. Our compassionate healthcare team conducts necessary physical
          examinations and diagnostic tests, allowing us to identify potential
          risks and address them proactively. We take the time to explain the
          evaluation process, ensuring you feel informed and comfortable as you
          prepare for your upcoming surgery.
        </p>

        <p className="text-lg text-black font-[400]">
          Our goal during the preoperative evaluation is to enhance your
          surgical experience and outcomes. By working closely with you and your
          surgical team, we tailor our recommendations to fit your unique health
          needs, promoting the best possible recovery. We also provide guidance
          on what to expect before, during, and after your procedure, helping to
          alleviate any concerns you may have. At
          <span className="font-semibold text-[#1C2D5A] m-1">
            First Choice Wellness Clinic.
          </span>
          we support you every step of the way, ensuring you feel confident and
          cared for as you approach your surgery.
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
