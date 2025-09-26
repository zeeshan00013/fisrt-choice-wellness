"use client";

import Link from "next/link";

export default function WeightLossPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Weight Loss / Weight Management
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Personalized weight management for a healthier, more confident you.
        </h2>

        <p>
          Achieving and maintaining a healthy weight is essential for overall
          wellness and reducing the risk of chronic diseases such as diabetes,
          heart disease, and high blood pressure. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we provide individualized weight loss programs designed to fit your
          unique goals, lifestyle, and health needs.
        </p>

        <p>
          Whether you're looking to lose weight, build healthier habits, or
          manage a medical condition through weight control, our compassionate
          team offers the tools, support, and expert guidance you need. We focus
          on sustainable, long-term success through proven methods—not quick
          fixes.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Weight Management Services Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Comprehensive Health Assessment
            </h4>
            <p className="text-gray-700 mt-1">
              We begin with a full medical evaluation to understand your current
              health status, lifestyle, and challenges—allowing us to create a
              safe, effective plan just for you.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Nutrition & Meal Planning
            </h4>
            <p className="text-gray-700 mt-1">
              Our experts help you make sustainable dietary changes with
              customized meal plans that promote weight loss without extreme
              restrictions or fad diets.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Ongoing Coaching & Motivation
            </h4>
            <p className="text-gray-700 mt-1">
              We provide regular check-ins, motivation, and adjustments to help
              you stay on track, overcome obstacles, and celebrate milestones
              throughout your journey.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Ready to start your personalized weight loss journey?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to schedule a consultation. Let us help you take the next step
            toward a healthier, more confident version of yourself.
          </p>
        </div>
      </section>
    </main>
  );
}
