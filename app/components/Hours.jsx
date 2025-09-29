"use client";
import { FaClock, FaCircle } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="bg-[#0028a5] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column - Office Hours */}
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <FaClock className="text-white" />
            OFFICE HOURS
          </h3>

          <ul className="space-y-2 mb-8">
            {[
              { day: "Monday", time: "8am – 5pm" },
              { day: "Tuesday", time: "8am – 5pm" },
              { day: "Wednesday", time: "8am – 5pm" },
              { day: "Thursday", time: "8am – 6pm" },
              { day: "Friday", time: "8am – 5pm" },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCircle className="text-cyan-400 text-sm mt-1" />
                <p>
                  <strong>{item.day}:</strong> {item.time}
                </p>
              </li>
            ))}
          </ul>

          <button className="bg-gray-50 hover:bg-gray-100 text-black cursor-pointer font-bold py-3 px-6 rounded w-full md:w-auto">
            REQUEST AN APPOINTMENT
          </button>
        </div>

        {/* Right Column - Map */}
        <div>
          <h3 className="text-2xl font-bold mb-3">FIND US</h3>
          <p className="mb-4">
            Location: 6632 Rufe Snow Drive North Richland Hills, Texas 76148
          </p>

          <div className="rounded-lg overflow-hidden shadow-lg w-full h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.1702781042345!2d-97.24008172562867!3d32.86721387937341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e787664856fbb%3A0x99fc48a62d3465e8!2s6632%20Rufe%20Snow%20Dr%2C%20Fort%20Worth%2C%20TX%2076148%2C%20USA!5e0!3m2!1sen!2s!4v1759141406053!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
