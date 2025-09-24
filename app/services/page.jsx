import React from "react";
import Head from "next/head";
import Link from "next/link";

const services = [
  "Management of Medical Conditions",
  "Hypertension Management",
  "Weight Loss/Weight Management",
  "Sick Visits",
  "Sports Physical",
  "Medication Refill",
  "Men Health Services",
  "Primary Healthcare",
  "Annual Physical Examination",
  "Preoperative Evaluation",
  "Wound Care",
  "Common Vaccine for Health Needs",
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div className="min-h-screen bg-white">
        <div className="bg-[#1C2A64] py-8">
          <h1 className="text-white text-center text-4xl font-semibold">
            Services
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            A full spectrum of healthcare services to support every stage of
            life.
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            We offer a full range of healthcare services to support your and
            your family’s well-being at every stage of life. Our compassionate
            and skilled team is committed to providing personalized,
            comprehensive care tailored to your unique health needs. From
            preventive care and routine check-ups to chronic disease management
            and wellness support, we’re here to help you live a healthier,
            happier life.
          </p>

          <h3 className="text-xl font-bold mb-6">Services We Offer:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1C2A64] hover:bg-[#142c8b] cursor-pointer text-white text-center px-6 py-8 rounded-lg shadow-md hover:scale-[1.02] transition-transform"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
