import React from "react";
import { ArrowRight } from "lucide-react";

export default function HiringSection() {
  return (
    <section className="bg-gradient-to-r from-[#05284F] to-[#032047] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Start Hiring IBM <br /> Experts Today
          </h2>
          <p className="mt-4 text-gray-200 text-lg">
            Domain-rich talent. Legacy + Cloud Capable. Fast Onboarding.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-full shadow">
              Request Full Profiles
            </button>
            <button className="flex items-center gap-2 text-white hover:underline">
              Schedule a Call <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-900">
          <h3 className="text-xl font-semibold text-center">
            Get the match Instantly
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            Please complete the form and share your requirements. We are here to
            assist you in finding the best global talents tailored to your needs
          </p>

          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="flex">
              <select className="border rounded-l-lg px-2 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                placeholder="Contact Number"
                className="border-t border-b border-r rounded-r-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email id"
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="State/Province"
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white flex items-center justify-center gap-2 py-3 rounded-full hover:bg-gray-800 transition">
                Submit my details <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
