"use client";

import Link from "next/link";
import bannerImg from "../Images/management-medical.jpg";
import Image from "next/image";

export default function ManagementOfMedicalConditions() {
  return (
    <main className="min-h-screen bg-white text-gray-800 ">
      <Image
        src={bannerImg}
        alt="Services Banner"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />
      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl  ">
          Management of Medical Conditions
        </h1>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <div className="border-b border-dashed py-4 text-xl">
          <Link
            href="/"
            className="hover:underline text-[#031869] font-semibold"
          >
            Home
          </Link>{" "}
          &raquo;{" "}
          <Link
            href="/services"
            className="hover:underline text-[#031869] font-semibold"
          >
            Services
          </Link>{" "}
          &raquo;{" "}
          <span className="text-gray-950 ">
            Management of Medical Conditions
          </span>
        </div>
      </div>
      {/* Main Content  */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8 ">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Partner with us for effective chronic condition management.
        </h2>

        <p className="text-lg text-black font-[400]">
          Navigating chronic medical conditions can be daunting. Our
          compassionate team is dedicated to providing comprehensive,
          individualized care that addresses your condition and overall
          well-being. Through tailored care plans, ongoing monitoring, and
          patient education, we empower you to take charge of your health and
          enhance your quality of life. Whether managing diabetes, hypertension,
          asthma, or other chronic conditions, we strive to deliver the highest
          standard of care that meets your unique needs.
        </p>

        <p className="text-lg text-black font-[400]">
          {" "}
          font We believe effective management is a partnership built on trust
          and open communication. Our experienced healthcare providers work
          closely with you to set achievable health goals, ensuring you feel
          supported and informed. We offer guidance, resources, and strategies
          that help you make positive lifestyle changes and manage your
          condition effectively. At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic
          </span>
          , your health is our priority, and we are committed to walking
          alongside you on your path to wellness, providing the support you need
          to thrive.
        </p>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold text-black mb-2">
            We include the following services:
          </h3>

          {/* Service 1 */}
          <div className="mb-4">
            <h4 className="text-md sm:text-2xl font-medium  text-black">
              › Cholesterol Management
            </h4>
            <p className="text-lg text-black font-[400] mt-4">
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
            <h4 className="text-md sm:text-2xl font-medium  text-black">
              › Diabetes
            </h4>
            <p className="text-lg text-black font-[400] mt-4">
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
        <div className="  mt-10 ">
          <h4 className="text-md sm:text-2xl font-medium  text-black">
            Connect With Us
          </h4>
          <p className="text-lg text-black font-[400] mt-4">
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
