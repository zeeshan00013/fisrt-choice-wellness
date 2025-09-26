"use client";

import Link from "next/link";

export default function WoundCarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Wound Care
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Expert treatment and healing support for all types of wounds.
        </h2>

        <p>
          Proper wound care is essential for preventing infection, reducing
          pain, and promoting faster healing. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we specialize in treating both acute and chronic wounds with
          personalized care plans designed to meet your unique healing needs.
        </p>

        <p>
          Whether your wound is the result of an injury, surgery, diabetic
          complication, or long-term condition, our experienced team provides
          compassionate, evidence-based care to protect your health and restore
          your skin’s integrity.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Wound Care Services Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Cleaning & Dressing Management
            </h4>
            <p className="text-gray-700 mt-1">
              We clean and dress wounds using sterile techniques and appropriate
              materials to prevent infection and promote optimal healing.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Assessment of Wound Type & Healing Progress
            </h4>
            <p className="text-gray-700 mt-1">
              Each wound is evaluated for depth, size, signs of infection, and
              healing progress to determine the most effective treatment
              approach.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Chronic Wound Management
            </h4>
            <p className="text-gray-700 mt-1">
              For non-healing wounds such as diabetic ulcers, pressure sores, or
              surgical wounds, we offer ongoing care, monitoring, and
              specialized treatment plans.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Don’t let a wound go untreated.{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to schedule a wound care visit and ensure safe, comfortable,
            and complete healing.
          </p>
        </div>
      </section>
    </main>
  );
}
