"use client";

import Image from "next/image";
import { TiTick } from "react-icons/ti";

// Import images
import atena from "../InsuranceImages/Aetna.png";
import Blue from "../InsuranceImages/Blue.png";
import Carelon from "../InsuranceImages/Carelon.png";
import CDPHP from "../InsuranceImages/CDPHP.jpg";
import EmblemHealth from "../InsuranceImages/EmblemHealth.jpg";
import Fidelis from "../InsuranceImages/Fidelis.jpg";
import FirstHealth from "../InsuranceImages/FirstHealth.png";
import GHI from "../InsuranceImages/GHI.png";
import HIP from "../InsuranceImages/HIP.jpg";
import Humana from "../InsuranceImages/Humana.png";
import MagnaCare from "../InsuranceImages/MagnaCare.png";
import Medicaid from "../InsuranceImages/Medicaid.jpg";
import Medicare from "../InsuranceImages/Medicare.jpg";
import Meritain from "../InsuranceImages/Meritain.png";
import Northwell from "../InsuranceImages/Northwell.png";
import NYSHIP from "../InsuranceImages/NYSHIP.png";
import Optum from "../InsuranceImages/Optum.png";
import Oscar from "../InsuranceImages/Oscar.png";
import UMR from "../InsuranceImages/UMR.png";

export default function InsuranceAccepted() {
  const insurances = [
    { name: "Aetna", logo: atena },
    { name: "Blue Cross / Blue Shield", logo: Blue },
    { name: "Carelon Behavioral Health", logo: Carelon },
    { name: "CDPHP", logo: CDPHP },
    { name: "EmblemHealth", logo: EmblemHealth },
    { name: "Fidelis Care", logo: Fidelis },
    { name: "First Health", logo: FirstHealth },
    { name: "GHI (Group Health Incorporated)", logo: GHI },
    { name: "HIP (Health Plan of New York)", logo: HIP },
    { name: "Humana", logo: Humana },
    { name: "MagnaCare", logo: MagnaCare },
    { name: "Medicaid", logo: Medicaid },
    { name: "Medicare", logo: Medicare },
    { name: "Meritain Health", logo: Meritain },
    { name: "Northwell Direct", logo: Northwell },
    { name: "NYSHIP (NY State Empire Plan)", logo: NYSHIP },
    { name: "Optum", logo: Optum },
    { name: "Oscar Health", logo: Oscar },
    { name: "UMR (United Medical Resources)", logo: UMR },
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
