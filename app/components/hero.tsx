"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Right Image - positioned at top right */}
      <div className="absolute top-0 right-0 h-full w-1/2">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/40 to-slate-900 z-10"></div>
        <img
          src="/image/d1ec84ebee4888e7f452d8632b230e8279b10a14.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-140px)]">
          {/* Left Content */}
          <div className="space-y-8 relative z-20">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
                Hire Top IBM Tech Talent — On-Demand, Delivery-Tested
              </h1>

              <p className="text-base italic text-yellow-400 font-medium">
                Mainframe, Maximo, BPM, Integration Bus — Access Pre-Vetted IBM
                Experts from India
              </p>

              <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
                Build your IBM-powered enterprise systems with highly skilled
                professionals across development, modernization, and support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-black font-semibold px-8 py-3 text-base rounded-full transition">
                Request Sample Profiles
              </button>

              <button className="font-medium px-8 py-3 text-base cursor-pointer text-white flex items-center justify-center group transition">
                Submit a Requirement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Empty column so layout stays correct */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
