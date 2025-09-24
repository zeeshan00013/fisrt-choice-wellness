import Head from "next/head";
import Image from "next/image";
import img from "../Images/drhero.webp";
import team from "../Images/team.webp";
import { FaDotCircle } from "react-icons/fa";

const services = [
  {
    title: "Management of Medical Conditions",
    description:
      "Our providers are highly trained in family medicine, chronic illness management, preventive care, and more, ensuring top-quality care at every stage of life.",
  },
  {
    title: "Hypertension Management",
    description:
      "Using state-of-the-art technology and proven techniques, our team accurately assesses health concerns to create effective treatment plans.",
  },
  {
    title: "Weight Loss/Weight Management",
    description:
      "We understand that wellness is more than just treating symptoms. Our team is dedicated to promoting physical, mental, and emotional well-being for a balanced approach to health.",
  },
  {
    title: "Sick Visits",
    description:
      "We prioritize compassionate, patient-centered care. We take the time to understand and support your needs with empathy and respect.",
  },
  {
    title: "Sports Physical",
    description:
      "Our team includes board-certified physicians, skilled nurse practitioners, and experienced medical staff with years of practice in diverse healthcare settings.",
  },
  {
    title: "Medication Refill",
    description:
      "Working as a cohesive team, we coordinate your care to provide seamless support tailored to you and your family’s unique health journey.",
  },
  {
    title: "Men Health Services",
    description:
      "We understand that wellness includes men's unique needs, from preventative screenings to lifestyle support, all with confidentiality and respect.",
  },
  {
    title: "Primary Healthcare",
    description:
      "Our providers offer continuous, comprehensive care that builds strong relationships to meet long-term health goals.",
  },
  {
    title: "Annual Physical Examination",
    description:
      "Through screenings, health education, and lifestyle guidance, we help you avoid potential health issues and empower you to make informed choices.",
  },
  {
    title: "Preoperative Evaluation",
    description:
      "Our diagnostic expertise ensures you are fully prepared for surgery through thorough preoperative evaluations and risk assessments.",
  },
  {
    title: "Wound Care",
    description:
      "We use advanced wound management techniques to promote faster healing and prevent infection.",
  },
  {
    title: "Common Vaccine for Health Needs",
    description:
      "Stay protected with essential vaccinations administered by trained professionals, keeping your immunizations up to date.",
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team</title>
      </Head>

      {/* Top Banner Image */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={team}
          alt="Our Team Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-90"
        />
      </div>

      <div className="min-h-screen bg-white">
        <div className="bg-[#1C2A64] py-8">
          <h1 className="text-white text-center text-4xl font-semibold">
            Services
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Experienced, compassionate professionals dedicated to your health
            journey.
          </h2>

          <p className="text-center text-gray-600 max-w-5xl mx-auto mb-8">
            Our team is at the heart of our commitment to providing
            compassionate, comprehensive care for your entire family. Each
            member brings unique skills, a wealth of experience, and a genuine
            dedication to your health and well-being. Here’s what makes our team
            stand out:
          </p>

          <h3 className="text-xl font-bold mb-6">Services We Offer:</h3>

          <div className="grid grid-cols-1 gap-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="  cursor-pointer   px-6 py-4 flex flex-col  rounded-lg  hover:scale-[1.02] transition-transform"
              >
                <div>
                  <div className="flex items-center gap-1">
                    <FaDotCircle className=" text-[#0020a6]" />
                    <h3 className="text-lg font-semibold ">{service.title}</h3>
                  </div>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
