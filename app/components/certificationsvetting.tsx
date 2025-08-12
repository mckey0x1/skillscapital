"use client";

import { Database, Search, Workflow, Settings, Network } from "lucide-react";

export default function CertificationsVettingResponsive() {
  const certifications = [
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "IBM Certified System Programmer – z/OS"
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "IBM Maximo Asset Management Functional Analyst"
    },
    {
      icon: <Workflow className="h-8 w-8 text-white" />,
      title: "IBM Certified BPM Developer"
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "IBM Certified Integration Developer (ACE/IIB)"
    },
    {
      icon: <Network className="h-8 w-8 text-white" />,
      title: "IBM MQ System Administrator"
    }
  ];

  return (
    <section className="bg-[#f8f9fb] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Certifications & Vetting Standards
        </h2>
        <p className="text-gray-500 mt-2">Certifications & Vetting Standards</p>

        {/* Desktop/PC Horizontal Layout */}
        <div className="relative mt-20 hidden lg:block">
          {/* Horizontal Center Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-black"></div>

          <div className="flex justify-between gap-12">
            {certifications.map((cert, index) => {
              const isAbove = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-1/5">
                  {isAbove && (
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5 rounded-full flex items-center justify-center shadow-lg">
                        {cert.icon}
                      </div>
                      <p className="text-sm text-gray-900 mt-4 leading-snug max-w-[160px]">
                        {cert.title}
                      </p>
                    </div>
                  )}

                  {/* Number Circle */}
                  <div className="bg-gray-900 absolute left-1/2 transform -translate-x-1/2 top-[150px] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 shadow-md">
                    {index + 1}
                  </div>

                  {!isAbove && (
                    <div className="flex flex-col items-center mt-48">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5 rounded-full flex items-center justify-center shadow-lg">
                        {cert.icon}
                      </div>
                      <p className="text-sm text-gray-900 mt-4 leading-snug max-w-[160px]">
                        {cert.title}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet/Mobile Vertical Layout */}
        <div className="relative mt-20 max-w-md mx-auto lg:hidden">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black"></div>

          <div className="space-y-16">
            {certifications.map((cert, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center">
                  {/* Left side content */}
                  {isLeft && (
                    <div className="flex items-center justify-end w-1/2 pr-4 md:pr-8">
                      <div className="text-right">
                        <p className="text-sm text-gray-900 leading-snug max-w-[150px] md:max-w-[200px] ml-auto">
                          {cert.title}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 md:p-4 rounded-full flex items-center justify-center shadow-lg ml-2 md:ml-4 flex-shrink-0">
                        {cert.icon}
                      </div>
                    </div>
                  )}

                  {/* Number Circle - centered on the line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 shadow-md">
                    {index + 1}
                  </div>

                  {/* Right side content */}
                  {!isLeft && (
                    <div className="flex items-center justify-start w-1/2 pl-4 md:pl-8 ml-auto">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 md:p-4 rounded-full flex items-center justify-center shadow-lg mr-2 md:mr-4 flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-900 leading-snug max-w-[150px] md:max-w-[200px]">
                          {cert.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
