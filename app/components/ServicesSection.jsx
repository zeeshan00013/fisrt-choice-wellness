"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../Images/btm1-img1.jpg";
import img2 from "../Images/btm1-img2.jpg";
import img3 from "../Images/btm1-img3.jpg";
import img4 from "../Images/btm1-img4.jpg";
import img5 from "../Images/btm1-img5.jpg";

const services = [
  {
    title: "WEIGHT LOSS",
    desc: "Personalized plans to help you achieve lasting healthy results.",
    img: img4,
  },
  {
    title: "PHYSICAL (WELLNESS EXAMS)",
    desc: "A physical exam is a routine check-up with your healthcare provider to assess your overall health.",
    img: img1,
  },
  {
    title: "HYPERTENSION MANAGEMENT",
    desc: "Home monitoring can provide valuable insights into your blood pressure trends.",
    img: img3,
  },
  {
    title: "MANAGEMENT OF MEDICAL CONDITIONS",
    desc: "A specialized approach to overseeing and treating chronic illnesses and acute conditions.",
    img: img2,
  },
  {
    title: "VIEW MORE SERVICES",
    desc: "Explore a wider range of services to enhance your experience and support your health journey.",
    img: img5,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full pt-16 pb-10 bg-white ">
      {/* Heading */}
      <h2 className="md:text-5xl text-2xl font-semibold text-center text-black mb-12 uppercase">
        Our Services
      </h2>

      {/* Grid */}
      <div className="w-full  py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#0028a5] text-white w-72 px-6 py-8 flex flex-col items-center rounded-[70px] text-center relative"
            >
              {/* Image */}
              <div className=" rounded-full overflow-hidden mb-4">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium uppercase mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-100 mb-6 font-[400]">
                {service.desc}
              </p>

              {/* Arrow button */}
              <button className="mt-auto  w-8 h-8 flex items-center cursor-pointer justify-center rounded-full bg-white  text-blue-800">
                <FaArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
