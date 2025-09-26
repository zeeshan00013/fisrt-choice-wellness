"use client";

import Link from "next/link";

export default function MedicationRefillPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Medication Refill
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Convenient and timely prescription refills you can trust.
        </h2>

        <p>
          Staying consistent with your prescribed medications is essential for
          managing your health and preventing complications. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we make medication refills simple, quick, and stress-free—so you
          never miss a dose.
        </p>

        <p>
          Whether you need a regular refill for a chronic condition or an
          adjustment to your current prescription, our team is here to help. We
          ensure each refill is reviewed for safety, accuracy, and alignment
          with your ongoing treatment plan.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Medication Refill Process Includes:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Refill Requests & Review
            </h4>
            <p className="text-gray-700 mt-1">
              We process your refill request and verify it against your medical
              history and treatment goals to ensure continuity of care.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Medication Adjustments (If Needed)
            </h4>
            <p className="text-gray-700 mt-1">
              If your symptoms change or side effects occur, we’ll assess and
              adjust your medication plan accordingly to best meet your health
              needs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Coordination with Your Pharmacy
            </h4>
            <p className="text-gray-700 mt-1">
              We work directly with your preferred pharmacy to ensure your
              medication is sent out promptly and efficiently—saving you time
              and hassle.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Need a medication refill or adjustment?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to request your refill and ensure your treatment stays on
            track. We're here to help with your ongoing health journey.
          </p>
        </div>
      </section>
    </main>
  );
}
