"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function KeyUseCases() {
  const cases = [
    {
      title: "North America Bank – Mainframe Modernization",
      need: "Enhance COBOL systems with new API integration",
      talent: "3 COBOL Developers + 1 IBM MQ Architect",
      outcome:
        "Legacy system exposed via modern REST APIs with zero disruption",
      image: "/image/85ae294b30f56ce3e8f1436e92b2956445c239d4 (1).png"
    },
    {
      title: "Global Manufacturing – Maximo Upgrade",
      need: "Upgrade Maximo to latest version with workflow automation",
      talent: "2 Maximo Developers + 1 Workflow Specialist",
      outcome: "Improved asset tracking",
      image: "/image/85ae294b30f56ce3e8f1436e92b2956445c239d4 (1).png"
    },
    {
      title: "Insurance Firm – Integration Modernization",
      need: "Integrate disparate systems with IIB and MQ",
      talent: "2 Integration Developers + 1 Architect",
      outcome: "Seamless data exchange with reduced manual intervention",
      image: "/image/85ae294b30f56ce3e8f1436e92b2956445c239d4 (1).png"
    }
  ];

  return (
    <section className="bg-[#f8fbff] py-12 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Key Use Cases</h2>
        <p className="text-gray-500 mt-2">
          How global firms used our IBM experts to modernize, integrate, and
          maintain
        </p>

        {/* Navigation buttons outside Swiper */}
        <div className="absolute top-[260px] left-[20px] transform -translate-y-1/2 z-10">
          <div className="swiper-button-prev-custom bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100">
            <ChevronLeft/>
          </div>
        </div>
        <div className="absolute top-[260px] right-[20px] transform -translate-y-1/2 z-10">
          <div className="swiper-button-next-custom bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100">
            <ChevronRight/>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom"
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
          }}
          className="mt-8">
          {cases.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row text-left h-full">
                <div className="md:w-1/2 h-48 md:h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <div className="mt-3">
                    <p className="text-sm">
                      <span className="font-semibold">Need:</span> {item.need}
                    </p>
                    <p className="text-sm mt-1">
                      <span className="font-semibold">Talent:</span>{" "}
                      {item.talent}
                    </p>
                    <p className="text-sm mt-1">
                      <span className="font-semibold">Outcome:</span>{" "}
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
