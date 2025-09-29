"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../Images/ca5.jpg";
import img2 from "../Images/ca4.jpg";
import img3 from "../Images/ca3.jpg";

const slides = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
];

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 2 ? 0 : prev + 1));
    }, 2000); // 1 second

    return () => clearInterval(interval);
  }, []);

  const { image } = slides[current];

  return (
    <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
      {/* Image */}
      <Image
        src={image}
        alt="new"
        className="object-cover transition-opacity duration-500"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center  px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
          Your Health and Wellness Is Our Priority
        </h1>
        <p className="text-white text-base sm:text-lg max-w-xl mb-6">
          First Choice Wellness Clinic is committed to providing top-notch
          healthcare services tailored to your unique needs.
        </p>
        <div className="flex flex-wrap gap-4 ">
          <button className="px-6 py-3 bg-[#0028a5] text-lg  text-white rounded-full font-semibold hover:bg-blue-800 cursor-pointer transition">
            Find Out Here
          </button>
        </div>
        <p className="text-white text-2xl max-w-2xl mt-6">
          First Choice Wellness Clinic is opened for telehealth visits.
        </p>
      </div>
    </div>
  );
}
