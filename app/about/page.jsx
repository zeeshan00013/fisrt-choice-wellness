import Image from "next/image";
import bannerImg from "../Images/about.jpg";
import doctorPatientImg from "../Images/about-data.jpg";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Image
        src={bannerImg}
        alt="Services Banner"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />

      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl">
          About Us
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
          &raquo; <span className="text-gray-950 ">About Us</span>
        </div>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 text-center">
          Compassionate care that puts your family’s health first.
        </h2>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 text-center">
          Who We Are
        </h2>

        <p className="text-lg text-black font-[400]">
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic.
          </span>{" "}
          is a trusted family clinic in North Richland Hills, TX, serving the
          surrounding community, including Fort Worth. Our dedicated team of
          credentialed, highly skilled providers is committed to delivering
          comprehensive, holistic healthcare to every individual and family we
          serve. We believe in treating each person with the same care and
          attention as we treat their health concerns, creating a compassionate
          environment where you feel truly supported on your wellness journey.
        </p>

        <p className="text-lg text-black font-[400]">
          At{" "}
          <span className="font-semibold text-[#1C2D5A]">
            First Choice Wellness Clinic,
          </span>{" "}
          your health and wellness are our top priorities. We’re dedicated to
          providing personalized, high-quality, and affordable care that meets
          the unique needs of each patient. By focusing on preventive care,
          early intervention, and continuous health management, we empower you
          to achieve a better quality of life. When you choose First Choice
          Wellness Clinic, you’re choosing a clinic that values your well-being,
          respects your needs, and supports you every step of the way.
        </p>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
          <div>
            <Image
              src={doctorPatientImg}
              alt="Doctor with patient"
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>

          <div>
            {/* Mission */}
            <h2 className="text-xl sm:text-2xl font-medium text-gray-950">
              Our Mission Statement
            </h2>
            <p className="text-lg text-black font-[400] mb-6 mt-5">
              We are committed to improving overall health and wellness in the
              community by providing personalized, high-quality, and affordable
              care to everyone. To educate and provide resources for preventive
              healthcare for our patients.
            </p>

            {/* Vision */}
            <h2 className="text-xl sm:text-2xl font-medium text-gray-950">
              Our Vision Statement
            </h2>
            <p className="text-lg text-black font-[400] mt-5">
              To be a trusted healthcare leader in our community, fostering a
              culture of wellness through compassionate, accessible, and
              comprehensive care. We envision a healthier future where everyone
              is empowered with the knowledge and resources to achieve optimal
              health and well-being.
            </p>
          </div>
        </div>
        <div className="space-y-6 mt-5 w-full">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-950 text-center">
            Who Do We Serve
          </h2>

          <p className="text-lg text-black font-[400]">
            <span className="font-semibold text-[#1C2D5A]">
              First Choice Wellness Clinic.
            </span>{" "}
            is a trusted family clinic in North Richland Hills, TX, serving the
            surrounding community, including Fort Worth. Our dedicated team of
            credentialed, highly skilled providers is committed to delivering
            comprehensive, holistic healthcare to every individual and family we
            serve. We believe in treating each person with the same care and
            attention as we treat their health concerns, creating a
            compassionate environment where you feel truly supported on your
            wellness journey.
          </p>

          <p className="text-lg text-black font-[400]">
            At{" "}
            <span className="font-semibold text-[#1C2D5A]">
              First Choice Wellness Clinic,
            </span>{" "}
            your health and wellness are our top priorities. We’re dedicated to
            providing personalized, high-quality, and affordable care that meets
            the unique needs of each patient. By focusing on preventive care,
            early intervention, and continuous health management, we empower you
            to achieve a better quality of life. When you choose First Choice
            Wellness Clinic, you’re choosing a clinic that values your
            well-being, respects your needs, and supports you every step of the
            way.
          </p>
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
