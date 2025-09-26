"use client";

import Link from "next/link";

export default function SportsPhysicalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Sports Physical
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Get cleared to play with confidence and care.
        </h2>

        <p>
          Participating in sports is a great way to stay active and healthy, but
          ensuring you're physically ready is just as important. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we provide thorough and convenient sports physicals for athletes of
          all ages, from school-age children to adults.
        </p>

        <p>
          Our exams are designed to meet school, league, or team requirements
          while also identifying any underlying health conditions that may
          affect athletic performance or safety. We make the process simple,
          fast, and stress-free so you can get back to doing what you love—
          safely.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            What’s Included in a Sports Physical:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Comprehensive Health History Review
            </h4>
            <p className="text-gray-700 mt-1">
              We review your personal and family medical history to assess any
              risks or past issues that could impact safe participation.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Physical Examination
            </h4>
            <p className="text-gray-700 mt-1">
              Our providers check vital signs, joint function, heart and lung
              health, vision, and more to ensure you're fit for physical
              activity.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Completion of Required Forms
            </h4>
            <p className="text-gray-700 mt-1">
              We fill out any necessary school or league documentation during
              your visit so you can submit it right away.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Need a sports physical for school, camp, or your team?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to schedule your appointment. We’ll make sure you’re game-day
            ready!
          </p>
        </div>
      </section>
    </main>
  );
}
