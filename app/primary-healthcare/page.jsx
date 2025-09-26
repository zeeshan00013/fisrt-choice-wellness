"use client";

import Link from "next/link";

export default function PrimaryHealthcarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Primary Healthcare
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Your trusted partner for lifelong health and wellness.
        </h2>

        <p>
          At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we believe that primary care is the foundation of good health. Our
          primary healthcare services are designed to provide you with ongoing,
          comprehensive care that focuses on prevention, early detection, and
          effective treatment of illnesses and chronic conditions.
        </p>

        <p>
          Whether you’re coming in for a routine checkup, managing a chronic
          condition, or seeking medical advice, we’re here to build a long-term
          relationship based on trust, compassion, and personalized care. We
          take the time to understand your unique health needs and partner with
          you in every stage of life.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Primary Healthcare Services Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Routine Checkups & Preventive Screenings
            </h4>
            <p className="text-gray-700 mt-1">
              Stay ahead of health issues with regular wellness exams, lab
              tests, vaccinations, and early screening for chronic diseases.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Diagnosis & Treatment of Acute Illness
            </h4>
            <p className="text-gray-700 mt-1">
              Whether it’s the flu, infections, or unexpected symptoms, we
              provide timely and effective care to help you recover quickly.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Chronic Disease Management
            </h4>
            <p className="text-gray-700 mt-1">
              We help patients manage ongoing conditions like diabetes,
              hypertension, and asthma through customized care plans and
              continuous support.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Looking for a reliable primary care provider?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to schedule an appointment and take the first step toward
            lifelong health and wellness.
          </p>
        </div>
      </section>
    </main>
  );
}
