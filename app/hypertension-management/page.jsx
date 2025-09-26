"use client";

import Link from "next/link";

export default function HypertensionManagement() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Hypertension Management
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Take control of your blood pressure and live healthier.
        </h2>

        <p>
          High blood pressure, or hypertension, is a common yet serious
          condition that can lead to heart disease, stroke, kidney issues, and
          more if left unmanaged. Our experienced team is here to help you
          effectively monitor and manage your blood pressure with a holistic and
          patient-centered approach.
        </p>

        <p>
          We offer comprehensive hypertension care that includes regular
          monitoring, personalized treatment plans, lifestyle counseling, and
          medication management when necessary. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we focus on helping you achieve and maintain a healthy blood
          pressure, reduce your health risks, and improve your overall
          well-being through sustainable lifestyle changes and compassionate
          support.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Our Hypertension Services Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Blood Pressure Monitoring
            </h4>
            <p className="text-gray-700 mt-1">
              We perform regular and accurate blood pressure monitoring to track
              your condition and detect any changes early, ensuring timely
              adjustments in your care plan.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Lifestyle and Nutritional Counseling
            </h4>
            <p className="text-gray-700 mt-1">
              Our team provides personalized counseling on diet, exercise,
              stress reduction, and other lifestyle habits proven to help lower
              blood pressure and improve heart health.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Medication Management
            </h4>
            <p className="text-gray-700 mt-1">
              When needed, we prescribe and manage medications tailored to your
              health status and lifestyle to maintain optimal blood pressure
              control.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Ready to manage your blood pressure with confidence?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            today to book your consultation. We're here to help you live a
            longer, healthier life through expert hypertension care.
          </p>
        </div>
      </section>
    </main>
  );
}
