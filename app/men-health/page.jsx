"use client";

import Link from "next/link";

export default function MenHealthServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Men Health Services
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Comprehensive and confidential care tailored to men's health needs.
        </h2>

        <p>
          Men face unique health challenges that evolve with age, lifestyle, and
          family history. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we provide compassionate and personalized care focused on preventive
          screenings, chronic condition management, and addressing sensitive
          issues with discretion and respect.
        </p>

        <p>
          Whether you're coming in for a routine check-up, experiencing low
          energy, or managing a chronic condition, our team is here to support
          your long-term wellness and quality of life. Our goal is to empower
          men to prioritize their health and seek proactive solutions to
          maintain strength, vitality, and confidence.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Men’s Health Services Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Preventive Health Screenings
            </h4>
            <p className="text-gray-700 mt-1">
              We offer blood pressure checks, cholesterol tests, prostate
              screenings, and diabetes evaluations to detect health risks early
              and keep you on track.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Hormonal & Testosterone Evaluation
            </h4>
            <p className="text-gray-700 mt-1">
              If you’re experiencing fatigue, mood changes, or reduced libido,
              we offer hormone testing and guidance to restore energy and
              improve well-being.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Sexual & Reproductive Health
            </h4>
            <p className="text-gray-700 mt-1">
              We provide confidential care and treatment for sexual health
              concerns, erectile dysfunction, STD testing, fertility
              evaluations, and more.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Prioritize your health and well-being today.{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            to schedule your men’s health consultation and take the first step
            toward a healthier, more energized life.
          </p>
        </div>
      </section>
    </main>
  );
}
