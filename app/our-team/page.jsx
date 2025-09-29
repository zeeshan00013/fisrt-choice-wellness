import Head from "next/head";
import Image from "next/image";
import bannerImg from "../Images/our-team.jpg";
import { FaDotCircle } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "Extensive Medical Expertise",
    description:
      "Our providers are highly trained in family medicine, chronic illness management, preventive care, and more, ensuring top-quality care at every stage of life.",
  },
  {
    title: "Advanced Diagnostic Skills",
    description:
      "Using state-of-the-art technology and proven techniques, our team accurately assesses health concerns to create effective treatment plans.",
  },
  {
    title: "Compassionate Approach",
    description:
      "We prioritize compassionate, patient-centered care. We take the time to understand and support your needs with empathy and respect.",
  },
  {
    title: "Holistic Health Focus",
    description:
      "We understand that wellness is more than just treating symptoms. Our team is dedicated to promoting physical, mental, and emotional well-being for a balanced approach to health.",
  },
  {
    title: "Strong Professional Backgrounds",
    description:
      "Our team includes board-certified physicians, skilled nurse practitioners, and experienced medical staff with years of practice in diverse healthcare settings.",
  },
  {
    title: "Commitment to Continuous Learning",
    description:
      "We stay updated on the latest medical advancements and best practices to provide evidence-based care.",
  },
  {
    title: "Commitment to Preventive Care",
    description:
      "Through screenings, health education, and lifestyle guidance, we help you avoid potential health issues and empower you to make informed choices.",
  },
  {
    title: "Collaborative Care Philosophy",
    description:
      "Working as a cohesive team, we coordinate your care to provide seamless support tailored to you and your family’s unique health journey.",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Image
        src={bannerImg}
        alt="Our Team"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />

      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          Our Team{" "}
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
          &raquo; &raquo; <span className="text-gray-950 ">Our Team</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Experienced, compassionate professionals dedicated to your health
          journey.
        </h2>

        <p className="text-lg text-black font-[400]">
          Our team is at the heart of our commitment to providing compassionate,
          comprehensive care for your entire family. Each member brings unique
          skills, a wealth of experience, and a genuine dedication to your
          health and well-being. Here’s what makes our team stand out:
        </p>

        <div>
          <div className="grid grid-cols-1 gap-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="  cursor-pointer    py-4 flex flex-col  rounded-lg  hover:scale-[1.02] transition-transform"
              >
                <div>
                  <div className="flex items-center gap-1">
                    <FaDotCircle className=" text-[#0020a6]" />
                    <h3 className="text-xl font-semibold text-black ">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-black font-[400]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10">
          <h4 className="text-md sm:text-2xl font-medium text-black">
            Connect With Us
          </h4>
          <p className="text-lg text-black font-[400] mt-4">
            Take charge of your health today!
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
