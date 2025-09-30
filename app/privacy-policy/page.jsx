"use client";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "../Images/privacy page.jpg";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Image
        src={bannerImg}
        alt="Privacy page"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />

      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Privacy Policy
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
          &raquo; <span className="text-gray-950 ">Privacy Policy</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          We value your privacy and are committed to protecting your personal
          and health information{" "}
        </h2>

        <p className="text-lg text-black font-[400]">
          At <strong>First Choice Wellness Clinic</strong>, your privacy is
          important to us. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website or
          receive services at our clinic.
        </p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            1. Information We Collect
          </h2>
          <p className="mb-2 mt-2">
            We may collect the following types of information:
          </p>
          <ul className="text-lg text-black font-[400]">
            <li>
              Personal information (name, email, phone number, address, etc.)
            </li>
            <li>Health information provided during visits or appointments</li>
            <li>Insurance and billing information</li>
            <li>Website usage data and IP addresses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            2. How We Use Your Information
          </h2>
          <p className="mb-2 mt-2">
            We use the collected data for the following purposes:
          </p>
          <ul className="text-lg text-black font-[400]">
            <li>To provide and manage healthcare services</li>
            <li>To schedule and confirm appointments</li>
            <li>To process insurance claims and billing</li>
            <li>To improve our website and patient experience</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            3. Sharing Your Information
          </h2>
          <p className="mb-2 mt-2">We may share your information with:</p>
          <ul className="text-lg text-black font-[400]">
            <li>Healthcare providers involved in your care</li>
            <li>Insurance companies for claim processing</li>
            <li>Law enforcement or government agencies when required by law</li>
          </ul>
          <p className="mt-2">
            We never sell your personal information to third parties.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            4. Data Security
          </h2>
          <p className="text-lg text-black font-[400]">
            We implement appropriate technical and organizational measures to
            protect your information from unauthorized access, disclosure, or
            loss.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            5. Your Rights
          </h2>
          <p className="m-2">You have the right to:</p>
          <ul className="text-lg text-black font-[400]">
            <li>Access and review your personal health information</li>
            <li>Request corrections to inaccurate data</li>
            <li>Request restrictions on how we use or share your data</li>
            <li>Receive a copy of your health records upon request</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            6. Third-Party Services
          </h2>
          <p className="text-lg text-black font-[400]">
            Our website may contain links to third-party services. We are not
            responsible for the privacy practices of those services.
          </p>
        </section>

        {/* Section: Updates to Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900">
            7. Changes to This Policy
          </h2>
          <p className="text-lg text-black font-[400]">
            We may update this Privacy Policy from time to time. The updated
            version will be posted on our website with the revised effective
            date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-900 mb-2">
            8. Contact Us
          </h2>
          <p className="text-lg text-black font-[400]">
            If you have any questions about this Privacy Policy or wish to
            exercise your privacy rights, please contact us at:
          </p>
          <ul className="list-none ml-4 mt-2 text-lg text-black font-[400]">
            <li>
              <strong>Phone:</strong> 682-382-3850
            </li>
            <li>
              <strong>Email:</strong> info@firstchoicewellnessclinic.com
            </li>
            <li>
              <strong>Location:</strong> 6632 Rufe Snow Drive, North Richland
              Hills, TX 76148
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
