"use client";

import { ExternalLink } from "lucide-react";

export default function EngagementModels() {
  const engagementModels = [
    {
      title: "On-Demand Experts",
      description: "Certified IBM consultants with fast onboarding",
      image: "/image/7f7f71f9ba5116907d1799a1b04b89ab7a593105.png"
    },
    {
      title: "Elastic IBM Teams",
      description: "Cross-skilled teams with tech skills",
      image: "/image/73e884e7480eb5545e5b58c17b649bcc4580ebfb.png"
    },
    {
      title: "Fractional Talent",
      description: "Affordable part-time work with SLAs",
      image: "/image/641285969dbbdce28a20fccd2feed7a25fc957de.png"
    },
    {
      title: "Project-Based Delivery",
      description: "Delivered with milestones and QA",
      image: "/image/cc7f9bd2d8354f989d3caed14a0a2393b6bca7d9.png"
    },
    {
      title: "GCC/Offshore Setup",
      description: "India-based delivery unit under your brand",
      image: "/image/23673ea62ee38b49d113bbe07e8823bd2bafccb4.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Engagement Models
          </h2>
          <p className="text-lg text-blue-100">
            Scalable IBM staffing models to suit your delivery and operational
            needs
          </p>
        </div>

        {/* Models Grid */}
        <div className="flex flex-col items-center space-y-8">
          {/* First Grid: items 1–3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementModels.slice(0, 3).map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 rounded-3xl m-5">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {model.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-3 flex-shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Grid: items 4–5 */}
          <div className="grid md:grid-cols-2 gap-6">
            {engagementModels.slice(3, 5).map((model, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-lg overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 rounded-3xl m-5">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {model.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-3 flex-shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
