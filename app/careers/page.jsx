import Head from "next/head";
import Image from "next/image";
import bannerImg from "../Images/careers.jpg";
import Link from "next/link";

export default function Career() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Image
        src={bannerImg}
        alt="Our Team"
        className="w-full md:h-[500px] md:object-cover"
        priority
      />

      <div className="bg-[#1C2A64] py-6">
        <h1 className="text-white text-center text-3xl md:text-5xl">Careers</h1>
      </div>
      <div className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <div className="border-b border-dashed py-4 text-xl">
          <Link
            href="/"
            className="hover:underline text-[#031869] font-semibold"
          >
            Home
          </Link>{" "}
          &raquo; <span className="text-gray-950 ">Careers</span>
        </div>
      </div>
      <div className="grid grid-cols-1  gap-8 mb-12 max-w-6xl mx-auto mt-10">
        <form className="text-left text-zinc-800">
          <div className="grid grid-cols-1 gap-8 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="Full Name"
              className="w-full border border-[#055a5a] rounded-3xl py-3 px-4 font-semibold placeholder:text-gray-700 text-gray-900 
             focus:bg-gray-100 focus:ring-2 focus:ring-[#090ba7] focus:outline-none transition-all duration-200 shadow-sm"
            />
            <input
              type="text"
              name="Address"
              placeholder="Last Name"
              className="w-full border border-[#055a5a] rounded-3xl py-3 px-4 font-semibold placeholder:text-gray-700 text-gray-900 
             focus:bg-gray-100 focus:ring-2 focus:ring-[#090ba7] focus:outline-none transition-all duration-200 shadow-sm"
              required
            />
          </div>
          <div className="grid grid-cols-1  gap-8 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-[#055a5a] rounded-3xl py-3 px-4 font-semibold placeholder:text-gray-700 text-gray-900 
             focus:bg-gray-100 focus:ring-2 focus:ring-[#090ba7] focus:outline-none transition-all duration-200 shadow-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone no:"
              className="w-full border border-[#055a5a] rounded-3xl py-3 px-4 font-semibold placeholder:text-gray-700 text-gray-900 
             focus:bg-gray-100 focus:ring-2 focus:ring-[#090ba7] focus:outline-none transition-all duration-200 shadow-sm"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message *"
            rows="5"
            className="w-full border border-[#055a5a] rounded-3xl py-3 px-4 font-semibold placeholder:text-gray-700 text-gray-900 
             focus:bg-gray-100 focus:ring-2 focus:ring-[#090ba7] focus:outline-none transition-all duration-200 shadow-sm"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#3a3a3b] hover:bg-[#505050f8] cursor-pointer text-[#ffffff]  px-8 py-4 rounded-2xl flex items-center gap-2 mt-6"
          >
            Submit
          </button>
        </form>
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.1702781042345!2d-97.24008172562867!3d32.86721387937341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e787664856fbb%3A0x99fc48a62d3465e8!2s6632%20Rufe%20Snow%20Dr%2C%20Fort%20Worth%2C%20TX%2076148%2C%20USA!5e0!3m2!1sen!2s!4v1759141406053!5m2!1sen!2s"
            className="w-full h-[400px] md:h-[400px] rounded-2xl shadow-xl border-2 border-[#055a5a] hover:scale-[1.01] transition-all duration-300"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
      {/* Main content */}
      <section className="max-w-7xl mx-auto space-y-6 mt-5 w-full px-8">
        <p className="text-lg text-black font-[400]">
          Join a team that truly makes a difference in family health! Fill out
          the form below to explore rewarding career opportunities with us.
        </p>

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
