"use client";

import Link from "next/link";

export default function PreoperativeEvaluationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Preoperative Evaluation
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Ensuring you're medically prepared for a safe and successful surgery.
        </h2>

        <p>
          At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we provide comprehensive preoperative evaluations to assess your
          overall health before surgery. Our goal is to ensure you're physically
          ready and medically optimized, helping reduce surgical risks and
          promote a smooth recovery process.
        </p>

        <p>
          Whether your surgery is elective or urgent, we conduct a detailed
          review of your health history, perform necessary physical exams and
          diagnostic tests, and communicate directly with your surgeon or
          specialist to ensure continuity of care.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Preoperative Evaluations Typically Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Comprehensive Medical History Review
            </h4>
            <p className="text-gray-700 mt-1">
              We evaluate any chronic conditions, previous surgeries, and
              current medications to identify potential risks or complications.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Physical Exam & Diagnostic Testing
            </h4>
            <p className="text-gray-700 mt-1">
              Our team performs a full physical exam and may recommend labs,
              ECG, or imaging based on your procedure and health status.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Clearance & Surgical Readiness Report
            </h4>
            <p className="text-gray-700 mt-1">
              Once cleared, we provide your surgeon with all required
              documentation and recommendations to ensure a smooth surgical
              process.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Scheduled for surgery? Let’s make sure you’re fully prepared.{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to book your preoperative evaluation and feel confident going
            into your procedure.
          </p>
        </div>
      </section>
    </main>
  );
}
