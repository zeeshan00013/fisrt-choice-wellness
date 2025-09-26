"use client";

import Link from "next/link";

export default function SickVisitsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2D5A] mb-6 border-b-2 border-gray-300 pb-2">
        Sick Visits
      </h1>

      {/* Main Content */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Prompt, compassionate care when you're not feeling your best.
        </h2>

        <p>
          Whether it's a sudden illness, a lingering infection, or flu-like
          symptoms, our team at{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>{" "}
          is here to help you feel better, faster. We offer same-day or next-day
          appointments to address urgent but non-emergency medical concerns with
          expert attention and care.
        </p>

        <p>
          From colds and sore throats to minor injuries or unexplained symptoms,
          our goal is to get you the relief and answers you need. We take time
          to listen, evaluate your symptoms, and offer appropriate treatment to
          support your recovery and peace of mind.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1C2D5A] mb-2">
            Sick Visit Services Include:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Cold, Flu, & Respiratory Infections
            </h4>
            <p className="text-gray-700 mt-1">
              We diagnose and treat common viral and bacterial infections,
              helping you feel better and avoid complications.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Sore Throat, Fever, Cough, & Earaches
            </h4>
            <p className="text-gray-700 mt-1">
              We assess your symptoms and provide appropriate testing or
              medication to relieve discomfort and treat underlying causes.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-lg font-bold text-gray-800">
              › Minor Injuries & Illnesses
            </h4>
            <p className="text-gray-700 mt-1">
              From sprains and cuts to nausea or allergic reactions, we handle
              many urgent conditions that don’t require an emergency room visit.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-lg mt-10 shadow-sm">
          <h4 className="text-lg font-semibold mb-2 text-gray-900">
            Connect With Us
          </h4>
          <p className="text-gray-700">
            Feeling under the weather? Don’t wait—{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              contact us
            </Link>{" "}
            now to schedule your sick visit appointment. We’re here to help you
            get back on your feet quickly and comfortably.
          </p>
        </div>
      </section>
    </main>
  );
}
