"use client";

import Image from "next/image";
import { TiTick } from "react-icons/ti";

import Humana from "../InsuranceImages/Humana.png";

import Medicaid from "../InsuranceImages/Medicaid.jpg";
import Medicare from "../InsuranceImages/Medicare.jpg";
import cigna from "../InsuranceImages/Cigna.jpg";
import united from "../InsuranceImages/unitedhealth.png";
import molina from "../InsuranceImages/molina.png";
import wellpoint from "../InsuranceImages/molina.png";
import wellcare from "../InsuranceImages/wellcare.png";
import triwest from "../InsuranceImages/triwest.png";
import superior from "../InsuranceImages/superios.png";
export default function InsuranceAccepted() {
  const insurances = [
    { name: "United", logo: united },
    { name: "Molina", logo: molina },
    { name: "Wellpoint", logo: wellpoint },
    { name: "wellcare", logo: wellcare },
    { name: "Triwest", logo: triwest },
    { name: "Humana", logo: Humana },
    { name: "Medicaid", logo: Medicaid },
    { name: "Medicare", logo: Medicare },
    { name: "Cigna", logo: cigna },
    { name: "Superios", logo: superior },
  ];
  const scrollingLogos = [...insurances, ...insurances];

  return (
    <section className="w-full  ">
      <div className="w-full px-6 py-10">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-10">
            <h2
              className={`md:text-5xl text-2xl font-semibold text-center text-black mb-5 uppercase`}
            >
              Insurances We Accept
            </h2>
            <p className="text-lg text-black font-[400]  ">
              We accept a variety of insurance plans to make our services
              accessible to everyone.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap gap-12">
              {scrollingLogos.map((insurance, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                >
                  <Image
                    src={insurance.logo}
                    alt={insurance.name}
                    className="object-contain"
                    width={120}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
