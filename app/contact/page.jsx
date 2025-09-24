"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="w-full text-center px-4 py-10 md:px-10 lg:px-20 bg-gray-100 ">
      <h2 className={` text-3xl md:text-4xl   text-zinc-800 py-2 `}>
        Contact Us
      </h2>
      <p className="mb-4 text-zinc-800 ">
        We appreciate your interest in contacting us. Our team is at your
        disposal for any question, comment or request relating to our services.
        Do not hesitate to contact us and we guarantee a quick and professional
        response to meet your needs. Your satisfaction is our top priority, and
        we look forward to hearing from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#0020a6] text-[#ffffff] p-6 rounded shadow text-center">
          <FaMapMarkerAlt size={30} className="mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p>6632 Rufe Snow Drive North Richland Hills, Texas 76148</p>
        </div>
        <div className="bg-[#0020a6] text-[#ffffff] p-6 rounded-xl shadow text-center">
          <FaEnvelope size={30} className="mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p>info@firstchoicewellnessclinic.com</p>
        </div>
        <div className="bg-[#0020a6] text-[#ffffff] p-6 rounded shadow text-center">
          <FaPhone size={30} className="mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p>682-382-3850</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.201024946437!2d-97.13535391375025!3d32.70728557439388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d25e10b7ce1%3A0x295861c0f948e5e6!2s1506%20W%20Pioneer%20Pkwy%20103%20B%2C%20Arlington%2C%20TX%2076013!5e0!3m2!1sen!2sus!4v1753815340696!5m2!1sen!2sus"
            className="w-full h-96 border rounded"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
        <form className="text-left text-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border p-2 rounded w-full border-[#055a5a] focus:outline-0"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border p-2 rounded w-full border-[#055a5a] focus:outline-0"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border p-2 rounded w-full border-[#055a5a] focus:outline-0"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone no:"
              className="border p-2 rounded w-full border-[#055a5a] focus:outline-0"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message *"
            rows="5"
            className="border p-2 rounded w-full border-[#055a5a] mb-4 focus:outline-0"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#0020a6] hover:bg-[#7ca2dcf8] cursor-pointer text-[#ffffff]  px-4 py-2 rounded-xl flex items-center gap-2"
          >
            Submit Form
          </button>
        </form>
      </div>

      <div className="bg-[#052a59] text-white p-6 rounded flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Make an Appointment</h3>
          <p>Call us today or send us an email to get free consultation</p>
        </div>
        <Link
          href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=eXJuaHNYWnVvenU1NHYxc2d6bzkxUT09&lid=NWRmMHphNFhUcEF1RnZmSVl5eVZSdz09"
          target="_blank"
          className="mt-4 md:mt-0 bg-white text-zinc-800 px-4 py-2 rounded font-semibold shadow"
        >
          Appointment Form
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
