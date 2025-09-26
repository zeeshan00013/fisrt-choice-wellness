"use client";

import Link from "next/link";

export default function ManagementOfMedicalConditions() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Management of Medical Conditions
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Partner with us for effective chronic condition management.
        </h2>

        <p>
          Navigating chronic medical conditions can be daunting. Our
          compassionate team is dedicated to providing comprehensive,
          individualized care that addresses your condition and overall
          well-being. Through tailored care plans, ongoing monitoring, and
          patient education, we empower you to take charge of your health and
          enhance your quality of life. Whether managing diabetes, hypertension,
          asthma, or other chronic conditions, we strive to deliver the highest
          standard of care that meets your unique needs.
        </p>

        <p>
          We believe effective management is a partnership built on trust and
          open communication. Our experienced healthcare providers work closely
          with you to set achievable health goals, ensuring you feel supported
          and informed. We offer guidance, resources, and strategies that help
          you make positive lifestyle changes and manage your condition
          effectively. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , your health is our priority, and we are committed to walking
          alongside you on your path to wellness, providing the support you need
          to thrive.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            We include the following services:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Cholesterol Management
            </h4>
            <p className="text-gray-700 mt-1">
              Managing cholesterol levels is crucial for reducing the risk of
              heart disease and promoting overall health. Our dedicated team
              provides personalized assessments and tailored treatment plans,
              including lifestyle modifications and medication management, to
              help you achieve and maintain optimal cholesterol levels. With
              ongoing support and education, we empower you to effectively take
              charge of your heart health.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Diabetes
            </h4>
            <p className="text-gray-700 mt-1">
              At our clinic, we understand that diabetes management requires a
              comprehensive approach to maintain optimal health and well-being.
              Our experienced healthcare providers offer personalized care plans
              tailored to your unique needs, including blood sugar monitoring,
              nutritional guidance, and medication management. We are committed
              to empowering you with the knowledge and resources to manage your
              diabetes effectively and live a fulfilling life.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Take charge of your health today!{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
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
