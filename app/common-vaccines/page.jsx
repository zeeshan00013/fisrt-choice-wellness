"use client";

import Link from "next/link";

export default function CommonVaccinesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Common Vaccines for Health Needs
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Protect yourself and your family with essential vaccinations.
        </h2>

        <p>
          Vaccines are one of the most effective tools we have to prevent the
          spread of infectious diseases and protect long-term health. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , we provide a full range of common vaccinations for children, teens,
          and adults in a safe, professional, and supportive environment.
        </p>

        <p>
          Whether you need routine childhood immunizations, seasonal flu shots,
          or vaccines for travel or employment, our team ensures you receive
          up-to-date protection and clear guidance on your vaccination schedule.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Common Vaccines We Offer:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Influenza (Flu Shot)
            </h4>
            <p className="text-gray-700 mt-1">
              Offered annually to protect against the latest flu
              strains—recommended for all ages.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Tetanus, Diphtheria & Pertussis (Tdap)
            </h4>
            <p className="text-gray-700 mt-1">
              Protects against three serious bacterial infections. Required for
              school, work, and during pregnancy.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › COVID-19 & Booster Shots
            </h4>
            <p className="text-gray-700 mt-1">
              We offer COVID-19 vaccinations and boosters following CDC
              guidelines to protect against evolving variants.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Childhood Immunizations
            </h4>
            <p className="text-gray-700 mt-1">
              MMR, Varicella, Polio, Hepatitis A & B, and more—administered
              according to age-specific schedules.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Travel & Occupational Vaccines
            </h4>
            <p className="text-gray-700 mt-1">
              Vaccines for international travel, healthcare workers, and other
              workplace requirements available upon request.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Stay protected and up to date with essential vaccines.{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            to schedule your vaccination or learn more about what’s recommended
            for you and your family.
          </p>
        </div>
      </section>
    </main>
  );
}
