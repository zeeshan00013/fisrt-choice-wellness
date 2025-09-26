"use client";

import Link from "next/link";

export default function AnnualPhysicalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Annual Physical Examination
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          A proactive approach to maintaining long-term health and wellness.
        </h2>

        <p>
          An annual physical exam is one of the most effective ways to stay
          ahead of potential health issues. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we offer thorough and personalized physical exams that help you
          monitor your overall health, detect problems early, and build a strong
          relationship with your healthcare provider.
        </p>

        <p>
          Whether you're feeling great or managing ongoing health conditions,
          routine annual exams allow us to assess your current status, recommend
          preventive strategies, and set health goals for the year ahead. It’s
          not just a checkup—it’s a smart investment in your future.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            What’s Included in an Annual Physical:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Full Vital Sign & System Review
            </h4>
            <p className="text-gray-700 mt-1">
              We evaluate your heart rate, blood pressure, respiratory rate, and
              overall physical condition to get a clear picture of your current
              health.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Preventive Screenings & Lab Work
            </h4>
            <p className="text-gray-700 mt-1">
              Based on your age, gender, and risk factors, we offer screenings
              for cholesterol, diabetes, cancers, and other conditions—often
              supported by lab testing.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Personalized Health Counseling
            </h4>
            <p className="text-gray-700 mt-1">
              We discuss your nutrition, exercise, sleep, stress, and lifestyle
              to help you set realistic, impactful goals for the year ahead.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Ready to schedule your annual physical?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to book your visit and take a proactive step toward your best
            health.
          </p>
        </div>
      </section>
    </main>
  );
}
