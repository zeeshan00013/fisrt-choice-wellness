"use client";
import React from "react";
import provider from "../Images/drhero.webp";
import Image from "next/image";
import {
  FaHeartbeat,
  FaStethoscope,
  FaNotesMedical,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: <FaStethoscope className="text-white text-lg" />,
    title: "Urgent illness management",
  },
  {
    icon: <FaHeartbeat className="text-white text-lg" />,
    title: "Primary care and wellness visits",
  },
  {
    icon: <FaNotesMedical className="text-white text-lg" />,
    title: "Chronic condition management (e.g., hypertension, diabetes)",
  },
  {
    icon: <FaShieldAlt className="text-white text-lg" />,
    title: "Preventive screenings and health maintenance",
  },
];
const ProviderInfo = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div
          className="text-center
         bg-[#0020a6] rounded-xl  py-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meet Our Provider
          </h2>
          <p className="mt-2 text-lg text-gray-100">
            Caroline A. Weke, MSN, AGACNP-BC
          </p>
        </div>

        {/* Bio Section */}
        <div className="space-y-6 md:flex md:items-start md:space-y-0 md:space-x-8">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-4">
            <h3 className="text-2xl font-semibold text-black">
              Professional Bio
            </h3>
            <p>
              Caroline A. Weke is a board-certified Adult-Gerontology Acute Care
              Nurse Practitioner with over a decade of experience in healthcare.
              With a strong foundation in acute and primary care, she is
              passionate about delivering personalized, evidence-based care to
              adults of all ages. Caroline believes in empowering patients
              through education, preventive health, and compassionate service.
            </p>
            <p>
              Her well-rounded clinical background includes work across
              medical-surgical, telemetry, and specialty units, allowing her to
              care for complex conditions with confidence and empathy.
            </p>
            <h3 className="text-2xl font-semibold text-black mt-5">
              Educational Background
            </h3>
            <p>
              Caroline completed both her Bachelor of Science in Nursing (BSN)
              and Master of Science in Nursing (MSN) at The University of Texas
              at Arlington.
            </p>

            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-black">
                Certifications & Board Certifications
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Adult-Gerontology Acute Care Nurse Practitioner (AGACNP)
                </li>
                <li>
                  Board Certified by the American Nurses Credentialing Center
                  (ANCC)
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <Image
              src={provider} // <-- Replace this with the actual path to your image
              alt="Caroline A. Weke"
              className="rounded-xl shadow-lg w-full  h-82"
            />
          </div>
        </div>

        {/* Licensure */}
        <div>
          <h3 className="text-2xl font-semibold text-black">Licensure</h3>
          <p>
            Licensed to practice in: <strong>Texas</strong>
          </p>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-black">
            Years of Experience
          </h3>
          <p>
            10+ years of experience in healthcare, with a strong background in
            acute care, chronic disease management, and preventive medicine.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold text-black">
            Services & Specialties
          </h3>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className=" flex flex-col gap-2 mt-4">
              {services.map((item, index) => (
                <Link
                  href={"/services"}
                  key={index}
                  className="flex items-center cursor-pointer gap-4 bg-gradient-to-r from-[#0020a6] to-[#3B82F6] text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className=" bg-opacity-20 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-sm md:text-base font-medium">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
            <div>
              <h4 className="font-medium text-[#22569a] mb-2">
                Special Focus Areas:
              </h4>
              <p>
                Adults 18 years and older, including seniors and medically
                complex patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderInfo;
