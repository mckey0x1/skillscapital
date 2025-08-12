"use client";

import { CheckCircle, ArrowRight } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      title: "Delivery-tested",
      description:
        "Delivery-tested IBM mainframe developers, Maximo consultants, and middleware experts"
    },
    {
      title: "Certified professionals",
      description:
        "Certified professionals with hands-on project experience in banking, utilities, and telecom"
    },
    {
      title: "Fast Turnaround",
      description: "Receive qualified Workday profiles within 48 hours."
    },
    {
      title: "India-Based, Globally Aligned",
      description: "India-based professionals aligned to global time zones"
    },
    {
      title: "Flexible Engagement Models",
      description: "On-demand, full-time, or fractional staffing models"
    },
    {
      title: "Engagements supported",
      description: "Engagements supported by IBM-certified solution architects"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SkillsCapital for IBM Talent
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized expertise across legacy and modern IBM platforms —
            delivered flexibly and globally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center flex justify-center">
          <button className="bg-yellow-300 hover:bg-yellow- cursor-pointer rounded-full flex items-center text-black font-semibold px-8 py-3">
            Join the Partner Network
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
