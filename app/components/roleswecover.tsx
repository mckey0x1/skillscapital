"use client";

import {
  ArrowRight,
  Database,
  Server,
  Network,
  HelpCircle
} from "lucide-react";

export default function RolesWeCover() {
  const roleCategories = [
    {
      title: "Mainframe Roles",
      icon: <Database className="h-6 w-6" />,
      bgColor: "bg-blue-900",
      textColor: "text-white",
      isActive: true
    },
    {
      title: "Enterprise Application Roles",
      icon: <Server className="h-6 w-6" />,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      isActive: false
    },
    {
      title: "Integration & Middleware Roles",
      icon: <Network className="h-6 w-6" />,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      isActive: false
    },
    {
      title: "Support & QA Roles",
      icon: <HelpCircle className="h-6 w-6" />,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      isActive: false
    }
  ];

  const specificRoles = [
    "COBOL, JCL, z/OS Assembler Developers",
    "DB2 Database Programmers",
    "z/OS System Admins and Performance Engineers"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Roles We Cover
          </h2>
          <p className="text-lg text-gray-600">
            Full stack IBM talent — from COBOL programmers to Maximo and IIB
            experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Role Categories */}
          <div className="space-y-4">
            {roleCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} ${category.textColor} p-6 rounded-lg border border-gray-200 cursor-pointer`}>
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      category.isActive ? "bg-blue-800" : "bg-blue-100"
                    }`}>
                    <div
                      className={
                        category.isActive ? "text-white" : "text-blue-600"
                      }>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Specific Roles */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              {specificRoles.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-600 font-medium">{role}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
