import React from "react";
import Head from "next/head";
import Link from "next/link";
import bannerImg from "../Images/services.jpg";
import Image from "next/image";

const services = [
  {
    name: "Management of Medical Conditions",
    path: "/management-of-medical-conditions",
  },
  {
    name: "Hypertension Management",
    path: "/hypertension-management",
  },
  { name: "Weight Loss/Weight Management", path: "/weight-loss" },
  { name: "Sick Visits", path: "/sick-visits" },
  { name: "Sports Physical", path: "/sports-physical" },
  { name: "Medication Refill", path: "/medication-refill" },
  { name: "Men Health Services", path: "/men-health" },
  { name: "Primary Healthcare", path: "/primary-healthcare" },
  { name: "Annual Physical Examination", path: "/annual-physical" },
  {
    name: "Preoperative Evaluation",
    path: "/preoperative-evaluation",
  },
  { name: "Wound Care", path: "/wound-care" },
  {
    name: "Common Vaccine for Health Needs",
    path: "/common-vaccines",
  },
  {
    name: "telehealth",
    path: "/telehealth",
  },
];

export default function Services() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Image
          src={bannerImg}
          alt="Services Banner"
          className="w-full h-[500px] object-cover"
          priority
        />
        <div className="bg-[#1C2A64] py-6">
          <h1 className="text-white text-center text-3xl md:text-5xl font-semibold ">
            Services
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="md:text-3xl text-2xl font-semibold text-center text-black mb-6">
            A full spectrum of healthcare services to support every stage of
            life.
          </h2>

          <p className=" text-gray-900  mb-8 text-lg ">
            We offer a full range of healthcare services to support your and
            your family’s well-being at every stage of life. Our compassionate
            and skilled team is committed to providing personalized,
            comprehensive care tailored to your unique health needs. From
            preventive care and routine check-ups to chronic disease management
            and wellness support, we’re here to help you live a healthier,
            happier life.
          </p>

          <h3 className="text-2xl font-semibold mb-6">Services We Offer:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.path}>
                <div className="bg-[#1C2A64] hover:bg-[#142c8b] cursor-pointer text-white text-center px-6 py-10 rounded-lg shadow-md hover:scale-[1.02] transition-transform">
                  {service.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
